import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FcFilmReel } from "react-icons/fc";
import { BiMoviePlay } from "react-icons/bi";
import { AiFillHome, AiFillInfoCircle, AiFillContacts } from "react-icons/ai";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", icn: <AiFillHome /> },
    { title: "About", icn: <AiFillInfoCircle /> },
    { title: "Movies", icn: <BiMoviePlay /> },
    { title: "Contact", icn: <AiFillContacts /> },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-56" : "w-20"
        } duration-300 h-screen bg-neutral-900 relative p-5 pt-16`}
      >
        <FiArrowLeftCircle
          className={`absolute cursor-pointer top-5 left-3 text-xl text-white
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center mt-5">
          <FcFilmReel
            className={`cursor-pointer duration-500 text-3xl ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl
          duration-300 ${!open && "hidden"}`}
          >
            Trail Mix
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="text-gray-300 text-lg flex items-center mt-3 p-2 gap-x-4 cursor-pointer hover:bg-neutral-800 rounded-md"
            >
              <span className="text-2xl text-red-50">{menu.icn}</span>
              <span className={`${!open && "hidden"}`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
