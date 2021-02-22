export interface MenuItem {
    label: string
    url: string
}

export interface User {
    firstName: string
    lastName: string
    initials: string
}

export interface HeaderProps {
    menuItems: MenuItem[]
    user?: User
    slim?: boolean
}
