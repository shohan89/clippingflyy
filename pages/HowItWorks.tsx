
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const [photoCount, setPhotoCount] = useState(50);

  const calculateDelivery = (count: number) => {
    if (count <= 50) return '6 - 12 Hours';
    if (count <= 200) return '12 - 24 Hours';
    return '24 - 48 Hours';
  };

  const steps = [
    {
      number: '01',
      title: 'Upload & Instruction',
      desc: 'Use our drag-and-drop portal to upload images. Attach your style guide or choose from our pre-defined presets for Background Removal, Retouching, or Ghost Mannequin.',
      details: ['Supports RAW, TIFF, JPEG, PNG', 'Bulk folder uploads', 'Custom style-guide integration'],
      color: 'bg-blue-600'
    },
    {
      number: '02',
      title: 'Hand-Crafted Editing',
      desc: 'Our specialists use manual Pen Tool paths for every image. Unlike AI, we understand the nuances of soft edges, hair, and complex reflections.',
      details: ['Manual Pen Tool paths', 'High-end frequency separation', 'Precision masking'],
      color: 'bg-indigo-600'
    },
    {
      number: '03',
      title: 'Multi-Stage Review',
      desc: 'Your project goes through three quality gates: the Editor, the Senior Supervisor, and the Quality Assurance lead.',
      details: ['Pixel-level inspection', 'Color consistency check', 'Platform compliance verification'],
      color: 'bg-emerald-600'
    },
    {
      number: '04',
      title: 'Delivery & Feedback',
      desc: 'Receive your assets in organized folders. Not 100% happy? Request unlimited revisions through your dashboard with one click.',
      details: ['Instant download', 'Cloud storage sync', 'Unlimited free revisions'],
      color: 'bg-blue-700'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-black tracking-widest uppercase mb-6">
              Production Workflow
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              Scaling Quality <br />
              <span className="text-blue-600">Without Friction.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              We've spent 10 years perfecting a workflow that bridges the gap between high-volume production and boutique-quality results.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className={`text-6xl font-black opacity-10 ${step.color.replace('bg-', 'text-')}`}>
                      {step.number}
                    </span>
                    <div className={`h-1 w-12 ${step.color} rounded-full`} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900">{step.title}</h2>
                  <p className="text-lg text-slate-500 leading-relaxed">{step.desc}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className={`absolute -inset-4 ${step.color} opacity-5 rounded-[2.5rem] blur-2xl group-hover:opacity-10 transition-opacity`} />
                    <div className="relative bg-slate-50 aspect-video rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl">
                      <div className="absolute inset-0 flex items-center justify-center">
                         {/* Dynamic Icon/Graphic based on step */}
                         <div className={`w-32 h-32 ${step.color} rounded-3xl flex items-center justify-center text-white shadow-2xl transform transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                            {idx === 0 && <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>}
                            {idx === 1 && <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>}
                            {idx === 2 && <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944V12.5m-8.618-6.516c.148 5.058 3.354 9.444 8.243 11.332M20.618 6c-.148 5.058-3.354 9.444-8.243 11.332m0-11.332a11.955 11.955 0 018.618 3.04"/></svg>}
                            {idx === 3 && <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>}
                         </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full ${step.color} w-3/4 animate-pulse`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Why Manual Beats AI */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Precision Matters</h2>
            <p className="text-slate-500">Why the world's top brands choose our hand-edited process over AI automation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200">
              <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-8">Standard AI Tools</h3>
              <ul className="space-y-6">
                {[
                  'Struggles with fine hair/fur details',
                  'Incorrect shadow perspective',
                  'Low-res jagged edges',
                  'Batch errors go undetected',
                  'No understanding of lighting context'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-500">
                    <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-blue-200">
              <h3 className="text-xl font-bold text-blue-200 uppercase tracking-widest mb-8">PixelPerfect Manual</h3>
              <ul className="space-y-6">
                {[
                  '100% accurate mask for complex hair',
                  'Realistic natural & drop shadows',
                  'Silky-smooth high-res vector paths',
                  '3-stage human quality verification',
                  'Consistent style across all items'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-medium">
                    <svg className="w-5 h-5 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Turnaround Calculator */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-4xl font-black">Estimated Delivery Time</h2>
              <div className="space-y-4">
                <label className="text-slate-400 font-bold uppercase tracking-widest text-xs">Number of images in your batch</label>
                <div className="flex items-center justify-center gap-6">
                  <button onClick={() => setPhotoCount(Math.max(1, photoCount - 10))} className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12H4" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                  <span className="text-6xl font-black tabular-nums">{photoCount}</span>
                  <button onClick={() => setPhotoCount(photoCount + 10)} className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                </div>
              </div>
              
              <div className="pt-8 grid md:grid-cols-2 gap-8 border-t border-slate-800">
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase mb-2">Estimated Turnaround</p>
                  <p className="text-3xl font-black text-blue-400">{calculateDelivery(photoCount)}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase mb-2">Quality Guarantee</p>
                  <p className="text-3xl font-black text-emerald-400">99.9% Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Ready to see our process <br /> in action?</h2>
          <p className="text-blue-100 text-xl">Upload your first 3 images and get them back today.</p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/free-trial" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl">
              Start Free Trial
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-black text-xl hover:bg-blue-800 transition-all">
              Custom Requirements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
