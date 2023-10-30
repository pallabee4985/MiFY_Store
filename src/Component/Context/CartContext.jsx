import React,{useContext,useEffect,useReducer, createContext, Children} from 'react'
import reducer from "../Reducer/CartReducer"

let CartContext=createContext()

function CartContext({children}) {
    function getItem()
    {
        let newData=localStorage.getItem("ecom")?JSON.parse(localStorage.getItem("ecom")):[]
        return newData
    }
    let initialState={
        cart:getItem(),
        total_item:'',
        total_amount:'',
        shipping_fee:500
    }
    let[state,dispatch]=useReducer(reducer,initialState)

    function setAddToCartHandler(product,quantity,color){
        dispatch({type:"ADD_TO_CART",payload:(product,quantity,color)})
    }
    //for delete 
    function deleteHandler(id){
        dispatch({type:"DELETE_FROM_CART",payload:id})
    }
    function clearAllCartHandler(){
        dispatch({type:"CLEAR_ALL"})
    }
    function incHandler(id){
        dispatch({type:"INC_HANDLER",payload:id})
    }
    function decHandler(id){
        dispatch({type:"DEC_HANDLER",payload:id})
    }

    useEffect(()=>{
        dispatch({type:"TOTAL_AMOUNT"})
        dispatch({type:"TOTAL_ITEM"})
        localStorage.SetItem("ecom",JSON.stringify(state.cart))
    },[state.cart])

    return <CartContext.provider value={{...state,setAddToCartHandler,deleteHandler,clearAllCartHandler,
                                    incHandler,decHandler}}>
                                        {children}
            </CartContext.provider>
}
const useCart=()=>{
    return useContext(CartContext)
}
export default {CartContext,useCart}
