import React from "react";
import {Link} from 'react-router-dom'

const contactdata = [
  {
    name: "Gmail",
    icon: "gmail.png",
    data: "Rohit.dev81@gmail.com",
  },
  {
    name: "Location",
    icon: "location.png",
    data: "Bhopal Madhya Pradesh India",
  },
  {
    name: "Phone",
    icon: "mobile.png",
    data: "+91 8959403677",
  },
];

const Contact = () => {
  return (
    <div
      className="xl:p-6 text-center"
    >
      <div className="flex flex-col gap-8 xl:gap-6 items-center w-full h-full">
        <div className="flex flex-col xl:flex-row gap-3 w-full justify-center px-6 text-black">
          {contactdata.map((contact,index) => (
            <div
              key={index}
              className="link transition delay-100 ease-in-out flex flex-col items-center justify-center font-semibold font-sans text-sm bg-[#ffffff] rounded-md xl:h-[12rem] xl:w-[24rem] gap-2 text-center"
            >
              <img
                src={`${contact.icon}`}
                width={20}
                height={20}
                alt="image"
                
              />
              <h3>{contact.name}</h3>
              <p className="hover:text-black">{contact.data}</p>
            </div>
          ))}
        </div>
        <div className=" flex flex-col gap-2  w-full text-center items-center">
          <h1 className="text-2xl xl:text-4xl font-semibold">
            <span className="text-accent">let&apos;s </span>Connect
          </h1>
          <form className="z-10 flex flex-col gap-6 xl:w-[60%] p-3 xl:p-8 rounded-md">
            <div className="flex gap-4 xl:gap-6">
              <input type="text" placeholder="Your Name" className="contactinput" />
              <input type="email" placeholder="Your Email" className="contactinput" />
            </div>
            <input type="text" placeholder="Subject" className="contactinput" />
            <textarea
              type="message"
              placeholder="Your message..."
              className="textarea"
            />
          </form>
          <button className="link px-4 py-1 xl:px-8 xl:py-2 bg-orange-400 text-black rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
