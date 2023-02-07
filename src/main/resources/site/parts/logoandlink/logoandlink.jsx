import react from "react";
import styles from './css/logoandlink.module.css';
import Button from '../../components/Button';

export default (props) => {

    const logoandlink = (
        <div className={styles.logoContainer}>
            <div className={styles.logoImageContainer}>
                <img className={styles.logoImage} src={props.logo} alt="poster image" />
            </div>
            <div className={styles.logoTextContainer}>
                <h2 className={styles.logoTitle}>{props.title}</h2>
                <p className={styles.logoText}>{props.text}</p>
                {props.visLink ? <a className={styles.link} href={props.link}>{props.title}</a> : null}
            </div>
        </div>
    )

    return (
        <>
            {logoandlink}
        </>
    )
}
