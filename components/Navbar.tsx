
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3 border-b border-slate-100' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <span className="text-white font-black text-2xl">P</span>
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">
              PixelPerfect<span className="text-blue-600">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAVIGATION.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <div className="flex items-center text-slate-700 hover:text-blue-600 font-bold cursor-pointer py-2 transition-colors">
                    {item.label}
                    <svg className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ) : (
                  <Link to={item.path} className={`text-slate-700 hover:text-blue-600 font-bold py-2 transition-colors ${location.pathname === item.path ? 'text-blue-600' : ''}`}>
                    {item.label}
                  </Link>
                )}

                {item.children && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-0 w-64 bg-white rounded-3xl shadow-2xl border border-slate-100 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid gap-1 px-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="px-4 py-3 text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-2xl transition-all"
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
              className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-200"
            >
              FREE TRIAL
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth="2.5" /> : <path d="M4 6h16M4 12h16m-7 6h7" strokeWidth="2.5" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-black">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2.5"/></svg>
            </button>
          </div>
          <div className="space-y-6 flex-grow overflow-y-auto">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="border-b border-slate-100 pb-4">
                {item.children ? (
                  <div className="space-y-4">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                    <div className="grid gap-3 pl-4">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.path} className="text-xl font-bold text-slate-900">{child.label}</Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={item.path} className="text-3xl font-black text-slate-900 block">{item.label}</Link>
                )}
              </div>
            ))}
          </div>
          <div className="pt-8">
            <Link to="/free-trial" className="block w-full bg-blue-600 text-white text-center py-6 rounded-3xl font-black text-xl shadow-2xl">Start Free Trial</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
