import React from 'react';

function Card({title, short_description, long_description, icon}) {
    return (
        <div className='card-wrapper'>
            <div className='card-icon'>
                <img src={icon} alt='@' />
            </div>
            <div className='card-title'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Card;