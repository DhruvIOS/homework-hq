import React, { useRef, useState, useEffect } from 'react'

import '../styles/styless.css'

export default function Header(){

    const hamburger = useRef(null);

    const header = useRef(null);

    const navLinks = useRef(null)

    let hamburgerOpen = false;




    function mobileMenu() {
        if (!hamburgerOpen) {
            navLinks.current.classList.toggle("show-navlinks");
            hamburger.current.classList.toggle("hamburger-off")
        } else {
            hamburger.current.classList.remove('show-navlinks');
            hamburger.current.classList.remove("hamburger-off")

            hamburgerOpen = false;
        }

    }

    
    return(

        <div className="">
        <header ref={header}>
            <a href="/" className='logo'>Homework HQ</a>

            <div className="hamburger-on" ref={hamburger} onClick={mobileMenu}>
            </div>

            <ul className="nav-links" ref={navLinks}>
                <li><a href="/" >HOME</a></li>
                <li><a href="/login" >LOGIN</a></li>

                <li><a href="/tasks">Tasks</a></li>
               

            </ul>
        </header>
        </div>
    )
}