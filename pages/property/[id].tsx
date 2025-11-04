// pages/property/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";
import type { Property } from "@/types/property";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Ensure we have a stable string id (router.query can be string | string[] | undefined)
  const propertyId = Array.isArray(id) ? id[0] : id;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchProperty = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/properties/${propertyId}`);
        if (!res.ok) throw new Error("Property not found");

        const data: Property = await res.json();
        setProperty(data);
      } catch (err: any) {
        console.error("Error fetching property:", err);
        setError(err?.message || "Failed to load property");
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  // Loading state
  if (loading) {
    return (
      <>
        <Head>
          <title>Loading Property… | ALX Listing App</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
            <p className="text-xl text-gray-600">Loading property details…</p>
          </div>
        </div>
      </>
    );
  }

  // Error or missing data
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
              The property you’re looking for doesn’t exist or has been removed.
            </p>
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </>
    );
  }

  // Success: Render details + dynamic reviews
  return (
    <>
      <Head>
        <title>{property.title} | ALX Listing App</title>
        <meta name="description" content={property.description} />
      </Head>

      <PropertyDetail property={property} />

      {/* Reviews: only render if we have a valid id */}
      {propertyId && (
        <div className="max-w-5xl mx-auto px-4">
          <ReviewSection propertyId={propertyId} />
        </div>
      )}
    </>
  );
}
