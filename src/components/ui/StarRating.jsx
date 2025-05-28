// components/ui/StarRating.jsx
import { Star } from 'lucide-react';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Star rendering logic from the original component
  
  return <div className="flex">{stars}</div>;
};

export default StarRating;