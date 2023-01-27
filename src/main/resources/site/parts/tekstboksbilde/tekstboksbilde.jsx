import react from "react";
// import styles from './css/tekstboksbilde.module.css';

export default (props) => {

    const styles = {
        sectionContainer: {
            width: "90%",
            margin: "auto",
            backgroundImage: `url('${props.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "50vh",
            display: "flex",
            position: "relative",
            margin: "2.5rem auto",
        },
        textBox: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            maxWidth: "20rem",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            color: "white",
        }
    }


    return (
        <div style={styles.sectionContainer}>
            <div style={styles.textBox}>
                <h1 style={styles.title}>{props.title}</h1>
                <p style={styles.text}>{props.text}</p>
            </div>
        </div>
    )
}
