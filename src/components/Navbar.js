import { Link } from 'react-router-dom'
import restroLogo from '../assests/media/restaurant-icon.jpeg'
import { useOnlineStatus } from '../utils/useOnlineStatus'
import { useContext } from 'react'
import { CuisineContext } from '../Context/CuisineContext'
import { AuthContext } from '../Context/AuthContext'

export const Navbar = () => {

    const onlineStatus = useOnlineStatus()
    const { setSearch } = useContext(CuisineContext)
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    return(
        <header className="flex justify-between border-b-2 py-2 px-10 border-[lightgray] items-center">
        
        <Link to='/'>    
        <img src={restroLogo} alt="logo" className="h-[4rem] rounded-xl" />
        </Link>

        <Link to="/search" className='w-1/4'>
        <input className='border-2 rounded-xl w-full p-1 text-slate-600 font-medium' onChange={(e) => setSearch(e.target.value)} placeholder='Search for restaurants and food' />
        </Link>

        <div className='flex gap-4 mx-4 font-semibold md:text-2xl'>

            { onlineStatus ? <p className='text-green-600'>Online</p> : <p className='text-red-600'>Offline</p> }         
            <Link to="/cart" >Cart</Link>
            { isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <Link to="/signin" >SignIn</Link> }

        </div>
        </header>
    )
}