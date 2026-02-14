
import React from 'react';

interface BenefitIllustrationProps {
  type: 'hand' | 'pixel' | 'support' | 'turnaround' | 'budget' | 'format';
}

const BenefitIllustration: React.FC<BenefitIllustrationProps> = ({ type }) => {
  const commonClasses = "w-48 h-48 mx-auto mb-6";

  switch (type) {
    case 'hand':
      return (
        <div className={commonClasses}>
          <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="40" y="40" width="120" height="80" rx="4" fill="#E2E8F0" />
            <rect x="50" y="50" width="100" height="60" rx="2" fill="white" className="animate-pulse" />
            <circle cx="100" cy="80" r="15" stroke="#3B82F6" strokeWidth="2" className="animate-icon-pulse-scale" />
            <path d="M140 100 L160 130 L180 120 Z" fill="#1E293B" className="animate-icon-sway" />
            <rect x="30" y="110" width="20" height="30" fill="#3B82F6" className="animate-icon-bounce" />
          </svg>
        </div>
      );
    case 'pixel':
      return (
        <div className={commonClasses}>
          <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M60 40 Q100 20 140 40 Q160 80 140 120 Q100 140 60 120 Q40 80 60 40" stroke="#1E293B" strokeWidth="2" />
            <path d="M100 60 Q120 60 120 80" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
            <circle cx="130" cy="100" r="30" stroke="#3B82F6" strokeWidth="3" fill="white" fillOpacity="0.8" className="animate-icon-pulse-scale" />
            <line x1="150" y1="120" x2="170" y2="140" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
            <rect x="120" y="90" width="20" height="20" fill="#3B82F6" fillOpacity="0.2" className="animate-pulse" />
          </svg>
        </div>
      );
    case 'support':
      return (
        <div className={commonClasses}>
          <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="70" cy="60" r="20" fill="#1E293B" className="animate-icon-bounce" />
            <path d="M40 120 Q70 90 100 120" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" />
            <rect x="110" y="40" width="60" height="40" rx="10" fill="#3B82F6" className="animate-icon-pulse-scale" />
            <path d="M110 70 L100 85 L125 70" fill="#3B82F6" />
            <circle cx="130" cy="60" r="2" fill="white" className="animate-pulse" />
            <circle cx="140" cy="60" r="2" fill="white" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            <circle cx="150" cy="60" r="2" fill="white" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          </svg>
        </div>
      );
    case 'turnaround':
      return (
        <div className={commonClasses}>
          <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="100" cy="75" r="50" stroke="#E2E8F0" strokeWidth="4" />
            <path d="M100 35 V75 H130" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" className="animate-icon-spin-slow" style={{ transformOrigin: '100px 75px' }} />
            <path d="M70 110 L130 110 L100 70 Z" fill="#3B82F6" fillOpacity="0.3" className="animate-icon-sway" />
            <circle cx="100" cy="75" r="5" fill="#3B82F6" />
            <rect x="85" y="20" width="30" height="10" rx="2" fill="#1E293B" />
          </svg>
        </div>
      );
    case 'budget':
      return (
        <div className={commonClasses}>
          <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="70" y="30" width="60" height="100" rx="10" fill="#1E293B" className="animate-icon-sway" />
            <rect x="75" y="40" width="50" height="80" rx="5" fill="white" />
            <circle cx="100" cy="100" r="20" fill="#3B82F6" className="animate-icon-pulse-scale" />
            <text x="95" y="107" fill="white" fontWeight="bold" fontSize="20">$</text>
            <circle cx="150" cy="50" r="10" fill="#3B82F6" fillOpacity="0.4" className="animate-icon-bounce" />
            <circle cx="50" cy="80" r="8" fill="#3B82F6" fillOpacity="0.2" className="animate-icon-bounce" style={{ animationDelay: '0.5s' }} />
          </svg>
        </div>
      );
    case 'format':
      return (
        <div className={commonClasses}>
          <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="40" y="60" width="50" height="60" rx="4" fill="#E2E8F0" className="animate-icon-sway" />
            <rect x="70" y="50" width="50" height="60" rx="4" fill="#CBD5E1" className="animate-icon-sway" style={{ animationDelay: '0.3s' }} />
            <rect x="100" y="40" width="60" height="80" rx="4" fill="#3B82F6" className="animate-icon-pulse-scale" />
            <path d="M110 60 H150 M110 80 H150 M110 100 H130" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export default BenefitIllustration;
