import { FC } from 'react';
import './style.css';
import { ReactComponent as SearchIcon } from '../../assets/SVG/search.svg';

interface SearchProps {
    placeholder?: string
}

export const Search : FC<SearchProps> = ({
    placeholder = 'Placeholder'
}) => {
    return (
        <div className='delutb-search'>
            <div id='search-icon'>
                <SearchIcon height={30} width={30} />
            </div>
            <input type='text' placeholder={placeholder} />
        </div>
    )
}