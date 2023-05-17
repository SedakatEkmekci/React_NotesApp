import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';


function Search() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        if (!title) return;
        e.preventDefault();
        dispatch(addNote({ title }));
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='search-input' placeholder='Search..' autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        </form>
    )
}

export default Search;
