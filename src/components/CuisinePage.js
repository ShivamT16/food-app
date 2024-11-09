import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { CuisineContext } from "../Context/CuisineContext";

export const CuisinePage = () => {
    const {cuisineLink} = useParams()
    const { restaurantCard, cuisineId } = useContext(CuisineContext);

    const selectedCuisine = restaurantCard[0]?.card?.card?.imageGridCards?.info?.find(({id}) => id === cuisineId);
    console.log(selectedCuisine.action.link)

    useEffect(() => {
        const fetchCuisineData = async () => {
            const response = await fetch(selectedCuisine.action.link);
            const data = await response.json()
            console.log(data)
        }
       }, [selectedCuisine.action.link])

    return(
        <div>
        {cuisineLink}
        </div>
    )
}