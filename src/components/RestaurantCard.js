import { useEffect, useState } from "react";
import {ON_MIND_URL, CLOUDINARY_URL} from "../utils/constants"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RestaurantCard = () => {
    const [ restaurantCard, setRestaurantCard ] = useState([]) 
    const [ slide, setSlide] = useState(0)

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

    const handleNext = () => {
      setSlide(slide + 3)
    }
    const handlePrevious = () => {
      setSlide(slide - 3)
    }

    return(
        <div>

        <div>  
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1> {restaurantCard[0]?.card?.card?.header?.title} </h1> 
        <div style={{display: "flex", gap: "1rem", justifyContent: "space-around" }}>
          <ArrowBackIcon onClick={handlePrevious} style={{ cursor: "pointer", backgroundColor: "lightgrey", padding: ".2rem", borderRadius: "2rem"}}/>
          <ArrowForwardIcon onClick={handleNext} style={{ cursor: "pointer", backgroundColor: "lightgrey", padding: ".2rem", borderRadius: "2rem"}}/>
        </div>
        </div>

        <div style={{ display: "flex",gap: "1.7rem", overflow: "hidden" }}>
        {
         restaurantCard[0]?.card?.card?.imageGridCards?.info?.map((imgIcon, index) => 
            <div style={{transform: `translateX(-${slide *100}%)`, transitionDuration: "1s" }} key={imgIcon} >
             <img alt="whats on mind" style={{height: "10.3rem"}} src={ON_MIND_URL + imgIcon.imageId} />
            </div>
         )
        }
        </div>
        </div>

        <div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
         <h1> {restaurantCard[1]?.card?.card?.header?.title} </h1> 
         <div style={{display: "flex", gap: "1rem", justifyContent: "space-around" }}>
         <ArrowBackIcon style={{ cursor: "pointer", backgroundColor: "lightgrey", padding: ".2rem", borderRadius: "2rem"}}/>
         <ArrowForwardIcon style={{ cursor: "pointer", backgroundColor: "lightgrey", padding: ".2rem", borderRadius: "2rem"}}/>
         </div>
        </div>
         <div style={{ display: "flex",gap: "1.5rem", overflow: "hidden", lineHeight: ".8rem"}}>
        {
         restaurantCard[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurants) => 
            <div key={restaurants.info.id} style={{ transform: `translate(-00%)`, transitionDuration: "2s"}} >
             <img alt="topRestro" style={{height: "10rem", width: "14rem",borderRadius: "1rem"}} src={CLOUDINARY_URL + restaurants.info.cloudinaryImageId } />
             <h3>{restaurants.info.name} </h3>
             <h4> {restaurants.info.avgRating} {restaurants.info.sla.slaString} </h4>
             <p style={{width: "", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}> {restaurants.info.cuisines.join(", ")} </p>
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
         <div style={{ display: "flex", flexWrap: "wrap",margin: "0rem 2rem", gap: "", justifyContent: "space-around" }}>
        {
         restaurantCard[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurants) => 
            <div key={restaurants.info.id} style={{width: "min-content"}} >
             <img alt="onlineFood" style={{height: "8rem", width: "11rem",borderRadius: "1rem"}} src={CLOUDINARY_URL + restaurants.info.cloudinaryImageId } />
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
         <div style={{ display: "flex", flexWrap: "wrap", textAlign: "center"}}>
        {
         restaurantCard[6]?.card?.card?.brands?.map((restro) => 
            <div style={{border: "1px solid grey", borderRadius: ".5rem", margin: "0.3rem" , padding: "0.4rem", width: "12.5rem", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
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
         <div style={{ display: "inline-flex", flexWrap: "wrap", textAlign: "center"}}>
        {
         restaurantCard[7]?.card?.card?.brands?.map((restro) => 
            <div style={{border: "1px solid grey", borderRadius: ".5rem", margin: "0.3rem" , padding: "0.4rem", width: "12.5rem", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
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