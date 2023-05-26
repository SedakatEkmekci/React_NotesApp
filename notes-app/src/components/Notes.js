import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotes, deleteNote } from '../redux/notes/notesSlice';




function Notes() {

    const dispatch = useDispatch();
    const notes = useSelector(selectNotes);


    console.log(notes);



    return (

        <div className="note-list">
            {
                notes.length > 0 ? (
                    notes.map((note) => (


                        <div className='note' key={note.id} style={{ backgroundColor: note.color }}>
                            <label >{note.text}</label>
                            <button className="delete-btn" onClick={() => dispatch(deleteNote(note.id))}></button>
                        </div>

                    ))
                ) : (

                    <div className='note' style={{ backgroundColor: '#FFF' }}>
                        <label >There is no note here!</label>
                    </div>

                )}
        </div>

    );
}

export default Notes
