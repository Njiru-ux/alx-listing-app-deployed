// pages/api/properties/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

const properties = [
  {
    id: 1,
    title: "Luxury Villa with Ocean View",
    description: "Beautiful villa with stunning ocean views, private pool, and modern amenities. Perfect for a relaxing getaway. This spacious property features floor-to-ceiling windows, a gourmet kitchen, and luxurious bedrooms with en-suite bathrooms.",
    price: 350,
    location: "Malibu, California",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    ],
    bedrooms: 4,
    bathrooms: 3,
    rating: 4.9,
    amenities: ["Pool", "WiFi", "Kitchen", "Parking", "Ocean View", "Air Conditioning"],
    host: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    }
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    description: "Stylish apartment in the heart of downtown with easy access to restaurants, shops, and entertainment. Features contemporary design, high-speed internet, and all the amenities you need for a comfortable stay.",
    price: 180,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    ],
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.7,
    amenities: ["WiFi", "Gym", "Elevator", "24/7 Security", "Workspace", "Smart TV"],
    host: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    }
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    description: "Escape to nature in this charming cabin surrounded by pine trees and mountain views. Perfect for hiking enthusiasts and nature lovers. Features a cozy fireplace and rustic charm.",
    price: 220,
    location: "Aspen, Colorado",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266"
    ],
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.8,
    amenities: ["Fireplace", "WiFi", "Hiking Trails", "BBQ", "Mountain View", "Hot Tub"],
    host: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
    }
  },
  {
    id: 4,
    title: "Beachfront Bungalow",
    description: "Wake up to the sound of waves in this beautiful beachfront property with direct beach access. Perfect for beach lovers and water sports enthusiasts.",
    price: 400,
    location: "Miami Beach, Florida",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19"
    ],
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.9,
    amenities: ["Beach Access", "WiFi", "Kitchen", "Outdoor Shower", "Surfboards", "BBQ Grill"],
    host: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    }
  },
  {
    id: 5,
    title: "Historic City Loft",
    description: "Converted warehouse loft with exposed brick, high ceilings, and industrial charm. Located in the historic district with easy access to museums and galleries.",
    price: 195,
    location: "Boston, Massachusetts",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    ],
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.6,
    amenities: ["WiFi", "Workspace", "Laundry", "Pet Friendly", "Exposed Brick", "Art Gallery"],
    host: {
      name: "David Brown",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    }
  },
  {
    id: 6,
    title: "Desert Oasis Retreat",
    description: "Luxurious desert retreat with pool, spa, and breathtaking sunset views. Experience the beauty of the desert while enjoying modern luxury amenities.",
    price: 320,
    location: "Scottsdale, Arizona",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    ],
    bedrooms: 5,
    bathrooms: 4,
    rating: 4.8,
    amenities: ["Pool", "Spa", "WiFi", "Outdoor Kitchen", "Desert View", "Yoga Studio"],
    host: {
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100"
    }
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Convert id to number for comparison
    const propertyId = parseInt(id as string, 10);
    const property = properties.find(p => p.id === propertyId);

    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
