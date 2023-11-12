import React from 'react'
import { FooterBanner,HeroBanner,Products, Fetchproduct } from '../components'
const Home = () => {
  return (
    <div className='flex flex-col w-full h-full py-4 gap-6'>
      <Fetchproduct/>
      <HeroBanner/>
      <Products/>
      <FooterBanner/>
    </div>
  )
}

export default Home