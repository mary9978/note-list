import React from 'react'
import Note from './Note'
function NoteContainer({sortedNotes}) {
    
  return (
   <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-y-2 gap-x-8'>
        {sortedNotes.map((note) => (
          <Note note={note}/>
        ))}
   </div>
  )
}

export default NoteContainer