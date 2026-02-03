import React, { useState } from 'react';

interface UniversityLogoProps {
  src: string;
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * UniversityLogo Component
 * Implements a robust logo source strategy with a grayscale-to-color interaction.
 * Handles loading errors gracefully by falling back to a text-based avatar.
 */
const UniversityLogo: React.FC<UniversityLogoProps> = ({ src, name, className = "", size = 'md' }) => {
  const [error, setError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-16 w-16',
    lg: 'h-24 md:h-32 w-24 md:w-32'
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-brand-offwhite rounded-3xl border border-black/[0.04] shrink-0 ${sizeClasses[size]} ${className}`}>
        <span className="text-brand-gray font-black text-xl tracking-tighter">{name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center bg-white rounded-3xl p-3 border border-black/[0.04] transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.03] group shrink-0 ${sizeClasses[size]} ${className}`}>
      <img
        src={src}
        alt={`${name} official logo`}
        onError={() => setError(true)}
        className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105 will-change-transform"
        loading="lazy"
      />
    </div>
  );
};

export default UniversityLogo;