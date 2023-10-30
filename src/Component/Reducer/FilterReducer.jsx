function FilterReducer(state,action) {
  // console.log("inside filter-reducer-St Ac",state,action);
  switch (action.type) {
    case "LOAD_FILTER_DATA":
      let value=action.payload.map((data)=>{
        return data.price
      })
      let initialPrice=math.max(...value)
      return{
        ...state,
        filterData:[...action.payload],
        allData:[...action.payload],
        filter:{
          ...state.filter,
          price:initialPrice,
          maxPrice:initialPrice
        }
      }
    case "GRID_VIEW":
      return{...state,grid_View:true}
    case "LIST_VIEW":
      return{...state,grid_View:false}
    case "SORT_VALUE":
      return {...state,sorting:action.payload}
    case "SORTING_DATA":
      let temp=[...state.filterData]
      let newData;
      let sorting=(a,b)=>{
        if(state.sorting==="lowest"){
          return a.price-b.price
        }
        if(state.sorting==="highest"){
          return b.price-a.price
        }
        if(state.sorting==="A_Z"){
          return a.name.localeCompare(b.name);
        }
        if(state.sorting==="Z_A"){
          return b.name.localeCompare(a.name);
        }
      }
      newData=temp.sort(sorting)
      return {...state,filterData:newData}
    case "SET_FILTER_VALUE":
      return {
        ...state,
        filter:{...state.filter,
          [action.payload.name]:action.payload.value
        }
      }
    case "FILTER_PRODUCT":
      let tempProduct=[...state.allData];
      if(state.filter.text){
        tempProduct=tempProduct.filter((data)=>{
          if(data.catagory===state.filter.catagory){
            return data
          }elseif(state.filter.catagory==="ALL")
          {return data;}
        })
      }
      if(state.filter.company){
        tempProduct=tempProduct.filter((data)=>{
          if(data.company===state.filter.company){
            return data
          }elseif(state.filter.company==="ALL")
          {return data;}
        })
      }
      if(state.filter.color){
        tempProduct=tempProduct.filter((data)=>{
          if(data.colors===state.filter.color){
            return data
          }elseif(state.filter.color==="ALL")
          {return data;}
        })
      }
      if(state.filter.price){
        tempProduct=tempProduct.filter((data)=>{
          return data.price<state.filter.price
        })
      }
      return {
        ...state,
        filterData:tempProduct,
      }
    case "CLEAR_ALL_FILTER":
      let value1=state.allData.map((data)=>{
        return data.price;
      })
      let initialPrice1=Math.max(...value1);
        return {
          ...state,
          filter:{
            text:"",
            catagory:"All",
            company:"All",
            color:"All",
            price:initialPrice1,
            minPrice:0,
            maxPrice:initialPrice1
          }
        }
    default:
      return state;
  }
}

export default FilterReducer
