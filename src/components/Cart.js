import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import cravingImage from '../assests/media/cravings.jpg'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { state, totalPrice } = useContext(CartContext)

    return(
        <div className='mx-[20%] my-4'>

         <div className='flex justify-between items-baseline border-b-2 border-gray-400 pb-2'>

         <p className='text-4xl font-semibold text-orange-500'>Your Orders</p>
         { state.cart.length >= 1 &&  <>
         <p className='text-lg font-medium'>Total Items: {state.cart.length} </p>
         <p className='text-lg font-medium'>Total Price: ₹ {totalPrice}</p> 
         </>  }

         </div>

        {state.cart.length <= 0 ?
        <div className='relative' >
         <img src={cravingImage} alt='cravingImage' />
         <p className='text-sm md:text-3xl absolute top-14 left-0 p-1 md:top-52 md:left-14 my-12 md:p-2 rounded-2xl shadow-xl text-red-600 bg-yellow-100 font-bold'>
            Craving something Delicious ?? <Link className='underline text-green-600' to="/">Order Now</Link> </p>
        </div>  :
        
        state.cart.map((item) => 
          <MenuItems item={item} key={item?.card?.info?.id} />)

        }

        </div>
    )
}