import React from 'react';
import LogoAlt from '../../../assets/images/logoutentekst.svg';
import SiferNord from '../../../assets/images/sifernordcrop.svg';
import styles from './css/footer.module.css';


export default (props) => {

  const menuItems = {
    omoss: props.menuItemsArray.find(item => item.title === 'Om oss'),
    samarbeidspartnere: props.menuItemsArray.find(item => item.title === 'Samarbeidspartnere'),
    finansiering: props.menuItemsArray.find(item => item.title === 'Finansiering'),
  }

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerSection}>
              <div className={styles.footerLogo}>
                  <img className={styles.footerImage} src={LogoAlt} alt="logo" />
                  <img className={styles.siferNord} src={SiferNord} alt="logo" />
              </div>
              </div>
              <div className={styles.footerSection}>
              <div className={styles.footerMenu}>
                <h2 className={styles.footerMenuHeader}>Kort om SELFI</h2>
                <a className={styles.menuItem} href={menuItems.omoss.url}>{menuItems.omoss.title}</a>
                <a className={styles.menuItem} href={menuItems.samarbeidspartnere.url}>{menuItems.samarbeidspartnere.title}</a>
                <a className={styles.menuItem} href={menuItems.finansiering.url}>{menuItems.finansiering.title}</a>
              </div>
              </div>
              <div className={styles.footerSection}>
              <div className={styles.footerMenu}>
                <h2 className={styles.footerMenuHeader}>Her treffer du oss</h2>
                  <p>UNN Åsgård</p>
                  <p>Åsgårdvegen 40 </p>
                  <a href="mailto: selfi@unn.no"><p>Epost: Selfi@unn.no</p></a>
              </div>
            </div>
        </footer>
    )
}
