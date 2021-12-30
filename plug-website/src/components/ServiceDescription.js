import React from 'react';
import { useContext } from 'react';
import { ModalCtx } from './contexts/ModalCtx';

function ServiceDescription({title, description, image, descriptionImage}) {
    const [modal, setModal] = useContext(ModalCtx);

    return (
        <div className='sd-wrapper'>
            <button onClick={()=>{
                setModal({
                    openStatus: false,
                    data: null
                })
            }}>Close</button>
            <div className='sd-header'>
                <h2>{title}</h2>
            </div>
            <div className='sd-body'>
                <div className='sd-image'>
                    <img src={descriptionImage} alt='Loading...' />
                </div>
            </div>
        </div>
    )
}

export default ServiceDescription;