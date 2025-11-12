import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <p>&copy; {new Date().getFullYear()} Votre Boutique. Tous droits réservés.</p>
                <nav>
                    <a href="/terms">Conditions d'utilisation</a>
                    <a href="/privacy">Politique de confidentialité</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;