import { emit, on, once, showUI } from '@create-figma-plugin/utilities'

import { Book, Books, CloseHandler, CreateRectanglesHandler, State } from './types'

const options = {
  height: 360,
  width: 300
}

const state: State = new State();

/**
 * Parses the cover URL returned from the API
 * @param cover The URL as a string for the cover image.
 * @returns A parsed string representing the URL of the cover image.
 */
function parseCover(cover: string | undefined): string | undefined {
  console.log('cover:', cover);
  // Skip this if the cover is undefined
  if (cover) {
    cover = cover.replace(/^https?/, 'https');
    cover = cover.replace(/&edge=curl/, '');
  }
  return cover;
}

function getISBN(identifiers: [] | undefined): string | undefined {
  if (identifiers === undefined) return;
  let isbn: string | undefined = undefined;
  identifiers.forEach(({type, identifier}) => {
    // Prefer ISBN 13 but also accept ISBN 10
    if (type === 'ISBN_13' || (type === 'ISBN_10' && isbn === undefined)) isbn = identifier;
  })
  return isbn;
}

function parseVolume(volume: any): [string, Book] {
  return [volume.id, {
    title: volume.volumeInfo?.title,
    authors: volume.volumeInfo?.authors,
    description: volume.volumeInfo?.description,
    cover: parseCover(volume.volumeInfo?.imageLinks?.thumbnail),
    isbn: getISBN(volume.volumeInfo?.industryIdentifiers)
  }]
}


async function insertImage(src: string | undefined, target?: RectangleNode) {
  // No cover to insert if the src is undefined
  if (src === undefined) return;
  await figma.createImageAsync(src)
    .then(async (image: Image) => {
      // Create node
      let node;
      if (target === undefined) {
        node = figma.createRectangle()
        // Resize the node to match the image's width and height
        const { width, height } = await image.getSizeAsync()
        node.resize(width, height)
      } else {
        node = target;
      }

      // Set the fill on the node
      node.fills = [
        {
          type: 'IMAGE',
          imageHash: image.hash,
          scaleMode: 'FILL'
        }
      ]

    }).catch((error: any) => {
      console.error(error)
      figma.closePlugin()
    })
}

async function insertText(text: string | string[] | undefined, target?: TextNode) {
  if (text === undefined) return;

  let node;
  if (target === undefined) {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" })
    node = figma.createText()
  } else {
    await figma.loadFontAsync((target.getRangeFontName(0,1) as FontName))
    node = target;
  }

  if (typeof text === 'object') text = text.join(', ');
  node.characters = text;
}

function findNode(name: string) {
  // TODO: This should probably consider more than just the 0th element in the selection
  const selection = figma.currentPage.selection[0];
  if (selection.name === name) return selection;
  if ('findOne' in selection) {
    return selection?.findOne((node: SceneNode) => node.name === name) ?? undefined
  }
}

export default function () {
  on('BACK', () => {
    showUI(options, { screen: 'search', books: state.books });
  })

  on('SELECT', (data) => {
    state.id = data.id;
    showUI(options, { screen: 'result' });
  })

  on('SEARCH', async (term: string) => {
    state.term = term;
    state.books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.term}`).then((response) => response.json())
      .then((response) => {
        return Object.fromEntries(response.items.map((volume: any) => parseVolume(volume)))
      });
    showUI(options, { screen: 'search', books: state.books });
  })

  once('CLOSE', () => {
    figma.closePlugin()
  })

  once('INSERT', async (selected) => {
    const book: Book = (state.books as Books)[state.id]

    if (selected.cover) await insertImage(book.cover, (findNode('{{ cover }}') as RectangleNode))
    if (selected.title) await insertText(book.title, (findNode('{{ title }}') as TextNode))
    if (selected.author) await insertText(book.authors, (findNode('{{ author }}') as TextNode))
    if (selected.description) await insertText(book.description, (findNode('{{ description }}') as TextNode))
    if (selected.isbn) await insertText(book.isbn, (findNode('{{ isbn }}') as TextNode))

    figma.closePlugin()
  })

  once<CreateRectanglesHandler>('CREATE_RECTANGLES', function (count: number) {
    const nodes: Array<SceneNode> = []
    for (let i = 0; i < count; i++) {
      const rect = figma.createRectangle()
      rect.x = i * 150
      rect.fills = [
        {
          color: { b: 0, g: 0.5, r: 1 },
          type: 'SOLID'
        }
      ]
      figma.currentPage.appendChild(rect)
      nodes.push(rect)
    }
    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)
    figma.closePlugin()
  })
  once<CloseHandler>('CLOSE', function () {
    figma.closePlugin()
  })
  showUI(options, { books: state.books })
}
