import React from 'react';
import StarIcon from './StarIcon';
import './index.scss';

interface ProductStarsProps{
  stars: number
}

const ProductStars: React.FC<ProductStarsProps> = ({stars}) => {
  return (
    <div className="stars__wrapper">
      <StarIcon fill={ stars >= 1 ? '#F8475F': 'none' } />
      <StarIcon fill={ stars >= 2 ? '#F8475F': 'none' } />
      <StarIcon fill={ stars >= 3 ? '#F8475F': 'none' } />
      <StarIcon fill={ stars >= 4 ? '#F8475F': 'none' } />
      <StarIcon fill={ stars >= 5 ? '#F8475F': 'none' } />
    </div>
  );
}

export default ProductStars;