import React, { useEffect, useState } from 'react'
import "./navbar.css"

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", this)
        }
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                alt="Netflix Logo" />

            <img className='profile_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt="Profile Logo" />

        </div>
    )
}

export default Navbar