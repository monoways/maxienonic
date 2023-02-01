import react from "react";
import styles from './css/textandimagesection.module.css';

export default (props) => {

    // const styles = {
    //     sectionContainer: {
    //         display: "grid",
    //         gridTemplateColumns: "1fr 1fr",
    //         gridTemplateRows: "1fr",
    //         gridTemplateAreas: "'sectionLeft sectionRight'",
    //         height: "100%",
    //         width: "100%",
    //         margin: "0",
    //         padding: "0",
    //         backgroundColor: "#F5F5F5",
    //     },
    //     sectionLeft: {
    //         gridArea: "sectionLeft",
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         height: "100%",
    //         width: "100%",
    //         margin: "0",
    //         padding: "0",
    //     },
    //     sectionRight: {
    //         gridArea: "sectionRight",
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         height: "100%",
    //         width: "100%",
    //         margin: "0",
    //         padding: "0",
    //     },
    //     sectionTitle: {
    //         fontSize: "2rem",
    //         fontWeight: "bold",
    //         color: "#000000",
    //         margin: "0",
    //         padding: "0",
    //     },
    //     sectionText: {
    //         fontSize: "1rem",
    //         fontWeight: "normal",
    //         color: "#000000",
    //         margin: "0",
    //         padding: "0",
    //     },
    //     sectionImage: {
    //         height: "100%",
    //         width: "100%",
    //         objectFit: "cover",
    //     }
    // }

    return props.imagePosition === "left" ? (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionLeft}>
                <img className={styles.sectionImage} src={props.image} alt={props.title}/>
            </div>
            <div className={styles.sectionRight}>
                <div className={styles.sectionTextContainer}>
                    <h1 className={styles.sectionTitle}>{props.title}</h1>
                    <p className={styles.sectionText}>{props.text}</p>
                    {props.button === 'true' ? (
                        <div>
                            <a href={props.buttonLink}>{props.buttonText}</a>
                            <a href={props.buttonLink2}>{props.buttonText2}</a>
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
                    {props.button === 'true' ? (
                        <div>
                            <a href={props.buttonLink}>{props.buttonText}</a>
                            <a href={props.buttonLink2}>{props.buttonText2}</a>
                        </div> ) : ( <></> )}
                </div>
            </div>
            <div className={styles.sectionRight}>
                <img className={styles.sectionImage} src={props.image} alt={props.title}/>
            </div>
        </div>
    )
}
