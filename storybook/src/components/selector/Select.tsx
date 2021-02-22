import clsx from 'clsx';
import React, { useState } from 'react';
import { ReactComponent as ExpandIcon } from '../../assets/SVG/expand.svg';
import createClass from '../../utils/createClass';
import './select.css';

export interface SelectProps {
    label: string
    size: 'wide' | 'narrow'
    children: React.ReactNode
}

const ID = 'delutb-select';

export const Select: React.FC<SelectProps> = ({
    label,
    size,
    children,
    ...props
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={clsx(ID, createClass(ID, size))}>
            <div className={createClass(ID, 'label')}>
                {label}
            </div>
            <div
                className={createClass(ID, 'selector')}
                onClick={() => setOpen(!open)}
            >
                <div className={createClass(ID, 'selector-text')}>
                    selector box
                </div>
                <div className={clsx(createClass(ID, 'selector-icon'), open && 'rotated')}>
                    <ExpandIcon fill='whitesmoke'/>
                </div>
            </div>
            <div className={createClass(ID, 'content-wrapper')}>
                {open && (
                    <div className={createClass(ID, 'content')}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}
