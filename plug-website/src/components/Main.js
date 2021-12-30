import React from 'react';
import Navbar from './Navbar';
import './stylesheets/main.css';
import HomePage from './HomePage';
import About from './About';
import Services from './Services';
import Modal from './Modal';
import { ModalCtx } from './contexts/ModalCtx';
import { useContext } from 'react';
import Menu from './Menu';
import { options } from './Navbar';
import { useMenu } from './hooks/useMenu';

function Main(){
    const [modal, setModal] = useContext(ModalCtx);
    const {openMenu, changeMenuStatus} = useMenu();

    return (
        <div className="main-wrapper">
            <Navbar />
            <HomePage />
            <About />
            <Services />
            {openMenu  && <Menu options={options} />}
            {
                modal.openStatus && <Modal data={modal.data} />
            }
        </div>
    )
}

export default Main;