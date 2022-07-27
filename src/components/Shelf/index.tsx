import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ShelfItem from './components/ShelfItem';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './index.scss';

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
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={99}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: false,
            pagination: true
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
            navigation: false,
            pagination: true
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="shelf__items"
      >
        {products?.map((item) => (
          <SwiperSlide key={item.productId}>
            <ShelfItem
              key={item.productId}
              product={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Shelf;