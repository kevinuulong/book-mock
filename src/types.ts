import { EventHandler } from '@create-figma-plugin/utilities'

export interface CreateRectanglesHandler extends EventHandler {
  name: 'CREATE_RECTANGLES'
  handler: (count: number) => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}

export type Book = {
  title: string | undefined,
  authors: string[] | undefined,
  description: string | undefined,
  cover: string | undefined,
  isbn: string | undefined
}

export type Books = {
  [id: string]: Book
}

export class State {
  books: Books | {} = {};
  id: string = "";
  term: string = "";
}
