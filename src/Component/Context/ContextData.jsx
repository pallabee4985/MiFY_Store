import React,{createContext, useReducer,useContext} from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import reducer from '../Reducer/FunctionReducer';

export let productProvider=createContext();

function ContextData({children}) {
  let initialState={
    loading:false,
    product:[],
    feature_Product:[],
    error:"",
    singleData:{},
    singleLoading:false,
    singleError:'',
    all_product:[]
  }
  let [state,dispatch]=useReducer(reducer,initialState)

  //fatching data
  //   api with images(landscapes)....https://api.escuelajs.co/api/v1/products  
  //  api with images().....
  let url="https://api.pujakaitem.com/api/products"
  // let url="https://fakestoreapi.com/products/1"
  async function fetchData()
  {
  
    try{
      dispatch({type:"LOADING"})
      let res=await axios.get(url)
      let data=await res.data;
      // console.log("inside fetch",data);
      dispatch({type:"FETCH",payload:data})
    }
  
  catch(err){
    dispatch({type:"ERROR",payload:err})
  }
  }


  //single page data
  async function singleFetch(url){
    dispatch({type:"SINGLE_LOADING"})
    try{
      let res=await axios.get(url)
      let data=await res.data;
      // console.log("singleFetch data",data);
      dispatch({type:"SINGLE_FETCH",payload:data})
    }
    catch(err){
      dispatch({type:"SINGLE_ERROR"})
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <productProvider.Provider value={{...state,singleFetch}} >
      {children}
    </productProvider.Provider>
  )
}
//custom hook
let useProduct=()=>{
  return useContext(productProvider)
}

export  {ContextData,useProduct}
