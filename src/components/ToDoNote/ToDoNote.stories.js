import ToDoNote from "./ToDoNote";

export default { component: ToDoNote }

export const Default = { 
    render: (args) => <ToDoNote checked={args.checked} label='default note'/>
}

export const Checked = { 
    args: { 
        checked: true,
        label: 'cheked',
    }
}

export const Unchecked = { 
    args: { 
        checked: false,
        label: 'uncheked'
    }
}