import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import productImage from '../images/image-product-1.jpg';
import deleteicon from '../images/icon-delete.svg';

interface NavbarProps {
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<NavbarProps> = ({ cartQuantity, setCartQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const clearCart = () => setCartQuantity(0);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative pb-2 transition text-gray-700 hover:text-blue-600 block ${
      isActive
        ? 'text-black after:content-[""] md:after:absolute after:left-0 after:right-0 after:-bottom-4 after:h-1 after:bg-orange-500 after:rounded-full'
        : ''
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Mobile Menu Button */}
          <div className="md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none mt-3"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center flex-shrink-0 ml-4 md:ml-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-6 md:h-8 lg:h-10" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 ml-12">
            <NavLink to="/" className={linkClasses}>
              Collections
            </NavLink>
            <NavLink to="/men" className={linkClasses}>
              Men
            </NavLink>
            <NavLink to="/women" className={linkClasses}>
              Women
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </div>

          {/* Cart & Avatar */}
          <div className="ml-auto flex items-center space-x-5 relative">
            <button
              onClick={toggleCart}
              className="relative focus:outline-none"
              aria-label="Toggle cart"
            >
              <img src={cart} alt="cart" className="h-6 w-6" />
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartQuantity}
                </span>
              )}
            </button>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute right-0 top-12 mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded-md p-4 z-50">
                <p className="text-gray-700 font-semibold mb-4">Cart</p>
                <hr className="mb-4" />

                {cartQuantity === 0 ? (
                  <p className="text-sm text-gray-500 text-center">
                    Your cart is empty.
                  </p>
                ) : (
                  <div>
                    <div className="flex items-center gap-4">
                      <img
                        src={productImage}
                        alt="Product"
                        className="w-16 h-16 rounded-md"
                      />
                      <div className="flex-1">
                        <p className="text-gray-700">
                          Fall Limited Edition Sneakers
                        </p>
                        <p className="text-gray-700">
                          $125.00 x {cartQuantity}{' '}
                          <span className="font-bold">
                            ${(125 * cartQuantity).toFixed(2)}
                          </span>
                        </p>
                      </div>
                      <button
                        onClick={clearCart}
                        className="text-gray-400 hover:text-red-600"
                        aria-label="Clear cart"
                      >
                        <img src={deleteicon} alt="delete" />
                      </button>
                    </div>

                    <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 font-semibold">
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Avatar */}
            <Link
              to="/user"
              className="text-gray-700 hover:text-blue-600 transition"
              aria-label="User profile"
            >
              <img src={avatar} alt="avatar" className="w-8 md:w-10 rounded-full" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0  bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 p-6 flex flex-col transform transition-transform duration-300 translate-x-0`}
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="self-end mb-8 text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Nav Links */}
            <NavLink to="/" className={linkClasses} onClick={toggleMenu}>
              Collections
            </NavLink>
            <NavLink to="/men" className={linkClasses} onClick={toggleMenu}>
              Men
            </NavLink>
            <NavLink to="/women" className={linkClasses} onClick={toggleMenu}>
              Women
            </NavLink>
            <NavLink to="/about" className={linkClasses} onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClasses} onClick={toggleMenu}>
              Contact
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
