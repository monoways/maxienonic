import react from "react";
import styles from './css/calltoactionsection.module.css';

export default (props) => {

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionLeft}>
                <h1 className={styles.sectionTitle}>{props.title}</h1>
                <p className={styles.sectionText}>{props.text}</p>
            </div>
            <div className={styles.sectionRight}>
                <a className={styles.sectionLink} href={props.link}>{props.link}</a>
            </div>
        </div>
    )
}
