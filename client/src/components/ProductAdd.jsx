import React, { useState } from "react";
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage';
import {app} from '../firebase';

const ProductAdd = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleImageSubmit = (e)=>{
    if(files.length > 0 && files.length + formData.imageUrls.length <7 ){
      const promises =[];;
      for(let i =0; i<files.length; i++){
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises).then((urls)=>{
        setFormData({
          ...formData,
          imageUrls : formData.imageUrls.concat(urls),
        });
      }).catch((error)=>{console.log(error)})
    }else{
      console.log('upload error')
    }
  };
  const storeImage = async (file) =>{
    return new Promise((resolve, reject)=>{
      const storage = getStorage(app);
      const fileName = new Date().getTime()+file.name;
      const storageRef = ref(storage,fileName);
      const uploadTask = uploadBytesResumable(storageRef,file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error)=>{reject(error);},
        ()=>{getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{resolve(downloadURL)})},
      )
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/product/createproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setFormData({
        imageUrls: [],
        name: '',
        price: '',
        description: '',
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="flex flex-col flex-grow rounded-md gap-4 bg-white font-normal w-full p-5 h-full text-center">
      <div className="flex flex-col w-full gap-8">
        <h1 className="text-3xl font-semibold font-sans">Add Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="">Product name</label>
            <input
              id="name"
              className="contactinput"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Product price</label>
            <input
              id="price"
              className="contactinput"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Select image</label>
            <input
              type="file"
              multiple
              onChange={(e) => {
                setFiles(e.target.files);
              }}
            />
            <div>
              {
                formData.imageUrls.map((url,index)=>(
                  <div key={index}>
                    <img src={url} alt="img" className="w-48"/>
                    <button>Delete</button>
                  </div>
                ))
              }
            </div>
            <button
              type="button"
              onClick={handleImageSubmit}
              className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              Upload
            </button>
          </div>
          <div>
            <label htmlFor="">Product description</label>
            <textarea id="description" type="text" onChange={handleChange} />
          </div>
          <button className="bg-[#007BFF] text-white outline-[#007BFF] px-6 py-2 font-semibold rounded-md">
            Create post
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;
