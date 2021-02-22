import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
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
    const contentRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const handleClickOutside = (e: MouseEvent) => {
        if (!contentRef.current?.contains(e.target as Element)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className={clsx(ID, createClass(ID, size))} ref={contentRef}>
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
            <div className={clsx(createClass(ID, 'content-wrapper'), open && createClass(ID, 'content-wrapper-open'))}>
                <div className={clsx(createClass(ID, 'content'), open && createClass(ID, 'content-open'))}>
                    {children}
                </div>
            </div>
        </div>
    )
}
