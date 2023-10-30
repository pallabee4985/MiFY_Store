function CartReducer(state,action) {
  switch(action.type){
    case "ADD_TO_CART":
        let{color,quantity,product:{id,name,price,stock}}=action.payload
        let findItem=state.cart.find((item)=>{
          return item.id===id+color;
        });
        if(findItem){
          let newCart=state.cart.map((data)=>{
            if(data.id===id+ color){
              let newAmount=data.quantity+quantity;
              return {...data,quantity:newAmount}
            }
            else{
              return {...data}
            }})
            return {...state,cart:newCart}
        }
        else{
          let cartItem={
            id:id+color,
            color,
            quantity,
            name,
            image:image[0].url,
            price,
            stock
          }
          return{
            ...state,
            cart:[...state.cart,cartItem]
          }
        }
    case "DELETE_FROM_CART":
      let temp=[...state.cart]
      let filterData=temp.filter((data)=>{
        return data.id !== action.payload;
      })
      return{
        ...state,
        cart:filterData
      }
    case "TOTAL_AMOUNT":
      let allPrice=state.cart.reduce((acc,item)=>{
        return acc+item.price
      },0)
      return {
        ...state,
        total_amount:allPrice
      }
    case "TOTAL_ITEM":
      let newItemCount=state.cart.reduce((acc,item)=>{
        return acc+item.quantity
      },0)
      return {
        ...state,
        total_item:newItemCount
      }
    case "CLEAR_ALL":
      return {
        ...state,
        cart:[]
      }
    case "INC_HANDLER":
      return {...state}
    case "DEC_HANDLER":
      return {...state}
    default:
      return state;
  }
}

export default CartReducer
