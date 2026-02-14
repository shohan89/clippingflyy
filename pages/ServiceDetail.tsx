
import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const found = SERVICES.find(s => s.slug === slug);
    if (found) setService(found);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/" />;

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
              <span className="mr-2">{service.icon}</span> Specialized Editing
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600">
              {service.fullDescription}
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Included in this service:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
               <Link to="/free-trial" className="px-10 py-4 bg-blue-600 text-white text-center rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
                Start Trial
              </Link>
              <div className="px-10 py-4 bg-white border border-slate-200 text-slate-900 text-center rounded-xl font-bold">
                {service.priceRange}
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10 group-hover:rotate-6 transition-transform" />
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Not seeing exactly what you need?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">We offer bespoke retouching packages for complex projects. Reach out to our team for a personalized workflow assessment.</p>
          <Link to="/contact" className="text-blue-600 font-bold text-lg hover:underline decoration-2 underline-offset-4">
            Request a Custom Quote &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
