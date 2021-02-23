import { FC } from 'react';
import { NcfMetadata } from '../../sharedTypes/Ncf';
import { ListCard } from './ListCard';
import './style.css'

interface ListCardWrapperProps {
    data: NcfMetadata[]
}

const TableHeader = () => (
    <div className='delutb-listcard--header main-header'>
        <div id='w3'>Project</div>
        <div id='w1-5'>Time start</div>
        <div id='w1-5'>Time end</div>
        <div id='w3'>Location</div>
        <div id='w1' className='right'>Selection</div>
    </div>
)

export const ListCardWrapper : FC<ListCardWrapperProps> = ({
    data
}) => {
    console.log('loaded wrapper with data:', data)
    return (
        <div className='delutb-listcard--wrapper'>
            <TableHeader />
            {data.map((listCard) => (
                <ListCard metadata={listCard} expanded={false} />
            ))}
        </div>
    )
}
