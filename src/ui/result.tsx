import { Bold, Button, IconButton, IconChevronLeft32, Text } from "@create-figma-plugin/ui";
import { h } from "preact";

import "!../styles/global.css";
import "!../styles/result.css";
import { Checkbox } from "../components/checkbox/Checkbox";
import { emit } from "@create-figma-plugin/utilities";

export function Result() {
    function handleBack() {
        emit('BACK');
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
                <Button secondary>Cancel</Button>
                <Button>Insert</Button>
            </div>
        </div>
    )
}
