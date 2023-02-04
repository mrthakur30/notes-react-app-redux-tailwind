import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    noteItems : [],
}

const notesSlice = createSlice({
    name : "notes",
    initialState,
    reducers :{

        addNote:(state,action)=>{
            state.noteItems = [...state.noteItems , action.payload]
        },

        deleteNote:(state,action)=>{
            const itemId = action.payload ;
            state.noteItems = state.noteItems.filter((item,index)=>{
                return (item.id!==index);
            })
        },
        
    }
});

export const {addNote, deleteNote ,clearAll} = notesSlice.actions ;

export default notesSlice.reducer ;