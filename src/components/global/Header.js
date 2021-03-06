import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';

let Header = ({toggleNav}) => {
    return (
        <header>
            <img alt="coffee roaster logo" className="logo" src={Logo} />
            <nav>
                <Link to="/coffee-roaster-website">
                    <p>Home</p>
                </Link>

                <Link to="/coffee-roaster-website/about">
                    <p>About Us</p>
                </Link>

                <Link to="/coffee-roaster-website/subscription">
                    <p>Create a Plan</p>
                </Link>
            </nav>
            <div onClick={() => toggleNav()} className="hamburger"></div>
        </header>
    )
}

export default Header