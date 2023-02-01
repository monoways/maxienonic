import react from "react";
import styles from './css/landinginfo.module.css';
import Button from '../../components/Button';

// import menneske from '../../../assets/images/menneske.png';

export default (props) => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroLeft}>
                <h1 className={styles.heroTitle}>{props.title}</h1>
                <p className={styles.heroText}>{props.text}</p>
                <div className={styles.buttonContainer}>
                    <Button text='For bruker' link='/admin/site/preview/default/draft/selfi/brukere' buttonStyle='primary' />
                    <Button text='For hjelper' href='#' buttonStyle='secondary' />
                </div>
            </div>
            <div className={styles.heroRight}>
                <img className={styles.heroImage} src='https://i.imgur.com/foF8cua.png' alt={props.title}/>
            </div>
        </div>
    );
}
