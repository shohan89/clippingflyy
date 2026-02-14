
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600 text-lg">Everything you need to know about our photo editing service.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-blue-600' : 'text-slate-900'}`}>
                  {item.question}
                </span>
                <span className={`transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-3xl text-center border border-blue-100">
          <h4 className="font-bold text-blue-900 mb-2">Still have questions?</h4>
          <p className="text-blue-700 mb-6">We're here to help you get the best out of your visual assets.</p>
          <a href="/#/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
            Chat With Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
