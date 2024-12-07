import { useEffect, useState } from "react"
import {MENU_URL} from "./constants"

export const useRestaurantMenu = (restroId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null)

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
      try {
        const response = await fetch(MENU_URL + restroId)
        const json = await response.json();
        setRestaurantMenu(json.data)
      } catch (error) {
        console.error(error);
        
      }
    }

  return restaurantMenu;
}