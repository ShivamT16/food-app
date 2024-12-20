import { useParams } from 'react-router-dom'
import { useRestaurantMenu } from '../utils/useRestaurantMenu'
import { CLOUDINARY_URL } from '../utils/constants'
import { ShimmerMenu } from '../utils/Shimmer'
import { useState } from 'react'
import { MenuItems } from './MenuItems'

export const RestaurantMenu = () => {
    const {restroId} = useParams()
    const restaurantMenu = useRestaurantMenu(restroId)
    const [accordian, setAccordian] = useState({
      title: 'Recommended',
      state: true
    })

    const handleAccordian = (menuTitle) => {
      setAccordian({
        title: menuTitle === accordian.title ? '' : menuTitle,
        state: menuTitle === accordian.title ? !accordian.state : true
      }) }

    const menuCategory = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category) => category?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

  return ( 
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards === undefined ? <ShimmerMenu /> :

    <div className='mx-[18%]'>
  
        <p className='text-2xl font-bold'> { restaurantMenu?.cards[0]?.card?.card?.text } </p>

        <div className='border-2 p-4 my-4 rounded-xl shadow-2xl font-medium leading-8' >
          <p className='text-lg'> {restaurantMenu?.cards[2]?.card?.card?.info?.avgRating} ({restaurantMenu?.cards[2]?.card?.card?.info?.totalRatingsString}) : {restaurantMenu?.cards[2]?.card?.card?.info?.costForTwoMessage} </p>
          <p className='text-orange-600 underline cursor-pointer'> {restaurantMenu?.cards[2]?.card?.card?.info?.cuisines.join(", ")} </p>
          <p> {restaurantMenu?.cards[2]?.card?.card?.info?.sla?.slaString} </p>
        </div>

        { menuCategory.map((item) => 
        
          <div key={item?.card?.card?.title} className='bg-gray-50 shadow-2xl'>

           <div className='flex justify-between py-2 px-4 my-4 cursor-pointer' onClick={() => handleAccordian(item.card.card.title)}>
             <p className='text-lg font-bold'> 
              {item?.card?.card?.title} ({item?.card?.card?.itemCards.length}) </p>
             <p> {accordian.title === item.card.card.title ? '🔼' : '🔽' } </p>
           </div>

           <div>
           { (accordian.title === item.card.card.title && accordian.state)  && 
           item?.card?.card?.itemCards?.map((item) => 
            <MenuItems item={item} key={item?.card?.info?.id} />
            ) 
           }
           </div> 
          </div> 
          )
        }

        <div className='p-4 py-10 mt-10 bg-gray-200'>
          {
            restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category) => category?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo').map((item)=>
            <div key={item?.card?.card?.imageId} className='flex gap-4 items-center mb-4' >
              <img className='w-16' src={CLOUDINARY_URL + item?.card?.card?.imageId } alt="menuImg" />
              <p className='text-sm text-gray-400'> {item?.card?.card?.text} </p>
            </div>)
          }

          {
            restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category) => category?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress').map((item) => 
            <div key={item?.card?.card?.name} className='border-gray-400 border-b border-t py-6'>
              <p className='font-bold text-gray-400'> {item?.card?.card?.name} </p>
              <p className='text-sm text-gray-400'> (Outlet:{item?.card?.card?.area}) </p>
              <p className='mt-2 text-sm text-gray-400'>📌{item?.card?.card?.completeAddress} </p>
            </div>)
          }
        </div>

    </div>
  ) }