import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard"; // assumed to exist

// Minimal type to keep TS happy if you don't have shared interfaces yet
type Property = {
  id: string | number;
  title?: string;
  price?: number;
  imageUrl?: string;
  location?: string;
  // add any other fields your PropertyCard expects
};

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProperties = async () => {
      try {
        // The spec asks for this exact path
        const res = await axios.get<Property[]>("/api/properties");
        if (!isMounted) return;
        setProperties(res.data ?? []);
      } catch (err) {
        console.error("Error fetching properties:", err);
        if (isMounted) setError("Failed to load properties.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProperties();

    // safety to avoid state update after unmount
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  if (error) {
    return (
      <div className="p-6 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  if (properties.length === 0) {
    return <p className="p-6">No properties found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
