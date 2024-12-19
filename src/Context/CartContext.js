import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../Reducers/CartReducers";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}