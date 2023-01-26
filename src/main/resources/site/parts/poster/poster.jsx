import react from "react";
import styles from './css/poster.module.css';
import Button from '../../components/Button';

export default (props) => {

    // harcoded image src for now
    // props.image = 'https://i.imgur.com/IP9eqYE.png';

    // hardcoded poster 
    const poster = (
        <div className={styles.posterContainer}>
            <div className={styles.posterImageContainer}>
                <img className={styles.posterImage} src={props.image} alt="poster image" />
            </div>
            <div className={styles.posterTextContainer}>
                <h2 className={styles.posterTitle}>{props.title}</h2>
                <p className={styles.posterText}>{props.text}</p>
                <a className={styles.downloadLink} href="#">Last ned</a>
                {/* <Button text={props.buttonText} link={props.buttonLink} /> */}
            </div>
        </div>
    )

    return (
        <>
        {/* <div className={styles.posterGallery}> */}
            {poster}
            {/* {poster} */}
            {/* {poster} */}
            {/* {poster} */}
        {/* </div> */}
        </>
    )
}
