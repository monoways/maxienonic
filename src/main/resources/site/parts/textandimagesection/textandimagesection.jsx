import react from "react";
import styles from './css/textandimagesection.module.css';

export default (props) => {

    return props.imagePosition === "left" ? (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionLeft}>
                <img className={styles.sectionImage} src={props.image} alt={props.title}/>
            </div>
            <div className={styles.sectionRight}>
                <div className={styles.sectionTextContainer}>
                    <h1 className={styles.sectionTitle}>{props.title}</h1>
                    <p className={styles.sectionText}>{props.text}</p>
                    <div className={styles.htmltextContainer} dangerouslySetInnerHTML={{__html: props.testText}} />
                    {props.button === 'true' ? (
                        <div>
                            <a target='_blank' href={props.buttonLink}>{props.buttonText}</a>
                            <a target='_blank' href={props.buttonLink2}>{props.buttonText2}</a>
                        </div> ) : ( <></> )}
                </div>
            </div>
        </div>
    ) : (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionLeft}>
                <div className={styles.sectionTextContainer}>
                    <h1 className={styles.sectionTitle}>{props.title}</h1>
                    <p className={styles.sectionText}>{props.text}</p>
                    <div className={styles.htmltextContainer} dangerouslySetInnerHTML={{__html: props.testText}} />
                    {props.button === 'true' ? (
                        <div className={styles.linkContainer}>
                            <a target='_blank' className={styles.link} href={props.buttonLink}>{props.buttonText}</a>
                            <a target='_blank' className={styles.link} href={props.buttonLink2}>{props.buttonText2}</a>
                        </div> ) : ( <></> )}
                </div>
            </div>
            <div className={styles.sectionRight}>
                <img className={styles.sectionImage} src={props.image} alt={props.title}/>
            </div>
        </div>
    )
}
