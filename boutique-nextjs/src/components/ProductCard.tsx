import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, imageUrl, description }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price.toFixed(2)} €</p>
      <a href={`/produits/${id}`} className="btn">Voir le produit</a>
    </div>
  );
};

export default ProductCard;