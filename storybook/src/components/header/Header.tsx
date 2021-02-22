import './style.css';
import { ReactComponent as SvvLogo } from '../../assets/SVG/svvlogo.svg';
import clsx from 'clsx';
import createClass from '../../utils/createClass';
import { HeaderProps } from './types';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useState } from 'react';

const ID = 'delutb-header';

export const Header: React.FC<HeaderProps> = ({
    menuItems = [
        { label: 'Map', url: '/map' },
        { label: 'Data', url: '/data' }
    ],
    user
}) => {
    const [hoveringLogo, setHoveringLogo] = useState(false);
    const isWide = useMediaQuery('(min-width: 800px)');
    const isTiny = useMediaQuery('(max-width: 600px)');
    console.log('hovering', hoveringLogo)

    return (
        <div className={clsx(ID, 'noselect')}>
            <div className={clsx(createClass(ID, 'container'), isTiny && 'slim-container')}>
                <div
                    className={clsx(createClass(ID, 'logo'), hoveringLogo && 'logo-hover')}
                    onMouseEnter={() => setHoveringLogo(true)}
                    onMouseLeave={() => setHoveringLogo(false)}
                    onClick={() => console.log('redirect home')}
                >
                    { !isTiny && (
                        <SvvLogo
                            fill={hoveringLogo ? 'orange' : 'whitesmoke'}
                            width={100}
                            height={'80%'}
                        />
                    )}
                    { isWide && (
                        <div id='logo-text' style={{ marginRight: isWide ? 100 : 0}}>
                            <h2>Statens Vegvesen</h2>
                            <p>Delingstjeneste for måle- og modelldata</p>
                        </div>
                    )}
                </div>
                <div className={createClass(ID, 'menu')}>
                    {menuItems.map((menuItem) => (
                        <div id='menu-item' key={menuItem.url}>
                            <a href={menuItem.url}>
                                {menuItem.label}
                            </a>
                            <pre id='menu-item-line' />
                        </div>
                    ))}
                </div>
                { user && (
                    <div className={createClass(ID, 'user')}>
                        <div className={createClass(ID, 'user-name')}>
                            <div id='first-name'>{user.firstName}</div>
                            <div id='last-name'>{user.lastName}</div>
                        </div>
                        <div id='user-circle'>
                            {user.initials}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}