import React from 'react';

import styles from './breadcrumbMenu.module.css';

export default ({ breadcrumbItems }) => {
    
        return (
            <div className={styles.breadcrumbContainer} aria-label='breadcrumbMenu'>
                {breadcrumbItems.map((item, index) => {
                    {return index !== breadcrumbItems.length - 1 ?
                        <a className={styles.breadcrumbItem} key={index} href={item.url}>{item.title} &gt; </a> :
                        <a className={styles.breadcrumbItem} key={index} href={item.url}>{item.title}</a>
                    }
                })}

            </div>
        )
    }