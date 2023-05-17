import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: 1,
                title: 'Note 1',
                color: 'pink'
            },
            {
                id: 2,
                title: 'Note 2',
                color: 'yellow'
            },
            {
                id: 3,
                title: 'Note 3',
                color: 'blue'
            }

        ],
    },
    reducers: {},
});
export const selectNotes = state => state.notes.items;

export default notesSlice.reducer;