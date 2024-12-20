import { Link } from 'react-router-dom'
import restroLogo from '../assests/media/restaurant-icon.jpeg'

export const Footer = () => {
  return (
    <footer className='flex justify-around items-center border-t py-2' >
        <img src={restroLogo} alt="Logo" className='h-32' />
        <nav className='text-xl flex gap-4 text-blue-700 font-bold'>
          <Link to='https://www.linkedin.com/in/shivam-tripathi16/' target='_blank'> LinkedIn </Link>
          <Link to='https://github.com/ShivamT16/food-app' target='_blank'> GitHub </Link>
          <Link> Mail </Link>   
        </nav>
    </footer>
  )
}