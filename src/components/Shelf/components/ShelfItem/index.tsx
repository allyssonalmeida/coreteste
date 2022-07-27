import React, { Fragment, useContext } from 'react';
import { CartContext, CartContextType } from '../../../../context/CartContext';
import ProductStars from '../ProductStars';

import './index.scss';

interface ShelfItemProps{
  product: {
    productId: number
    productName: string
    stars: number
    imageUrl: string
    listPrice: number | null
    price: number
    installments: [{
      quantity: number
      value: number
    }]
  } 
}

const ShelfItem: React.FC<ShelfItemProps> = ({product}) => {
  const { addToCart } = useContext(CartContext) as CartContextType

  const formatNumber = (value: number) =>{
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value/100)
  }

  function handleCart(){
    addToCart({
      id: product.productId,
      name: product.productName,
      img: product.imageUrl,
      price: product.price,
      listprice: product.listPrice,
      quantity: 1,
    })
  }

  return (
    <div className={`product ${product.listPrice ? 'product--is-off': ''}`}>
      <div className="product__off">
        <span>OFF</span>
      </div>
      <a href="/#" className="product__image">
        <img 
          src={product.imageUrl}
          alt={product.productName}
        />
      </a>
      <div className="product__info">
        <a href="/#" className="product__title">
          {product.productName}
        </a>
        <a href="/#" className="product__stars">
            <ProductStars stars={product.stars} />
        </a>
        <a href="/#" className="product__price">
          <span className="product__list-price">
            {product.listPrice && <Fragment>de {formatNumber(product.listPrice)}</Fragment>}
          </span>
          <span className="product__best-price">
            por {formatNumber(product.price)}
          </span>
          <span className="product__installments">
            {product.installments.length > 0 && 
              <Fragment>ou em {product.installments[0].quantity}x de {formatNumber(product.installments[0].value)}</Fragment>
            }
          </span>
        </a>
        <button className="product__add-to-cart" onClick={handleCart}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ShelfItem;