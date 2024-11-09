import { useEffect, useState } from "react"
import {MENU_URL} from "./constants"

export const useRestaurantMenu = (restroId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null)

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch(MENU_URL + restroId)
        const json = await response.json();
        setRestaurantMenu(json.data)
    }

  return restaurantMenu;
}
