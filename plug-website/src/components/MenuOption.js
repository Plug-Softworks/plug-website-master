import React from 'react';
import { useMenu } from './hooks/useMenu';

function MenuOption({option}) {
    const {openMenu, changeMenuStatus} = useMenu();

    return (
        <div className='menu-option-wrapper'>
            <a href={`#${option}`} onClick={changeMenuStatus} >{option}<span className="indicator"></span></a>
        </div>
    )
}

export default MenuOption;