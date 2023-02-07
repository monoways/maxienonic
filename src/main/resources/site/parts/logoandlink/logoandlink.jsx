import react from "react";
import styles from './css/logoandlink.module.css';
import Button from '../../components/Button';

export default (props) => {

    const logoandlink = (
        <div className={styles.logoContainer}>
            <div className={styles.logoImageContainer}>
                <a href={props.link}><img className={styles.logoImage} src={props.logo} alt="poster image" /></a>
            </div>
            <div className={styles.logoTextContainer}>
                <p className={styles.logoText}>{props.text}</p>
                {props.visLink ? <a className={styles.link} href={props.link} target='blank'>{props.title}</a> : null}
            </div>
        </div>
    )

    return (
        <>
            {logoandlink}
        </>
    )
}
