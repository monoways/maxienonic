import react, { useState } from "react";

import ExpandedMobileMenu from './expandedMobileMenu.jsx';

export default (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        document.body.classList.toggle('no-scroll');
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const menuItemsArray = [];

    // this loops through three levels of menu items and pushes them to the menuItemsArray to get a flat array of all menu items, it also adds a layer property to each item
    props.menuItems.forEach((item) => {
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
        
    
    
    const activeMenuItem = menuItemsArray.find(item => item.isActive);

    return (
        <div className='mobileMenu'>
            <button onClick={toggleMobileMenu}>{activeMenuItem?.title}</button>
            {mobileMenuOpen && <ExpandedMobileMenu 
                                    menuItemsArray={menuItemsArray} 
                                    menuItems={props.menuItems} 
                                    activeMenuItem={activeMenuItem} 
                                    toggleMobileMenu={toggleMobileMenu} />}
        </div>
    )
}