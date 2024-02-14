import { Container, SearchTextbox, Stack } from "@create-figma-plugin/ui"
import { JSX, h } from "preact"

import { SearchResult } from "../components/search-result/SearchResult"

import "!../styles/global.css"
import "!../styles/search.css"
import { emit } from "@create-figma-plugin/utilities"
import { Book, Books } from "../types"

export function Search(props: { books: Books }) {
    function handleKeyDown(event: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            emit('SEARCH', event.currentTarget.value);
        }
    }
    return (
        <div className="container">
            <div id="nav">
                <SearchTextbox placeholder="Search" value="" onKeyDown={handleKeyDown} id="search"></SearchTextbox>
            </div>
            <Container space="medium" id="results">
                <Stack space="medium">
                    {Object.keys(props.books)?.map((id: string) => {
                        return (
                            <SearchResult {...props.books[id]} id={id}></SearchResult>
                        )
                    })}
                </Stack>
            </Container>
        </div>
    )
}
