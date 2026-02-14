
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className={`text-xl font-bold ${scrolled ? 'text-slate-900' : 'text-slate-900'} lg:inline hidden`}>
              PixelPerfect <span className="text-blue-600">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.label}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link to={item.path} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <div className={`absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/free-trial" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200"
            >
              Free Trial
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)} />
      <div className={`fixed top-0 right-0 h-full w-4/5 bg-white z-50 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-500">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {NAVIGATION.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <span className="text-lg font-bold text-slate-400 uppercase text-xs tracking-wider">{item.label}</span>
                    <div className="mt-2 ml-4 flex flex-col space-y-2">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.path} className="text-lg text-slate-700">{child.label}</Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={item.path} className="text-lg font-medium text-slate-700">{item.label}</Link>
                )}
              </div>
            ))}
            <Link to="/free-trial" className="w-full bg-blue-600 text-white text-center py-3 rounded-xl font-bold">Start Free Trial</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
