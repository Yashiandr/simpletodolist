import PropTypes from 'prop-types'
import { useState } from 'react';
import './Checkbox.css'
import ToDoes from './ToDoNote.style.tsx';

const ToDoNote = ({ id, label='note', checked=true}) => {
    const defaultChecked = checked ? checked : false;
    const [ isChecked, setIsChecked ] = useState(defaultChecked);

    return (
        <ToDoes check = {isChecked.toString()}>
            <input
                id={id}
                type='checkbox'
                className='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
            />
            <span>{label}</span>
        </ToDoes>
    )
}

ToDoNote.propTypes = {
    id: PropTypes.number,
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
}

export default ToDoNote