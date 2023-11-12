import React from 'react'
import {useNavigate, Link} from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[100%] sm:w-screen sm:h-screen bg-no-repeat bg-cover sm:bg-cover items-center justify-center bg-[url('/errorpage.jpg')]">
      <div className='flex flex-col items-center gap-2'>
        <h1 className='sm:text-[16rem] font-extrabold text-8xl shadow-lg'>404</h1>
        <Link to='/' className='sm:text-2xl shadow-2xl bg-purple-600 text-white font-bold sm:px-8 sm:py-3 p-1 outline-orange-400 rounded-lg hover:opacity-90'>Goto <span className='uppercase'>HomePage</span></Link>
      </div>
    </div>
  )
}

export default ErrorPage

{/* <div className="flex max-h-full sm:w-screen sm:h-screen bg-no-repeat bg-cover sm:bg-cover items-center justify-center bg-[url('/errorpage.jpg')]">
      <div className='flex flex-col items-center gap-2'>
        <h1 className='sm:text-[16rem] font-extrabold text-8xl shadow-lg'>404</h1>
        <Link to='/' className='text-2xl shadow-2xl bg-purple-600 text-white font-bold px-8 py-3 outline-orange-400 rounded-lg hover:opacity-90'>Goto <span className='uppercase'>HomePage</span></Link>
      </div>
    </div> */}