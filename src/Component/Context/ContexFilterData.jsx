import React,{ createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../Reducer/FilterReducer';
import { useProduct } from './ContextData';

let filteredProductProvider=createContext();

function ContexFilterData({children}) {
      let {product}=useProduct()
      let initialState={
            filterData:[],
            allData:[],
            grid_View:"true",
            sorting:"lowest",
            filter:{
              text:"",
              catagory:"All",
              company:"All",
              color:"All"
            }
          }
    
    let [state,dispatch]=useReducer(reducer,initialState)

    function gridview(){
      return dispatch({type:"GRID_VIEW"})
    }
    function listview(){
      return dispatch({type:"LIST_VIEW"})
    }
    function sortingHandler(e){
      // console.log("sorting context:",e.target.value);
      return dispatch({type:"SORT_VALUE",payload:e.target.value})
    }
    function setFilterValue(e){
      let {name,value}=e.target
      dispatch({type:"SET_FILTER_VALUE",payload:(name,value)})
    }
    
    //use-effect for sorting AND filter in product page
    useEffect(()=>{
      //SORTING
      dispatch({type:"SORTING_DATA"})
      //FILTER
      dispatch({type:"FILTER_PRODUCT"})
    },[state.sorting,state.filter])


    useEffect(()=>{
      dispatch({type:"LOAD_FILTER_DATA",payload:product})
    },[product])
    
  return (
    <filteredProductProvider.Provider value={{...state,gridview,listview,sortingHandler,setFilterValue }}>
      {children}
    </filteredProductProvider.Provider>
  )
}
//custom hook for filter section
let useFilter=()=>{
    return useContext(filteredProductProvider)
}

export{ContexFilterData,useFilter}
