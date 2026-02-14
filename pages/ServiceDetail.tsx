
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

// Interactive SVG showing a pen tool path for visual engagement
const PathTracerAnimation: React.FC = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full opacity-30 absolute inset-0 pointer-events-none">
    <path 
      d="M50 150 Q100 50 200 150 T350 150" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="2" 
      strokeDasharray="10,10"
      className="animate-pulse"
    />
    <circle r="6" fill="#3b82f6">
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
  
  // Directly find the service to prevent blank page/redirect loops during state updates
  const service = SERVICES.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // If service is not found, only then redirect
  if (!service) return <Navigate to="/" replace />;

  const clippingTiers = [
    { title: "Basic", desc: "Simple shapes like round objects, boxes, or square frames.", price: "$0.49", icon: "📦" },
    { title: "Simple", desc: "Curved objects with few holes like handbags or plates.", price: "$1.25", icon: "👜" },
    { title: "Medium", desc: "Objects with 2-3 interior holes like shoes or chairs.", price: "$2.49", icon: "👟" },
    { title: "Complex", desc: "Intricate items like bicycles, jewelry, or machinery.", price: "$6.49", icon: "🚲" },
    { title: "Super Complex", desc: "Extremely detailed items like nets, mesh, or complex jewelry.", price: "$14.49", icon: "💎" }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-44 bg-slate-950 overflow-hidden">
        <PathTracerAnimation />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs font-black tracking-widest uppercase border border-blue-500/30">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                Premium Quality
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
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="relative glass-card p-3 rounded-[4rem] shadow-2xl border-white/10">
                 <BeforeAfterSlider 
                    beforeImage={`${service.imageUrl}&grayscale=1&sat=-100`}
                    afterImage={service.imageUrl}
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Complexity Grid (Only for Clipping Path) */}
      {slug === 'clipping-path' && (
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Complexity Categories</h2>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto">Manual pen tool paths classified for transparent billing.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {clippingTiers.map((tier, i) => (
                <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-500 text-center flex flex-col">
                  <div className="text-6xl mb-8 transform group-hover:scale-125 transition-transform duration-500 inline-block">{tier.icon}</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{tier.title}</h3>
                  <p className="text-slate-500 mb-10 leading-relaxed text-sm flex-grow">{tier.desc}</p>
                  <div className="pt-8 border-t border-slate-200">
                    <span className="text-3xl font-black text-blue-600">{tier.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 bg-blue-600 text-center">
         <div className="max-w-4xl mx-auto px-4 space-y-10">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">Ready for Perfection?</h2>
            <Link to="/free-trial" className="inline-block px-16 py-8 bg-white text-blue-600 rounded-3xl font-black text-2xl hover:scale-110 transition-all shadow-2xl">Start Trial Now</Link>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
