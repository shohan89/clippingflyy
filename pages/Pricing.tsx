
import React from 'react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600">Choose the plan that fits your production volume. No hidden fees, cancel anytime.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white p-8 rounded-3xl shadow-xl border-2 transition-transform hover:-translate-y-2 ${plan.highlight ? 'border-blue-600 scale-105 z-10' : 'border-transparent'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="ml-2 text-slate-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to={plan.cta === 'Contact Sales' ? '/contact' : '/free-trial'} 
                className={`block w-full text-center py-4 rounded-xl font-bold transition-colors ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-12 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">Need a high-volume custom quote?</h2>
            <p className="text-slate-600">Processing more than 1,000 images per month? We offer special rates for large retailers and photography agencies.</p>
          </div>
          <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors whitespace-nowrap">
            Contact Enterprise Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
