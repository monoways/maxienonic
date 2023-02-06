import react from "react";
import styles from './css/temabokser.module.css';


export default (props) => {

    const menuItems = props.menuItems.menuItems;

    const brukere = menuItems.find(item => item.title === 'Brukere');
    const tema = brukere && brukere.children && brukere.children.find(item => item.title === 'Tema');

    const handleClick = (url) => {
        window.location.href = url;
    }

    // Horrible i know, but it works for now
    const colorConfig = [
        '#FFF6CC',
        '#C5DFB8',  
        '#89D0BF',
        '#B3CEE4',
        '#B3CEE4',
        '#89D0BF',
        '#C5DFB8',
        '#FFF6CC',
        '#FFF6CC',
        '#C5DFB8',  
        '#89D0BF',
        '#B3CEE4',
        '#B3CEE4',
        '#89D0BF',
        '#C5DFB8',
        '#FFF6CC',
        '#FFF6CC',
        '#C5DFB8',  
        '#89D0BF',
        '#B3CEE4',
        '#B3CEE4',
        '#89D0BF',
        '#C5DFB8',
        '#FFF6CC',
    ]

    const temaBoks = (item, index) => (
        <div onClick={() => { handleClick(item.url) }} style={{backgroundColor: colorConfig[index]}} className={styles.temaBoks}>
            <h2 className={styles.temaBoksTitle}>{item.title}</h2>
            {/* <p className={styles.temaBoksText}>{tema.children[index].text}</p> */}
        </div>
    );

    return (
        <div className={styles.temaContainer}>
            <div className={styles.twoColumnContainer}>
                <div className={styles.textLeft}>
                    <h1 className={styles.textTitle}>{props.title}</h1>
                </div>
                <div className={styles.textRight}>
                    {/* <p className={styles.descriptionText}>{props.text}</p> */}
                </div>
            </div>
            <div className={styles.temaBokser}>
                {tema.children.map((item, index) => {
                    return (
                        temaBoks(item, index)
                    )
                }
                )}
                {/* // {Array.from(Array(8).keys()).map((index) => (
                //     temaBoks(index)
                // ))} */}
            </div>
        </div>
    );
}
