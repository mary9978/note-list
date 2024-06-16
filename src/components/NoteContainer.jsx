import React from 'react'
import Note from './Note'
import { useNote } from '../context/NoteContext'
function NoteContainer({sortBy}) {
  const note = useNote();
  let sortedNotes = sortBy;
  if(sortBy == "earliest"){
     sortedNotes = [...note].sort((a,b)=> new Date(a.date) - new Date(b.date))
  }
  if(sortBy == "latest"){
    sortedNotes = [...note].sort((a,b)=> new Date(b.date) - new Date(a.date))
 }
 if(sortBy == "completed"){
  sortedNotes = [...note].sort((a,b)=> Number(a.isCompleted) - Number(b.isCompleted))
}



  return (
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-y-2 gap-x-8'>
        {sortedNotes.map((note) => (
          <Note key={note.id} note={note}/>
        ))}
   </div>
  )
}

export default NoteContainer