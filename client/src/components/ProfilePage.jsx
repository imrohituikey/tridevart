import React from 'react'
import {useSelector} from 'react-redux'

const ProfilePage = () => {
  const {currentUser} = useSelector(state=>state.user);
  return (
    <div className="flex flex-col flex-grow rounded-md gap-2 text-black font-normal">
      <div className='bg-[#ffffff] p-5 flex flex-col gap-8'>
        <div className='flex gap-6 items-center'>
          <h2>Name</h2>
          <span>{currentUser.username}</span>
        </div>
        <div className='flex gap-6 items-center'>
          <h2>Email</h2>
          <span>{currentUser.email}</span>
        </div>
        <div className='flex gap-6 items-center'>
          <h2>Role</h2>
         <span>Demo Role</span>
        </div>
        <div className='flex gap-6 items-center'>
          <h2>Password</h2>
          <span>Demo Password</span>
        </div>
      </div>
      <div className='bg-[#ffffff] p-5'>Google</div>
    </div>
  )
}

export default ProfilePage