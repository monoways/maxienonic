import React from 'react';

import styles from './css/bigbutton.module.css';

export default (props) => {

    const buttonStyle = props.buttonStyle

    return (
        <div className={styles.bigButton}>
            {buttonStyle === 'primary' ? <a className={styles.primary} href={props.link}>{props.text}</a> : <a className={styles.secondary} href={props.link}>{props.text}</a>}
        </div>
    );
};