import React, {useState} from 'react'
import React from "react";

export default function Signup() {
  const [usename,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div>
      <div className="flex flex-col text-center gap-6 p-12">
        <h1 className="text-4xl font-bold">Create Account</h1>
        <form className="flex flex-col items-center gap-6 p-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-md w-[30%] bg-slate-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md w-[30%] bg-slate-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md w-[30%] bg-slate-200"
          />
          <button className="bg-[#3A3A3A] uppercase font-bold text-white p-2 rounded-md">create</button>
        </form>
      </div>
    </div>
  );
}
