import { FC, ReactElement, ReactNode } from 'react';
import { Button } from '../button/Button';
import { ReactComponent as NextIcon } from '../../assets/SVG/next.svg';
import './style.css';

interface CardProps {
    title: string
    description: string
    icon: string // base64 string
}

export const Card : FC<CardProps> = ({
    title,
    description,
    icon
}) => {
    return (
        <div className='delutb-card--wrapper'>
            <div className='delutb-card--container'>
                <div className='delutb-card--icon'>
                    <img src={icon} alt={title} />
                </div>
                <div className='delutb-card--title'>
                    <h3>{title}</h3>
                </div>
                <div className='delutb-card--description'>
                    <p>{description}</p>
                </div>
                <div className='delutb-card--footer'>
                    <Button
                        label='Utforsk'
                        mode='primary'
                        size='medium'
                        icon={<NextIcon fill='whitesmoke' width={11} />}
                        iconPosition='right'
                    />
                </div>
            </div>
        </div>
    )
}