import type { NextApiRequest, NextApiResponse } from 'next';

const produits = [
  { id: 1, nom: 'Produit 1', prix: 29.99 },
  { id: 2, nom: 'Produit 2', prix: 39.99 },
  { id: 3, nom: 'Produit 3', prix: 49.99 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(produits);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}