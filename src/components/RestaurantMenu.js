import { useParams } from 'react-router-dom'
import { useRestaurantMenu } from '../utils/useRestaurantMenu'

export const RestaurantMenu = () => {
    const {restroId} = useParams()

    const restaurantMenu = useRestaurantMenu(restroId)

    // console.log(restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards);

  return (
    <div>
        <p className='text-2xl font-semibold'> { restaurantMenu?.cards[0]?.card?.card?.text } </p>

        {
            restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => 
            <div>
                {item?.card?.info?.name}
            </div> )
        }

        {
            
        }
    </div>
  )
}