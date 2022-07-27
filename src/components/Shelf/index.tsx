import React, { useEffect, useState } from 'react';
import ShelfItem from './components/ShelfItem';
import '@splidejs/react-splide/css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './index.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';

interface ProductProps {
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


const Shelf: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>();

  useEffect(() => {
    fetch(`https://corebiz-test.herokuapp.com/api/v1/products`)
      .then(response => response.json())
      .then(json => {
        setProducts(json)
      });
  }, [])

  return (
    <section className="shelf container">
      <h2 className="shelf__title">
        Mais Vendidos
      </h2>
      <Splide
        options={{
          perPage: 4,
          rewind: true,
          breakpoints: {
            1080:{
              perPage: 3,
              gap: '10px',
            },
            640: {
              perPage: 2,
              arrows: false,
            },

          }
        }}
        className="shelf__items"
      >
        {products?.map((item) => (
          <SplideSlide key={item.productId}>
            <ShelfItem
              key={item.productId}
              product={item}
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default Shelf;