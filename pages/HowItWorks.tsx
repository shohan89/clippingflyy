
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

// Specialized SVG Animation Components for each step
const StepIllustration: React.FC<{ type: number, accent: string }> = ({ type, accent }) => {
  const accentColor = accent === 'blue' ? '#3b82f6' : accent === 'indigo' ? '#6366f1' : '#10b981';
  
  switch (type) {
    case 0: // Upload
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: accentColor, stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: accentColor, stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#grad1)" className="animate-pulse" />
          <g className="animate-float">
            <rect x="60" y="50" width="80" height="100" rx="8" fill="white" stroke={accentColor} strokeWidth="2" />
            <path d="M80 80h40M80 100h40M80 120h20" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
          </g>
          <circle cx="150" cy="60" r="25" fill={accentColor} className="animate-bounce" style={{ animationDuration: '3s' }} />
          <path d="M140 60h20M150 50v20" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 1: // Manual Precision
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="70" fill="none" stroke={accentColor} strokeWidth="1" strokeDasharray="10 5" className="animate-icon-spin-slow" />
          <path d="M50 100 Q100 20 150 100 T50 100" fill="none" stroke={accentColor} strokeWidth="3" className="animate-pulse" />
          <g className="animate-float">
             <path d="M90 90 L110 110" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
             <circle cx="90" cy="90" r="4" fill="white" stroke={accentColor} strokeWidth="2" />
             <circle cx="110" cy="110" r="4" fill="white" stroke={accentColor} strokeWidth="2" />
             <path d="M110 110 L130 150 L100 140 Z" fill="#1e293b" />
          </g>
          <text x="60" y="170" fontSize="10" fontWeight="bold" fill={accentColor} className="animate-pulse uppercase tracking-widest">Pen Tool Active</text>
        </svg>
      );
    case 2: // QA Scan
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="40" y="40" width="120" height="120" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <path d="M60 70 L140 70 M60 100 L140 100 M60 130 L140 130" stroke="#cbd5e1" strokeWidth="2" />
          <g>
            <rect x="30" y="50" width="140" height="4" fill={accentColor} className="animate-bounce" style={{ animationDuration: '4s' }}>
               <animate attributeName="y" values="50;140;50" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="30" y="50" width="140" height="40" fill={accentColor} fillOpacity="0.1">
               <animate attributeName="y" values="50;140;50" dur="3s" repeatCount="indefinite" />
               <animate attributeName="height" values="40;10;40" dur="3s" repeatCount="indefinite" />
            </rect>
          </g>
          <circle cx="160" cy="160" r="20" fill="#10b981" />
          <path d="M152 160l5 5 10-10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 3: // Delivery
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full">
           <path d="M40 150 Q100 160 160 150" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
           <g className="animate-float">
             <rect x="70" y="60" width="60" height="60" rx="8" fill={accentColor} />
             <path d="M70 80h60" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
             <path d="M100 50 L130 60 L100 70 Z" fill="white" fillOpacity="0.3" />
             <circle cx="100" cy="90" r="12" fill="white" fillOpacity="0.2" />
             <path d="M95 90l3 3 7-7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
           </g>
           <path d="M140 80l20-10M145 100l15-5M135 120l25 5" stroke={accentColor} strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
        </svg>
      );
    default:
      return null;
  }
};

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 0,
      title: "Effortless Upload",
      desc: "Drag and drop your RAW files or high-res JPEGs. Our platform supports bulk uploads and automatically organizes your projects by brand or SKU.",
      features: ["Custom Style Guides", "API Integration Support", "256-bit Secure Portal"],
      accent: "blue"
    },
    {
      id: 1,
      title: "Manual Precision",
      desc: "Every image is hand-edited by our specialists using manual Pen-Tool paths. No AI shortcuts—just pixel-perfect accuracy for high-end commerce.",
      features: ["Manual Clipping Paths", "Frequency Separation", "Multi-layer Masking"],
      accent: "indigo"
    },
    {
      id: 2,
      title: "Elite Quality Gates",
      desc: "Before delivery, your assets pass through three rigorous quality check stages. We verify edges, color accuracy, and technical compliance.",
      features: ["Triple-level QA", "Color Matching Service", "Platform-Specific Prep"],
      accent: "emerald"
    },
    {
      id: 3,
      title: "Rapid Delivery",
      desc: "Receive your edited assets in as little as 6 hours. Download directly from our dashboard or sync with your Dropbox/Google Drive.",
      features: ["Instant Cloud Access", "Unlimited Revisions", "Batch Export Options"],
      accent: "blue"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent)] animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-xs font-black tracking-widest uppercase mb-8 border border-blue-600/30">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Our Workflow
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Built for <span className="text-blue-500 italic">Speed.</span> <br />
            Polished for <span className="text-white">Scale.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From single-brand boutiques to global marketplaces, our process handles the heavy lifting of post-production so you can focus on creativity.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-12">
             <div className="flex flex-col items-center gap-2">
                <span className="text-4xl">⚡</span>
                <span className="font-black text-white text-lg">6h Delivery</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <span className="text-4xl">💎</span>
                <span className="font-black text-white text-lg">99.9% Accuracy</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <span className="text-4xl">🔄</span>
                <span className="font-black text-white text-lg">Unlimited Edits</span>
             </div>
          </div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="relative bg-slate-50/50">
        {/* Progress Line (Desktop) */}
        <div className="hidden lg:block absolute left-[88px] top-40 bottom-40 w-1 bg-slate-200">
           <div 
             className="w-full bg-blue-600 transition-all duration-700 ease-out"
             style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
           />
        </div>

        {/* Steps Content */}
        <div className="max-w-7xl mx-auto px-4 lg:pl-32">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              ref={(el) => { sectionRefs.current[idx] = el; }}
              className="min-h-screen flex items-center py-24 lg:py-40 relative"
            >
              <div className={`grid lg:grid-cols-2 gap-20 items-center w-full ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                 
                 {/* Text Content */}
                 <div className="space-y-8">
                    <div className="flex items-center gap-6">
                       <span className={`text-9xl font-black opacity-10 text-${step.accent}-600 select-none`}>0{step.id + 1}</span>
                       <div className={`h-2 w-24 bg-${step.accent}-600 rounded-full`} />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
                       {step.title}
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                       {step.desc}
                    </p>
                    <div className="grid gap-4">
                       {step.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                             <div className={`w-8 h-8 rounded-full bg-${step.accent}-50 flex items-center justify-center text-${step.accent}-600 group-hover:scale-110 transition-transform`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round"/></svg>
                             </div>
                             <span className="font-bold text-slate-700">{f}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 {/* Illustration Area (The "Red Box" Fix) */}
                 <div className="relative">
                    {/* Background Blobs */}
                    <div className={`absolute -inset-20 bg-${step.accent}-600/10 blur-[120px] rounded-full animate-pulse`} />
                    <div className="absolute top-0 -right-20 w-40 h-40 bg-blue-400/10 blur-[80px] rounded-full animate-blob" />
                    
                    {/* Main Container */}
                    <div className="relative glass-card p-6 rounded-[4rem] shadow-2xl overflow-hidden border-white/50 bg-white/40">
                       <div className="bg-white/80 backdrop-blur-md rounded-[3.5rem] p-8 md:p-12 aspect-square flex items-center justify-center shadow-inner">
                          <div className="w-full h-full transform hover:scale-105 transition-transform duration-500">
                             <StepIllustration type={idx} accent={step.accent} />
                          </div>
                       </div>
                       
                       {/* Floating UI Elements */}
                       <div className="absolute bottom-12 right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-float">
                          <div className="flex items-center gap-3">
                             <div className={`w-3 h-3 rounded-full bg-${step.accent}-500`} />
                             <span className="text-xs font-black uppercase tracking-widest text-slate-400">Status: Optimized</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison: Why Manual Beats AI */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">The Human Edge</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Why high-end brands don't settle for automated AI shortcuts.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
             <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-xl">
                <div className="text-rose-500 font-black uppercase tracking-widest text-sm mb-10 flex items-center gap-3">
                   <span className="w-2 h-2 bg-rose-500 rounded-full" />
                   Typical AI Automation
                </div>
                <ul className="space-y-8">
                   {[
                     'Jagged edges on complex hair',
                     'Incorrect shadow perspective',
                     'Low-res artifacts in details',
                     'Loss of translucency data',
                     'Zero accountability on errors'
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-5 text-slate-400">
                        <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 flex-shrink-0">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="3"/></svg>
                        </div>
                        <span className="text-lg font-medium">{item}</span>
                     </li>
                   ))}
                </ul>
             </div>
             
             <div className="bg-blue-600 p-12 rounded-[4rem] shadow-2xl shadow-blue-600/20 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-white font-black uppercase tracking-widest text-sm mb-10 flex items-center gap-3">
                   <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                   PixelPerfect Manual
                </div>
                <ul className="space-y-8">
                   {[
                     '100% Accurate pen-tool paths',
                     'Natural high-physics shadows',
                     'Ultra-smooth vector accuracy',
                     'Preserved alpha transparency',
                     'Multi-stage human verification'
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-5">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="4"/></svg>
                        </div>
                        <span className="text-lg font-bold">{item}</span>
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-blue-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">Ready to scale your production?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link to="/free-trial" className="px-16 py-8 bg-white text-blue-600 rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl">
              Start Free Trial
            </Link>
            <Link to="/contact" className="px-16 py-8 bg-blue-700 text-white rounded-[2rem] font-black text-2xl hover:bg-blue-800 transition-all border border-blue-400/50">
              Get Custom Quote
            </Link>
          </div>
          <p className="text-blue-100 font-black uppercase tracking-widest text-sm">Free Trial Includes 3 Professional Edits • No Credit Card</p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
