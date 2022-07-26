import React from 'react';
import MinicartIcon from '../../ui/MinicartIcon';

import './index.scss';

const Minicart: React.FC = () => {
  return (
    <div className="minicart">
      <button>
        <MinicartIcon />
        <span className="minicart__count">0</span>
      </button>
    </div>
  );
}

export default Minicart;