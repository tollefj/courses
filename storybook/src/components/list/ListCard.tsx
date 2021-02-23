import { FC, useState } from 'react';
import './style.css'
import { ListCardProps } from './types';
import { ReactComponent as DownArrowIcon } from '../../assets/SVG/down.svg';
import { getShortDate, getLongDate } from '../../utils/date';
import { measuringIcons } from '../../utils/measuringIcons';
import clsx from 'clsx';
import { UTMtoString } from '../../utils/position';
import { Checkbox } from '../checkbox/Checkbox';

const ExpandedContentField = ({ title, content }: { title: string, content: String}) => (
    <div className='delutb-listcard--content-field'>
        <div style={{ fontSize: 12, fontWeight: 700, lineHeight: '14px'}}>{title}</div>
        <div style={{ fontSize: 12, fontWeight: 400, lineHeight: '14px'}}>{content}</div>
    </div>
)

export const ListCard : FC<ListCardProps> = ({
    metadata,
    expanded = false
}) => {
    const [open, setOpen] = useState(expanded);
    return (
        <div className='delutb-listcard--container'>
            <div className='delutb-listcard--inner-container'>
                <div className='delutb-listcard--header' onClick={() => setOpen(!open)}>
                    <div id='w3' className='delutb-listcard--header-start'>
                        {/* riverbed color: 545F5F */ }
                        <div className={clsx('listcard-expand', open && 'listcard-expand-open')}>
                            <DownArrowIcon width={11} fill='riverbed'/>
                        </div>
                        <div className='delutb-listcard--header-start-text'>
                            {measuringIcons['wind']}
                            {metadata.project}
                        </div>
                    </div>
                    <div id='w1-5'>{getShortDate(metadata.time.start)}</div>
                    <div id='w1-5'>{getShortDate(metadata.time.end)}</div>
                    <div id='w3'>{metadata.location}</div>
                    <div id='w1' className='right'>
                        <Checkbox />
                    </div>
                </div>
                {open && (
                    <div className={clsx('delutb-listcard--content', open && 'delutb-listcard--content-open')}>
                        <div id='w3'>
                            <ExpandedContentField title='Documentation' content={metadata.documentation} />
                            <ExpandedContentField title='Position' content={UTMtoString(metadata.position)} />
                        </div>
                        <div id='w3'>
                            <ExpandedContentField title='Time start' content={getLongDate(metadata.time.start)} />
                            <ExpandedContentField title='Time start' content={getLongDate(metadata.time.end)} />
                        </div>
                        <div id='w3'>
                            <ExpandedContentField title='File creation date' content={getLongDate(metadata.file.creationDate)} />
                            <ExpandedContentField title='File creation by' content={metadata.file.createdBy} />
                            <ExpandedContentField title='Comment' content={'Placeholder text'} />
                        </div>
                        <div id='w1'>
                            &nbsp;
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}