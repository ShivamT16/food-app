import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link } from "react-router-dom"

export const SignIn = () => { 
    
    const { newSignInEntry, handleSignInChange, handleSignInSubmit } = useContext(AuthContext)

    return(
        <div className="border border-red-300 mx-[15%] lg:mx-[35%] my-[2%]">

        <h2 className="text-3xl font-medium text-white bg-orange-600 p-2"> SignUp </h2>

         <form className="flex flex-col px-[10%] py-6" onSubmit={handleSignInSubmit}>

          <label className="">First Name</label>
          <input className="border rounded border-red-300 text-sm my-2 p-1 focus:outline-none" type="text" autoComplete="off" name="firstName" value={newSignInEntry.firstName} onChange={handleSignInChange}  />

          <label>Last Name</label>
          <input className="border rounded border-red-300 text-sm my-2 p-1 focus:outline-none" type="text" autoComplete="off" name="lastName" value={newSignInEntry.lastName} onChange={handleSignInChange} />

          <label>Email</label>
          <input className="border rounded border-red-300 text-sm my-2 p-1 focus:outline-none" type="email" autoComplete="off" name="email" value={newSignInEntry.email} onChange={handleSignInChange} />

          <label>Password</label>
          <input className="border rounded border-red-300 text-sm my-2 p-1 focus:outline-none" type="text" autoComplete="off" name="password" value={newSignInEntry.password} onChange={handleSignInChange} />

          <label>Confirm Password</label>
          <input className="border rounded border-red-300 text-sm my-2 p-1 focus:outline-none" type="text" autoComplete="off" name="confirmPassword" value={newSignInEntry.confirmPassword} onChange={handleSignInChange} />

          <button className="border p-1 my-3 rounded-lg border-green-600 bg-green-50" type="submit">SignUp</button>
    
          <h2 className="text-lg font-medium"> Already have an account? <Link to="/login" className="text-orange-500 underline"> Login </Link> </h2>
          
         </form>  
        </div>
    )
}