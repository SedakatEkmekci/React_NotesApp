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
        searchNote: (state, action) => {
            state.search = action.payload.search;
        },


    },
});
export const selectNotes = state => state.notes.items;

export const getFilteredNotes = (state) => {
    if (state.notes.search !== '') {
        return state.notes.list.filter(
            (note) =>
                note.text
                    .toLowerCase()
                    .includes(state.notes.search.toLowerCase())
        )
    }
    else {
        return state.notes.list;
    }
};

export const { addNote, searchNote } = notesSlice.actions;

export default notesSlice.reducer;