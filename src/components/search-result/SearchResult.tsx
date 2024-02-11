import { IconButton, IconChevronRight32, Text } from "@create-figma-plugin/ui"
import { h } from "preact"

import "!./SearchResult.css"
import { emit } from "@create-figma-plugin/utilities"

export function SearchResult(props: { title: string, author: string, description: string, cover: string }) {
    function handleSelect() {
        emit('SELECT');
    }
    return (
        <div className="result">
            <img className="cover" src={props.cover} alt={props.title} />
            <div className="details">
                <Text className="title">{props.title}</Text>
                <Text className="author">{props.author}</Text>
                <Text className="description">{props.description}</Text>
            </div>
            <div className="select">
                <IconButton onClick={handleSelect}>
                    <IconChevronRight32 />
                </IconButton>
            </div>
        </div >
    )
}
