import React from 'react';
import './stylesheets/about.css';
import imac from './assets/iMac.png';
import followCursor from './follow_cursor';
import { useEffect } from 'react';

function About(){

    useEffect(()=>{
        followCursor("imac")
    },[])

    return (
        <div className="home-main-wrapper" id="about">
            <div className="home-content">
                <div className="about-title">
                    <h1>About us</h1>
                </div>
                <div className="about-text">
                    <p></p>
                </div>
            </div>
            <div className="home-il">
                <div className='il-img-holder'>
                    <img src={imac} alt="Loading..." id='imac' />
                </div>
            </div>
        </div>
    )
}

export default About;