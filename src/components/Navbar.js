import restroIcon from '../assests/media/restaurant-icon.jpeg'

export const Navbar = () => {
    return(
        <div className="flex justify-between border-b-2 py-2 px-10 border-[lightgray] items-center">
        <img src={restroIcon} alt="logo" className="h-[4rem] rounded-xl" />
        <div className='flex gap-4 mx-4'>
            <p className='text-2xl font-semibold' >Search</p>
            <p className='text-2xl font-semibold' >SignIn</p>
            <p className='text-2xl font-semibold' >Cart</p>
        </div>
        </div>
    )
}