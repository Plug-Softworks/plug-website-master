import React from 'react';
import './stylesheets/homepage.css';
import processor from  './assets/Processor.png';
import followCursor from './follow_cursor';

function HomePage(){
    followCursor();
    return (
        <div className='home-main-wrapper'>
            <div className='home-content'>
                <div className='greetings-wrapper'>
                    <h1>Hello There!</h1>
                    <h2>Welcome to Plug</h2>
                    <p>Plug Softworks aims at providing quality tech related services</p>
                    <button>Learn More</button>
                </div>
                {/* <div className='greetings-learn'>
                    <button>Learn More</button>
                </div> */}
            </div>
            <div className='home-il'>
                <div className='il-img-holder'>
                    <img src={processor} alt='Loading...' id="processor" />
                </div>
            </div>
        </div>
    )
}

export default HomePage;