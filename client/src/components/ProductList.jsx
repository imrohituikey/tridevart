import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const handleFetch = async () => {
    try {
      const res = await fetch("/api/product/getproduct");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="flex bg-white flex-col flex-grow rounded-md gap-2 font-normal p-4">
      {
        products.map((item,index)=>(
          <div className="flex flex-col w-full h-fit  bg-slate-300 p-4 rounded-lg gap-3" key={index}>
            <h1>Name : {item.name}</h1>
            <p>Price : {item.price}</p>
            <p>Description : {item.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default ProductList;
