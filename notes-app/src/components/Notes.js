import React from 'react';
import { useSelector } from 'react-redux';
import { selectNotes } from '../redux/notes/notesSlice';



function Notes() {

    const items = useSelector(selectNotes);
    console.log(items);

    return (
        <ul className="note-list">

            {
                items.map((item) => (

                    <li key={item.id}  >
                        <div className='note' style={{ backgroundColor: item.color }}>
                            <label >{item.text}</label>
                        </div>
                    </li>


                ))
            }
        </ul>


    )
}

export default Notes
