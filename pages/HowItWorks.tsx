
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Lottie Animation Sources (Professional Abstract SaaS loops)
  const animations = [
    "https://lottie.host/80164627-c7f3-424d-862d-0599292e707e/M0s2yP2o9w.json", // Abstract 1
    "https://lottie.host/68482470-381c-4b5c-8975-7313a76383c3/p5J5m3Wq6X.json", // Processing
    "https://lottie.host/4699042b-e48d-4e2b-a7e8-9642e75e923e/Y1Vq8R8D4S.json", // Shield/QC
    "https://lottie.host/93223011-8557-4b77-a859-4b312b93475c/V6G9E2x8S0.json"  // Delivery
  ];

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
        {/* Background Lottie Layer */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <Lottie 
            animationData={null} 
            path="https://lottie.host/6e77144e-a13b-487b-944d-17684803964d/U0n6vR0O3m.json" 
            loop={true} 
            className="w-full h-full scale-150"
           />
        </div>
        
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
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
             <div className="flex items-center gap-3 text-slate-400">
                <span className="text-2xl">⚡</span>
                <span className="font-bold text-sm tracking-widest uppercase">6h Turnaround</span>
             </div>
             <div className="flex items-center gap-3 text-slate-400">
                <span className="text-2xl">💎</span>
                <span className="font-bold text-sm tracking-widest uppercase">99.9% Accuracy</span>
             </div>
             <div className="flex items-center gap-3 text-slate-400">
                <span className="text-2xl">🔄</span>
                <span className="font-bold text-sm tracking-widest uppercase">Unlimited Edits</span>
             </div>
          </div>
        </div>
      </section>

      {/* Main Process Steps with Lottie Backgrounds */}
      <section className="relative">
        {/* Interactive Side Navigation (Desktop) */}
        <div className="hidden lg:block sticky top-1/2 -translate-y-1/2 left-10 z-50 w-64 p-8">
           <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-4 group cursor-pointer" onClick={() => sectionRefs.current[step.id]?.scrollIntoView({ behavior: 'smooth' })}>
                   <div className={`w-3 h-12 rounded-full transition-all duration-500 ${activeStep === step.id ? 'bg-blue-600 h-16' : 'bg-slate-200 group-hover:bg-slate-300'}`} />
                   <span className={`text-xs font-black uppercase tracking-widest transition-colors ${activeStep === step.id ? 'text-blue-600' : 'text-slate-400'}`}>
                      {step.title}
                   </span>
                </div>
              ))}
           </div>
        </div>

        {/* Steps Content */}
        <div className="max-w-7xl mx-auto px-4 lg:pl-32">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              // Fix: Wrapped assignment in braces to ensure the callback returns void, resolving the TypeScript error where an assignment expression returns the value
              ref={(el) => { sectionRefs.current[idx] = el; }}
              className="min-h-screen flex items-center py-20 relative overflow-hidden"
            >
              {/* Background Lottie Decoration */}
              <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-right-20' : '-left-20'} w-[500px] h-[500px] opacity-10 pointer-events-none`}>
                 <Lottie path={animations[idx]} loop={true} />
              </div>

              <div className={`grid lg:grid-cols-2 gap-20 items-center w-full ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                 <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-6">
                       <span className={`text-8xl font-black opacity-10 text-${step.accent}-600`}>0{step.id + 1}</span>
                       <div className={`h-1 w-20 bg-${step.accent}-600 rounded-full`} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                       {step.title}
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                       {step.desc}
                    </p>
                    <div className="space-y-4">
                       {step.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-4 font-bold text-slate-700">
                             <div className={`w-6 h-6 rounded-full bg-${step.accent}-50 flex items-center justify-center text-${step.accent}-600`}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round"/></svg>
                             </div>
                             {f}
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`absolute -inset-10 bg-${step.accent}-600/5 blur-[100px] rounded-full`} />
                    <div className="relative glass-card p-1 rounded-[3.5rem] shadow-2xl overflow-hidden animate-float">
                       <div className="bg-white rounded-[3.2rem] p-4">
                          <div className="aspect-square bg-slate-50 rounded-[2.8rem] flex items-center justify-center overflow-hidden">
                             <Lottie path={animations[idx]} loop={true} className="w-full h-full p-12" />
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
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6">The Human Edge</h2>
            <p className="text-slate-500 text-lg">Why the world's most demanding brands don't rely on automated AI editing.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-white p-12 rounded-[3rem] border border-slate-200">
                <div className="text-rose-500 font-black uppercase tracking-widest text-xs mb-8">Typical AI Automation</div>
                <ul className="space-y-6">
                   {[
                     'Jagged/Harsh edges on hair',
                     'Incorrect shadow perspective',
                     'Low-res jagged artifacts',
                     'Loss of transparency data',
                     'Batch errors go unchecked'
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-slate-400 line-through decoration-rose-200">
                        <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/></svg>
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
             
             <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl shadow-blue-200/20">
                <div className="text-blue-500 font-black uppercase tracking-widest text-xs mb-8">PixelPerfect Manual</div>
                <ul className="space-y-6">
                   {[
                     '100% Accurate pen-tool paths',
                     'Natural high-physics shadows',
                     'Ultra-smooth vector accuracy',
                     'Preserved alpha transparency',
                     'Human QA on every single pixel'
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 font-bold">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3"/></svg>
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
           <Lottie path="https://lottie.host/825447a1-8d2b-426c-8e47-494b8e61458e/D0rVzTzE6t.json" loop={true} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-12">
          <h2 className="text-4xl md:text-7xl font-black text-white leading-none">Ready to automate your production?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/free-trial" className="px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl">
              Start Free Trial
            </Link>
            <Link to="/contact" className="px-12 py-6 bg-blue-700 text-white rounded-2xl font-black text-xl hover:bg-blue-800 transition-all border border-blue-500/50">
              Custom Quote
            </Link>
          </div>
          <p className="text-blue-200 font-bold uppercase tracking-widest text-sm">No Credit Card Required • First 3 Images Free</p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;