import React, { useState } from "react";
import MobileMenu from '../../components/mobileMenu/MobileMenu.jsx';
import BannerMenu from '../../components/bannermenu/bannermenu.jsx';
import MobileTemaMenu from '../../components/temaMenu/mobile/temaMenuMobile.jsx';
import Logo from '../../../assets/images/logo.svg';
import flattenMenuArray from "../../helpers/flattenmenuarray.js";

export default (props) => {
    const menuItems = props.menuItems.menuItems;

    const onTemaPath = props.content._path.match(/\/selfi\/brukere\/tema/);
    const homeLink = menuItems[0].url;

    // find all menuitems that are children of the element in menuItems that has the title "Brukere"
    const brukere = menuItems.find(item => item.title === 'Brukere');
    // if brukere has children, find the one that has the title "Tema" and return its children
    const tema = brukere && brukere.children && brukere.children.find(item => item.title === 'Tema');

    const menuItemsArray = flattenMenuArray(menuItems);

    return (
        <>
        <header className='header'>
            <a href={menuItems[0].url}>
                <img className="header-logo" src={Logo} alt="logo and homelink"/>
            </a>
            {/* <Menu menuItems={menuItems}/> */}
            <MobileMenu menuItems={menuItems} />
        </header>
        <BannerMenu menuItems={menuItems} />
        {onTemaPath && <MobileTemaMenu menuItems={tema.children} menuItemsArray={menuItemsArray} backgroundColor={props.backgroundColor} />}
        </>
    )
}
