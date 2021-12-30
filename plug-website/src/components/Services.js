import React from 'react';
import './stylesheets/services.css';
import Cards from './Cards';
import { useState } from 'react';
import vr_wand from './assets/VR-Wand.png';
import mobile_icon from './assets/icons8-mobile-96.png';
import seo_icon from './assets/icons8-seo-64.png';
import webdev_icon from './assets/icons8-web-design-96 .png';
import mobile_dev_ill from './assets/undraw_programming_re_kg9v.svg';
import web_dev_ill from './assets/undraw_landing_page_re_6xev.svg';
import game_dev_ill from './assets/undraw_hello_re_3evm.svg';
import seo_ill from './assets/undraw_new_ideas_jdea.svg';

function Services(){
    const [services, setServices] = useState([
        {
            title: "Web Development",
            short_description: "",
            description: "",
            icon: webdev_icon,
            description_image:  web_dev_ill,
        },
        {
            title: "Mobile App Dev",
            short_description: "",
            description: "",
            icon: mobile_icon,
            description_image:  mobile_dev_ill,
        },
        {
            title: "Game Development",
            short_description: "",
            description: "",
            icon: vr_wand,
            description_image:  game_dev_ill,
        },
        {
            title: "S.E.O",
            short_description: "",
            description: "",
            icon: seo_icon,
            description_image:  seo_ill,
        },
    ])

    return (
        <div className="home-main-wrapper" id="Services">
                <div className="serve-title">
                    <h1>What We Offer.</h1>
                </div>
                <Cards services={services} />
        </div>
    )
}

export default Services;