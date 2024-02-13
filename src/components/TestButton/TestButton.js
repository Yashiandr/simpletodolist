import React from "react";
import {func, string} from 'prop-types';
import Button from "./TestButton.style";


const TestButton = ({theme, themeToggler}) => {
    return <Button onClick = {themeToggler}>Test Button</Button>
}

TestButton.propTypes = {
    theme: string.isRequired,
    themeToggler: func.isRequired,
}

export default TestButton