import react from "react";

import styles from './css/bannermenu.module.css';

export default (props) => {
    const menuItems = props.menuItems.menuItems;

    const menuItemsArray = [];
    // makes a flat array of all menu items
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
    });

    const menuItemsToRender = {
        hjem: menuItemsArray.find(item => item.title === 'Hjem'),
        om: menuItemsArray.find(item => item.title === 'Om SELFI'),
        tema: menuItemsArray.find(item => item.title === 'Tema'),
        materiale: menuItemsArray.find(item => item.title === 'Tilgjengelig materiale'),
        hjelpogstotte: menuItemsArray.find(item => item.title === 'Hjelp og støtte'),
    }

    const activeMenuItem = menuItemsArray.find(item => item.isActive);

    return (
        <nav className={styles.bannerNav}>
            <div className={styles.bannerMenuItems}>
                {Object.keys(menuItemsToRender).map((key) => {
                    const menuItem = menuItemsToRender[key];
                        if (menuItem.title === activeMenuItem.title) {
                            return (
                                <a href={menuItem.url} className={styles.bannerMenuItemActive}>{menuItem.title}</a>
                            )
                        } else {
                            return (
                                <a href={menuItem.url} className={styles.bannerMenuItem}>{menuItem.title}</a>
                            )
                        }
                })}
            </div>
        </nav>
    )
}