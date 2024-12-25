import { Link } from 'react-router-dom'
import restroLogo from '../assests/media/restaurant-icon.jpeg'
import { useOnlineStatus } from '../utils/useOnlineStatus'
import { useContext } from 'react'
import { CuisineContext } from '../Context/CuisineContext'

export const Navbar = () => {

    const onlineStatus = useOnlineStatus()
    const { setSearch } = useContext(CuisineContext)

    return(
        <header className="flex justify-between border-b-2 py-2 px-10 border-[lightgray] items-center">
        
        <Link to='/'>    
        <img src={restroLogo} alt="logo" className="h-[4rem] rounded-xl" />
        </Link>

        <Link to="/search" className='w-1/4'>
        <input className='border-2 rounded-xl w-full p-1 text-slate-600 font-medium' onChange={(e) => setSearch(e.target.value)} placeholder='Search for restaurants and food' />
        </Link>

        <div className='flex gap-4 mx-4'>
            {onlineStatus ? <p className='text-2xl font-semibold text-green-600'>Online</p> :
             <p className='text-2xl font-semibold text-red-600'>Offline</p>}
            
            <p className='text-2xl font-semibold' >SignIn</p>
            <Link to="/cart" className='text-2xl font-semibold' >Cart</Link>
        </div>
        </header>
    )
}