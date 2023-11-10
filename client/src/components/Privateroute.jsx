import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Privateroute() {
    const {currentUser} = useSelector(state=>state.user);
  return(
    <div>
       {currentUser ? <Outlet/> : <Navigate to="/signin"/>}
    </div>
  );
}
