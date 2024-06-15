import React from "react";
import noteOne from "../assets/images/make-tea.avif";
import noteTwo from "../assets/images/note-two.png";
import noteThree from "../assets/images/note-three.jpg";
import {
  DocumentTextIcon,
  BarsArrowDownIcon,
} from "@heroicons/react/24/outline";
import { useNote, useNoteDispatch } from "../context/NoteContext";
import { getTime } from "../utils/getTime";

function NoteList() {
    const note = useNote();
    const dispatch = useNoteDispatch();
  return (
    <div className="bg-white rounded-xl p-4 max-h-screen">
      <div className="flex items-center space-x-2">
        <DocumentTextIcon className="w-4 h-4" />
        <p className="font-bold">All Notes</p>
      </div>
      <div className="flex items-center justify-between my-2">
        <p className="text-pink-400">{note.length} notes</p>
        <button onClick={()=> dispatch({type:'SORT_NOTE'})}>
          <BarsArrowDownIcon className="w-6 h-6" />
        </button>
      </div>
      {/* note item */}

      {note.map(noteItem=>{
        return(
            <div key={noteItem.id} className="note-item flex items-center bg-purple-400 rounded-lg my-4 p-2 space-x-3">
            <div className="flex justify-center items-center w-1/4 h-16 rounded-lg bg-blue-200">
              <img className="w-11 h-11 rounded-lg" src={noteOne} alt="" />
            </div>
            <div>
              <p className="font-bold text-md">{noteItem.title}</p>
              <p className="text-xs text-justify w-3/4">
                {noteItem.desc}
              </p>
              <div className="flex items-center space-x-2 my-1">
                <span className="bg-white rounded-xl text-xs p-1 text-gray-500">
                  {}
                </span>
                <div className="date text-xs text-gray-500">{new Date(noteItem.date).toLocaleDateString('en-US',{
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                })}</div>
              </div>
            </div>
          </div>
        )
      })}
      {/* <div className="note-item flex items-center bg-purple-400 rounded-lg my-4 p-2 space-x-3">
        <div className="flex justify-center items-center w-1/4 h-16 rounded-lg bg-blue-200">
          <img className="w-11 h-11 rounded-lg" src={noteOne} alt="" />
        </div>
        <div>
          <p className="font-bold text-md">Make cofee for breakfast</p>
          <p className="text-xs text-justify w-3/4">
            in the morning I should awake nad make tea for my self
          </p>
          <div className="flex items-center space-x-2 my-1">
            <span className="bg-white rounded-xl text-xs p-1 text-gray-500">
              4 mins
            </span>
            <div className="date text-xs text-gray-500">14-08-2024</div>
          </div>
        </div>
      </div>

      <div className="note-item flex items-center  rounded-lg my-4 p-2 space-x-3">
        <div className="flex justify-center items-center w-1/4 h-16 rounded-lg bg-blue-200">
          <img className="w-full h-16 rounded-lg" src={noteTwo} alt="" />
        </div>
        <div>
          <p className="font-bold text-md">Make cofee for breakfast</p>
          <p className="text-xs text-justify w-3/4">
            in the morning I should awake nad make tea for my self
          </p>
          <div className="flex items-center space-x-2 my-1">
            <span className="bg-white rounded-xl text-xs p-1 text-gray-500">
              4 mins
            </span>
            <div className="date text-xs text-gray-500">14-08-2024</div>
          </div>
        </div>
      </div>

      <div className="note-item flex items-center  rounded-lg my-4 p-2 space-x-3">
        <div className="flex justify-center items-center w-1/4 h-16 rounded-lg bg-blue-200">
          <img className="w-full h-16 rounded-lg" src={noteThree} alt="" />
        </div>
        <div>
          <p className="font-bold text-md">Make cofee for breakfast</p>
          <p className="text-xs text-justify w-3/4">
            in the morning I should awake nad make tea for my self
          </p>
          <div className="flex items-center space-x-2 my-1">
            <span className="bg-white rounded-xl text-xs p-1 text-gray-500">
              4 mins
            </span>
            <div className="date text-xs text-gray-500">14-08-2024</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default NoteList;
