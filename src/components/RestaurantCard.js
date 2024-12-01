import { useContext, useState } from "react";
import {ON_MIND_URL, CLOUDINARY_URL} from "../utils/constants"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { CuisineContext } from "../Context/CuisineContext";

const RestaurantCard = () => {
    const [ slide, setSlide] = useState(0)
    const { restaurantCard, setCuisineId } = useContext(CuisineContext);

    const handleNext = () => {
      setSlide(slide + 3)
    }
    const handlePrevious = () => {
      setSlide(slide - 3)
    }

    return(
        <div>

        <div className="mx-[15%]">  
        <div className="flex justify-between items-center">
        <p className="text-[2rem] py-2 font-semibold"> {restaurantCard[0]?.card?.card?.header?.title} </p> 
        <div className="flex gap-4 justify-around">
          <ArrowBackIcon fontSize="large" onClick={handlePrevious} className="bg-gray-200 p-1 rounded-3xl cursor-pointer"/>
          <ArrowForwardIcon fontSize="large" onClick={handleNext} className="bg-gray-200 p-1 rounded-3xl cursor-pointer"/>
        </div>
        </div>

        <div className="flex gap-4 overflow-hidden">
        {
         restaurantCard[0]?.card?.card?.imageGridCards?.info?.map((imgIcon) => 
            <Link to={`/cuisine/${imgIcon.action.text}`} onClick={() => setCuisineId(imgIcon.id)} className="shrink-0" style={{transform: `translateX(-${slide *100}%)`, transitionDuration: "1s" }} key={imgIcon} >
             <img className="w-[9rem] h-[10rem]" alt="whats on mind" src={ON_MIND_URL + imgIcon.imageId} />
             {/* {imgIcon.id} */}
            </Link>
         )
        }
        </div>
        </div>

        <p className="border-b-2 my-10 mx-[15%]" ></p>

        <div className="mx-[15%]">
        <div className="flex justify-between items-center">
         <p className="text-[2rem] py-2 font-semibold"> {restaurantCard[1]?.card?.card?.header?.title} </p> 
         <div className="flex gap-4 justify-around">
         <ArrowBackIcon fontSize="large" className="bg-[lightgray] p-1 rounded-3xl cursor-pointer"/>
         <ArrowForwardIcon fontSize="large" className="bg-[lightgray] p-1 rounded-3xl cursor-pointer"/>
         </div>
        </div>

        <div className="flex gap-6 overflow-hidden leading-[1.5rem]">
        {
         restaurantCard[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurants) => 
            <Link to={`/restaurant/${restaurants.info.id}`} key={restaurants.info.id} className="shrink-0" style={{ transform: `translate(-00%)`, transitionDuration: "2s"}} >
             <div className='w-[15rem] h-[10rem] rounded-xl overflow-hidden relative'>
              <img alt="topRestro" className="object-cover w-full h-full" src={CLOUDINARY_URL + restaurants.info.cloudinaryImageId } />
             </div>
             <p className="text-xl font-medium">{restaurants.info.name} </p>
             <p className="text-base font-medium"> {restaurants.info.avgRating} {restaurants.info.sla.slaString} </p>
             <p className="w-[14rem] whitespace-nowrap overflow-hidden text-ellipsis"> {restaurants.info.cuisines.join(", ")} </p>
             <p> {restaurants.info.areaName} </p>
            </Link>
         )
        }
         </div>
        </div>

        <div className="mx-[15%]">
        {
         <p className="text-[2rem] py-3 font-semibold"> {restaurantCard[2]?.card?.card?.title} </p> 
        }
         <div className="flex flex-wrap gap-2">
        {
         restaurantCard[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurants) => 
            <Link to={`/restaurant/${restaurants.info.id}`} key={restaurants.info.id} className="shrink-0 mx-2" >
             <div className='w-[13rem] h-[9rem] rounded-xl overflow-hidden relative' >
              <img alt="onlineFood" className="object-cover w-full h-full" src={CLOUDINARY_URL + restaurants.info.cloudinaryImageId } />
             </div>
             <p className="text-xl font-medium w-[12rem] whitespace-nowrap overflow-hidden text-ellipsis">{restaurants.info.name} </p>
             <p className="text-base font-medium"> {restaurants.info.avgRating} {restaurants.info.sla.slaString} </p>
             <p className="w-[12rem] whitespace-nowrap overflow-hidden text-ellipsis"> {restaurants.info.cuisines.join(", ")} </p>
             <p> {restaurants.info.areaName} </p>
            </Link>
         )
        }
         </div>
        </div>

        <div className="mx-[9%] my-2">
        {
         <p className="text-[2rem] py-2 font-semibold"> {restaurantCard[6]?.card?.card?.title} </p>
        }
         <div className="flex flex-wrap gap-3 text-center" >
        {
         restaurantCard[6]?.card?.card?.brands?.map((restro) => 
            <div className="border border-gray-200 font-medium rounded-md m-1 p-2 w-64 overflow-hidden whitespace-nowrap text-ellipsis">
             {restro.text}
            </div>
         )
        }
         </div>
        </div>

        <div className="mx-[9%] my-2">
        {
         <p className="text-[2rem] py-2 font-semibold"> {restaurantCard[7]?.card?.card?.title} </p> 
        }
         <div className="flex flex-wrap gap-3 text-center">
        {
         restaurantCard[7]?.card?.card?.brands?.map((restro) => 
            <div className="border border-gray-200 font-medium rounded-md m-1 p-2 w-64 overflow-hidden whitespace-nowrap text-ellipsis">
             {restro.text}
            </div>
         )
        }
         </div>
        </div>

        </div>
    )
}

export default RestaurantCard;