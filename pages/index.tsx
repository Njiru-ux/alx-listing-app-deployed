// pages/index.tsx
import { useEffect, useState } from "react";
import Head from "next/head";
import api from "@/lib/api";
import PropertyCard from "@/components/property/PropertyCard";
import { Property } from "@/types/property";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("Fetching properties..."); // DEBUG
        const response = await api.get("/properties");
        console.log("Response received:", response.data); // DEBUG
        console.log("Number of properties:", response.data.length); // DEBUG
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Add this debug log
  console.log("Current properties state:", properties);
  console.log("Loading:", loading);
  console.log("Error:", error);

  // Loading State
  if (loading) {
    return (
      <>
        <Head>
          <title>Loading Properties... | ALX Listing App</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
            <p className="text-xl text-gray-600">Loading properties...</p>
          </div>
        </div>
      </>
    );
  }

  // Error State
  if (error) {
    return (
      <>
        <Head>
          <title>Error | ALX Listing App</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
            <p className="text-red-600 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  // Empty State
  if (properties.length === 0) {
    return (
      <>
        <Head>
          <title>No Properties Available | ALX Listing App</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <p className="text-xl text-gray-600">No properties available at the moment.</p>
            <p className="text-gray-500 mt-2">Please check back later!</p>
          </div>
        </div>
      </>
    );
  }

  // Success State - Display Properties
  return (
    <>
      <Head>
        <title>Property Listings | ALX Listing App</title>
        <meta name="description" content="Browse our collection of amazing properties" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold text-gray-900">Available Properties</h1>
            <p className="text-gray-600 mt-2">
              Discover your perfect stay from our collection of {properties.length} properties
            </p>
          </div>
        </header>
{/* Property Grid */}
<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {properties.map((property) => (
      <div key={property.id}>
        <PropertyCard property={property} />
      </div>
    ))}
  </div>
</div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
            <p>&copy; 2024 ALX Listing App. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}