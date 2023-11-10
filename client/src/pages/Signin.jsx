import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function Signin() {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
        navigate("/profile");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div>
      <div className="flex flex-col text-center gap-8 p-12 xl:p-12">
        <h1 className="text-4xl font-bold">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:w-[35%] sm:mx-auto"
        >
          <span className="font-normal text-red-700">{error}</span>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-3 rounded-md  bg-slate-200 shadow-md"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            className="p-3 rounded-md bg-slate-200 shadow-md"
          />
          <Link to="/">Forgot your password ?</Link>
          <button
            disabled={loading}
            className="bg-[#3A3A3A] uppercase font-bold text-white p-2 rounded-md self-center disabled:opacity-80"
          >
            {loading ? "loading..." : "Login"}
          </button>
          <Link to="/signup">Create account</Link>
        </form>
        <OAuth/>
      </div>
    </div>
  );
}
