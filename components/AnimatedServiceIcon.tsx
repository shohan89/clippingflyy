
import React from 'react';

interface AnimatedServiceIconProps {
  type: string;
  isActive: boolean;
}

const AnimatedServiceIcon: React.FC<AnimatedServiceIconProps> = ({ type, isActive }) => {
  const commonClasses = `w-12 h-12 transition-colors duration-500 ${isActive ? 'text-white' : 'text-blue-600'}`;

  switch (type) {
    // Technical Services Icons
    case 'clipping':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-pulse-scale`}>
          <path d="M12 3v18M3 12h18" strokeDasharray="4 4" className="opacity-40" />
          <rect x="8" y="8" width="8" height="8" rx="1" />
          <path d="m21 21-4.35-4.35" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      );
    case 'bgremove':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-bounce`}>
          <rect width="18" height="18" x="3" y="3" rx="2" strokeDasharray="2 2" />
          <path d="M15 8a3 3 0 1 0-6 0c0 1.66 1.34 3 3 3s3-1.34 3-3Z" fill="currentColor" className={isActive ? 'opacity-100' : 'opacity-20'} />
          <path d="M7 16c0-1.66 2.24-3 5-3s5 1.34 5 3" />
        </svg>
      );
    case 'masking':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-sway`}>
          <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12" className="opacity-50" />
          <path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6Z" fill="currentColor" className={isActive ? 'opacity-60' : 'opacity-20'} />
        </svg>
      );
    case 'shadow':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-pulse-scale`}>
          <circle cx="12" cy="10" r="6" />
          <ellipse cx="12" cy="20" rx="8" ry="2" fill="currentColor" className="opacity-20" />
        </svg>
      );
    case 'retouching':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-bounce`}>
          <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
          <path d="m14 7 3 3" />
          <path d="M5 11v-1" className="animate-pulse" />
          <path d="M19 15v-1" className="animate-pulse" />
        </svg>
      );
    case 'color':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-spin-slow`}>
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      );
    case 'ghost':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-sway`}>
          <path d="M9 10a3 3 0 1 1 6 0v4a3 3 0 1 1-6 0Z" strokeDasharray="2 2" />
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      );
    case 'mirror':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-pulse-scale`}>
          <path d="m15 12-3-3-3 3" />
          <path d="m15 12-3 3-3-3" className="opacity-30" />
          <path d="M12 22V2" strokeDasharray="4 4" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'vector':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-spin-slow`}>
          <path d="M7 7h10v10H7z" />
          <path d="M3 7h4" />
          <path d="M17 7h4" />
          <path d="M7 3v4" />
          <path d="M17 3v4" />
          <path d="M3 17h4" />
          <path d="M17 17h4" />
          <path d="M7 17v4" />
          <path d="M17 17v4" />
        </svg>
      );

    // Industry Icons
    case 'ind-ecommerce':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-bounce`}>
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case 'ind-fashion':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-sway`}>
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      );
    case 'ind-realestate':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-pulse-scale`}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'ind-jewelry':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-spin-slow`}>
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M11 3 8 9l4 12 4-12-3-6" />
          <path d="M2 9h20" />
        </svg>
      );
    case 'ind-automotive':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-bounce`}>
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case 'ind-product':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${commonClasses} animate-icon-pulse-scale`}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" fill="currentColor" className="opacity-20" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${commonClasses} animate-icon-bounce`}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export default AnimatedServiceIcon;
