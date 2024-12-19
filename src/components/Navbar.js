import restroLogo from '../assests/media/restaurant-icon.jpeg'
import { useOnlineStatus } from '../utils/useOnlineStatus'

export const Navbar = () => {

    const onlineStatus = useOnlineStatus()

    return(
        <header className="flex justify-between border-b-2 py-2 px-10 border-[lightgray] items-center">
        <img src={restroLogo} alt="logo" className="h-[4rem] rounded-xl" />
        <div className='flex gap-4 mx-4'>
            {onlineStatus ? <p className='text-2xl font-semibold text-green-600'>Online</p> :
             <p className='text-2xl font-semibold text-red-600'>Offline</p>}

            <p className='text-2xl font-semibold' >Search</p>
            <p className='text-2xl font-semibold' >SignIn</p>
            <p className='text-2xl font-semibold' >Cart</p>
        </div>
        </header>
    )
}