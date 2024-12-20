import { Link } from 'react-router-dom'
import restroLogo from '../assests/media/restaurant-icon.jpeg'
import { useOnlineStatus } from '../utils/useOnlineStatus'

export const Navbar = () => {

    const onlineStatus = useOnlineStatus()

    return(
        <header className="flex justify-between border-b-2 py-2 px-10 border-[lightgray] items-center">
        
        <Link to='/'>    
        <img src={restroLogo} alt="logo" className="h-[4rem] rounded-xl" />
        </Link>

        <input className='border-2 rounded-xl w-1/4 p-1 text-slate-600 font-medium' placeholder='Search pizza, burger, pasta ...' />

        <div className='flex gap-4 mx-4'>
            {onlineStatus ? <p className='text-2xl font-semibold text-green-600'>Online</p> :
             <p className='text-2xl font-semibold text-red-600'>Offline</p>}
            
            <p className='text-2xl font-semibold' >SignIn</p>
            <Link to="/cart" className='text-2xl font-semibold' >Cart</Link>
        </div>
        </header>
    )
}