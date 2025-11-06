
import { useEffect, useState } from "react";

type Review = {
  id: string;
  comment: string;
  rating?: number;
  author?: string;
  date?: string;
};

export default function ReviewSection({ propertyId }: { propertyId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/properties/${propertyId}/reviews`);
        if (!res.ok) throw new Error('Failed to fetch reviews');
        const data = await res.json();
        if (!cancelled) setReviews(data || []);
      } catch (e) {
        console.error("Error fetching reviews:", e);
        if (!cancelled) setError("Failed to load reviews.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    if (propertyId) fetchReviews();
    return () => { cancelled = true; };
  }, [propertyId]);

  if (loading) return <p className="text-gray-500 italic mt-6">Loading reviews…</p>;
  if (error)   return <p className="text-red-500 mt-6">{error}</p>;
  if (reviews.length === 0)
    return <p className="text-gray-500 italic mt-6">No reviews yet for this property.</p>;

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Guest Reviews</h3>
      {reviews.map((r) => (
        <div key={r.id} className="rounded-lg border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-600">
              {r.author ? `by ${r.author}` : "Anonymous"}
              {r.date ? ` • ${new Date(r.date).toLocaleDateString()}` : ""}
            </span>
            {typeof r.rating === "number" && (
              <span className="text-sm">⭐ {r.rating}/5</span>
            )}
          </div>
          <p className="text-gray-800">{r.comment}</p>
        </div>
      ))}
    </div>
  );
}