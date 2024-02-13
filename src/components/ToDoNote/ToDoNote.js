import PropTypes from 'prop-types'
import { useState } from 'react';
import { ToDoes, Checkbox } from './ToDoNote.style.tsx';
import { Reorder } from 'framer-motion';

const ToDoNote = ({ todos }) => {
    const defaultChecked = todos.checked ? todos.checked : false;
    const [ isChecked, setIsChecked ] = useState(defaultChecked);
    return (
        <Reorder.Item
            as={ToDoes}
            value={todos}
            $check={isChecked}
            whileDrag={{cursor: 'grabbing',}}
        >
            <Checkbox
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
            />
            <span>{todos.title}</span>
        </Reorder.Item>
    )
}

ToDoNote.propTypes = {
    todo: { id: PropTypes.number, title: PropTypes.string, checked: PropTypes.bool },
}

export default ToDoNote 