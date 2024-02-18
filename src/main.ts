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

}

async function insertText(text: string | string[] | undefined, target?: TextNode) {

}

function findNode(name: string) {

}

export default function () {


  
  showUI(options, { books: state.books })
}
