import React from 'react';
import LogoAlt from '../../assets/images/logoutentekst.svg';


export default (props) => {
    return (
        <footer className="footerContainer">
            <div className="footer-section">
              <div className="footer-logo">
                  <img className="footer-image" src={LogoAlt} alt="logo" />
              </div>
              </div>
              <div className="footer-section">
              <div className="footer-menu">
                <h2 className="footer-menu-header">Kort om Selfi</h2>
                  <p>Selvhjelp og psykisk helse</p>
                  <p>Samarbeidspartnere</p>
                  <p>Finansiering</p>
              </div>
              </div>
              <div className="footer-section">
              <div className="footer-menu">
                <h2 className="footer-menu-header">Om oss</h2>
                  <p>Kontaktinfo</p>
                  <p>Her finner du oss</p>
              </div>
            </div>
        </footer>
    )
}
