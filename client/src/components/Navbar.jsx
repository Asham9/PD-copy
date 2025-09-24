import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#fbfaf8] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-orange-600">MyLogo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 text-md">
            <Link to="/home" className="text-black px-3 py-2 hover:text-orange-600 rounded-md transition">Home</Link>
            <Link to="/services" className="text-black px-3 py-2 hover:text-orange-600 rounded-md transition">Services</Link>
            <Link to="/blogs" className="text-black px-3 py-2 hover:text-orange-600 rounded-md transition">Blogs</Link>
            <Link to="/gallery-events" className="text-black px-3 py-2 hover:text-orange-600 rounded-md transition">Gallery & Events</Link>
            <Link to="/feedback" className="text-black px-3 py-2 hover:text-orange-600 rounded-md transition">Feedback</Link>
            <Link to="/contact-us" className="text-black px-3 py-2 hover:text-orange-600 rounded-md transition">Contact Us</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-black hover:text-orange-600 transition">Login</Link>
            <Link to="/register">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-orange-600">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

    
      </div>
    </nav>
  );
}
