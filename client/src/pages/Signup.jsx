import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";


export default function Signup() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      navigate('/signin')
    } catch (error) {
      next(error)
    }
    setLoading(false)
  };
  return (
    <div>
      <div className="flex flex-col text-center gap-8 p-12 xl:p-12">
        <h1 className="text-4xl font-bold">Create Account</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:w-[35%] sm:mx-auto"
        >
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleChange}
            className="p-3 rounded-md bg-slate-200 shadow-md"
          />
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
          <button disabled={loading} className="bg-[#3A3A3A] uppercase font-bold text-white p-2 rounded-md self-center disabled:opacity-80">
            {loading ? "loading..." : "create"}
          </button>
        </form>
        <OAuth/>
      </div>
    </div>
  );
}
