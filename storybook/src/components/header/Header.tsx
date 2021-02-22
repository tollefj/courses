import './header.css';

export interface HeaderProps {
    userName: { name: string, initials: string }
    menuItems: { field: string, url: string}[]
}

const ID = 'delutb-header';

export const Header = ({
    userName = { name: 'Default user', initials: 'N/A' },
    menuItems = [
        { field: 'Map', url: '/map' },
        { field: 'Data', url: '/data' }
    ]
}) => {
    return (
        <div className={ID}>
            ok m8
        </div>
    )
}