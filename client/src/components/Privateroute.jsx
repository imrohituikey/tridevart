import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Profile } from '../pages';

export default function Privateroute() {
  const {currentUser} = useSelector(state=>state.user);
  return currentUser ? <Outlet/> : <Navigate to="/signin"/>;
}
