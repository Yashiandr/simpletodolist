import ToDoNote from "./ToDoNote";
import styled, {ThemeProvider, css} from "styled-components";
import { Reorder } from 'framer-motion';
import React, { useState } from "react";
import { darkTheme, lightTheme } from "../Themes";

export default { 
    component: ToDoNote,
    tags: ['autodocs'],
    }

    const Box = styled.ol<{}>(
    ({theme}) => 
    css`
        display: flex;
        flex-direction: column;
        min-width: 32.5rem;
        list-style: none;
        background-color: inherit;

        li:first-child {
            border-top: .0625rem transparent solid !important;
            border-bottom: .0625rem var(${theme.inputColor}) solid;
        }

        li+li {
            border-top: .03125rem var(${theme.inputColor}) solid !important;
            border-bottom: .03125rem var(${theme.inputColor}) solid !important;
        }

        li:last-child {
            border-bottom: .03125rem transparent solid !important;
            transition: border 1s ease, background-color .5s ease ;
        }
    `
)

const TestBox = (args: any) => {
    const [ todos, setTodos ] = useState(args.todos)
    
    return (
    <Reorder.Group as={Box} axis="y" values={todos} onReorder={setTodos} center={args.center}>
        {todos.map((todo: any) => (
            <ToDoNote key={todo.id} todos={todo} />
        ))}
    </Reorder.Group>
    )
}

export const Default = { 
    args: {
        todos: [
            {id: 1, title: 'default', checked: false},
        ]
    },

    render: (args:any) => <TestBox {...args} />
}

export const Checked = {
    ...Default, 
    args: { 
        todos: [{id: 1, title:'checked', checked: true},]
    },
}

export const Unchecked = { 
    ...Default,
    args: {
        todos: [{id: 1, title:'unchecked', checked:false}]
    },
}

export const InBox = {
    args: {
        todos: [
            {id: 1, title: "note#1", checked: true},
            {id: 2, title: 'note#2', checked: false},
            {id: 3, title: 'note#3', checked: true},
            {id: 4, title: 'note#4', checked: false},
            {id: 5, title: 'note#5', checked: false},
            {id: 6, title: 'note#6', checked: true},
        ],
    },

    parameters: {
        layout: 'centered'
    },
    
    render: (args: any) => 
        <TestBox {...args} />
}

export const InBoxDark = {
    ...InBox,
    parameters: {
        ...InBox.parameters,
        theme: 'dark'
    },
}

const ThemeBlock = styled.div<{$left?: boolean}>(
    ({$left, theme}) =>
    css`
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: ${$left ? 0 : '50vw'};
        border-right: ${$left ? '2px dashed #E50000' : 'none'};
        right: ${$left ? '50vw' : 0};
        width: 50vw;
        height: 100vh;
        bottom: 0;
        overflow: auto;
        padding: 3rem;
        background-color: var(${({theme}) => theme.body});
    `
)

export const SideBySide = {
    ...InBox,
    render: (args: any) => 
        <>
            <ThemeProvider theme={lightTheme}>
                <ThemeBlock $left>
                    <TestBox {...args} />
                </ThemeBlock>
            </ThemeProvider>
            <ThemeProvider theme={darkTheme}>
                <ThemeBlock>
                    <TestBox {...args} />
                </ThemeBlock>
            </ThemeProvider>
        </>
};