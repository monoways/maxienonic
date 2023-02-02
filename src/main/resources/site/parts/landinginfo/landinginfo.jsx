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
                    <Button text='For bruker' link='/brukere/tema' buttonStyle='primary' />
                    <Button text='Tilgjengelig materiale' link='/brukere/tilgjengelig-materiale' buttonStyle='secondary' />
                </div>
            </div>
            <div className={styles.heroRight}>
                <img className={styles.heroImage} src='https://i.imgur.com/foF8cua.png' alt={props.title}/>
            </div>
        </div>
    );
}
