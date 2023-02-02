import react from "react";
import styles from './css/expandedMenu.module.css';

export default (props) => {
    // harcoded menu, couldnt make a good system for a dynamic one
    const menuItems =
        {
            hjem: props.menuItemsArray.find(item => item.title === 'Hjem'),
            omOss: props.menuItemsArray.find(item => item.title === 'Om SELFI'),
            tema: props.menuItemsArray.find(item => item.title === 'Tema'),
            materiale: props.menuItemsArray.find(item => item.title === 'Tilgjengelig materiale'),
            hjelpogstotte: props.menuItemsArray.find(item => item.title === 'Hjelp og støtte'),
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
