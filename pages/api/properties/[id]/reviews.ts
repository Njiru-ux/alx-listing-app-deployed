// pages/api/properties/[id]/reviews.ts
import type { NextApiRequest, NextApiResponse } from "next";

// Simple mock data (replace with DB call later)
const reviewsByProperty: Record<string, any[]> = {
  "1": [
    { id: "r1", comment: "Loved the stay!", rating: 5, author: "Alice", date: "2025-10-01" },
    { id: "r2", comment: "Great view and clean rooms.", rating: 4, author: "Bob", date: "2025-10-05" },
  ],
  "2": [
    { id: "r3", comment: "Quiet neighborhood, would return.", rating: 5, author: "Cathy", date: "2025-10-12" },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  if (!id) return res.status(400).json({ message: "Missing property id" });

  const data = reviewsByProperty[id] ?? [];
  return res.status(200).json(data);
}
