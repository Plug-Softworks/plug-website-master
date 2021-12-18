import React from 'react';
import Navbar from './Navbar';
import './stylesheets/main.css';
import HomePage from './HomePage';

function Main(){
    return (
        <div className="main-wrapper">
            <Navbar />
            <HomePage />
        </div>
    )
}

export default Main;