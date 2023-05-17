import React from 'react';
import Search from './Search';


function Header() {
    return (
        <header className='app-header'>
            <h1>Notes App</h1>
            <Search />
        </header>
    )
}

export default Header;
