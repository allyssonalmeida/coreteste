import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import BannerImg from '../../assets/images/banner.png';

import "swiper/css";
import "swiper/css/pagination";
import './index.scss';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={BannerImg} alt="banner" />
          <div className="banner__content container">
            Olá, o que você está buscando?
            <strong>
              Criar ou migrar seu<br /> e-commerce?
            </strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImg} alt="banner" />
          <div className="banner__content">
            Olá, o que você está buscando?
            <strong>
              Criar ou migrar seu<br /> e-commerce?
            </strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImg} alt="banner" />
          <div className="banner__content">
            Olá, o que você está buscando?
            <strong>
              Criar ou migrar seu<br /> e-commerce?
            </strong>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Banner;