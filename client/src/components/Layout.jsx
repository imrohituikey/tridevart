import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className='px-20 bg-slate-800'>
        {children}
    </div>
  )
}

export default Layout