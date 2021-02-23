import { FC, ReactElement, useState } from 'react';
import './style.css';

interface MeasureFilterProps {
    icon: ReactElement
    text: string
    preChecked?: boolean
}

export const MeasureFilter : FC<MeasureFilterProps> = ({
    icon,
    text,
    preChecked = false
}) => {
    const [checked, setChecked] = useState(preChecked);

    return (
        <div className='delutb-filtering--container'>
            <label className='delutb-filtering--checkbox'>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <span className='checkmark' />
            </label>
            <div id='filter-icon'>{icon}</div>
            <div id='filter-text'>{text}</div>
        </div>
    )
}