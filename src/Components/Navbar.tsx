import Logo from '../Assets/Logo.png'
import { Link } from 'react-router-dom';
import { Divide as Collapse } from 'hamburger-react';
import { useState } from 'react';
import OutlineButton from './OutlineButton'
import Button from './Button';
import MainButton from './MainButton';
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className=" px-2 sm:px-4 py-2.5 sticky top-0 bg-[rgba(255,242,173,0.3)]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">Xuvaydo</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <Collapse toggle={setToggle} toggled={toggle} />
        </button>
            <div className={`w-full md:block md:w-auto ${toggle?'block':'hidden'}`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-gray-800  rounded hover:text-white md:p-0" aria-current="page"><Button text='Home' /></Link>
            </li>
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:text-white md:border-0  md:p-0 "><Button text='About' /></Link>
            </li>
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:text-white md:border-0  md:p-0 "><Button text='Service' /></Link>
            </li>
            <li>
              <Link to="/login" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:text-white md:border-0  md:p-0 "><MainButton text='Kirish' /></Link>
            </li>
            <li>
              <Link to="/signup" className="flex justify-center items-center  text-gray-800 rounded hover:text-[#FFF2AD] md:border-0  md:p-0 ">
                <OutlineButton text='Ro`yxatdan o`tish'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar