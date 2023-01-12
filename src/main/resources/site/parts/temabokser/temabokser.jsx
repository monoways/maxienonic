import react from "react";
import styles from './css/temabokser.module.css';


export default (props) => {


    // Did it this way because i couldnt make the iterating classnames work properly with the css modules
    const boksConfig = [
        {
            title: 'Søvn',
            text: 'Generic Description',
            backgroundColor: '#FFF6CC',
        },
        {
            title: 'Avspenning',
            text: 'Generic Description',
            backgroundColor: '#C5DFB8',
        },
        {
            title: 'Depresjon',
            text: 'Generic Description',
            backgroundColor: '#89D0BF',
        },
        {
            title: 'Angst',
            text: 'Generic Description',
            backgroundColor: '#B3CEE4',
        },
        {
            title: 'Traumer',
            text: 'Generic Description',
            backgroundColor: '#B3CEE4',
        },
        {
            title: 'Hjelp og Støtte',
            text: 'Generic Description',
            backgroundColor: '#89D0BF',
        },
        {
            title: 'Problemeløsning',
            text: 'Generic Description',
            backgroundColor: '#C5DFB8',
        },
        {
            title: 'Kontakt andre',
            text: 'Generic Description',
            backgroundColor: '#FFF6CC',
        },
    ];

    const temaBoks = (index) => (
        <div style={{backgroundColor: boksConfig[index].backgroundColor}} className={styles.temaBoks}>
            <h2 className={styles.temaBoksTitle}>{boksConfig[index].title}</h2>
            <p className={styles.temaBoksText}>{boksConfig[index].text}</p>
        </div>
    );

    return (
        <div className={styles.temaContainer}>
            <div className={styles.twoColumnContainer}>
                <div className={styles.textLeft}>
                    <h1 className={styles.textTitle}>{props.title}</h1>
                </div>
                <div className={styles.textRight}>
                    <p className={styles.descriptionText}>{props.text}</p>
                </div>
            </div>
            <div className={styles.temaBokser}>
                {Array.from(Array(8).keys()).map((index) => (
                    temaBoks(index)
                ))}
            </div>
        </div>
    );
}
