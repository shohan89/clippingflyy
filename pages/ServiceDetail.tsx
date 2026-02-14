
import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, DETAILED_PRICING } from '../constants';
import { Service } from '../types';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

// Interactive SVG showing a pen tool path
const PathTracerAnimation: React.FC = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full opacity-30 absolute inset-0">
    <path 
      d="M50 150 Q100 50 200 150 T350 150" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="2" 
      strokeDasharray="10,10"
      className="animate-pulse"
    />
    <circle r="6" fill="#3b82f6" className="animate-float">
      <animateMotion 
        path="M50 150 Q100 50 200 150 T350 150" 
        dur="6s" 
        repeatCount="indefinite" 
      />
    </circle>
  </svg>
);

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const found = SERVICES.find(s => s.slug === slug);
    if (found) setService(found);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!service) return <Navigate to="/" />;

  const isClippingPath = slug === 'clipping-path';
  
  // Custom Tiers for Clipping Path
  const clippingTiers = [
    { title: "Basic", desc: "Simple shapes like round objects, boxes, or square frames.", price: "$0.49", icon: "📦" },
    { title: "Simple", desc: "Curved objects with few holes like handbags or plates.", price: "$1.25", icon: "👜" },
    { title: "Medium", desc: "Objects with 2-3 interior holes like shoes or chairs.", price: "$2.49", icon: "👟" },
    { title: "Complex", desc: "Intricate items like bicycles, jewelry, or machinery.", price: "$6.49", icon: "🚲" },
    { title: "Super Complex", desc: "Extremely detailed items like nets, mesh, or complex jewelry.", price: "$14.49", icon: "💎" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-44 bg-slate-950 overflow-hidden">
        <PathTracerAnimation />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs font-black tracking-widest uppercase border border-blue-500/30">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                Pixel-Perfect Accuracy
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
                {service.title.split(' ')[0]} <br />
                <span className="text-blue-500">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {service.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link to="/free-trial" className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-2xl shadow-blue-500/30 transition-all hover:scale-105">
                  Get Free Trial
                </Link>
                <Link to="/contact" className="px-12 py-6 bg-slate-800 text-white rounded-2xl font-black text-xl hover:bg-slate-700 transition-all">
                  Custom Quote
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
              <div className="relative glass-card p-3 rounded-[4rem] shadow-2xl border-white/10">
                 <BeforeAfterSlider 
                    beforeImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=40&w=800&grayscale=1"
                    afterImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
                 />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block animate-float">
                 <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl">✓</div>
                    <div>
                       <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Quality Seal</p>
                       <p className="text-xl font-black text-slate-900">100% Manual Paths</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Complexity Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Complexity Categories</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">We use manual pen tool paths for every complexity level to ensure vector accuracy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {clippingTiers.map((tier, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-500 text-center flex flex-col">
                <div className="text-6xl mb-8 transform group-hover:scale-125 transition-transform duration-500 inline-block">{tier.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{tier.title}</h3>
                <p className="text-slate-500 mb-10 leading-relaxed text-sm flex-grow">{tier.desc}</p>
                <div className="pt-8 border-t border-slate-200">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Price per image</span>
                  <span className="text-3xl font-black text-blue-600">{tier.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Features Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-16">
                 <div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
                      Industry-Leading <br /> <span className="text-blue-500">Manual Precision</span>
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed">
                      AI often fails with jagged edges and lost details. Our hand-drawn paths provide the sharpest results for catalog and large-format printing.
                    </p>
                 </div>

                 <div className="space-y-10">
                    {[
                      { t: "100% Vector Output", d: "Exported in AI, EPS, and PSD formats for infinite scalability." },
                      { t: "Multi-Path Optimization", d: "Separate paths for product components like buttons, zippers, and laces." },
                      { t: "Shadow Preservation", d: "Optional natural or drop shadow inclusion with every clipping path." }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-16 h-16 rounded-3xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0 border border-blue-500/20">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                         </div>
                         <div>
                            <h4 className="text-2xl font-black text-white mb-2">{feat.t}</h4>
                            <p className="text-slate-400 text-lg leading-relaxed">{feat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute -inset-10 bg-blue-600/20 blur-[100px] rounded-full" />
                 <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                  alt="High Precision Pen Tool Work" 
                  className="relative rounded-[4rem] shadow-2xl border-4 border-white/10"
                 />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white animate-pulse shadow-2xl cursor-pointer">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-blue-600 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 50 Q25 0 50 50 T100 50" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
         </div>
         <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-10">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">Ready for Pixel-Perfection?</h2>
            <p className="text-blue-100 text-2xl font-medium">Try our Clipping Path service today with 3 free photos.</p>
            <div className="flex justify-center gap-8 pt-6">
               <Link to="/free-trial" className="px-16 py-8 bg-white text-blue-600 rounded-3xl font-black text-2xl hover:scale-110 transition-all shadow-2xl">Start Free Trial</Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
