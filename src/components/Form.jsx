import React from 'react'
import { useDispatch} from "react-redux";
import { addNote } from '../features/notes/notesSlice';
import { motion } from "framer-motion"

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
    if(note.title==="" || note.body==="") return ;
    dispatch(addNote(note));
    setNote({
        title : "",
        body  : ""
    });
  }

  return (
    <div id="note" className=" flex  h-1/3 items-center justify-center">
         

         <motion.div
          className='md:w-1/3 w-2/3'
          whileHover={{ scale: 1.1 }}
      >
        <form className="flex p-3 my-3  flex-col bg-white  content-center rounded-sm gap-2  items-center">
              <input  onChange={changeHandler} name="title" value={note.title}  onFocus={()=>setShow(true)} type="text"  className=" text-lg  py-1 font-semibold border outline-none px-1  w-full  resize-none " placeholder="Title"  />
             {
             show &&
             <>
             <textarea onChange={changeHandler} name="body"  value={note.body}  rows="4" className="  text-lg  outline-none border px-1 w-full  resize-none " placeholder="Type a note..."></textarea>
             <motion.div
               whileHover={{ scale: 1.1}}
             >
                <button type="submit" className='border px-1 py-1 hover:rounded duration-150 rounded-md' onClick={clickHandler} > 
                        Add Note
                </button>
             </motion.div>
             
             </>
             }
         </form>
        </motion.div>
          

    </div>
  )
}

export default Form