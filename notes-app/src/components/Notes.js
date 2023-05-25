import React from 'react';
import { useSelector } from 'react-redux';
import { selectNotes, getFilteredNotes } from '../redux/notes/notesSlice';



function Notes() {

    const notes = useSelector(getFilteredNotes);
    console.log(notes);


    return (

        <ul className="note-list">
            {notes.length > 0 ? (
                notes.map((note) => (

                    <li key={note.id}  >
                        <div className='note' style={{ backgroundColor: note.color }}>
                            <label >{note.text}</label>
                        </div>
                    </li>
                ))
            ) : (
                <li>
                    <div className='note' style={{ backgroundColor: '#FFF' }}>
                        <label >There is no note here!</label>
                    </div>
                </li>
            )}
        </ul>

    );
}

export default Notes
