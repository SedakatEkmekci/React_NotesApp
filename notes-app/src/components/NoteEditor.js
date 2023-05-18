import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';

function NoteEditor() {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if (!title) return;
        e.preventDefault();
        dispatch(addNote({ title }));
        setTitle('');
    };

    return (


        <form className="note-editor" onSubmit={handleSubmit} >
            <input
                placeholder="Enter your note here..."
                className="textarea"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}

            />
            <div className="color-picker">

                <input type="radio" name="color-pick" value="#F06292" id="color1" />
                <label htmlFor="color1" style={{ backgroundColor: "#F06292" }}></label>
                <input type="radio" name="color-pick" value="#BA68C8" id="color2" />
                <label htmlFor="color2" style={{ backgroundColor: "#BA68C8" }}></label>
                <input type="radio" name="color-pick" value="#FFD54F" id="color3" />
                <label htmlFor="color3" style={{ backgroundColor: "#FFD54F" }}></label>
                <input type="radio" name="color-pick" value="#4FC3F7" id="color4" />
                <label htmlFor="color4" style={{ backgroundColor: "#4FC3F7" }}></label>
                <input type="radio" name="color-pick" value="#AED581" id="color5" />
                <label htmlFor="color5" style={{ backgroundColor: "#AED581" }}></label>


            </div>


            <button className="add-button"  >Add</button>
        </form>

    )
}

export default NoteEditor
