import react from "react";
import styles from './temaMenu.module.css'; 

export default ({ menuItems, backgroundColor }) => {

    const darkerBG = () => {
        // if backgroundColor is undefined, return a default color
        if (!backgroundColor) {
            return '#FF000000';
        }
        // check if the backgroundColor is a hex value, return it with the alpha value of FF
        if (backgroundColor[0] === '#') {
            return `#${backgroundColor.slice(1)}FF`;
        }
        // backgroundColor is a rgba string like rgba(74, 182, 156, 0.3), we need to change the alpha value from 0.3 to 1 for the design in figma
        const regex = /rgba\((\d+), (\d+), (\d+), (\d+.\d+)\)/;
        return backgroundColor.replace(regex, `rgba($1, $2, $3, 1)`);

    }

    return (
        <div style={{backgroundColor: darkerBG()}} className={styles.temaMenyContainer}>
            {menuItems.map((item, index) => {
                return (
                    <a className={styles.temaItem} key={index} href={item.url}>{item.title}</a>
                )
            })}
        </div>
    )
}