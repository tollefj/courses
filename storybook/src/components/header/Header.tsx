import './header.css';
import { ReactComponent as SvvLogo } from '../../assets/SVG/svvlogo.svg';
import clsx from 'clsx';
import createClass from '../../utils/createClass';

export interface HeaderProps {
    userName: { name: string, initials: string }
    menuItems: { field: string, url: string}[]
    slim?: boolean
}

const ID = 'delutb-header';

export const Header = ({
    userName = { name: 'Default user', initials: 'N/A' },
    menuItems = [
        { field: 'Map', url: '/map' },
        { field: 'Data', url: '/data' }
    ],
    slim = false
}) => {
    return (
        <div className={clsx(ID, slim && createClass(ID, 'slim'))}>
            <div id='logo'>
                <SvvLogo fill='whitesmoke' width={100} height={'80%'} />
                <div id='logo-text'>
                    <h2>Statens Vegvesen</h2>
                    <p>Delingstjeneste for måle- og modelldata</p>
                </div>
            </div>
        </div>
    )
}