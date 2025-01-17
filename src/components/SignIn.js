import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export const SignIn = () => { 
    
    const { newSignInEntry, handleSignInChange, handleSignInSubmit } = useContext(AuthContext)

    return(
        <div>
         <form className="flex flex-col mx-[20%]" onSubmit={handleSignInSubmit}>

          <label className="">First Name</label>
          <input className="border my-2" type="text" autoComplete="off" name="firstName" value={newSignInEntry.firstName} onChange={handleSignInChange}  />

          <label>Last Name</label>
          <input className="border my-2" type="text" autoComplete="off" name="lastName" value={newSignInEntry.lastName} onChange={handleSignInChange} />

          <label>Email</label>
          <input className="border my-2" type="email" autoComplete="off" name="email" value={newSignInEntry.email} onChange={handleSignInChange} />

          <label>Password</label>
          <input className="border my-2" type="text" autoComplete="off" name="password" value={newSignInEntry.password} onChange={handleSignInChange} />

          <label>Confirm Password</label>
          <input className="border my-2" type="text" autoComplete="off" name="confirmPassword" value={newSignInEntry.confirmPassword} onChange={handleSignInChange} />

          <button className="border-2 p-1" type="submit">SignIn</button>
         </form>  
        </div>
    )
}