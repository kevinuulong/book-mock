import { render } from "@create-figma-plugin/ui";

import { Search} from "./search";
import { Result} from "./result";

function selectScreen(props: { screen: string }) {
    switch (props.screen) {
        case 'result':
            return Result()
            break;
    
        default:
            return Search()
            break;
    }
}

export default render(selectScreen)