
import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  // Initial animation to show it's interactive
  useEffect(() => {
    const timer = setTimeout(() => {
      let step = 0;
      const interval = setInterval(() => {
        step += 0.05;
        const newPos = 50 + Math.sin(step) * 15;
        setSliderPos(newPos);
        if (step > Math.PI * 2) clearInterval(interval);
      }, 16);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After retouching" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Foreground with Clip) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before retouching" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] brightness-75"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          Original
        </div>
      </div>

      {/* After Label */}
      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
        PixelPerfect Edited
      </div>

      {/* Slider Line/Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-600">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
          </svg>
        </div>
      </div>
      
      {/* Visual hint overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg text-xs font-bold text-slate-900 flex items-center gap-2 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
        <span className="animate-bounce">↔</span> Slide to compare
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
