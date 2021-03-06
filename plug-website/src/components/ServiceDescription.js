import React from 'react';
import { useContext } from 'react';
import { ModalCtx } from './contexts/ModalCtx';
import { useEffect } from 'react';
import followCursor from './follow_cursor';

function ServiceDescription({title, description, image, descriptionImage}) {
    const [modal, setModal] = useContext(ModalCtx);

    useEffect(()=>{
        followCursor("sd-image", 40)
    },[])

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
                <div className='sd-image' id="sd-image">
                    <span></span>
                    <span className="span2"></span>
                    <img src={descriptionImage} alt='Loading...' />
                </div>
                <div className='sd-description' >
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceDescription;