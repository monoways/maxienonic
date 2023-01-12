import React, { useState } from "react";
import Menu from '../../components/menu.jsx';
import Burgermenu from '../../components/hamburger/nav.jsx';
import Logo from '../../../assets/images/logo.svg';

export default (props) => {
    const menuItems = props.menuItems.menuItems;
    console.log('props.menuItems in the header', JSON.stringify(props.menuItems));

    if (Array.isArray(props.menuItems)) {
        console.log('props.menuItems is an array');
    } else {
        console.log('props.menuItems is an object');
    }

    if (Array.isArray(props.menuItems.menuItems)) {
        console.log('props.menuItems.menuItems is an array');
    } else {
        console.log('props.menuItems.menuItems is an object');
    }


    return (
        <header className='header'>
            <img className="header-logo" src={Logo} alt="logo" />
            <Menu menuItems={menuItems}/>
            <Burgermenu menuItems={menuItems}/>
        </header>
    )
}
