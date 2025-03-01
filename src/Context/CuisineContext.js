import { createContext, useEffect, useState } from "react";

export const CuisineContext = createContext()

export const CuisineProvider = ({children}) => {
    const [ restaurantCard, setRestaurantCard ] = useState([]) 
    const [ cuisineId, setCuisineId ] = useState("")
    const [search, setSearch] = useState('');

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
     try{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        setRestaurantCard(json.data.cards)
     }
     catch (error){
        console.error(error);
     }
        
    } 

    // const handleCuisineId = (id) => setCuisineId(id) 
    return(
        <CuisineContext.Provider value={{restaurantCard, setCuisineId, cuisineId, search, setSearch}}>
            {children}
        </CuisineContext.Provider>
    )
} 