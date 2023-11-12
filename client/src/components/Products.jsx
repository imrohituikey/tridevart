import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';

const Products = () => {
    const [products,setProduct] = useState([]);

    const handleProductFetch =async ()=>{
        const res = await fetch('/api/product/getproduct');
        const data = await res.json();
        setProduct(data);
    }
    useEffect(()=>{
        handleProductFetch();
    });
    
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-4xl font-sans font-bold">Best Selling Products</h1>
        <p>Art is the way of Expressing</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 rounded-md m-6">
        {
            products.map((item,index)=>(
                <div className="flex flex-col bg-white rounded-md w-[350px] gap-2" key={index}>
                <img src={item.imageUrls[0]} className="h-[300px] sm:h-[400px] overflow-hidden rounded-md" alt="image" />
               <div className="p-2">
                 <h1 className="font-semibold ">{item.name}</h1>
                <h1 className="text-black">Rs {item.price}</h1>
                <Link className="bg-red-600 px-6 py-2 rounded-md text-white font-sans font-semibold w-[30%] text-center">Buy</Link>
               </div>
              </div>
            ))
        }       
      </div>
    </div>
  );
};

export default Products;
