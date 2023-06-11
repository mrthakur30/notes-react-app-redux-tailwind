import React , {useEffect} from 'react'
import { useSelector , useDispatch } from "react-redux";
import { deleteNote } from '../features/notes/notesSlice';
import { motion } from 'framer-motion';


function Note() {
  
  const {noteItems} = useSelector((store)=>store.notes)

  // useEffect(()=>{
        
  // },[noteItems])
  return (
    <div id="note" className="grid m-4 grid-cols-2 md:grid-cols-5  my-6 gap-2 md:gap-4">
        {noteItems.map((item,index)=>{
           return(<NoteCard id={index} key={index} title={item.title} body={item.body}></NoteCard>)
        })}
    </div>
  )
}


function NoteCard(props){
  
  const dispatch = useDispatch()
  const {title , body , id } = props ;
  
  function clickHandler(){
        dispatch(deleteNote(id));
  }

   return(
    
    <motion.div
    whileHover={{ scale: 1.1}}
    > 
      
      <div className="rounded-sm bg-white shadow-md relative p-2  min-h-32">
         <div className='h-full w-full p-2 border  rounded-sm '>
         <button onClick={clickHandler} className='top-1 text-xl  text-red-500 duration-150 hover:text-red-700 font-bold absolute right-4'>x</button>
         <p className="font-bold">{title}</p>
         <p>{body}</p> 
       </div>
      </div>
      
    </motion.div>
    
   )
} 

export default Note
