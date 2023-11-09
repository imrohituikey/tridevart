import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const res = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
      navigate('/')
    } catch (error) {
      next(error)
    }
  }
  return (
    <div>
      <div className="flex flex-col text-center gap-8 p-12 xl:p-12">
        <h1 className="text-4xl font-bold">Login</h1>
        <form
        onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:w-[35%] sm:mx-auto"
        >
         
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
          <Link to='/'>Forgot your password ?</Link>
          <button disabled={loading} className="bg-[#3A3A3A] uppercase font-bold text-white p-2 rounded-md self-center disabled:opacity-80">
            {loading ? "loading..." : "Login"}
          </button>
          <Link to='/signup'>Create account</Link>
        </form>
      </div>
    </div>
  )
}
