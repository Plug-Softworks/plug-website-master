import React from 'react';
import './stylesheets/services.css';
import Cards from './Cards';
import { useState } from 'react';
import vr_wand from './assets/VR-Wand.png';
import mobile_icon from './assets/icons8-mobile-96.png';
import seo_icon from './assets/icons8-seo-64.png';
import webdev_icon from './assets/icons8-web-design-96 .png'

function Services(){
    const [services, setServices] = useState([
        {
            title: "Web Development",
            short_description: "",
            description: "",
            icon: webdev_icon
        },
        {
            title: "Mobile App Dev",
            short_description: "",
            description: "",
            icon: mobile_icon
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
            icon: seo_icon
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