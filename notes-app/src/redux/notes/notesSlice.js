import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: 1,
                title: 'Note 1',
                color: '#FFA726'
            },
            {
                id: 2,
                title: 'Note 2',
                color: '#F06292'
            },


        ],
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: ({ title, color }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        color,

                    },
                };
            },

        },

    },
});
export const selectNotes = state => state.notes.items;

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;