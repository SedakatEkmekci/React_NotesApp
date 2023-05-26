import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterNote, searchNote, deleteNote, filteredNote } from '../redux/notes/notesSlice';




function Search() {
    const dispatch = useDispatch();
    const notes = useSelector(searchNote);
    const filtered = useSelector(filteredNote);

    return (
        <>
            <input
                className='search-input'
                type='search'
                placeholder='Search..'
                value={notes}
                onChange={(e) => dispatch(filterNote(e.target.value))}
            />
            <br /><br />
            <div className="note-list">
                {
                    notes.length > 0 ? (
                        filtered.map(note => (
                            <div key={note.id} className="note" style={{ backgroundColor: `${note.color}` }}>

                                <label >{note.text}</label>
                                <button className="delete-btn" onClick={() => dispatch(deleteNote(note.id))}><i className="fa-solid fa-trash"></i></button>
                            </div>
                        ))
                    ) : (

                        <div className='note' style={{ backgroundColor: '#FFF' }}>
                            <label >There is no note here!</label>
                        </div>

                    )
                }

            </div>

        </>
    )

};










export default Search;
