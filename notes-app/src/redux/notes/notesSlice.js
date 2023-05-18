import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: 1,
                title: 'Note 1',
                color: 'coral'


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
        addColor: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: ({ color }) => {
                return {
                    payload: {
                        id: nanoid(),
                        color

                    },
                };
            },

        },
    },
});
export const selectNotes = state => state.notes.items;
export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;