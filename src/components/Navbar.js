import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

// Define the navigation and service links for better maintainability
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Website Development", path: "/services/website-development" },
  { name: "App Development", path: "/services/app-development" },
  { name: "SEO Optimization", path: "/services/seo" },
  { name: "Branding & Design", path: "/services/branding" },
];

// Reusable component for mobile menu items to keep the main component clean
const MobileMenuItem = ({ link, onClick, hasDropdown, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!hasDropdown) {
      onClick(); // Close main menu
    } else {
      setIsOpen(!isOpen); // Toggle dropdown
    }
  };

  return (
    <li className="w-full">
      {hasDropdown ? (
        <>
          <div
            className="flex justify-between items-center py-2 px-3 text-gray-700 hover:text-indigo-600 cursor-pointer transition duration-150"
            onClick={handleClick}
          >
            <span className="font-medium">{link.name}</span>
            {isOpen ? (
              <ChevronUp size={20} className="text-gray-500" />
            ) : (
              <ChevronDown size={20} className="text-gray-500" />
            )}
          </div>
          {isOpen && (
            <ul className="ml-4 border-l border-indigo-200 pl-4 py-2 space-y-2">
              {children}
            </ul>
          )}
        </>
      ) : (
        <Link
          to={link.path}
          className="block py-2 px-3 text-gray-700 hover:text-indigo-600 transition duration-150 font-medium"
          onClick={onClick}
        >
          {link.name}
        </Link>
      )}
    </li>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, []);

  // Close dropdown if clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50 transition-shadow duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src="https://i.ibb.co.com/cS3trGbH/techweavedigital.png"
              alt="TechWeave Digital"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-7 font-semibold text-gray-600 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-indigo-600 transition duration-150 py-2 border-b-2 border-transparent hover:border-indigo-600"
              >
                {link.name}
              </Link>
            </li>
          ))}

         {/* Services Dropdown */}
<li className="relative group" ref={dropdownRef}>
  <div className="flex items-center">
    <Link
      to="/services"
      className="flex items-center py-2 text-gray-600 hover:text-indigo-600 transition duration-150 font-semibold"
      onClick={() => setDropdownOpen(false)}
    >
      Services
    </Link>
    <button
      className="ml-1 text-gray-600 hover:text-indigo-600 transition duration-150"
      onClick={toggleDropdown}
      aria-label="Toggle Services Menu"
    >
      <ChevronDown
        size={18}
        className={`transition-transform duration-200 ${
          dropdownOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  </div>

  <ul
    className={`absolute left-0 w-56 bg-white shadow-xl rounded-lg overflow-hidden py-1 z-50 transition duration-200
    ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}
    group-hover:opacity-100 group-hover:visible`}
  >
    {serviceLinks.map((service) => (
      <li key={service.name}>
        <Link
          to={service.path}
          className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition duration-150 border-l-4 border-transparent hover:border-indigo-600"
          onClick={handleLinkClick}
        >
          {service.name}
        </Link>
      </li>
    ))}
  </ul>
</li>

        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/quote">
            <button className="bg-indigo-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300 transform hover:scale-105">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-indigo-600 transition duration-150"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-16 bg-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden shadow-xl`}
      >
        <div className="flex flex-col h-full overflow-y-auto pb-20">
          <ul className="flex flex-col space-y-1 p-4">
            {navLinks.map((link) => (
              <MobileMenuItem
                key={link.name}
                link={link}
                onClick={handleLinkClick}
              />
            ))}

            {/* Services Dropdown in Mobile */}
            <MobileMenuItem
              link={{ name: "Services", path: "/services" }}
              onClick={handleLinkClick}
              hasDropdown
            >
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition duration-150"
                    onClick={handleLinkClick}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </MobileMenuItem>

            {/* CTA Button in Mobile */}
            <li className="pt-4">
              <Link to="/quote" onClick={handleLinkClick}>
                <button className="bg-indigo-600 text-white font-semibold px-5 py-3 rounded-full w-full shadow-lg hover:bg-indigo-700 transition duration-300">
                  Get a Quote
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
