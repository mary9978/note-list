import { createContext, useContext,useReducer } from "react";

export const NoteContext = createContext();
export const NoteDispatchContext = createContext();


const initialNote = [
  {
    id:1,
    title : 'buy cake',
    desc : 'this is desc',
    isCompleted: false,
    color : '#ccc',
    category: "",
    date: '2024-05-02T09:59:43.066Z',
  },
  {
    id:2,
    title : 'buy milk',
    desc : 'this is desc2',
    isCompleted: false,
    color : '#ccc',
    category: "",
    date: '2023-05-02T09:59:43.066Z',
  }
];
  function noteReucer(state,{type,payload}) {
    switch(type){
      case 'ADD_NOTE':{
        return [
          ...state ,payload
        ]
      }
      case 'DELETE_NOTE':{
         return state.filter(item => item.id !== payload); 
      }
      case 'EDITE_NOTE':{
      const index = state.findIndex((noteItem) => noteItem.id === payload.noteId);
      console.log('index',index);
      const Note = [...state];
       Note[index].title = payload.title;
       Note[index].desc = payload.desc;
      return Note;
      }
      case 'COMPLETE_NOTE':{
        return state.map((noteItem) =>
          noteItem.id === payload ?
           {...noteItem, isCompleted: !noteItem.isCompleted} 
           : noteItem
        );
      
      }
      case "SORT_NOTE":{
        switch (payload) {
          case "All": return state;
          case "Completed":{
            const newItem = [...state];
            return newItem.filter(note => note.isCompleted);
          }
          case "UnCompleted":{
            return state.filter(note => !note.isCompleted);
          }
          default:{
            return state;
          }
        }
      }
      default : return state;
    }
  }
export function NoteProvider({children}) {
    const [note,dispatch] = useReducer(noteReucer,initialNote);
    return(
        <NoteContext.Provider value={note}>
            <NoteDispatchContext.Provider value={dispatch}>
            {children}
            </NoteDispatchContext.Provider>
        </NoteContext.Provider>
    )
}

export const useNote = ()=> useContext(NoteContext);
export const useNoteDispatch = ()=> useContext(NoteDispatchContext);