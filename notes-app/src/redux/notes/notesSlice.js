import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: nanoid(),
                text: 'Test Note',
                color: ''
            },

        ],
        search: '',
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
        filterNote: (state, action) => {
            state.search = action.payload
        },
        deleteNote: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },


    },
});
export const selectNotes = state => state.notes.items;
export const searchNote = state => state.notes.search;

export const filteredNote = state => state.notes.items.filter((note) => {
    return Object.keys(note).some((key) =>
        note[key].toString().toLowerCase().includes(state.notes.search.toLowerCase())
    );
});



export const { addNote, filterNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;