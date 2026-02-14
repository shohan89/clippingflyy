
import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, DETAILED_PRICING } from '../constants';
import { Service } from '../types';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

// Specialized SVG Animation for Clipping Path
const PenToolAnimation: React.FC = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <path 
      id="tracePath"
      d="M50 200 Q100 100 200 200 T350 200" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="2" 
      strokeDasharray="5,5"
      className="opacity-30"
    />
    <path 
      d="M50 200 Q100 100 200 200 T350 200" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="3"
      strokeDasharray="400"
      strokeDashoffset="400"
    >
      <animate attributeName="stroke-dashoffset" from="400" to="0" dur="4s" repeatCount="indefinite" />
    </path>
    <g className="animate-float">
      <path d="M0 0 L15 30 L5 25 L0 35 Z" fill="#1e293b" transform="translate(45, 195)">
         <animateMotion 
            path="M50 200 Q100 100 200 200 T350 200" 
            dur="4s" 
            repeatCount="indefinite" 
            rotate="auto"
          />
      </path>
    </g>
    <circle cx="50" cy="200" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
    <circle cx="200" cy="200" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
    <circle cx="350" cy="200" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
  </svg>
);

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const found = SERVICES.find(s => s.slug === slug);
    if (found) {
      setService(found);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!service) return <Navigate to="/" />;

  const isClippingPath = slug === 'clipping-path';
  const pricingData = DETAILED_PRICING.find(p => p.title.toLowerCase().includes(slug?.replace('-', ' ') || ''));

  const tiers = [
    { name: "Basic", desc: "Round or square objects (e.g., ball, box)", price: "$0.49", icon: "📦" },
    { name: "Simple", desc: "Curved objects with few holes (e.g., handbag)", price: "$1.25", icon: "👜" },
    { name: "Medium", desc: "Multiple curves & 2-3 holes (e.g., shoe)", price: "$2.49", icon: "👟" },
    { name: "Complex", desc: "Detailed edges & 5+ holes (e.g., bicycle)", price: "$6.49", icon: "🚲" },
    { name: "Super Complex", desc: "High details (e.g., net, jewelry)", price: "$14.49", icon: "💎" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <PenToolAnimation />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-xs font-black tracking-widest uppercase border border-blue-500/30">
                100% Manual Paths
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                Professional <br />
                <span className="text-blue-500">{service.title}</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="flex gap-4">
                <Link to="/free-trial" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-blue-500/20">
                  Start Free Trial
                </Link>
                <Link to="/contact" className="px-10 py-5 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-700 transition-all">
                  Bulk Quote
                </Link>
              </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-10 bg-blue-600/20 blur-[100px] rounded-full" />
               <div className="relative glass-card p-2 rounded-[3.5rem] shadow-2xl border-white/10">
                  <BeforeAfterSlider 
                    beforeImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=40&w=800&grayscale=1"
                    afterImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers & Pricing */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Complexity & Pricing</h2>
            <p className="text-slate-500 text-lg">We classify images into five complexity levels for transparent billing.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tiers.map((tier, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-500">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{tier.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{tier.name}</h3>
                <p className="text-sm text-slate-500 mb-8 h-12">{tier.desc}</p>
                <div className="pt-6 border-t border-slate-200">
                  <span className="text-2xl font-black text-blue-600">{tier.price}</span>
                  <span className="text-slate-400 text-xs font-bold block">per image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Everything included in Clipping Path</h2>
                 <div className="grid gap-6">
                    {service.features.map((f, i) => (
                       <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3"/></svg>
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-slate-900">{f}</h4>
                             <p className="text-slate-500">High-quality vector paths compatible with AI, EPS, and PSD formats.</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl border-8 border-white" alt="Editing process" />
                 <div className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl animate-float">
                    <p className="font-black text-slate-900">PixelPerfect™ Standard</p>
                    <p className="text-sm text-blue-600">Zero Jagged Edges</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-center">
         <div className="max-w-4xl mx-auto px-4 space-y-8">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">Ready for zero-defect production?</h2>
            <div className="flex justify-center gap-6">
               <Link to="/free-trial" className="px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl">Start Trial</Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
