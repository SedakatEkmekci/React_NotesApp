import React from 'react';
import { useSelector } from 'react-redux';
import { selectNotes } from '../redux/notes/notesSlice';



function Notes() {

    const items = useSelector(selectNotes);

    return (
        <ul className="note-list">

            {
                items.map((item) => (

                    <li key={item.id} >
                        <div className='note' >
                            <label >{item.title}</label>


                        </div>
                    </li>


                ))
            }
        </ul>


    )
}

export default Notes
