import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export const Login = () => {

    const { loginEntry, handleLoginChange, handleLoginSubmit, handleGuestLogin } = useContext(AuthContext)

    return(
        <div>
          <form className="flex flex-col mx-[20%]" onSubmit={handleLoginSubmit}>

            <label>Email</label>
            <input className="border my-2" type="text" autoComplete="off" name="email" value={loginEntry.email} onChange={handleLoginChange} />

            <label>Password</label>
            <input className="border my-2" type="text" autoComplete="off" name="password" value={loginEntry.password} onChange={handleLoginChange} />
            
            <button className="border-2 p-1 m-1" type="submit">Login</button>
            <button className="border-2 p-1 m-1" onClick={handleGuestLogin}>Login as Guest User</button>

          </form>
        </div>
    )
}