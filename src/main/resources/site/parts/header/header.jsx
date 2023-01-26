import React, { useState } from "react";
import Menu from '../../components/menu.jsx';
import Burgermenu from '../../components/hamburger/nav.jsx';
import MobileMenu from '../../components/mobileMenu/MobileMenu.jsx';
import Logo from '../../../assets/images/logo.svg';

export default (props) => {
    const menuItems = props.menuItems.menuItems;

    console.log(JSON.stringify(menuItems));
    console.log(menuItems[0].url, 'menuItems[0].url');

    const homeLink = menuItems[0].url;


    return (
        <header className='header'>
            <img className="header-logo" src={Logo} alt="logo" href={homeLink} />
            <Menu menuItems={menuItems}/>
            {/* <Burgermenu menuItems={menuItems}/> */}
            <MobileMenu menuItems={menuItems} />
        </header>
    )
}
