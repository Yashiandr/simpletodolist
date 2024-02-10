import PropTypes from 'prop-types'
import { useState } from 'react';
import { ToDoes, Checkbox } from './ToDoNote.style.tsx';
import { Reorder } from 'framer-motion';

const ToDoNote = ({ todo, theme }) => {
    const defaultChecked = todo.checked ? todo.checked : false;
    const [ isChecked, setIsChecked ] = useState(defaultChecked);
    return (
        <Reorder.Item
            as={ToDoes}
            value={todo}
            $check={isChecked}
        >
            <Checkbox
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
            />
            <span>{todo.title}</span>
        </Reorder.Item>
    )
}

ToDoNote.propTypes = {
    id: PropTypes.number,
    checked: PropTypes.bool,
    label: PropTypes.string,
}

export default ToDoNote 