import React from 'react';
import './stylesheets/navbar.css';

function Navbar(){
    return (
        <nav>
            <div className="nav-title">
                <h1>PLUG</h1>
            </div>
            <div className="nav-links">
                <button><a href="#">Home</a><span className='indicator'></span></button>
                <button><a href="#">Services</a><span className='indicator'></span></button>
                <button><a href="#">About</a><span className='indicator'></span></button>
            </div>
            <div className="nav-auth">
            <button>Contact us.</button>
            </div>
        </nav>
    )
}

export default Navbar;