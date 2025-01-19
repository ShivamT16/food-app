import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {

    const { loginEntry, handleLoginChange, setLoginEntry,signInRecord, setIsLoggedIn, location } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLoginSubmit = (e) => {
      e.preventDefault()

      console.log(loginEntry)
      if( !loginEntry.email || !loginEntry.password) {
        console.log("Fill the mandatory details")
      } else {
       if ( signInRecord.find(({email, password}) => email === loginEntry.email && password === loginEntry.password) ) {
          console.log("Welcome")
          setLoginEntry({email: "", password: ""})
          setTimeout(() => { navigate( location?.pathname ? location.pathname : "/" ) }, 1500)
       } else {
          console.log("Credentials Invalid")
       }
      }
    }

    const handleGuestLogin = (e) => {
      e.preventDefault()
      setLoginEntry({email: "example.com", password: "demoPassword"})
      setIsLoggedIn(true);
      setTimeout(() => { navigate( location?.pathname ? location.pathname : "/" ) }, 1500)
    }

    return(
        <div className="border border-red-300 mx-[15%] lg:mx-[35%] my-[10%] md:my-[4%]">

          <h2 className="text-3xl font-medium text-white bg-orange-600 p-2"> Login </h2>

          <form className="flex flex-col px-[10%] py-6" onSubmit={handleLoginSubmit}>

            <label>Email</label>
            <input className="border rounded border-red-300 text-sm my-2 p-1 focus:outline-none" type="email" autoComplete="off" name="email" value={loginEntry.email} onChange={handleLoginChange} />

            <label>Password</label>
            <input className="border rounded border-red-300 text-sm my-2 p-1 focus:outline-none" type="text" autoComplete="off" name="password" value={loginEntry.password} onChange={handleLoginChange} />
            
            <div className="flex gap-2 my-4 items-baseline">
            <button className="border w-1/3 p-1 rounded-lg border-green-600 bg-green-50 " type="submit">Login</button>
            <button className="border w-2/3 p-1 rounded-lg border-green-600 bg-green-50 " onClick={handleGuestLogin}>Login as Guest User</button>
            </div>

            <h2 className="text-lg font-medium"> Don't have an account? <Link to="/signin" className="text-orange-500 underline"> SignUp </Link> </h2>

          </form>
        </div>
    )
}