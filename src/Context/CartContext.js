import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../Reducers/CartReducers";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const totalPrice = state.cart.reduce((acc, curr) => acc += (curr?.card?.info?.defaultPrice || curr?.card?.info?.finalPrice || curr?.card?.info?.price) * curr.quantity ,0) /100

    return(
        <CartContext.Provider value={{state, dispatch, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}