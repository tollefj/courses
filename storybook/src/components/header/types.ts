interface MenuItem {
    label: string
    url: string
}

interface User {
    firstName: string
    lastName: string
    initials: string
}

export interface HeaderProps {
    menuItems: MenuItem[]
    user?: User
    slim?: boolean
}
