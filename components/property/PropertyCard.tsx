// components/property/PropertyCard.tsx
type Props = { property: any };
export default function PropertyCard({ property }: Props) {
  return (
    <div className="rounded border p-4">
      <img
        src={property.imageUrl || "/placeholder.png"}
        alt={property.title || "Property"}
        className="mb-2 h-40 w-full rounded object-cover"
      />
      <h3 className="font-semibold">{property.title || "Untitled property"}</h3>
      <p className="text-sm text-gray-600">
        {property.location || "Unknown location"}
      </p>
      <p className="mt-1 font-bold">
        {property.price != null ? `$${property.price}` : "—"}
      </p>
    </div>
  );
}
