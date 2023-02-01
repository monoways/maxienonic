import React, { useState } from "react";
import MobileMenu from '../../components/mobileMenu/MobileMenu.jsx';
import BannerMenu from '../../components/bannermenu/bannermenu.jsx';
import MobileTemaMenu from '../../components/temaMenu/mobile/temaMenuMobile.jsx';
import Logo from '../../../assets/images/logo.svg';

export default (props) => {
    const menuItems = props.menuItems.menuItems;
    console.log('menuItems', JSON.stringify(menuItems));

    const onTemaPath = props.content._path.match(/\/selfi\/brukere\/tema/);
    const homeLink = menuItems[0].url;

    // find all menuitems that are children of the element in menuItems that has the title "Brukere"
    const brukere = menuItems.find(item => item.title === 'Brukere');
    // if brukere has children, find the one that has the title "Tema" and return its children
    const tema = brukere && brukere.children && brukere.children.find(item => item.title === 'Tema');

    const menuItemsArray = [];
    // this loops through three levels of menu items and pushes them to the menuItemsArray to get a flat array of all menu items, 
    // it also adds a layer property to each item
    menuItems.forEach((item) => {
        item.layer = 0;
        menuItemsArray.push(item);
        if (item.hasChildren) {
            item.children.forEach((child) => {
                child.layer = 1;
                child.father = item.title;
                menuItemsArray.push(child);
                if (child.hasChildren) {
                    child.children.forEach((child2) => {
                        child2.father = child.title;
                        child2.layer = 2;
                        menuItemsArray.push(child2);
                    })
                }
            })
        }
    })

    return (
        <>
        <header className='header'>
            <a href={menuItems[0].url}>
                <img className="header-logo" src={Logo} alt="logo and homelink"/>
            </a>
            {/* <Menu menuItems={menuItems}/> */}
            {/* <Burgermenu menuItems={menuItems}/> */}
            {/* <MobileMenu menuItems={menuItems} /> */}
        </header>
        {/* <BannerMenu menuItems={menuItems} /> */}
        {/* {onTemaPath && <MobileTemaMenu menuItems={tema.children} menuItemsArray={menuItemsArray} backgroundColor={props.backgroundColor} />} */}
        </>
    )
}
