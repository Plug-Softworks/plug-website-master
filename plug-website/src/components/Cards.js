import React from 'react';
import Card from './Card';

function Cards({services}) {
    return (
        <div className='cards-wrapper'>
            {
                services.map((service)=>{
                    return (
                        <Card title={service.title} short_description={service.short_description} long_description={service.description} icon={service.icon} description_image={service.description_image} />
                    )
                })
            }
        </div>
    )
}

export default Cards;