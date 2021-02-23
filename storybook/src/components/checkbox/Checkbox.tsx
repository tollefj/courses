import { FC, useState } from 'react';
import './style.css';

interface CheckboxProps {
    label?: string
    preChecked?: boolean
}

export const Checkbox : FC<CheckboxProps> = ({ label, preChecked = false }) => {
    const [checked, setChecked] = useState(preChecked);

    return (
        <label className='delutb-checkbox--container noselect'>
            <input
                type='checkbox'
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
            <span className='checkmark' />
        </label>
    )
}