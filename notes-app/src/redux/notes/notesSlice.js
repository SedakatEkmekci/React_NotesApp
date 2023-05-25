import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: 1,
                text: 'Note 1',
                color: '#FFA726'
            },
            {
                id: 2,
                text: 'Note 2',
                color: '#F06292'
            },
        ],
        search: '',
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
        changeColor: (state, action) => {
            state.items.push(action.payload);
        },

    },
});
export const selectNotes = state => state.notes.items;

export const { addNote, changeColor } = notesSlice.actions;

export default notesSlice.reducer;