import { Bold, Button, IconButton, IconChevronLeft32, Text } from "@create-figma-plugin/ui"
import { h } from "preact"

import "!../styles/global.css"
import "!../styles/result.css"
import { Checkbox } from "../components/checkbox/Checkbox"
import { emit } from "@create-figma-plugin/utilities"

export function Result() {
    function handleBack() {
        emit('BACK');
    }
    function handleClose() {
        emit('CLOSE');
    }
    function handleInsert() {
        const selected = {
            cover: (document.getElementById('cover') as HTMLInputElement).checked,
            title: (document.getElementById('title') as HTMLInputElement).checked,
            author: (document.getElementById('author') as HTMLInputElement).checked,
            description: (document.getElementById('description') as HTMLInputElement).checked,
            isbn: (document.getElementById('isbn') as HTMLInputElement).checked
        }
        emit('INSERT', selected);
    }
    return (
        <div className="container">
            <div id="nav">
                <IconButton onClick={handleBack}>
                    <IconChevronLeft32 />
                </IconButton>
                <Text><Bold>Search Results</Bold></Text>
            </div>
            <div id="data">
                <Text className="label"><Bold>Data</Bold></Text>
                <Checkbox value={false} id="cover">
                    <Text>Cover</Text>
                </Checkbox>
                <Checkbox value={false} id="title">
                    <Text>Title</Text>
                </Checkbox>
                <Checkbox value={false} id="author">
                    <Text>Author</Text>
                </Checkbox>
                <Checkbox value={false} id="description">
                    <Text>Description</Text>
                </Checkbox>
                <Checkbox value={false} id="isbn">
                    <Text>ISBN</Text>
                </Checkbox>
            </div>
            <div id="buttons">
                <Button secondary onClick={handleClose}>Cancel</Button>
                <Button onClick={handleInsert}>Insert</Button>
            </div>
        </div>
    )
}
