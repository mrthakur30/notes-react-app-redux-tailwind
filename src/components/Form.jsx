import React from 'react'
import AddNote from "../../src/assets/AddNote.svg";
import { Zoom } from '@mui/material';
import { useDispatch} from "react-redux";
import { addNote } from '../features/notes/notesSlice';

function Form() {
   const dispatch = useDispatch();

   const [show , setShow] = React.useState(false); 
   const [note,setNote]  = React.useState({
       title : "",
       body  : ""
   });

   function changeHandler(event){
      const {name , value} = event.target;
      setNote((preValue)=>{
         return {
          ...preValue , [name] : value 
         }
      })
    }

  function clickHandler(event){
    event.preventDefault();
    dispatch(addNote(note));
    setNote({
        title : "",
        body  : ""
    });
  }

  return (
    <div id="note" className=" flex  h-1/2 items-center relative  justify-center">
          <form className="flex  w-3/4 md:w-1/3  shadow-xl  h-1/2 p-3 my-6 flex-col bg-white  content-center rounded-md gap-2  items-center">

              <input     onChange={changeHandler} name="title" value={note.title}  onFocus={()=>setShow(true)} type="text"  className=" text-lg  font-bold outline-none border-0  w-full  resize-none focus:border-0  " placeholder="Title"  />
             {
             show &&
             <>
             <textarea onChange={changeHandler} name="body"  value={note.body}  rows="4" className="  text-lg  outline-none border-0  w-full  resize-none focus:border-0  " placeholder="Type a note..."></textarea>
             <button type="submit" onClick={clickHandler} > 
             <img src={AddNote} className= "h-8 absolute bottom-1 p-1 cursor-pointer hover:bg-white hover:rotate-180 delay-200 duration-200 shadow-2xl bg-gray-50 rounded-full" ></img>
             </button>
             </>
             }
         </form>
    </div>
  )
}

export default Form