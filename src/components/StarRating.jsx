import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function normalizeRating(raw) {
  if (raw == null || raw === "") return 0;
  const n = Number(raw);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(5, n));
}

export { normalizeRating };

/**
 * Five-star display: filled gold, optional half star, empty gray.
 */
export default function StarRating({ rating, className = "", size }) {
  const r = normalizeRating(rating);
  const fullCount = Math.floor(r);
  const showHalf = r - fullCount >= 0.5 && fullCount < 5;

  const iconProps = size != null ? { size } : {};

  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < fullCount) {
      return <FaStar key={i} color="#ffc107" {...iconProps} />;
    }
    if (i === fullCount && showHalf) {
      return <FaStarHalfAlt key={i} color="#ffc107" {...iconProps} />;
    }
    return <FaStar key={i} color="#e4e5e9" {...iconProps} />;
  });

  return (
    <span
      className={`d-inline-flex align-items-center ${className}`.trim()}
      style={{ gap: "3px" }}
      role="img"
      aria-label={`${r} out of 5 stars`}
    >
      {stars}
    </span>
  );
}