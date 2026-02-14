
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const [photoCount, setPhotoCount] = useState(50);

  const calculateDelivery = (count: number) => {
    if (count <= 50) return '6 - 12 Hours';
    if (count <= 250) return '12 - 24 Hours';
    return '24 - 48 Hours';
  };

  const steps = [
    {
      number: '01',
      title: 'Upload & Specifications',
      desc: 'Upload your high-res files to our secure portal. You can use our pre-built style guides or upload your own reference images for lighting, crop, and color matching.',
      details: ['Secure 256-bit encryption', 'Batch folder upload', 'Custom preset creation'],
      icon: '📤',
      color: 'bg-blue-600'
    },
    {
      number: '02',
      title: 'Senior Editor Assignment',
      desc: 'Unlike AI bots, we assign a dedicated senior retoucher to your project. They study your brand aesthetic before starting the manual editing process.',
      details: ['Manual Pen-tool paths', 'Frequency separation', 'Dynamic retouching'],
      icon: '🎨',
      color: 'bg-indigo-600'
    },
    {
      number: '03',
      title: '3-Layer Quality Control',
      desc: 'Each image undergoes a rigorous review by our QA leads. We check for pixel consistency, color accuracy, and technical alignment with your chosen platform.',
      details: ['Triple human verification', 'Platform compliance check', 'Final detail refinement'],
      icon: '🛡️',
      color: 'bg-emerald-600'
    },
    {
      number: '04',
      title: 'Delivery & Feedback',
      desc: 'Get your images back in organized folders. Use our interactive portal to request revisions. We offer unlimited free revisions until it is 100% perfect.',
      details: ['Fast cloud download', 'Easy feedback tools', 'Unlimited free revisions'],
      icon: '🚀',
      color: 'bg-blue-700'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black tracking-widest uppercase mb-6">
              Our Professional Process
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Quality at Scale <br />
              <span className="text-blue-600">Without Compromise.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              We've refined a workflow that handles millions of images a year while maintaining the precision of a boutique studio.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Vertical Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Center Line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2" />
            
            <div className="space-y-32">
              {steps.map((step, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-32 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-4 mb-6">
                      <span className={`w-14 h-14 rounded-2xl ${step.color} text-white flex items-center justify-center text-2xl font-black shadow-xl`}>
                        {step.number}
                      </span>
                      <div className="h-0.5 w-12 bg-slate-200 hidden lg:block" />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{step.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{step.desc}</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      {step.details.map((detail, dIdx) => (
                        <span key={dIdx} className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-sm font-bold">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full relative">
                    <div className={`absolute -inset-10 ${step.color} opacity-5 blur-[100px] rounded-full`} />
                    <div className="relative bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden group">
                      <div className="text-8xl mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500">
                        {step.icon}
                      </div>
                      <div className="space-y-4">
                        <div className="h-4 bg-slate-100 rounded-full w-full" />
                        <div className="h-4 bg-slate-100 rounded-full w-3/4" />
                        <div className="h-4 bg-slate-50 rounded-full w-1/2" />
                      </div>
                      <div className={`absolute bottom-0 left-0 h-2 ${step.color} transition-all duration-1000 group-hover:w-full w-0`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Deep-Dive: Human Precision vs AI */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                The PixelPerfect <br />
                <span className="text-blue-500">Quality Standard</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Automated AI background removers often leave jagged edges and fail at complex transparency (like hair or glassware). Our manual pen-tool process ensures perfection every time.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  { t: 'Natural Shadows', d: 'We recreate shadows that follow the true physics of light.' },
                  { t: 'Color Fidelity', d: 'Ensuring your product matches real-world colors perfectly.' },
                  { t: 'Consistent Margin', d: 'Perfect alignment across your entire inventory.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 group-hover:scale-125 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.t}</h4>
                      <p className="text-slate-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-800 p-8 rounded-[2.5rem] border border-slate-700 shadow-2xl relative z-10">
                 <div className="flex justify-between items-center mb-10">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-rose-500" />
                       <div className="w-3 h-3 rounded-full bg-amber-500" />
                       <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Live Quality Matrix</div>
                 </div>
                 
                 <div className="space-y-8">
                    <div className="space-y-3">
                       <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-400">EDGE SMOOTHNESS</span>
                          <span className="text-blue-400">100%</span>
                       </div>
                       <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[100%] animate-pulse" />
                       </div>
                    </div>
                    <div className="space-y-3">
                       <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-400">COLOR ACCURACY</span>
                          <span className="text-emerald-400">99.8%</span>
                       </div>
                       <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[99%]" />
                       </div>
                    </div>
                    <div className="pt-6 grid grid-cols-2 gap-4">
                       <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700 text-center">
                          <div className="text-2xl font-black text-white">0.05s</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase">Avg Response</div>
                       </div>
                       <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700 text-center">
                          <div className="text-2xl font-black text-white">24/7</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase">Availability</div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Delivery Calculator */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-20 text-center space-y-12 border border-slate-100 shadow-sm">
             <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900">How fast do you need it?</h2>
                <p className="text-slate-500 text-lg">Adjust the photo count to see our guaranteed turnaround time.</p>
             </div>
             
             <div className="space-y-8">
                <input 
                  type="range" 
                  min="1" 
                  max="1000" 
                  value={photoCount} 
                  onChange={(e) => setPhotoCount(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-sm font-bold text-slate-400 px-2 uppercase tracking-widest">
                   <span>1 Photo</span>
                   <span>1000 Photos</span>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-slate-200">
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                   <div className="text-sm font-black text-slate-400 uppercase mb-2">Photos Count</div>
                   <div className="text-5xl font-black text-slate-900">{photoCount}</div>
                </div>
                <div className="p-8 bg-blue-600 rounded-3xl shadow-xl shadow-blue-200 text-white">
                   <div className="text-sm font-black text-blue-200 uppercase mb-2">Delivery Time</div>
                   <div className="text-4xl font-black">{calculateDelivery(photoCount)}</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Start your first <br /> project today</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Upload 3 photos and experience our quality without spending a single cent.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/free-trial" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl">
              Get Started Free
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-black text-xl hover:bg-blue-800 transition-all">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
