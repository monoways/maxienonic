import react from "react";
import styles from './css/poster.module.css';
import Button from '../../components/Button';

export default (props) => {

    const poster = (
        <div className={styles.posterContainer}>
            <div className={styles.posterImageContainer}>
                <img className={styles.posterImage} src={props.image} alt="poster image" />
            </div>
            <div className={styles.posterTextContainer}>
                <h2 className={styles.posterTitle}>{props.title}</h2>
                <p className={styles.posterText}>{props.text}</p>
                {props.download ? <a className={styles.downloadLink} href={props.pdf} download>Last ned</a> : null}
            </div>
        </div>
    )

    return (
        <>
            {poster}
        </>
    )
}
