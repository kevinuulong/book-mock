import { render } from "@create-figma-plugin/ui";

import { Search } from "./search";
import { Result } from "./result";
import { Books } from "../types";

function selectScreen(props: { screen: string, books: Books }) {
    switch (props.screen) {
        case 'result':
            return Result()
            break;

        default:
            return Search({ books: props.books })
            break;
    }
}

export default render(selectScreen)