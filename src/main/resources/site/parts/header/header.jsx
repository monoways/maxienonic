import React, { useState } from "react";
import Menu from '../../components/menu.jsx';
import Burgermenu from '../../components/hamburger/nav.jsx';
import Logo from '../../../assets/images/logo.svg';

export default (props) => {
    //const menuItems = props.menuItems.menuItems;


    return (
        <header className='header'>
            <img className="header-logo" src={Logo} alt="logo" />
            <Menu menuItems={props.menuItems}/>
            <Burgermenu menuItems={props.menuItems}/>
        </header>
    )
}
