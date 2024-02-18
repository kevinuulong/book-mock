import { ComponentChildren } from 'preact';
import { EventHandler } from '@create-figma-plugin/ui/lib/types/event-handler.js';
import { FocusableComponentProps } from '@create-figma-plugin/ui/lib/types/focusable-component-props.js';
export interface CheckboxProps extends FocusableComponentProps<HTMLInputElement> {
    children: ComponentChildren;
    disabled?: boolean;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onValueChange?: EventHandler.onValueChange<boolean>;
    value: boolean;
}
export declare const Checkbox: import("preact").FunctionalComponent<Omit<import("@create-figma-plugin/ui/lib/utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, CheckboxProps>, "ref"> & {
    ref?: import("preact").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=checkbox.d.ts.map