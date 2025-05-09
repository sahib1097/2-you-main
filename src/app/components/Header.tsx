import React, { useState } from 'react';
import { Link } from 'react-router';
import Logo from '../Assets/2-you-logo.png'

interface HeaderProps {
  variant?: 'red' | 'white';
}

const Header: React.FC<HeaderProps> = ({ variant = 'red' }) => {
  const [showMenu, setShowMenu] = useState(false);
  const isRed = variant === 'red';

  const navLinkClass = `${isRed ? 'text-white hover:text-red-200' : 'text-red-600 hover:text-red-300'} font-semibold`;

  return (
    <header className={`fixed w-full z-50 ${isRed ? 'bg-red-600' : 'bg-white'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="w-15 h-15"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={`${isRed ? 'text-white' : 'text-red-600'} focus:outline-none`}
              aria-label="Toggle menu"
            >
              {showMenu ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={navLinkClass}>Personal</Link>
            <Link to="/business" className={navLinkClass}>Business</Link>
            <Link to="/enterprise" className={navLinkClass}>Enterprise</Link>
            <Link to="/professional" className={navLinkClass}>Professional</Link>

            <button className={`ml-4 font-semibold ${isRed ? 'text-white hover:text-red-200' : 'text-red-600 hover:text-red-200'}`}>
              Log In
            </button>
            <button className={`ml-4 px-6 py-2 rounded-full font-medium ${isRed ? 'bg-white text-red-600 hover:bg-red-100' : 'bg-red-600 text-white hover:bg-red-100'}`}>
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {showMenu && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link to="/" className={navLinkClass}>Personal</Link>
            <Link to="/business" className={navLinkClass}>Business</Link>
            <Link to="/enterprise" className={navLinkClass}>Enterprise</Link>
            <Link to="/professional" className={navLinkClass}>Professional</Link>

            <button className={`font-semibold ${isRed ? 'text-white hover:text-red-200' : 'text-red-600 hover:text-red-200'}`}>
              Log In
            </button>
            <button className={`px-6 py-2 rounded-full font-medium ${isRed ? 'bg-white text-red-600 hover:bg-red-100' : 'bg-red-600 text-white hover:bg-red-100'}`}>
              Sign Up
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
