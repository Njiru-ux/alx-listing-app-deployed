// types/property.ts
export interface Property {
  id: string | number;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  images?: string[];
  bedrooms?: number;
  bathrooms?: number;
  rating?: number;
  amenities?: string[];
  host?: {
    name: string;
    avatar?: string;
  };
}

export interface PropertyCardProps {
  property: Property;
}

export interface Review {
  id: string | number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Booking {
  propertyId: string | number;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  guestName?: string;
  guestEmail?: string;
}