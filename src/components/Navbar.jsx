import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const navItems = [
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'TAG\'s Mission Statement', href: '/about/mission' },
        { name: 'TAG Virtual Tour', href: '/about/virtual-tour' },
        { name: 'Staff List', href: '/about/staff' },
        { name: 'TAG Uniform Policy', href: '/about/uniform-policy' },
      ]
    },
    {
      name: 'Admissions',
      href: '/admissions'
    },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: [
        { name: 'Curriculum Conference', href: '/academics/curriculum-conference' },
        { name: '8th Grade Requirements', href: '/academics/8th-grade' },
        { name: 'SHSAT Preparation', href: '/academics/shsat' },
        { name: 'High School Applications', href: '/academics/high-school' },
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'Monthly Newsletters & Calendars', href: '/resources/newsletters' },
        { name: 'Counselor\'s Corner', href: '/resources/counselor' },
        { name: 'Parent\'s Corner', href: '/resources/parents' },
        { name: 'DOE Resources', href: '/resources/doe' },
      ]
    },
    {
      name: 'Community',
      href: '/community',
      dropdown: [
        { name: 'TAG PTA', href: '/community/pta' },
        { name: 'School Events', href: '/community/events' },
        { name: 'Town Halls', href: '/community/town-halls' },
      ]
    },
  ];

  const handleDropdownToggle = (index, event) => {
    event.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50'
        : 'bg-transparent'
    }`}>
      <div className="container-padding">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/assets/images/logo.png"
              alt="TAG Scholars Logo"
              className={`w-auto object-contain transition-all duration-500 hover:scale-105 ${
                isScrolled ? 'h-12' : 'h-20'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <div>
                      <button
                        onMouseEnter={() => setActiveDropdown(index)}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isScrolled
                            ? 'text-secondary-700 hover:text-primary-700 hover:bg-primary-50'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      </button>
                      {activeDropdown === index && (
                        <div
                          className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg border border-primary-200 shadow-xl rounded-2xl py-2 z-50 animate-slide-up"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200 mx-2 rounded-xl"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isScrolled
                          ? 'text-slate-700 hover:text-primary-600 hover:bg-white'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="ml-6">
              <Link
                to="/admissions"
                className={`text-sm px-6 py-3 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white'
                    : 'bg-white text-primary-700 hover:bg-primary-50 border border-primary-200 hover:border-primary-400'
                }`}
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-xl">
          <div className="container-padding py-6 space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={(e) => handleDropdownToggle(index, e)}
                      className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === index && (
                      <div className="mt-2 ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                to="/admissions"
                className="btn-primary w-full text-center block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;