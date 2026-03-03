import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries, CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLis = [
    { label: "Home", path: "/" },
    {
      label: "Function Areas",
      child: [
        { label: "Education", path: "/Education" },
        { label: "Women Empowerment", path: "/Women-Empowerment" },
        { label: "Environment", path: "/Environment" },
        { label: "Agriculture", path: "/Agriculture" },
      ],
    },
    { label: "Gallery", path: "/Gallery" },
    { label: "About-us", path: "/About-Us" },
    { label: "Donation", path: "/Donation" },
  ];

  return (
    <nav
      className="w-full flex flex-col shadow-md bg-primary z-[999]"
      ref={dropdownRef}
    >
      {/* Mobile Top Logo */}
      <div className="bg-white md:hidden">
        <img
          src="/images/NGO_logo/logo_text_ngo.png"
          alt="NGO Logo"
          className="h-20 mx-auto object-contain"
        />
      </div>

      <div className="flex flex-row md:flex-col justify-between items-center">
        {/* Header */}
        <header className="flex md:bg-white w-full items-center md:justify-end px-6 py-3">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/NGO_logo/logo_ngo.png"
            />
            <img
              src="/images/NGO_logo/ngoo.png"
              alt="NGO Logo"
              className="h-12 md:h-20 object-contain cursor-pointer"
            />
          </picture>
        </header>

        {/* Desktop Menu */}
        <ul className="hidden md:flex h-20 items-center gap-10 font-medium text-white pr-8 z-99">
          {navLis.map((item, index) => (
            <li key={index} className="relative text-lg">
              {item.child ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="flex items-center gap-1 hover:text-primary-light transition-colors duration-200"
                  >
                    {item.label}
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full mt-3 w-60 origin-top transition-all duration-200 ${
                      openDropdown === index
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    <ul className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                      {item.child.map((sub, i) => (
                        <li key={i}>
                          <Link
                            to={sub.path}
                            className="block px-5 py-3 text-base text-gray-700 hover:bg-green-50 hover:text-primary-light transition-colors duration-150"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold"
                      : "hover:text-primary-light transition"
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-white pr-6 transition-transform duration-200 active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CiMenuFries /> : <CiMenuBurger />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        } bg-primary`}
      >
        <ul className="flex flex-col px-6 space-y-4 text-white font-medium">
          {navLis.map((item, index) => (
            <li key={index}>
              {item.child ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="flex items-center justify-between w-full py-2"
                  >
                    {item.label}
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === index ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <ul className="flex flex-col space-y-2 pl-4 text-sm text-green-100">
                      {item.child.map((sub, i) => (
                        <li key={i}>
                          <Link
                            to={sub.path}
                            className="block py-1 hover:text-white transition"
                            onClick={() => {
                              setOpenDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className="block py-2 hover:text-green-200 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
