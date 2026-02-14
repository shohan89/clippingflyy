
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, INDUSTRIES } from '../constants';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import AnimatedServiceIcon from '../components/AnimatedServiceIcon';
import BenefitIllustration from '../components/BenefitIllustration';
import DetailedPricingSection from '../components/DetailedPricingSection';

const Home: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Testimonial Slider State
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const benefits = [
    {
      type: 'hand' as const,
      title: 'Edited by hand',
      desc: 'Every edit is done by a professional retoucher, not a machine, for complete control and the cleanest edges.'
    },
    {
      type: 'pixel' as const,
      title: 'Pixel perfect results',
      desc: 'Our designers can handle even the most complex cutouts — no straight polygonal lasso lines where they shouldn’t be.'
    },
    {
      type: 'support' as const,
      title: '24/7 support',
      desc: 'Your dedicated customer support team is ready to help, whenever you need us.'
    },
    {
      type: 'turnaround' as const,
      title: '6-hour turnaround',
      desc: 'Get your images back in as little as six hours, even if you have thousands of shots to get through.'
    },
    {
      type: 'budget' as const,
      title: 'Under budget',
      desc: 'Edits start at just $0.25 per image, way less than it would cost to do it in-house.'
    },
    {
      type: 'format' as const,
      title: 'Every format',
      desc: 'Get consistent, quality images in every format you need.'
    }
  ];

  const funFacts = [
    { label: 'Photos Edited', value: '1.2M+', icon: '📸' },
    { label: 'Happy Clients', value: '5,000+', icon: '🤝' },
    { label: 'Countries Served', value: '45+', icon: '🌎' },
    { label: 'Accuracy Rate', value: '99.9%', icon: '🎯' }
  ];

  // Auto-scroll logic for testimonials
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let animationFrameId: number;
    const speed = 1.2; // Increased speed for faster movement

    const scroll = () => {
      if (!isPaused && !isDragging) {
        slider.scrollLeft += speed;
        
        // Reset to start for infinite loop effect
        // If we scrolled past the first set of duplicated items
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Drag multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              #1 Choice for E-commerce & Fashion
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Flawless Photo Editing <br />
              <span className="text-blue-600">at Professional Scale</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Outsource your post-production to world-class editors. High-end retouching with 24-hour delivery and unlimited revisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/free-trial" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1">
                Start Free Trial
              </Link>
              <Link to="/how-it-works" className="px-8 py-4 bg-slate-100 text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all">
                How It Works
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-slate-400">
               <div className="flex items-center">
                 <span className="text-blue-600 mr-2 font-bold text-xl">4.9/5</span>
                 <span className="text-sm">Customer Rating</span>
               </div>
               <div className="h-4 w-px bg-slate-200" />
               <div className="flex items-center">
                 <span className="text-blue-600 mr-2 font-bold text-xl">1M+</span>
                 <span className="text-sm">Photos Edited</span>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            
            <div className="relative">
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=40&w=800&sat=-100"
                afterImage="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden md:flex items-center gap-4 z-20">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quality Guaranteed</p>
                  <p className="text-sm font-bold text-slate-900">Pixel-Perfect Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Expert Services for Every Industry</h2>
            <p className="text-slate-600 text-lg">We provide specialized editing workflows tailored to your specific industry needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <div 
                key={industry.id} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative hover-shine"
                onMouseEnter={() => setHoveredItem(industry.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative z-10">
                  <div className={`mb-6 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${hoveredItem === industry.id ? 'bg-blue-600' : 'bg-blue-50'}`}>
                    <AnimatedServiceIcon type={industry.icon} isActive={hoveredItem === industry.id} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${hoveredItem === industry.id ? 'text-blue-600' : 'text-slate-900'}`}>
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{industry.description}</p>
                </div>
                <div className={`absolute -right-8 -bottom-8 w-24 h-24 bg-blue-50 rounded-full transition-transform duration-500 transform ${hoveredItem === industry.id ? 'scale-[4] opacity-20' : 'scale-0 opacity-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Professional Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Our Professional Services</h2>
            <p className="text-slate-600 text-xl">The best technical solutions for pixel-perfect results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col group">
                <div className="mb-6 transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <BeforeAfterSlider 
                    beforeImage={`${service.imageUrl}&grayscale=1&sat=-100`} 
                    afterImage={service.imageUrl} 
                  />
                </div>
                <div className="px-1 space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Starts from</span>
                    <span className="text-lg font-extrabold text-blue-600">{service.priceRange.split(' ')[2]}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="inline-flex items-center pt-2 text-blue-600 font-bold hover:gap-2 transition-all"
                  >
                    View Details
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing Grid Section */}
      <DetailedPricingSection />

      {/* Modern Why Trust Us Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Why Leading Brands <br /> 
                  <span className="text-blue-600">Choose PixelPerfect</span>
                </h2>
                <p className="text-lg text-slate-600">
                  We don't just edit photos; we build visual infrastructure for high-growth brands who demand quality and speed.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Lightning Fast', desc: 'Standard 24h delivery for urgent projects.', icon: '⚡', color: 'bg-amber-50' },
                  { title: 'Scalable Ops', desc: '10 images or 10,000, we handle it all.', icon: '🚀', color: 'bg-blue-50' },
                  { title: 'Bank-Grade Security', desc: 'Your data is encrypted and protected.', icon: '🔒', color: 'bg-emerald-50' },
                  { title: 'QA Excellence', desc: '3-stage review for every single image.', icon: '🛡️', color: 'bg-rose-50' }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600 rounded-[2.5rem] opacity-10 blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200" 
                alt="Studio workflow" 
                className="relative rounded-[2.5rem] shadow-2xl border-8 border-white object-cover aspect-[4/5] lg:aspect-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-900">99.9%</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">SLA Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section (Reference Image) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center space-y-4 group">
                <BenefitIllustration type={benefit.type} />
                <h3 className="text-2xl font-bold text-[#1e1b4b]">{benefit.title}</h3>
                <p className="text-[#475569] text-base leading-relaxed px-4">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {funFacts.map((fact, idx) => (
              <div key={idx} className="text-center space-y-2 group">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 inline-block">
                  {fact.icon}
                </div>
                <div className="text-3xl md:text-5xl font-black text-white">{fact.value}</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to transform your visual content?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Upload your first 3 photos for free and experience the PixelPerfect quality firsthand.</p>
          <div className="pt-4">
             <Link to="/free-trial" className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl">
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Interactive Testimonials Slider */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Loved by Global Brands</h2>
          <div className="flex justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-slate-500 font-bold">5,000+ Verified Reviews</span>
          </div>
        </div>
        
        {/* Infinite Scroll Container with Dragging Support */}
        <div 
          className="relative cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
        >
          <div 
            ref={scrollRef}
            className="flex no-scrollbar overflow-x-hidden gap-8 py-4 px-4 select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {/* Duplicating testimonials 3 times for super smooth looping during drag */}
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div 
                key={idx} 
                className={`flex-shrink-0 w-[420px] p-10 rounded-[2.5rem] border transition-all duration-300 flex flex-col pointer-events-none ${idx % 3 === 1 ? 'bg-blue-600 text-white border-blue-600 shadow-2xl shadow-blue-200' : 'bg-slate-50 border-slate-100 text-slate-900 shadow-sm'}`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${idx % 3 === 1 ? 'text-blue-200' : 'text-amber-400'} fill-current`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`text-xl italic leading-relaxed mb-10 whitespace-normal flex-grow ${idx % 3 === 1 ? 'text-blue-50' : 'text-slate-600'}`}>
                  "{t.content}"
                </p>
                <div className="flex items-center gap-5 pt-8 border-t border-black/5">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-xl object-cover flex-shrink-0" />
                  <div>
                    <h5 className="font-black text-sm uppercase tracking-widest">{t.name}</h5>
                    <p className={`text-xs font-bold mt-1 ${idx % 3 === 1 ? 'text-blue-200' : 'text-slate-400'}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visual Indicators for dragging */}
          <div className="mt-12 flex justify-center gap-3">
             <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isDragging ? 'bg-blue-600 w-8' : 'bg-slate-200'}`} />
             <div className={`w-3 h-3 rounded-full transition-all duration-300 ${!isDragging && isPaused ? 'bg-blue-400' : 'bg-slate-200'}`} />
             <div className={`w-3 h-3 rounded-full transition-all duration-300 ${!isDragging && !isPaused ? 'bg-blue-600 animate-pulse' : 'bg-slate-200'}`} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
