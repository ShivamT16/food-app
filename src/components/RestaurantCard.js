import { useEffect, useState } from "react";
import {ON_MIND_URL, CLOUDINARY_URL} from "../utils/constants"

const RestaurantCard = () => {
    const [ restaurantCard, setRestaurantCard ] = useState([]) 

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        // console.log(json.data.cards)
        setRestaurantCard(json.data.cards)
    } 

    // console.log(restaurantCard[0]?.card?.card?.header.title)

    return(
        <div>

        <div>  
        {
         <h1> {restaurantCard[0]?.card?.card?.header?.title} </h1> 
        }
        {
         restaurantCard[0]?.card?.card?.imageGridCards?.info?.map((imgIcon) => 
            <div key={imgIcon.id} style={{ display: "inline-flex", flexWrap: "wrap"}}>
             <img style={{height: "10rem", display: "inline-flex", flexWrap: "wrap"}} src={ON_MIND_URL + imgIcon.imageId} />
            </div>
         )
        }
        </div>

        <div>
        {
         <h1> {restaurantCard[1]?.card?.card?.header?.title} </h1> 
        }
         <div style={{ display: "inline-flex", flexWrap: "wrap"}}>
        {
         restaurantCard[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurants) => 
            <div key={restaurants.info.id} >
             <img style={{height: "10rem"}} src={CLOUDINARY_URL + restaurants.info.cloudinaryImageId } />
             <h3>{restaurants.info.name} </h3>
             <h4> {restaurants.info.avgRating} {restaurants.info.sla.slaString} </h4>
             <p> {restaurants.info.cuisines.join(", ")} </p>
             <p> {restaurants.info.areaName} </p>
            </div>
         )
        }
         </div>
        </div>

        <div>
        {
         <h1> {restaurantCard[2]?.card?.card?.title} </h1> 
        }
         <div style={{ display: "inline-flex", flexWrap: "wrap"}}>
        {
         restaurantCard[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurants) => 
            <div key={restaurants.info.id} >
             <img style={{height: "10rem"}} src={CLOUDINARY_URL + restaurants.info.cloudinaryImageId } />
             <h3>{restaurants.info.name} </h3>
             <h4> {restaurants.info.avgRating} {restaurants.info.sla.slaString} </h4>
             {/* <p> {restaurants.info.cuisines.join(", ")} </p> */}
             <p> {restaurants.info.areaName} </p>
            </div>
         )
        }
         </div>
        </div>

        <div>
        {
         <h1> {restaurantCard[6]?.card?.card?.title} </h1> 
        }
         <div style={{ display: "inline-flex", flexWrap: "wrap"}}>
        {
         restaurantCard[6]?.card?.card?.brands?.map((restro) => 
            <div style={{border: "2px solid black", borderRadius: ".5rem",padding: ".5rem", margin: ".3rem"}}>
             {restro.text}
            </div>
         )
        }
         </div>
        </div>

        <div>
        {
         <h1> {restaurantCard[7]?.card?.card?.title} </h1> 
        }
         <div style={{ display: "inline-flex", flexWrap: "wrap"}}>
        {
         restaurantCard[7]?.card?.card?.brands?.map((restro) => 
            <div style={{border: "2px solid black", borderRadius: ".5rem",padding: ".5rem", margin: ".3rem"}}>
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