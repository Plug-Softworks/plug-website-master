import React from 'react';
import { useContext } from 'react';
import { ModalCtx } from './contexts/ModalCtx';
import ServiceDescription from './ServiceDescription';

function Card({title, short_description, long_description, icon, description_image}) {
    const [modal, setModal] = useContext(ModalCtx)

    return (
        <div className='card-wrapper' onClick={()=>{
            setModal({
                openStatus: true,
                data: <ServiceDescription title={title} descriptionImage={description_image} />
            })
        }}>
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