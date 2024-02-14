import { IconButton, IconChevronRight32, Text } from "@create-figma-plugin/ui"
import { h } from "preact"

import "!./SearchResult.css"
import { emit } from "@create-figma-plugin/utilities"

import noCover from "../../img/no_cover.png";


export function SearchResult(props: { id: string, title?: string, authors?: string[], description?: string, cover?: string }) {
    function handleSelect() {
        emit('SELECT', {id: props.id });
    }
    return (
        <div className="result" id={props.id}>
            <img className="cover" src={props.cover || noCover} alt={props.title} />
            <div className="details">
                <Text className="title">{props.title}</Text>
                <Text className="author">{props.authors?.join(', ')}</Text>
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
