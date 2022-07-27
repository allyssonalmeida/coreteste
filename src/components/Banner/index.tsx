import React from 'react';
import BannerImg from '../../assets/images/banner.png';

import './index.scss';

import { Splide, SplideSlide } from '@splidejs/react-splide';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <Splide options={{
          arrows: false,
        }}
      >
        <SplideSlide>
          <div className="banner__item">
            <img src={BannerImg} alt="banner" />
            <div className="banner__content container">
              Olá, o que você está buscando?
              <strong>
                Criar ou migrar seu<br /> e-commerce?
              </strong>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="banner__item">
            <img src={BannerImg} alt="banner" />
            <div className="banner__content">
              Olá, o que você está buscando?
              <strong>
                Criar ou migrar seu<br /> e-commerce?
              </strong>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="banner__item">
            <img src={BannerImg} alt="banner" />
            <div className="banner__content">
              Olá, o que você está buscando?
              <strong>
                Criar ou migrar seu<br /> e-commerce?
              </strong>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default Banner;