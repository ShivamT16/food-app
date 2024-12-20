import { useRouteError } from "react-router-dom"
import errorImage from "../assests/media/error.jpg"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const ErrorPage = () => {

    const error = useRouteError()

   return(
    <div>
        <Navbar />

        <div className="mx-[24%] text-center py-2">
          <p className="text-xl text-red-600 font-bold"> Error {error.status} : {error.statusText} </p>
          <p> {error.data} </p>
          <img src={errorImage} alt="error" />
        </div>

        <Footer />
    </div>
   )
}