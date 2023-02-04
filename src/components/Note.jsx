import React from 'react'
import { useSelector } from "react-redux";

function Note() {
  const {noteItems} = useSelector((store)=>store.notes)
  return (
    <div id="note" className="grid m-4 grid-cols-2 md:grid-cols-5  my-6 gap-2 md:gap-4">
        {noteItems.map((item,index)=>{
           return(<NoteCard id={index} key={index} title={item.title} body={item.body}></NoteCard>)
        })}
    </div>
  )
}


function NoteCard(props){
  const {title , body} = props ;
   return(
    <div className="rounded-md p-2 bg-white h-32">
       <p className="font-bold">{title}</p>
       <p>{body}</p> 
    </div>
   )
} 

export default Note