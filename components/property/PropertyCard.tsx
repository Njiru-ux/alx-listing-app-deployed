import Image from "next/image";
import Link from "next/link";
import { PropertyCardProps } from "@/types/property";

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/properties/${property.id}`}>
        {/* Property Image */}
        <div className="relative h-48 w-full bg-gray-200">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Rating Badge */}
          {property.rating && (
            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">{property.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-1">
            {property.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {property.description}
          </p>

          {/* Location */}
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{property.location}</span>
          </div>

          {/* Bedrooms and Bathrooms */}
          {(property.bedrooms || property.bathrooms) && (
            <div className="flex gap-4 text-sm text-gray-600 mb-3">
              {property.bedrooms && (
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  {property.bedrooms} bed{property.bedrooms > 1 ? 's' : ''}
                </span>
              )}
              {property.bathrooms && (
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  {property.bathrooms} bath{property.bathrooms > 1 ? 's' : ''}
                </span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div>
              <span className="text-2xl font-bold text-blue-600">${property.price}</span>
              <span className="text-gray-500 text-sm"> / night</span>
            </div>
            <span className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}