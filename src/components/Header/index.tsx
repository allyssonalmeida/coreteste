import React from 'react';
import Account from '../Account';
import Logo from '../../Icons/Logo';
import MenuMobile from '../MenuMobile';
import Minicart from '../Minicart';
import Search from '../Search';

import './index.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content container">
        <MenuMobile />
        <Logo color="#000" />
        <Search />
        <div className="header__account">
          <Account />
          <Minicart />
        </div>
      </div>
    </header>
  );
}

export default Header;