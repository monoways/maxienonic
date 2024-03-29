import react, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';


import styles from './temaMenuMobile.module.css';

export default (props) => {

    const [temaMenuOpen, setTemaMenuOpen] = useState(false);

    const activeMenuItem = props.menuItemsArray.find(item => item.isActive);

    const handleClick = () => {
        setTemaMenuOpen(!temaMenuOpen);
    }


    return (
        <div className={styles.temaMenuContainer}>
            <div onClick={handleClick} className={styles.dropdwonContainer}>
                <h2 className={styles.dropdownBtn}>
                    {`${activeMenuItem.title} `}
                    <FontAwesomeIcon icon={temaMenuOpen ? faArrowDown : faArrowRight} className={styles.arrow} />
                </h2>
                {temaMenuOpen && (
                <div className={styles.dropdown}>
                    {props.menuItems.map((item, index) => {
                        return (
                            <a key={index} className={styles.menuItem} href={item.url}>{item.title}</a>
                        )
                    })}
                </div>
                )}
            </div>
        </div>
    )
}
