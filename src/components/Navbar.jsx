import React from 'react'
import { NavLink } from 'react-router'
import { useCart } from 'react-use-cart'

function Navbar() {
    const { totalItems } = useCart()
    return (
        <div>
            <>
                {/* ***** Header Area Start ***** */}
                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    {/* ***** Logo Start ***** */}
                                    <NavLink to="/" className="logo">
                                        <h1>Villa</h1>
                                    </NavLink>
                                    {/* ***** Logo End ***** */}
                                    {/* ***** Menu Start ***** */}
                                    <ul className="nav">
                                        <li>
                                            <NavLink to="/" >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/properties">Properties</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/details">Property Details</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">Contact Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/products">Products</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/cart" className="text-light">
                                                <i className="fa-solid fa-cart-shopping"></i> Cart<span className='badge badge-primary' style={{ padding: "5px", backgroundColor: "#f35525", marginLeft: "5px" }}>{totalItems}</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                    <button type="button" className="menu-trigger">
                                        <span>Menu</span>
                                    </button>
                                    {/* ***** Menu End ***** */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ***** Header Area End ***** */}
            </>

        </div>
    )
}

export default Navbar