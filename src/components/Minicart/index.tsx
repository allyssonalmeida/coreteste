import React, { useContext} from 'react';
import { CartContext, CartContextType } from '../../context/CartContext';
import MinicartIcon from '../../Icons/MinicartIcon';

import './index.scss';

const Minicart: React.FC = () => {
  const { cartItems } = useContext(CartContext) as CartContextType

  return (
    <div className="minicart">
      <button>
        <MinicartIcon />
        <span className="minicart__count">{cartItems.length > 0 ? cartItems.length : 0 }</span>
      </button>
    </div>
  );
}

export default Minicart;