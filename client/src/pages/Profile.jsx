import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ProfilePage } from "../components";
import { AiFillWeiboCircle, AiFillGithub } from "react-icons/ai";
import {useSelector, useDispatch} from 'react-redux';
import { signOut } from "../redux/user/userSlice";

export default function Profile() {
  const {currentUser} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesignOut =async()=>{
    const res = await fetch("/api/user/signout");
    const data = await res.json();
    navigate('/signin')
    dispatch(signOut());
  }
  
  return (
    <div>
      <div className="flex flex-basis py-5 p-5 gap-4">
        <div className="flex flex-col basis-1/4 gap-1 text-black font-normal">
          <div className="flex flex-col text-center gap-4 py-8 bg-[#FFFFFF] rounded-lg ">
            <img
              src="defuser.png"
              alt="image"
              className="self-center w-32 h-32"
            />
            <h1 className="font-bold font-sans text-3xl">Rohit Thakur</h1>
            <p>Full Stack Developer</p>
            <p>Bhopal Madhya Pradesh</p>
            <div className="flex justify-evenly flex-grow px-5">
              <button className="bg-[#007BFF] text-white outline-[#007BFF] px-6 py-2 font-semibold rounded-md">
                Edit
              </button>
              <button onClick={handlesignOut} className="bg-red-600 text-white px-6 py-2 font-semibold rounded-md">
                Logout
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-[#FFFFFF] rounded-md p-6 gap-6">
            <div className="flex justify-between border-b-2">
            <Link to='/profile'  className="bg-[#007BFF] text-white outline-[#007BFF] px-6 py-2 font-semibold rounded-md text-center w-full">
                Profile
              </Link>
            </div>
            <div className="flex justify-between border-b-2">
            <Link to='/productshow' className="bg-[#007BFF] text-white outline-[#007BFF] px-6 py-2 font-semibold rounded-md text-center w-full">
               All Posts
              </Link>
            </div>
            <div className="flex justify-between border-b-2">
            <Link to='/productadd' className="bg-[#007BFF] text-white outline-[#007BFF] px-6 py-2 font-semibold rounded-md text-center w-full">
                Add Product
              </Link>
            </div>
            <div className="flex justify-between border-b-2">
            <Link to='/settings' className="bg-[#007BFF] text-white outline-[#007BFF] px-6 py-2 font-semibold rounded-md text-center w-full">
                Settings
              </Link>
            </div>
          </div>
        </div>
          <div className="flex w-full bg-white rounded-md p-4">
          <Outlet/>
          </div>
      </div>
    </div>
  );
}
