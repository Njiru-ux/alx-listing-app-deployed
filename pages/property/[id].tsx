// pages/property/[id].tsx
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import PropertyDetail from "@/components/property/PropertyDetail";
import { Property } from "@/types/property";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    setError(null);

    fetch(`/api/properties/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Property not found');
        }
        return response.json();
      })
      .then(data => {
        setProperty(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching property:", err);
        setError(err.message || "Failed to load property");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading Property... | ALX Listing App</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
            <p className="text-xl text-gray-600">Loading property details...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !property) {
    return (
      <>
        <Head>
          <title>Property Not Found | ALX Listing App</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md px-4">
            <svg
              className="mx-auto h-16 w-16 text-red-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {error || "Property not found"}
            </h2>
            <p className="text-gray-600 mb-6">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{property.title} | ALX Listing App</title>
        <meta name="description" content={property.description} />
      </Head>
      <PropertyDetail property={property} />
    </>
  );
}
