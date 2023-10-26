function FunctionReducer(state,action) {
    switch(action.type){
        case "LOADING":
            return{
                ...state,loading:true,
            }
        case "FETCH":
            let filterData= action.payload.filter((data)=>{
                // console.log("hhhh",data);
                return data.featured===true;
            })
            return{
                ...state,
                all_product:[...action.payload],
                product:[...action.payload],
                feature_product:[...filterData],
                loading:false,
            }
        case "ERROR":
            return {...state,
                loading:false,
                error:action.payload
            }
        case "SINGLE_LOADING":
            return{
                ...state,
                singleLoading:true,
            }
        case "SINGLE_FETCH":
            // console.log("hello m case single fecth",action.payload);
            return{
                ...state,
                singleLoading:false,
                singleData:action.payload,
            }
        case "SINGLE_ERROR":
            return {
                ...state,
                singleLoading:false,
                singleError:false,
            }
        default:
            return state;

    }
 
}

export default FunctionReducer
