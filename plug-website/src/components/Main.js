import React from 'react';
import Navbar from './Navbar';
import './stylesheets/main.css';
import HomePage from './HomePage';
import About from './About';
import Services from './Services';

function Main(){
    return (
        <div className="main-wrapper">
            <Navbar />
            <HomePage />
            <About />
            <Services />
        </div>
    )
}

export default Main;