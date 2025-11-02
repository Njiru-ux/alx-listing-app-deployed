import { PropertyProps } from "@/interfaces/property";
import Image from "next/image";

interface PropertyCardProps {
  property: PropertyProps;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={property.image || "/placeholder.jpg"}
          alt={property.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{property.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        <p className="text-gray-700 mb-3 line-clamp-2">{property.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            ${property.price}
            <span className="text-sm text-gray-500">/night</span>
          </span>
          {property.rating && (
            <span className="text-yellow-500">★ {property.rating}</span>
          )}
        </div>
      </div>
    </div>
  );
}