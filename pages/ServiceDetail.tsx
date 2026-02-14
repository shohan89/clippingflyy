
import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, DETAILED_PRICING } from '../constants';
import { Service } from '../types';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

// Interactive SVG showing a pen tool path
const PathTracerAnimation: React.FC = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full opacity-40 absolute inset-0">
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
  const clippingPricing = DETAILED_PRICING.find(p => p.title.includes('Clipping Path'));

  const complexityLevels = [
    { title: "Basic", desc: "Simple round or square shapes with no holes.", price: "$0.49", icon: "⭕" },
    { title: "Simple", desc: "Slightly curved objects with minimal anchor points.", price: "$1.25", icon: "👜" },
    { title: "Medium", desc: "Items with multiple curves and 1-2 interior holes.", price: "$2.49", icon: "👟" },
    { title: "Complex", desc: "Objects with many curves and more than 5 holes.", price: "$6.49", icon: "🚲" },
    { title: "Super Complex", desc: "Intricate items like jewelry, nets, or machinery.", price: "$14.49", icon: "💎" }
  ];

  return (
    <div className="pt-20">
      {/* Dynamic Hero Section */}
      <section className="relative py-24 lg:py-40 bg-slate-950 overflow-hidden">
        <PathTracerAnimation />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs font-black tracking-widest uppercase border border-blue-500/30">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                Premium Post-Production
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
                {service.title.split(' ')[0]} <br />
                <span className="text-blue-500">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/free-trial" className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 shadow-2xl shadow-blue-500/20 transition-all hover:scale-105">
                  Start Free Trial
                </Link>
                <Link to="/contact" className="px-12 py-5 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-700 transition-all">
                  Get a Quote
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
              <div className="relative glass-card p-2 rounded-[3.5rem] shadow-2xl border-white/10">
                 <BeforeAfterSlider 
                    beforeImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=40&w=800&grayscale=1"
                    afterImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
                 />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl">✓</div>
                    <div>
                       <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Accuracy</p>
                       <p className="text-lg font-black text-slate-900">100% Manual Paths</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Complexity Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Choose Your Complexity</h2>
            <p className="text-slate-500 text-lg">We categorize projects to ensure you get the fairest pricing for your specific needs.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {complexityLevels.map((level, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform duration-500 inline-block">{level.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{level.title}</h3>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed h-12 overflow-hidden">{level.desc}</p>
                <div className="pt-6 border-t border-slate-200">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Price per image</span>
                  <span className="text-2xl font-black text-blue-600">{level.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full" />
               <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Detailed Pen Tool Work" 
                className="relative rounded-[3rem] shadow-2xl border-8 border-white"
               />
               <div className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 animate-float">
                  <div className="space-y-3">
                     <div className="h-2 w-20 bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-3/4 animate-pulse" />
                     </div>
                     <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Processing Layer 04</p>
                  </div>
               </div>
            </div>

            <div className="order-1 lg:order-2 space-y-12">
               <div>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                    Why our paths are <br /> <span className="text-blue-600">Legendary</span>
                  </h2>
                  <p className="text-xl text-slate-500 leading-relaxed">
                    Most companies use AI selection tools that leave jagged edges. We use the manual Photoshop Pen Tool to draw every curve by hand, ensuring 100% vector accuracy that scales infinitely.
                  </p>
               </div>

               <div className="space-y-6">
                  {[
                    { t: "100% Manual Hand-Drawn", d: "No AI shortcuts. Every anchor point is placed by a human expert." },
                    { t: "Multi-Path Support", d: "Separate paths for different product components for easy color changing." },
                    { t: "Print-Ready Delivery", d: "Highest resolution paths compatible with all major design software." }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-6 group">
                       <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3"/></svg>
                       </div>
                       <div>
                          <h4 className="text-lg font-black text-slate-900">{feat.t}</h4>
                          <p className="text-slate-500">{feat.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Pricing Section for this Service */}
      {clippingPricing && (
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
               <div className="relative z-10">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-5xl font-black mb-4">Detailed Price List</h2>
                     <p className="text-slate-400">Fixed rates with no hidden costs for bulk orders.</p>
                  </div>

                  <div className="space-y-6">
                     {clippingPricing.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-6 border-b border-white/10 hover:bg-white/5 px-6 rounded-2xl transition-colors">
                           <span className="text-lg md:text-xl font-bold">{item.label}</span>
                           <div className="flex items-center gap-4">
                              <span className="text-slate-400 text-sm hidden sm:block">Starting from</span>
                              <span className="text-2xl font-black text-blue-400">{item.price}</span>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-16 text-center">
                     <Link to="/contact" className="inline-flex items-center gap-3 text-blue-400 font-black hover:gap-5 transition-all">
                        Need Custom Pricing for 1000+ Images? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" /></svg>
                     </Link>
                  </div>
               </div>
            </div>
          </div>
        </section>
      )}

      {/* Global CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter">Start your trial with zero risk.</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Upload your first 3 photos for free and receive professional paths in 24 hours.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
             <Link to="/free-trial" className="px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl">
              Get Started for Free
            </Link>
            <Link to="/contact" className="px-12 py-6 bg-blue-700 text-white rounded-2xl font-black text-xl hover:bg-blue-800 transition-all border border-blue-500/50">
              Bulk Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
