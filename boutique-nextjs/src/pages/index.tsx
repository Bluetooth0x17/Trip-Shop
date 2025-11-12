import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useCart } from '../hooks/useCart';
import { fetchProducts } from '../lib/api';

const HomePage = () => {
    const { cartItems } = useCart();
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const loadProducts = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
        };
        loadProducts();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <h1>Bienvenue dans notre boutique en ligne</h1>
                <div className="product-list">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;