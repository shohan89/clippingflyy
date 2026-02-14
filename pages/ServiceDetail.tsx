
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  const clippingTiers = [
    { title: "Basic", desc: "Simple round/square objects like books, boxes, or phones.", price: "$0.49", icon: "📦" },
    { title: "Simple", desc: "Objects with slight curves and few holes like shoes or hats.", price: "$0.95", icon: "🧢" },
    { title: "Medium", desc: "Multiple holes and complex shapes like chairs or jewelry.", price: "$2.50", icon: "🪑" },
    { title: "Complex", desc: "Intricate details like bicycles, nets, or complex machinery.", price: "$5.00", icon: "🚲" },
    { title: "Super Complex", desc: "Jewelry or objects with hundreds of anchor points.", price: "Custom", icon: "💎" }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs font-black tracking-widest uppercase border border-blue-500/30">
                Premium {service.title} Service
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                Manual <span className="text-blue-500">{service.title}</span> <br /> 
                for Flawless Results
              </h1>
              <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {service.fullDescription} Don't let jagged edges ruin your brand. We provide 100% manual Pen-Tool paths with pixel-perfect accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link to="/free-trial" className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 shadow-2xl transition-all">
                  Get My Free Trial
                </Link>
                <Link to="/contact" className="px-12 py-5 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-700 transition-all">
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <BeforeAfterSlider 
                beforeImage={`${service.imageUrl}&grayscale=1&sat=-100`}
                afterImage={service.imageUrl}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section (Mandatory for High-End Conversion) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Manual Precision vs. AI Laziness</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Why pro brands never use Magic Wand or automated AI tools for clipping.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded-[3rem] border-2 border-slate-100">
               <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                 <span className="text-rose-500">✕</span> AI / Magic Wand
               </h3>
               <ul className="space-y-4">
                 {['Jagged, pixelated edges', 'Misses fine details & holes', 'Unnatural curves', 'Zero quality accountability'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                     <div className="w-1.5 h-1.5 bg-rose-400 rounded-full" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="p-10 bg-blue-50 rounded-[3rem] border-2 border-blue-100 ring-4 ring-blue-50">
               <h3 className="text-2xl font-black text-blue-600 mb-6 flex items-center gap-3">
                 <span className="text-emerald-500">✓</span> Our Manual Pen Tool
               </h3>
               <ul className="space-y-4">
                 {['Smooth, organic vector curves', 'Preserves every single anchor point', 'Custom multi-path options', '3-stage human verification'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Complexity Breakdown Section */}
      {slug === 'clipping-path' && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Complexity & Pricing</h2>
              <p className="text-slate-500 text-lg">We offer flat-rate pricing based on the intricacy of your products.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {clippingTiers.map((tier, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center">
                  <div className="text-5xl mb-6">{tier.icon}</div>
                  <h4 className="text-xl font-black text-slate-900 mb-3">{tier.title}</h4>
                  <p className="text-slate-500 text-sm mb-6 flex-grow">{tier.desc}</p>
                  <div className="text-2xl font-black text-blue-600">{tier.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quality Control Section (The "PathEdits" edge) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
               <div className="absolute -inset-10 bg-blue-600/5 blur-3xl rounded-full" />
               <div className="relative grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                   <div className="bg-blue-600 h-64 rounded-3xl flex items-center justify-center text-white text-5xl font-black shadow-2xl">QA 1</div>
                   <div className="bg-slate-900 h-40 rounded-3xl flex items-center justify-center text-white text-3xl font-bold">Zoom 300%</div>
                 </div>
                 <div className="space-y-4 pt-12">
                   <div className="bg-slate-100 h-40 rounded-3xl flex items-center justify-center text-slate-400 text-3xl font-bold">Pixel Check</div>
                   <div className="bg-blue-500 h-64 rounded-3xl flex items-center justify-center text-white text-5xl font-black shadow-2xl">QA 2</div>
                 </div>
               </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Our Triple-Check <br />Quality Control</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Before your images ever reach you, they go through our signature three-stage verification process. We don't just "cut" images; we ensure they are technically perfect for any medium.
              </p>
              <div className="space-y-6">
                {[
                  { t: "300% Zoom Inspection", d: "We check anchor points at extreme zoom levels to ensure smoothness." },
                  { t: "Platform Compliance", d: "Amazon, Shopify, and Print-ready specifications are strictly followed." },
                  { t: "Manual Supervisor Review", d: "A senior editor reviews every single path before the final export." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 font-black">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.t}</h4>
                      <p className="text-slate-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Built for Professionals</h2>
            <p className="text-slate-400 text-lg">Optimized outputs for different industry standards.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
             <div className="space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl">🛒</div>
                <h3 className="text-2xl font-bold">E-commerce Ready</h3>
                <p className="text-slate-400">Pure white backgrounds and optimized file sizes for fast-loading web stores like Shopify and Amazon.</p>
             </div>
             <div className="space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl">🖨️</div>
                <h3 className="text-2xl font-bold">Print & Catalogs</h3>
                <p className="text-slate-400">High-resolution CMYK paths ensuring your product looks stunning in high-end physical lookbooks.</p>
             </div>
             <div className="space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl">🎨</div>
                <h3 className="text-2xl font-bold">Marketing Assets</h3>
                <p className="text-slate-400">Layered PSD files with masks for graphic designers to easily swap backgrounds for social media ads.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Bulk Offer */}
      <section className="py-32 bg-blue-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">Need to edit 1,000+ images?</h2>
          <p className="text-blue-100 text-2xl font-medium">Ask about our volume discounts and dedicated editor teams for long-term partnerships.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/free-trial" className="px-16 py-6 bg-white text-blue-600 rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-2xl">
              Try Us Free
            </Link>
            <Link to="/contact" className="px-16 py-6 bg-blue-900 text-white rounded-3xl font-black text-2xl hover:bg-black transition-all">
              Bulk Quote
            </Link>
          </div>
          <div className="pt-8 flex justify-center items-center gap-8 text-white/60 text-sm font-bold uppercase tracking-widest">
             <span className="flex items-center gap-2">⚡ 24h Delivery</span>
             <span className="flex items-center gap-2">🛡️ Secured Portal</span>
             <span className="flex items-center gap-2">🔄 Unlimited Revisions</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
