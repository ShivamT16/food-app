import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

export const AuthRequires = ({children}) => {

    const location = useLocation()
    const { isLoggedIn, setLocation } = useContext(AuthContext)

    useEffect(() => setLocation(location),[location, setLocation])

    return(
        isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
    )
}