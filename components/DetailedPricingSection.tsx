
import React from 'react';
import { Link } from 'react-router-dom';
import { DETAILED_PRICING } from '../constants';

const DetailedPricingSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase">
            Affordable Excellence
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Premium Results, <br />
            <span className="text-blue-600">Competitive Pricing</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Get studio-quality edits starting at just cents. Transparent pricing tiers designed to scale with your production needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {DETAILED_PRICING.map((category, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              {/* Modern Before/After Header */}
              <div className="relative p-5 pb-0">
                <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-inner bg-slate-100">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative overflow-hidden border-r border-white/40">
                      <img 
                        src={category.imageUrl + '&sat=-100&brightness=-10'} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        alt="Before" 
                      />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
                        Original
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={category.imageUrl} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        alt="After" 
                      />
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-blue-600/80 backdrop-blur-md border border-blue-400/30 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
                        Edited
                      </div>
                    </div>
                  </div>
                  {/* Slider Visual Divider */}
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/50 backdrop-blur-sm z-10" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-8">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-slate-900">
                      {category.basePrice.split(' ')[0]}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Starting At</span>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-tight leading-none">
                        {category.basePrice.split(' ').slice(1).join(' ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price List Rows */}
                <div className="space-y-1 mb-10">
                  {category.items.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group/row"
                    >
                      <span className="text-sm font-semibold text-slate-600 group-hover/row:text-slate-900 transition-colors">
                        {item.label}
                      </span>
                      <div className="flex items-center gap-2">
                         <div className="h-1 w-1 rounded-full bg-slate-200 group-hover/row:bg-blue-300" />
                         <span className="text-sm font-black text-slate-900">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modern Interactive Buttons */}
                <div className="mt-auto grid grid-cols-2 gap-4">
                  <Link 
                    to="/free-trial" 
                    className="flex items-center justify-center py-4 px-4 bg-slate-100 text-slate-900 rounded-2xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Free Trial
                  </Link>
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-center py-4 px-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-slate-900 shadow-lg shadow-blue-200 hover:shadow-slate-200 transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-20 text-center">
          <Link 
            to="/pricing" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-[2rem] font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-xl shadow-slate-100 hover:shadow-blue-50 group"
          >
            Explore All Detailed Pricing
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DetailedPricingSection;
