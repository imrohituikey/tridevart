import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'

const navLinks = [
  { name: "home", value: "" },
  { name: "category", value: "" },
  { name: "blog", value: "blog" },
  { name: "about", value: "about" },
  { name: "contact", value: "contact" },
]

export default function Header() {
  const [navShow, setNavShow] = useState(true);
  const handlereset=()=>{
    setNavShow(false)
  }
  return (
    <header>
      <div className="flex justify-between p-4 sm:px-20 sm:py-6 bg-slate-200 items-center backdrop-blur-md shadow-md">
        <Link to="/" className="text-2xl font-bold font-sans">
          <span className="text-orange-600">Tri</span>
          <span className="text-purple-500">Dev</span> Art
        </Link>
        <form className="bg-slate-500 hidden sm:flex gap-2 items-center px-4 p-2 rounded-full w-[30%] shadow-lg">
          <AiOutlineSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-white w-full"
          />
        </form>

        <div className="hidden sm:flex gap-6">
          {navLinks.map((item, index) => (
            <Link
              to={`/${item.value}`}
              className="uppercase hover:underline"
              key={index}
            >
              {item.name}
            </Link>
          ))}
          <div className="uppercase gap-4 flex">
            <Link to="/signup" className="hover:underline">signup</Link>
            <Link to="/signin" className="hover:underline">SignIn</Link>
          </div>
        </div>

        <div className={`absolute ${navShow? "flex":"hidden"} flex p-4 w-full text-white flex-col left-0 items-center top-16 gap-5 bg-slate-700 sm:relative sm:hidden`}>
          {navLinks.map((item, index) => (
            <Link
              to={`/${item.value}`}
              onClick={handlereset}
              className="uppercase hover:underline"
              key={index}
            >
              {item.name}
            </Link>
          ))}
          <div className="uppercase gap-4 flex">
            <Link to="/signup" onClick={handlereset} className="hover:underline">signup</Link>
            <Link to="/signin" onClick={handlereset} className="hover:underline">SignIn</Link>
          </div>
        </div>
        <AiOutlineMenu onClick={()=>{navShow ? setNavShow(false): setNavShow(true)}} className="text-2xl sm:hidden"/>
      </div>
    </header>
  );
}
