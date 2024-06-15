import React from "react";
import userAvatar from "../assets/images/images (1).png";
import { PlusIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
function NavBar() {
  return (
    <nav className="bg-white 2xl:max-w-screen-2xl flex items-center justify-between my-8 rounded-lg p-3 ">
      <div className="flex items-center space-x-2">
        <img className="w-11 h-11" src={userAvatar} alt="" />
        <p className="font-bold font-nunito">Maryam Rezaee</p>
      </div>
      <div className="category-list">
        <ul className="flex gap-x-2 items-center">
          <li>All</li>
          <li>Projects</li>
          <li>Meeting</li>
          <li>Design</li>
          <li>
            <PlusIcon className="w-5 h-5" />
          </li>
        </ul>
      </div>
      <div>
        <button className="flex items-center bg-yellow-300 rounded-lg px-2 py-1 space-x-1">
          <Cog6ToothIcon className="w-4 h-4" />
          <span>Setting</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
