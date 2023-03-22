import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    noteItems : [],
    darkMode : false ,
}

const notesSlice = createSlice({
    name : "notes",
    initialState,
    reducers :{

        addNote:(state,action)=>{
            state.noteItems = [...state.noteItems , action.payload]
            console.log(state.noteItems);
        },

        deleteNote:(state,action)=>{
            const itemId = action.payload ;
            //console.log(itemId);
            state.noteItems = [...state.noteItems]
            state.noteItems = state.noteItems.filter((item,index)=>{
                 return (itemId!==index)
            })
           
        },
        setDarkMode:(state,action)=>{
            state.darkMode = action.payload ;
        }
        
    }
});

export const {addNote, deleteNote,setDarkMode ,clearAll} = notesSlice.actions ;

export default notesSlice.reducer ;