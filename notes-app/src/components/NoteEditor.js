import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';
import { nanoid } from '@reduxjs/toolkit';

function NoteEditor() {
    const [text, settext] = useState('');
    const [color, setColor] = useState('#FFF');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;

        dispatch(addNote({
            id: nanoid(),
            text: text,
            color: color
        }));
        settext('');

    };

    return (
        <form className="note-editor" onSubmit={handleSubmit} >
            <textarea className="textarea"
                id="note"
                placeholder="Enter your note here..."
                value={text}
                onChange={(e) => settext(e.target.value)}
            >

            </textarea>

            <div className="color-picker">

                <button id='#F06292' style={{ backgroundColor: '#F06292' }} type='button' onClick={(e) => setColor(e.target.id)} className="color-btn" />
                <button id='#BA68C8' style={{ backgroundColor: '#BA68C8' }} type='button' onClick={(e) => setColor(e.target.id)} className="color-btn" />
                <button id='#FFD54F' style={{ backgroundColor: '#FFD54F' }} type='button' onClick={(e) => setColor(e.target.id)} className="color-btn" />
                <button id='#4FC3F7' style={{ backgroundColor: '#4FC3F7' }} type='button' onClick={(e) => setColor(e.target.id)} className="color-btn" />
                <button id='#AED581' style={{ backgroundColor: '#AED581' }} type='radio' onClick={(e) => setColor(e.target.id)} className="color-btn" />

            </div>


            <button className="add-button"  >Add</button>
        </form>

    )
};

export default NoteEditor
