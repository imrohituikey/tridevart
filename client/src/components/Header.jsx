import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "home", value: "" },
  { name: "category", value: "" },
  { name: "blog", value: "blog" },
  { name: "about", value: "about" },
  { name: "contact", value: "contact" },
]

export default function Header() {
  return (
    <header>
      <div className="sm:flex justify-between items-center py-4 bg-slate-100 sm:px-20">
        <h1 className="text-2xl font-bold font-sans">
          <span className="text-orange-600">Tri</span>
          <span className="text-purple-500">Dev</span> Art
        </h1>
        <form className="bg-slate-500 flex gap-2 items-center px-4 p-2 rounded-full w-[30%]">
          <AiOutlineSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-white"
          />
        </form>
        <div className="hidden sm:flex gap-5">
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
      </div>
    </header>
  );
}
