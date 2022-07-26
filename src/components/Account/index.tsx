import React from 'react';
import AccountIcon from '../../ui/AccountIcon';

import './index.scss';

const Account: React.FC = () => {
  return (
    <div className="account">
      <AccountIcon />
      <span>
        Minha Conta
      </span>
    </div>
  );
}

export default Account;