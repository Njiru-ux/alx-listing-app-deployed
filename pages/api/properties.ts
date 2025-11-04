// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const properties = [
      {
        id: 1,
        title: "Luxury Villa with Ocean View",
        description: "Beautiful villa with stunning ocean views, private pool, and modern amenities. Perfect for a relaxing getaway.",
        price: 350,
        location: "Malibu, California",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        bedrooms: 4,
        bathrooms: 3,
        rating: 4.9,
        amenities: ["Pool", "WiFi", "Kitchen", "Parking"],
      },
      {
        id: 2,
        title: "Modern Downtown Apartment",
        description: "Stylish apartment in the heart of downtown with easy access to restaurants, shops, and entertainment.",
        price: 180,
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        bedrooms: 2,
        bathrooms: 2,
        rating: 4.7,
        amenities: ["WiFi", "Gym", "Elevator", "24/7 Security"],
      },
      {
        id: 3,
        title: "Cozy Mountain Cabin",
        description: "Escape to nature in this charming cabin surrounded by pine trees and mountain views.",
        price: 220,
        location: "Aspen, Colorado",
        image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.8,
        amenities: ["Fireplace", "WiFi", "Hiking Trails", "BBQ"],
      },
      {
        id: 4,
        title: "Beachfront Bungalow",
        description: "Wake up to the sound of waves in this beautiful beachfront property with direct beach access.",
        price: 400,
        location: "Miami Beach, Florida",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.9,
        amenities: ["Beach Access", "WiFi", "Kitchen", "Outdoor Shower"],
      },
      {
        id: 5,
        title: "Historic City Loft",
        description: "Converted warehouse loft with exposed brick, high ceilings, and industrial charm.",
        price: 195,
        location: "Boston, Massachusetts",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.6,
        amenities: ["WiFi", "Workspace", "Laundry", "Pet Friendly"],
      },
      {
        id: 6,
        title: "Desert Oasis Retreat",
        description: "Luxurious desert retreat with pool, spa, and breathtaking sunset views.",
        price: 320,
        location: "Scottsdale, Arizona",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        bedrooms: 5,
        bathrooms: 4,
        rating: 4.8,
        amenities: ["Pool", "Spa", "WiFi", "Outdoor Kitchen"],
      },
    ];
    
    // Send response immediately (no timeout)
    res.status(200).json(properties);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}