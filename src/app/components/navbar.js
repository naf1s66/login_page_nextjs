import React from 'react';
import Link from 'next/link';
import './Navbar.scss'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">Home</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">Sign in</Link>
            
        </nav>
    );
};

export default Navbar;
