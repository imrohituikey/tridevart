import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="flex flex-col h-[200px] sm:h-full sm:w-full bg-[url('/bannerimg.jpg')] m-4 bg-no-repeat bg-cover rounded-2xl items-center justify-center">
      <div className="sm:flex sm:justify-between sm:py-28 px-12">
        <div className="hidden sm:flex flex-col gap-6">
          <div className="flex flex-col px-2 gap-4 text-white font-bold">
            <p className="text-2xl">Being Artstic...</p>
            <h3 className="sm:text-6xl font-sans font-semibold">Summer Sale</h3>
          </div>
          <h1 className="text-white sm:text-8xl font-bold uppercase ">Amazing</h1>
          {/* <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image'/> */}
          <Link>
            <button className="p-2 bg-[#F02D34] text-white font-semibold rounded-lg">Shop Now</button>
          </Link>
        </div>
        <Link className="my-auto bg-red-600 text-white font-semibold uppercase px-4 py-2 rounded-md">Shop</Link>
        <div className="hidden text-white">
          <h5>Description</h5>
          <p>Best Headphones on the market</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
