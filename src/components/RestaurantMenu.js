import { useParams } from 'react-router-dom'
import { useRestaurantMenu } from '../utils/useRestaurantMenu'
import { CLOUDINARY_URL } from '../utils/constants'

export const RestaurantMenu = () => {
    const {restroId} = useParams()
    const restaurantMenu = useRestaurantMenu(restroId)

    console.log(restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)

  return (
    <div className='mx-[14rem]'>
        <p className='text-2xl font-bold'> { restaurantMenu?.cards[0]?.card?.card?.text } </p>

        { restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => 
            <div className='mx-4 my-0 py-8 flex justify-between border-b border-gray-400'>
              
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
              </div>

            </div> ) 
        }

    </div>
  ) }