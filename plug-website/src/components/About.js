import React from 'react';
import './stylesheets/about.css';
import imac from './assets/iMac.png';
import followCursor from './follow_cursor';
import { useEffect } from 'react';

function About(){

    useEffect(()=>{
        followCursor("imac", 100)
    },[])

    return (
        <div className="home-main-wrapper" id="About">
            <div className="home-content">
                <div className="about-title">
                    <h1>About us</h1>
                </div>
                <div className="about-text">
                    <p><strong>Plug Softworks...</strong>A unique team behind great unique products! <br></br>A tech startup aiming at providing tech related services such as web development to potential clients.<br></br>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam suscipit assumenda vel sit est mollitia tempore quis fugiat consequatur itaque aspernatur vitae quasi, minus dolorem neque rem dignissimos laudantium eveniet!</p>
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