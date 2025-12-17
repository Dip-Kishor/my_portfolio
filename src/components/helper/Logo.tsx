import { useId } from 'react';

const Logo = ({ className = "w-12 h-12" }) => {
  const gradientId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient 
            id={gradientId} 
            gradientUnits="userSpaceOnUse"
            x1="0" y1="0" x2="100" y2="100"
        >
          <stop offset="0%" stopColor="#fd6f00" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>

      {/* Hexagon Border - Increased to 6 */}
      <path
        d="M50 5 L93.3 30 V80 L50 95 L6.7 80 V30 L50 5Z"
        stroke={`url(#${gradientId})`} 
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letters Group - Increased to 8 for Bold effect */}
      <g stroke={`url(#${gradientId})`} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 28 65 L 28 35 H 36 C 48 35 48 65 36 65 H 28 Z" />
        <path d="M 58 65 L 58 35 H 66 C 76 35 76 50 66 50 H 58 M 66 50 L 76 65" />
      </g>
    </svg>
  );
};

export default Logo;