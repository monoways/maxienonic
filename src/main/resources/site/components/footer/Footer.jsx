import React from 'react';
import LogoAlt from '../../../assets/images/logoutentekst.svg';
import styles from './css/footer.module.css';


export default (props) => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerSection}>
              <div className={styles.footerLogo}>
                  <img className={styles.footerImage} src={LogoAlt} alt="logo" />
              </div>
              </div>
              <div className={styles.footerSection}>
              <div className={styles.footerMenu}>
                <h2 className={styles.footerMenuHeader}>Kort om Selfi</h2>
                  <p>Om oss</p>
                  <p>Samarbeidspartnere</p>
                  <p>Finansiering</p>
              </div>
              </div>
              <div className={styles.footerSection}>
              <div className={styles.footerMenu}>
                <h2 className={styles.footerMenuHeader}>Her treffer du oss</h2>
                  <p>UNN Åsgård</p>
                  <p>Åsgårdvegen 40 </p>
              </div>
            </div>
        </footer>
    )
}
