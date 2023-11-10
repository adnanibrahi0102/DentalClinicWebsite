import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Logo white BG .png';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className='bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-slate-950 p-2 lg:p-4'>
        <div className='container mx-auto flex justify-between items-center'>

          {/* Logo */}
          <div className='flex items-center'>
            <Link to='/'>
              <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 mr-2 rounded-xl"
              />
            </Link>
            <Link to="/" className='text-lg font-semibold hover:text-orange-400 transition duration-300' style={{ fontFamily: 'cursive' }}>
              Pristine <span className="text-sm text-slate-700 " style={{ fontFamily: 'cursive' }}>Oral & Maxillofacial Clinic</span>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className='lg:hidden cursor-pointer' onClick={toggleMenu}>
            <svg
              className='w-6 h-6 text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </div>

          {/* Navigation Menu */}
          <ul className={`lg:flex lg:gap-4 ${isMenuOpen ? 'flex flex-col' : 'hidden'} lg:items-center`}>
            <li>
              <Link to="/" className='text-gray-800 hover:text-teal-200 transition duration-300'>Home</Link>
            </li>
            <li>
              <Link to="/services" className='text-gray-800 hover:text-teal-200 transition duration-300'>Services</Link>
            </li>
            <li>
              <Link to="/about" className='text-gray-800 hover:text-teal-200 transition duration-300'>About Us</Link>
            </li>
            <li>
              <Link to="/contact" className='text-gray-800 hover:text-teal-200 transition duration-300'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
