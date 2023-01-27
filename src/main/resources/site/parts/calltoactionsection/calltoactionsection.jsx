import react from "react";
import styles from './css/calltoactionsection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default (props) => {

    const handleRedirect = (url) => {
        console.log(url, 'url, in the calltoaction component');
        window.location.href = url;
    }

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionLeft}>
                <h1 className={styles.sectionTitle}>{props.title}</h1>
                <p className={styles.sectionText}>{props.text}</p>
                <p className={styles.sectionText}>{props.text2}</p>
            </div>
            <div className={styles.sectionRight}>
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} onClick={() => handleRedirect(props.url)} />
            </div>
        </div>
    )
}
