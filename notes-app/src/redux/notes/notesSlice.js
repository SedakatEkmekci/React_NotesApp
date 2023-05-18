import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: 1,
                title: 'Note 1',

            },


        ],
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: ({ title }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                    },
                };
            },

        },
    },
});
export const selectNotes = state => state.notes.items;
export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;