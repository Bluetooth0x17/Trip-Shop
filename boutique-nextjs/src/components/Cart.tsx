import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart: React.FC = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Votre Panier</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <span>{item.name} - {item.price}€</span>
                                <button onClick={() => removeFromCart(item.id)}>Retirer</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Vider le Panier</button>
                </div>
            )}
        </div>
    );
};

export default Cart;