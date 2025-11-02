import { NextResponse } from "next/server";

// Mock property data
const properties = [
  {
    id: 1,
    name: "Luxury Villa in Bali",
    description: "Beautiful beachfront villa with stunning ocean views",
    location: "Bali, Indonesia",
    price: 250,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Modern Apartment in Tokyo",
    description: "Stylish apartment in the heart of Tokyo",
    location: "Tokyo, Japan",
    price: 180,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Cozy Cottage in Paris",
    description: "Charming cottage near the Eiffel Tower",
    location: "Paris, France",
    price: 200,
    image: "https://images.unsplash.com/photo-1502672260066-6bc35da0f1f4?w=800",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Beach House in Malibu",
    description: "Stunning beach house with private access",
    location: "Malibu, USA",
    price: 400,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Mountain Cabin in Switzerland",
    description: "Peaceful cabin with mountain views",
    location: "Swiss Alps, Switzerland",
    price: 300,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Penthouse in Dubai",
    description: "Luxurious penthouse with city skyline views",
    location: "Dubai, UAE",
    price: 500,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    rating: 4.9,
  },
];

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return NextResponse.json(properties);
}