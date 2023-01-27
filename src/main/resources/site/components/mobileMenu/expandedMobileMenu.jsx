import react from "react";
import styles from './css/expandedMenu.module.css';

// export default (props) => {
//     console.log('active menu item', props.activeMenuItem);
//     console.log('menu items array', props.menuItemsArray);

//     // find all the items in menuItemsArray that has the property father of the props.activeMenuItem.title, if there is no item with father property of the props.activeItem, it should render all items with layer 0
//     let menuItemstoRender = props.menuItemsArray.filter(item => item.father === props.activeMenuItem.title || item.title === 'Hjem');
    
//     if (menuItemstoRender.length === 1) {
//         menuItemstoRender = props.menuItemsArray.filter(item => item.layer === 0);
//     }

//     return (
//         <div className={styles.container}>
//             <button className={styles.closeBtn} onClick={props.toggleMobileMenu}>X</button>
//             <ul className={styles.menuList}>
//                 {menuItemstoRender.map((item, index) => {
//                     return (
//                         <li key={index} className={styles.menuListItem}><a className={styles.menuItem} href={item.url}>{item.title}</a></li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }

export default (props) => {
    // harcoded menu, couldnt make a good system for a dynamic one
    const menuItems =
        {
            hjem: props.menuItemsArray.find(item => item.title === 'Hjem'),
            tema: props.menuItemsArray.find(item => item.title === 'Tema'),
            // produkter: props.menuItemsArray.find(item => item.title === 'Våre Produkter'),
            omOss: props.menuItemsArray.find(item => item.title === 'Om SELFI'),
            materiale: props.menuItemsArray.find(item => item.title === 'Tilgjengelig materiale'),
        }

    return (
        <div className={styles.container}>
            {/* <button className={styles.closeBtn} onClick={props.toggleMobileMenu}>X</button> */}
            <ul className={styles.menuList}>
                {Object.keys(menuItems).map((item, index) => {
                    return (
                        // <h1>{menuItems[item]?.url}</h1>
                        <li key={index} className={styles.menuListItem}><a className={styles.menuItem} href={menuItems[item]?.url}>{menuItems[item]?.title}</a></li>
                    )
                })}
            </ul>
        </div>
        
    )
}
