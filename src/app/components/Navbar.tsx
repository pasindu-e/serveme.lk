import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Restaurants', path: '/restaurants' },
    { label: 'Meals & Categories', path: '/meals' },
    { label: 'Reservations', path: '/reservations' },
    { label: 'Careers', path: '/careers' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/log-main.png" alt="Serveme.lk" className="h-15 w-auto" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-[#ff6b35] font-medium'
                    : 'text-gray-700 hover:text-[#ff6b35]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-[#ff6b35] hover:text-[#ff4444] transition-colors duration-200">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#ff6b35] to-[#ff4444] text-white rounded-full hover:shadow-lg transition-all duration-200">
              Register
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-orange-50 text-[#ff6b35] font-medium'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-[#ff6b35]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-2 text-[#ff6b35] border border-[#ff6b35] rounded-full hover:bg-orange-50 transition-colors duration-200">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-[#ff6b35] to-[#ff4444] text-white rounded-full hover:shadow-lg transition-all duration-200">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
