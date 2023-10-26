function FilterReducer(state,action) {
  // console.log("inside filter-reducer-St Ac",state,action);
  switch (action.type) {
    case "LOAD_FILTER_DATA":
      return{
        ...state,
        filterData:[...action.payload],
        allData:[...action.payload]
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
          return a.name.localeCompare(b.name)
        }
        if(state.sorting==="Z_A"){
          return b.name.localeCompare(a.name)
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
    default:
      return state;
  }
}

export default FilterReducer
