import React from 'react';

interface InstallmentsProps {
  installments: {
    quantity: number,
    value: number
}}

const ProductInstallments: React.FC<InstallmentsProps> = ({installments}) => {
  return (
    <span>
      ou em até {installments.quantity}x de {installments.value.toFixed(2)}
    </span>
  );
}

export default ProductInstallments;