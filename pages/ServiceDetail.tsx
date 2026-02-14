
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, SERVICE_PRICING_MAP } from '../constants';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

// --- Specialized Component Sections ---

const ServiceSpecificPricing: React.FC<{ slug: string }> = ({ slug }) => {
  const pricingItems = SERVICE_PRICING_MAP[slug];
  if (!pricingItems) return null;

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Pricing & Complexity</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Transparent flat-rate pricing based on the technical difficulty of your assets.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingItems.map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:bg-white transition-all group">
              <div className="flex justify-between items-start mb-6">
                 <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{item.label}</h4>
                 <div className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-black shadow-lg">
                   {item.price}
                 </div>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                <span>⚡ 24h Delivery</span>
                <span>🔄 Unlimited Rev.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ComparisonTable = () => (
  <div className="grid md:grid-cols-2 gap-8 my-16">
    <div className="p-10 bg-slate-50 rounded-[3rem] border-2 border-slate-100">
      <h3 className="text-2xl font-black text-rose-500 mb-6 flex items-center gap-3">✕ Automated AI</h3>
      <ul className="space-y-4 text-slate-600 font-medium">
        <li>Jagged, pixelated edges</li>
        <li>Loss of fine hair/fur details</li>
        <li>Incorrect shadow perspective</li>
      </ul>
    </div>
    <div className="p-10 bg-blue-50 rounded-[3rem] border-2 border-blue-100 ring-4 ring-blue-50">
      <h3 className="text-2xl font-black text-blue-600 mb-6 flex items-center gap-3">✓ Our Manual Pen Tool</h3>
      <ul className="space-y-4 text-slate-800 font-bold">
        <li>Smooth, organic vector curves</li>
        <li>100% anchor point precision</li>
        <li>Triple-stage quality review</li>
      </ul>
    </div>
  </div>
);

const MarketplaceCompliance = () => (
  <div className="bg-slate-900 rounded-[3rem] p-12 text-white my-20">
    <h3 className="text-3xl font-black mb-8 text-center">Marketplace Optimized</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { n: "Amazon", r: "Pure white (255,255,255), 1000px+ height, sRGB" },
        { n: "eBay", r: "Minimum 500px, JPEG/PNG, No watermarks" },
        { n: "Shopify", r: "Transparent PNG, 1:1 Aspect Ratio, < 20MB" }
      ].map((m, i) => (
        <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <div className="font-black text-blue-400 mb-2 uppercase text-xs tracking-widest">{m.n}</div>
          <p className="text-slate-400 text-sm leading-relaxed">{m.r}</p>
        </div>
      ))}
    </div>
  </div>
);

const GhostMannequinSteps = () => (
  <div className="py-20">
    <h3 className="text-4xl font-black text-center mb-12">Our 3D Hollow Process</h3>
    <div className="grid md:grid-cols-3 gap-10">
      {[
        { s: "1. Outer Frame", d: "We take the main shot of the garment on the mannequin." },
        { s: "2. Inner Neck", d: "We combine the 'neck shot' to reveal the inside branding." },
        { s: "3. 3D Stitching", d: "We merge parts seamlessly to create the 'invisible' look." }
      ].map((step, i) => (
        <div key={i} className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto">{i+1}</div>
          <h4 className="font-bold text-xl">{step.s}</h4>
          <p className="text-slate-500">{step.d}</p>
        </div>
      ))}
    </div>
  </div>
);

