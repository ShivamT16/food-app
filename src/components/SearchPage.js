import { useContext } from "react"
import searchFood from "../assests/media/searchFood.jpg"
import { CuisineContext } from "../Context/CuisineContext"
import { CLOUDINARY_URL} from "../utils/constants"
import { Link } from "react-router-dom"

export const SearchPage = () => {
    const { restaurantCard, search } = useContext(CuisineContext)
    return(
        <div className="mx-[22%] flex flex-wrap gap-4 my-4">
        
        {
            restaurantCard[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.filter((restaurant) => restaurant.info.name.toLowerCase().includes(search.toLowerCase())).map((restaurants) =>
            <Link to={`/restaurant/${restaurants.info.id}`} key={restaurants.info.id} className="shrink-0 m-4" >
             <div className='w-[13rem] h-[9rem] rounded-xl overflow-hidden relative' >
               <img alt="onlineFood" className="object-cover w-full h-full" src={CLOUDINARY_URL + restaurants.info.cloudinaryImageId } />
             </div>
             <p className="text-xl font-medium w-[12rem] whitespace-nowrap overflow-hidden text-ellipsis">{restaurants.info.name} </p>
             <p className="text-base font-medium"> {restaurants.info.avgRating} {restaurants.info.sla.slaString} </p>
             <p className="w-[12rem] whitespace-nowrap overflow-hidden text-ellipsis"> {restaurants.info.cuisines.join(", ")} </p>
             <p> {restaurants.info.areaName} </p>
            </Link>
        ) }
            <img src={searchFood} alt="searchFood" />
        </div>
    )
}