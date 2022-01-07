import React from 'react';
import './stylesheets/services.css';
import Cards from './Cards';
import { useState } from 'react';
import vr_wand from './assets/VR-Wand.webp';
import mobile_icon from './assets/icons8-mobile-96.png';
import seo_icon from './assets/icons8-seo-64.png';
import webdev_icon from './assets/icons8-web-design-96 .png';
import mobile_dev_ill from './assets/undraw_develop_app_re_bi4i.svg';
import web_dev_ill from './assets/undraw_landing_page_re_6xev.svg';
import game_dev_ill from './assets/undraw_gaming_re_cma2.svg';
import seo_ill from './assets/undraw_search_engines_nn-9-e.svg';

function Services(){
    const [services, setServices] = useState([
        {
            title: "Web Development",
            short_description: "",
            description: `Want a Website or Web Application built on time and professionally?\n
                            Well you came to the right place\n... We offer these services leveraging various full stack web development technologies such as HTML, CSS and Javascript for basic web development and ReactJS for advanced front end development`,
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