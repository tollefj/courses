import { User } from '../types';
import { SelectChevron } from '../../selector/SelectChevron';

const UserMenuItem = ({ label, url }: { label: string, url: string}) => (
    <div id='menu-item' className='underline'>
        <a href={url}>
            <h5 style={{lineHeight: 0}}>{label}</h5>
        </a>
    </div>
)

export const UserInfo = ({user, tiny}: {user: User, tiny: boolean}) => (
    <div className='delutb-header--user'>
        <div id='user-name'>
            <div id='first-name'>{user.firstName}</div>
            <div id='last-name'>{user.lastName}</div>
        </div>
        <div id='user-circle' onClick={() => console.log('clicked user')}>
            {user.initials}
        </div>
        <SelectChevron marginTop={tiny ? 80 : 60}>
            <UserMenuItem label='Log out' url='/user/logout' />
            <UserMenuItem label='Privacy' url='/user/privacy' />
        </SelectChevron>
    </div>
)
