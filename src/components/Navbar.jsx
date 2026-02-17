import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'

function Navbar() {
    const { totalItems } = useCart()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth <= 991)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div>

            {/* ***** Header Area Start ***** */}
            <header
                className="header-area header-sticky"
                style={{ position: "relative", zIndex: 9999 }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav main-nav-1">
                                {/* ***** Logo Start ***** */}
                                <NavLink to="/" className="logo">
                                    <h1>Villa</h1>
                                </NavLink>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className={`nav${isMobile ? (isMenuOpen ? ' menu-open' : ' menu-close') : ''}`}>
                                    <li>
                                        <NavLink
                                            to="/"
                                            end
                                            onClick={closeMenu}
                                            className={({ isActive }) => isActive ? 'active' : undefined}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/properties"
                                            onClick={closeMenu}
                                            className={({ isActive }) => isActive ? 'active' : undefined}
                                        >
                                            Properties
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/details"
                                            onClick={closeMenu}
                                            className={({ isActive }) => isActive ? 'active' : undefined}
                                        >
                                            Property Details
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact"
                                            onClick={closeMenu}
                                            className={({ isActive }) => isActive ? 'active' : undefined}
                                        >
                                            Contact Us
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/products"
                                            onClick={closeMenu}
                                            className={({ isActive }) => isActive ? 'active' : undefined}
                                        >
                                            Products
                                        </NavLink>
                                    </li>
                                    <li className='cart-1'>
                                        <NavLink
                                            to="/cart"
                                            onClick={closeMenu}
                                            className={({ isActive }) =>
                                                `text-light${isActive ? ' active' : ''}`
                                            }
                                        >
                                            <i className="fa-solid fa-cart-shopping"></i> Cart
                                            <span
                                                className='badge badge-primary'
                                                style={{
                                                    padding: "5px",
                                                    backgroundColor: "#f35525",
                                                    marginLeft: "5px"
                                                }}
                                            >
                                                {totalItems}
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                                <button
                                    type="button"
                                    className={isMenuOpen ? "menu-trigger active" : "menu-trigger"}
                                    onClick={toggleMenu}
                                    aria-label="Toggle navigation menu"
                                    aria-expanded={isMenuOpen}
                                >
                                    <span>Menu</span>
                                </button>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ***** Header Area End ***** */}


        </div>
    )
}

export default Navbar