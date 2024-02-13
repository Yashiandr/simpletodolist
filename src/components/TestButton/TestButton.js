import React from "react";
import {func} from 'prop-types';
import Button from "./TestButton.style";


const TestButton = ({theme, themeToggler}) => {
    return <Button onClick = {themeToggler}>Test Button</Button>
}

TestButton.propTypes = {
    themeToggler: func.isRequired,
}

export default TestButton