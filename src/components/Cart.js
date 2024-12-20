import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { MenuItems } from './MenuItems'

export const Cart = () => {

    const { state, totalPrice } = useContext(CartContext)

    return(
        <div className='mx-[20%] my-10'>

         <div className='flex justify-between items-baseline'>
         <p className='text-3xl font-semibold text-orange-500'>Your Orders</p>
         <p className='text-lg font-medium'>Total Items: {state.cart.length} </p>
         <p className='text-lg font-medium'>Total Price: ₹ {totalPrice}</p>
         </div>

        { state.cart.map((item) => 
          <MenuItems item={item} key={item?.card?.info?.id} />
        )}

        </div>
    )
}