import React from 'react';
import Notes from './Notes';
import NoteEditor from './NoteEditor';


function Content() {
    return (
        <>
            <div className='content'>
                <NoteEditor />
                < Notes />
            </div>

        </>

    )
}

export default Content;
