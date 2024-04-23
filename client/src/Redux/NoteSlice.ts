import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name:'note',
    initialState:{
        noteData:{}
    },
    reducers:{
        addNote:(state,action)=>{
             state.noteData = {...state.noteData,...action.payload}
        },
        clearNote:(state)=>{
            state.noteData={}
        },
    }

})
export const { addNote,clearNote } = noteSlice.actions
export default noteSlice.reducer; 