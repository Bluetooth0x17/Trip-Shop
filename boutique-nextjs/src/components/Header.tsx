import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Ma Boutique en Ligne</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/produits">Produits</Link>
                    </li>
                    <li>
                        <Link href="/cart">Panier</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;