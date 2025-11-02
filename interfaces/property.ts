export interface PropertyProps {
  id: number;
  name: string;
  description: string;
  location: string;
  price: number;
  image: string;
  rating?: number;
  amenities?: string[];
}