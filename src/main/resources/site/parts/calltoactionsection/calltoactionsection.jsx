import react from "react";
import styles from './css/calltoactionsection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
    const { menuItems } = props.menuItems

    // const handleRedirect = (menuItem) => {
    //     console.log(url, 'url, in the calltoaction component');
    //     window.location.href = menuItem.url;
    // }

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

    const linkItemUrl = menuItemsArray.find(item => item.title === props.link).url;

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionLeft}>
                <h1 className={styles.sectionTitle}>{props.title}</h1>
                <p className={styles.sectionText}>{props.text}</p>
                <p className={styles.sectionText}>{props.text2}</p>
            </div>
            <div className={styles.sectionRight}>
                {/* <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} onClick={() => handleRedirect(linkItemUrl)} /> */}
                <a href={linkItemUrl}>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
                </a>
            </div>
        </div>
    )
}
