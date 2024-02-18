import { h } from "preact"
import { useState } from "preact/hooks";

import { Checkbox as CFPCheckbox } from "@create-figma-plugin/ui";

export function Checkbox({children, value, ...rest}) {
        const [_value, setValue] = useState(value);
        function handleChange(event) {
            const newValue = event.currentTarget.checked;
            setValue(newValue);
        }
        return (
            <CFPCheckbox value={_value} onChange={handleChange} {...rest}>
                {children}
            </CFPCheckbox>
        )
}