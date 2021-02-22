import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as ExpandIcon } from '../../assets/SVG/expand.svg';
import createClass from '../../utils/createClass';
import './style.css';

export interface SelectProps {
    marginTop: number
    children: React.ReactNode
}

const ID = 'delutb-select';
const chevronID = 'delutb-chevron-select';

export const SelectChevron: React.FC<SelectProps> = ({ marginTop, children, ...props }) => {
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
        <div className='chevron-wrapper' ref={contentRef}>
            <div
                className={createClass(ID, 'chevron')}
                onClick={() => setOpen(!open)}
            >
                <div className={clsx(createClass(ID, 'selector-icon'), open && 'rotated')}>
                    <ExpandIcon fill='whitesmoke'/>
                </div>
            </div>
            <div
                className={clsx(
                    createClass(ID, 'content-wrapper'),
                    'chevron-content',
                    open && createClass(ID, 'content-wrapper-open')
                )}
                style={{marginTop}}
            >
                <div
                    className={clsx(
                        createClass(chevronID, 'content'),
                        open && createClass(chevronID, 'content-open')
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
