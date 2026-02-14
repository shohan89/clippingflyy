
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Clipping Path', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 text-center lg:text-left">Let's Talk About Your Project</h1>
              <p className="text-xl text-slate-600 text-center lg:text-left">
                Our team is ready to help you scale your post-production. Get in touch for custom pricing, enterprise solutions, or partnership opportunities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Email Us</h4>
                <p className="text-slate-600">hello@pixelperfect.pro</p>
                <p className="text-slate-400 text-sm mt-1">24/7 Response Time</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Our Office</h4>
                <p className="text-slate-600">123 Creative Studio St.</p>
                <p className="text-slate-400 text-sm mt-1">London, United Kingdom</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-4">Global Network</h4>
              <p className="text-slate-400 mb-6">With specialized editing hubs in 3 different time zones, we ensure your delivery never sleeps.</p>
              <div className="flex space-x-6 text-sm font-bold">
                 <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> London Hub</span>
                 <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> NYC Office</span>
                 <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Manila Studio</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-20 space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Message Sent!</h2>
                <p className="text-slate-600">Thank you for reaching out. One of our experts will get back to you within 4 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Project Type</label>
                  <select 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none appearance-none"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  >
                    <option>Clipping Path</option>
                    <option>Background Removal</option>
                    <option>Image Masking</option>
                    <option>Shadow Effect</option>
                    <option>Photo Retouching</option>
                    <option>Color Correction</option>
                    <option>Ghost Mannequin</option>
                    <option>Mirror Effect</option>
                    <option>Vector Conversion</option>
                    <option>Other / Custom</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell us about your requirements, volume, and deadlines..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
                  Send Your Inquiry
                </button>
                <p className="text-xs text-center text-slate-400">By sending this message, you agree to our privacy policy regarding data collection.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
