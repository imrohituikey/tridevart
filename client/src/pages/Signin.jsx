import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div>
      <div className="flex flex-col text-center gap-6 p-12">
        <h1 className="text-4xl font-bold">Login</h1>
        <form className="flex flex-col items-center gap-6 p-4">
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
          <Link>Forgot your password?</Link>
          <button className="bg-[#3A3A3A] uppercase font-bold text-white p-2 rounded-md">Login</button>
          <Link>Create account</Link>
        </form>
      </div>
    </div>
  )
}
