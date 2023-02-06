import React from "react";
import Regions from '@enonic/react-components/Regions';

import styles from './container.module.css'


export default function container(props) {
    return (
        <div style={{backgroundColor:`${props.backgroundColor}`, maxWidth:props.maxWidth}} class={styles.containerLayout}>
            <Regions {...props} />
        </div>
    )
}