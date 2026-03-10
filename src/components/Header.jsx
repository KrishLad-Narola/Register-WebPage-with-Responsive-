import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function Header() {

    const [show, setShow] = useState(false)

    const handleButtonToggle = () => {
        setShow(!show)
    }

    return (
        <header>

            <div className="container p-4">
                <div className="grid navbar-grid">

                    <div className="Logo">
                        <NavLink to="/">
                            <h1 className='text-shadow-amber-200  text-blue-600 text-4xl'>THE FORM</h1>
                        </NavLink>
                  
                    </div>


                    <nav >
                        <ul className='flex gap-5 w-full justify-end p-5 bg-gray-600 text-white'>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                           <li>
                                <NavLink to="/Login">Login</NavLink>
                            </li>
                           

                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Header