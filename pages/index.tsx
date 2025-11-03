// pages/index.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from '@/components/property/PropertyCard';
import type { Property } from '@/interfaces/property';

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get<Property[]>('/api/properties');
        setProperties(res.data);
      } catch (err) {
        console.error('Error fetching properties:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}
