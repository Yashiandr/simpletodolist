import TestButton from "./TestButton";

export default { component: TestButton};



export const Default  = {}

export const LightTheme = {
    ...Default
}
LightTheme.parameters = {
    theme: 'light',
}

export const DarkTheme = {
    ...Default
}
DarkTheme.parameters = {
    theme: 'dark',
}