const ColorChangeBenefits = () => (
  <div className="bg-blue-600 rounded-[3rem] p-12 text-white my-20 text-center">
    <h3 className="text-4xl font-black mb-6">Cut Photography Costs by 80%</h3>
    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">Don't shoot every color variant. Shoot one high-res master photo and let us generate every SKU accurately matching your Pantone swatches.</p>
    <div className="flex flex-wrap justify-center gap-4">
      {['Pantone Matching', 'Texture Preservation', 'Shadow Integrity', 'Bulk Variations'].map((f, i) => (
        <span key={i} className="px-6 py-2 bg-white/20 rounded-full font-bold text-sm">{f}</span>
      ))}
    </div>
  </div>
);

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  const renderSpecificContent = () => {
    switch (slug) {
      case 'clipping-path':
        return (
          <>
            <ComparisonTable />
            <ServiceSpecificPricing slug={slug} />
          </>
        );
      case 'background-removal':
        return (
          <>
            <MarketplaceCompliance />
            <ServiceSpecificPricing slug={slug} />
          </>
        );
      case 'ghost-mannequin':
        return (
          <>
            <GhostMannequinSteps />
            <ServiceSpecificPricing slug={slug} />
          </>
        );
      case 'color-change':
        return (
          <>
            <ColorChangeBenefits />
            <ServiceSpecificPricing slug={slug} />
          </>
        );
      case 'photo-retouching':
        return (
          <>
            <div className="grid md:grid-cols-2 gap-12 my-24">
              <div className="space-y-6">
                <h3 className="text-3xl font-black">E-commerce Retouching</h3>
                <p className="text-slate-600 leading-relaxed">Focus on dust removal, scratch fixing, and shape correction to make products look studio-perfect for catalogs.</p>
                <ul className="space-y-3 font-bold text-slate-800">
                  <li className="flex items-center gap-3"><span className="text-blue-600">★</span> Dust & Scratch Removal</li>
                  <li className="flex items-center gap-3"><span className="text-blue-600">★</span> Shape Alignment (Liquify)</li>
                  <li className="flex items-center gap-3"><span className="text-blue-600">★</span> Reflection Removal</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-black">Model & Fashion</h3>
                <p className="text-slate-600 leading-relaxed">High-end skin retouching using frequency separation while preserving natural pores and textures.</p>
                <ul className="space-y-3 font-bold text-slate-800">
                  <li className="flex items-center gap-3"><span className="text-blue-600">★</span> Frequency Separation</li>
                  <li className="flex items-center gap-3"><span className="text-blue-600">★</span> Digital Makeup Enhancement</li>
                  <li className="flex items-center gap-3"><span className="text-blue-600">★</span> Clothing Crease Removal</li>
                </ul>
              </div>
            </div>
            <ServiceSpecificPricing slug={slug} />
          </>
        );
      case 'image-masking':
        return (
          <>
            <div className="py-20 text-center space-y-8">
              <h3 className="text-4xl font-black">Mastering the Intricate</h3>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto">Standard paths fail at hair and fur. We use advanced alpha channel masking to ensure every single strand is preserved perfectly against any new background.</p>
              <div className="flex justify-center gap-20 py-10">
                 <div><div className="text-5xl mb-2">🐈</div><div className="font-bold">Fur & Pet</div></div>
                 <div><div className="text-5xl mb-2">💇</div><div className="font-bold">Model Hair</div></div>
                 <div><div className="text-5xl mb-2">🌿</div><div className="font-bold">Fine Foliage</div></div>
              </div>
            </div>
            <ServiceSpecificPricing slug={slug} />
          </>
        );
      case 'drop-shadow':
      case 'mirror-effect':
        return <ServiceSpecificPricing slug={slug} />;
      default:
        return <div className="py-20 text-center text-slate-400">Custom technical specifications available upon request.</div>;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs font-black tracking-widest uppercase border border-blue-500/30">
                Premium {service.title} Service
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                {service.title.split(' ')[0]} <br />
                <span className="text-blue-500">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {service.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link to="/free-trial" className="px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-700 shadow-2xl transition-all hover:scale-105">
                  Get Free Trial
                </Link>
                <Link to="/contact" className="px-12 py-6 bg-slate-800 text-white rounded-[2rem] font-black text-xl hover:bg-slate-700 transition-all">
                  Custom Quote
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

      {/* Main Content Area */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          {renderSpecificContent()}
          
          {/* Universal Feature Grid for all services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            {service.features.map((feature, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex items-start gap-4 hover:bg-white hover:shadow-xl transition-all">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round"/></svg>
                </div>
                <span className="font-bold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-12">Trusted by 5,000+ Brands Worldwide</h2>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
             <div className="text-2xl font-black tracking-tighter">AMAZON</div>
             <div className="text-2xl font-black tracking-tighter">SHOPIFY</div>
             <div className="text-2xl font-black tracking-tighter">NIKE</div>
             <div className="text-2xl font-black tracking-tighter">ZARA</div>
             <div className="text-2xl font-black tracking-tighter">EBAY</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-blue-600 text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4 space-y-10 relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">Ready for Perfection?</h2>
            <p className="text-blue-100 text-2xl font-medium">Try our service for free. No credit card, no risk.</p>
            <Link to="/free-trial" className="inline-block px-16 py-8 bg-white text-blue-600 rounded-[2.5rem] font-black text-2xl hover:scale-110 transition-all shadow-2xl">Start Free Trial Now</Link>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
