import React from 'react'

function CartReducer(state,action) {
  switch(action.type){
    case "ADDTOCART":
        let{color,quantity,product:{id,name,price}}=action.payload
        let cartItem={id:id+color,color,quantity,name,image:image[0]}
  }
}

export default CartReducer
