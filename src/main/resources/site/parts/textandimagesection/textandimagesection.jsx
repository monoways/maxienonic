import react from "react";
// import styles from './css/textandimagesection.module.css';

export default (props) => {
    console.log(props.image, 'this is the props.image');

    const styles = {
        sectionContainer: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr",
            gridTemplateAreas: "'sectionLeft sectionRight'",
            height: "100%",
            width: "100%",
            margin: "0",
            padding: "0",
            backgroundColor: "#F5F5F5",
        },
        sectionLeft: {
            gridArea: "sectionLeft",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            margin: "0",
            padding: "0",
        },
        sectionRight: {
            gridArea: "sectionRight",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            margin: "0",
            padding: "0",
        },
        sectionTitle: {
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#000000",
            margin: "0",
            padding: "0",
        },
        sectionText: {
            fontSize: "1rem",
            fontWeight: "normal",
            color: "#000000",
            margin: "0",
            padding: "0",
        },
        sectionImage: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
        }
    }

    return props.imagePosition === "left" ? (
        <div style={styles.sectionContainer}>
            <div style={styles.sectionLeft}>
                <img style={styles.sectionImage} src='https://i0.wp.com/thebestbrainpossible.com/wp-content/uploads/2019/11/Untitled-design-17.png?ssl=1' alt={props.title}/>
            </div>
            <div style={styles.sectionRight}>
                <h1 style={styles.sectionTitle}>{props.title}</h1>
                <p style={styles.sectionText}>{props.text}</p>
                {props.button === 'true' ? (
                    <div>
                        <a href={props.buttonLink}>{props.buttonText}</a>
                        <a href={props.buttonLink2}>{props.buttonText2}</a>
                    </div> ) : ( <></> )}
            </div>
        </div>
    ) : (
        <div style={styles.sectionContainer}>
            <div style={styles.sectionLeft}>
                <h1 style={styles.sectionTitle}>{props.title}</h1>
                <p style={styles.sectionText}>{props.text}</p>
                {props.button === 'true' ? (
                    <div>
                        <a href={props.buttonLink}>{props.buttonText}</a>
                        <a href={props.buttonLink2}>{props.buttonText2}</a>
                    </div> ) : ( <></> )}
            </div>
            <div style={styles.sectionRight}>
                <img style={styles.sectionImage} src='https://i0.wp.com/thebestbrainpossible.com/wp-content/uploads/2019/11/Untitled-design-17.png?ssl=1' alt={props.title}/>
            </div>
        </div>
    )
}
