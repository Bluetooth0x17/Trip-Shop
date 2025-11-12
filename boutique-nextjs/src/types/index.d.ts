// Ce fichier définit les types TypeScript utilisés dans l'application.

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextType = {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
};