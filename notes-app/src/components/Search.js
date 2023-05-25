import { React } from 'react';
import { useDispatch } from 'react-redux';
import { searchNote } from '../redux/notes/notesSlice';




function Search() {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(searchNote({ search: e.target.value }));
    }


    return (

        <input
            className='search-input'
            type='search'
            placeholder='Search..'
            onChange={(e) => handleSearch(e)}
        />

    );
}

export default Search;
