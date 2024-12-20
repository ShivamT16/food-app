import { CLOUDINARY_URL } from '../utils/constants'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const MenuItems = ({ item }) => {

    const { state, dispatch } = useContext(CartContext)
    
    return(
        <div className='mx-4 py-6 flex justify-between border-b border-gray-200'>
              
              <div className='w-2/3'>
                <p> {item?.card?.info?.itemAttribute?.vegClassifier ==="VEG" ? "🟩" : "🟥"} </p>
                <p className='text-slate-600 font-semibold' > {item?.card?.info?.name} </p>
                <p className='font-semibold' > ₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.finalPrice / 100 || item?.card?.info?.price / 100 } </p>
                <p className='text-green-800 font-semibold'> {item?.card?.info?.ratings?.aggregatedRating?.rating } 
                <span className='text-slate-600' > 
                  {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 && (`(${item.card.info.ratings.aggregatedRating.ratingCountV2})`)} </span> </p>
                <p className='text-slate-600'> {item?.card?.info?.description} </p>
              </div> 

              <div className='w-36 h-32 rounded overflow-hidden relative'>
                <img className='object-cover w-full h-full' src={CLOUDINARY_URL + item?.card?.info?.imageId } alt="menuImg" />

                {state.cart.find((cuisine) => cuisine?.card?.info?.id === item?.card?.info?.id) ?

                 <div className='flex gap-0.5 absolute bottom-1 left-8'>

                 {state.cart.find((cuisine) => cuisine?.card?.info?.id === item?.card?.info?.id).quantity === 1 ?
                 <button className='bg-white border border-gray-400 text-green-600 px-2 font-bold rounded' onClick={() => dispatch({type:"REMOVE_FROM_CART", payload: item})}> - </button> :
                 <button className='bg-white border border-gray-400 text-green-600 px-2 font-bold rounded' onClick={() => dispatch({type:"DECREASE_QUANTITY", payload: item})}> - </button> }

                 <p className='bg-white border border-gray-400 text-green-600 px-2 font-bold rounded'> 
                 {state.cart.find((cuisine) => cuisine?.card?.info?.id === item?.card?.info?.id).quantity} </p>

                 <button disabled={state.cart.find((cuisine) => cuisine?.card?.info?.id === item?.card?.info?.id)?.quantity === 10 ? true: false} className='bg-white border border-gray-400 text-green-600 px-2 font-bold rounded' onClick={() => dispatch({type:"INCREASE_QUANTITY", payload: item})}> + </button>
                 </div> :
                
                <button className='absolute bottom-1 left-8 bg-white border border-gray-400 text-green-600 px-6 font-bold py-0.5 rounded' onClick={() => dispatch({type:"ADD_TO_CART", payload: item})}> ADD </button> }
                
              </div>

            </div> 
    )
}