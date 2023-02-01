import react from "react";

import styles from './css/blogpost.module.css';

export default ({ title, preface, text, image }) => {
    return (
        <div className={styles.blogpost}>
            <h1>{title}</h1>
            <p>{preface}</p>
            <img src={image} />
            <p>{text}</p>
        </div>
    )
}