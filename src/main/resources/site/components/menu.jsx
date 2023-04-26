import react from "react";

import flattenMenuArray from "../helpers/flattenmenuarray";

export default ({ menuItems }) => {
    // THIS IS NO LONGER IN USE, BUT IS KEPT FOR REFERENCE
    // THIS MENU WOULD BE USED IF WE WANTED A MENU IN THE HEADER TO THE RIGHT OF THE LOGO

    const menuItemsArray = flattenMenuArray(menuItems);

    // finds the active menu item
    const activeMenuItem = menuItemsArray.find(item => item.isActive);

    // Hardcoded menu items to display on the desktop menu, to find them you have to use the exact title of the menu item in enonic 
    const menuItemsToRender = {
        hjem: menuItemsArray.find(item => item.title === 'Hjem'),
        tema: menuItemsArray.find(item => item.title === 'Tema'),
        om: menuItemsArray.find(item => item.title === 'Om SELFI'),
        materiale: menuItemsArray.find(item => item.title === 'Tilgjengelig materiale'),
    }

    return (
        <nav className='nav'>
            <ul className='menu-items'>
                {/* loop over menuItemsToRender object, and if the current keys object has children, render a dropdown */}
                {Object.keys(menuItemsToRender).map((key) => {
                    const menuItem = menuItemsToRender[key];
                    if (menuItem.hasChildren) {
                        return (
                            <div className='dropdown'>
                                <li><a href={menuItem.url} className='dropdownbtn menu-item'>{menuItem.title}</a></li>
                                <div className='dropdownContent'>
                                    {menuItem.children.map((child, index) => {
                                        return (
                                            <a key={index} href={child.url}>{child.title}</a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <li><a href={menuItem.url} className='dropdownbtn menu-item'>{menuItem.title}</a></li>
                        )
                    }
                })}
            </ul>
        </nav>
    )
}