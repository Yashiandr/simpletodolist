import ToDoNote from "./ToDoNote";
import styled, {css} from "styled-components";
import { Reorder } from 'framer-motion';
import React, { useState } from "react";

export default { component: ToDoNote }

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

const Box = styled.ol<{center?: boolean}>(
    ({center, theme}) => 
    css`
        display: flex;
        flex-direction: column;
        max-width: 32.5rem;
        margin: ${center ? 'auto' : '0'};
        list-style: none;

        li:first-child {
            border-top: 1px transparent solid !important;
            border-bottom: 1px var(${theme.inputColor}) solid;
        }

        li+li {
            border-top: .5px var(${theme.inputColor}) solid !important;
            border-bottom: .5px var(${theme.inputColor}) solid !important;
        }

        li:last-child {
            border-bottom: 1px transparent solid !important;
        }
    `
)

const TestBox = (args: any) => {
    const [ todos, setTodos ] = useState(args.todos)
    
    return (
    <Reorder.Group as={Box} axis="y" values={todos} onReorder={setTodos} center={args.center}>
        {todos.map((todo) => (
            <ToDoNote key={todo.id} todo={todo} theme />
        ))}
    </Reorder.Group>
    )
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
        center: true,
    },

    render: (args: any) => 
        <TestBox {...args}/>
}

export const InBoxDark = {
    ...InBox,
    parameters: {theme: 'dark'},
}
