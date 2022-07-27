import React from 'react';
import AccountIcon from '../../Icons/AccountIcon';

import './index.scss';

const Account: React.FC = () => {
  return (
    <a href="/#" className="account">
      <AccountIcon />
      <span>
        Minha Conta
      </span>
    </a>
  );
}

export default Account;