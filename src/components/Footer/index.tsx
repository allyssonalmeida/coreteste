import React from 'react';
import Logo from '../../Icons/Logo';
import VtexIcon from '../../Icons/VtexIcon';

import './index.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__location">
        <strong>Localização</strong>
        <p>
          Avenida Andrômeda, 2000. Bloco 6 e 8<br />
          Alphavile SP<br />
          brasil@corebiz.ag<br />
          +55 11 3090 1039
        </p>
      </div>
      <div className="footer__ctas">
        <a href="/#" className="contact">
          <span>Entre em contato</span>
        </a>
        <a href="/#" className="support">
          <span>Fale com o nosso consultor online</span>
        </a>
      </div>
      <div className="footer__madeby">
        <a href="/#" className="corebiz">
          <Logo color="#fff" />
        </a>
        <a href="/#" className="vtex">
          <VtexIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;