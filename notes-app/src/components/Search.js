import { React } from 'react';




function Search() {
    let search;
    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.value.toLowerCase();
        console.log(search);
    }

    return (

        <input className='search-input' type='search' placeholder='Search..' onChange={(e) => { handleSearch(e) }} />

    )
}

export default Search;
