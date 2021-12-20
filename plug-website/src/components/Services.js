import React from 'react';
import './stylesheets/services.css';
import Cards from './Cards';
import { useState } from 'react';
import code_icon from './assets/code-solid.svg';
import vr_wand from './assets/VR-Wand.png'

function Services(){
    const [services, setServices] = useState([
        {
            title: "Web Development",
            short_description: "",
            description: "",
            icon: code_icon
        },
        {
            title: "Mobile App Development",
            short_description: "",
            description: "",
            icon: ""
        },
        {
            title: "Game Development",
            short_description: "",
            description: "",
            icon: vr_wand
        },
        {
            title: "S.E.O",
            short_description: "",
            description: "",
            icon: ""
        },
    ])

    return (
        <div className="home-main-wrapper" id="services">
                <div className="serve-title">
                    <h1>What We Offer.</h1>
                </div>
                <Cards services={services} />
        </div>
    )
}

export default Services;