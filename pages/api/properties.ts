// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Property } from '@/interfaces/property';

const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Cozy Studio',
    imageUrl: '/file.svg', // or any image under /public
    pricePerNight: 45,
    rating: 4.2,
    location: 'Nairobi',
    description: 'Central studio near everything'
  },
  {
    id: '2',
    title: 'Luxury Apartment',
    imageUrl: '/globe.svg',
    pricePerNight: 120,
    rating: 4.8,
    location: 'Mombasa',
    description: 'Sea view apartment with pool'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property[]>
) {
  if (req.method === 'GET') {
    return res.status(200).json(MOCK_PROPERTIES);
  }
  res.status(405).end(); // Method Not Allowed
}
