import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux';
import {productFetchSuccess} from '../redux/product/productSlice.js';


const Fetchproduct = () => {
    const dispatch = useDispatch();
    const handleProductFetch =async ()=>{
        const res = await fetch('/api/product/getproduct');
        const data = await res.json();
        dispatch(productFetchSuccess(data));
        console.log(data);
    }
    useEffect(()=>{
        return ()=> handleProductFetch();
    },[])
  return;
}

export default Fetchproduct