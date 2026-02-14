
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const FreeTrial: React.FC = () => {
  const [files, setFiles] = useState<{file: File, preview: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Fix: Explicitly type the file parameter to resolve 'unknown' type error in URL.createObjectURL
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file: File) => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setFiles(prev => [...prev, ...newFiles].slice(0, 3));
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getAIAnalysis = async () => {
    if (files.length === 0) return;
    setLoading(true);
    setAnalysis(null);

    try {
      // Fix: Initialize GoogleGenAI with the API key from process.env directly
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const file = files[0].file;
      const base64Data = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.readAsDataURL(file);
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: file.type } },
            { text: "You are a senior professional photo editor. Analyze this uploaded image and provide a bulleted list of 3 specific technical improvements (lighting, color balance, retouching needs) that our team should focus on to make it commercial-grade. Be professional and concise." }
          ]
        }
      });

      setAnalysis(response.text || 'Analysis unavailable.');
    } catch (err) {
      console.error(err);
      setAnalysis('AI analysis service is busy. Our human experts will handle the full assessment during processing.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Images Received!</h1>
          <p className="text-lg text-slate-600 mb-8">
            Your professional trial is now in our queue. Check your email for a confirmation and your edited results within 24 hours.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl mb-8 text-left space-y-2">
            <p className="text-sm font-bold text-slate-900">Order ID: #TRIAL-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
            <p className="text-sm text-slate-500">Service: High-Resolution Professional Review</p>
          </div>
          <a href="/#/" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">Return to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Start Your Trial</h1>
              <p className="text-lg text-slate-600">
                Test our quality for free. Upload up to 3 images and receive professional edits within 24 hours. No credit card required.
              </p>
            </div>
            
            <div className="space-y-4">
              {['Upload 1-3 RAW or JPEG files', 'Optional: Use AI to analyze your shots', 'Receive edited files in 24 hours'].map((step, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">{i+1}</span>
                  <p className="font-medium text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-slate-900 uppercase">Select Photos (Max 3)</label>
                  <div className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-colors ${files.length >= 3 ? 'bg-slate-50 border-slate-200 opacity-50' : 'bg-blue-50/50 border-blue-200 hover:border-blue-400 cursor-pointer group'}`}>
                    <input 
                      type="file" 
                      disabled={files.length >= 3}
                      onChange={handleFileChange}
                      multiple
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                    />
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="font-bold text-slate-700">Click to upload images</p>
                  </div>
                </div>

                {files.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold">Queue ({files.length}/3)</h4>
                      <button 
                        type="button" 
                        onClick={getAIAnalysis}
                        disabled={loading}
                        className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline disabled:opacity-50"
                      >
                        {loading ? 'Analyzing...' : '✨ Analyze First Image'}
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {files.map((f, i) => (
                        <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                          <img src={f.preview} className="w-full h-full object-cover" />
                          <button onClick={() => removeFile(i)} className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    {analysis && (
                      <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                        <h5 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                          <span className="text-xl">✨</span> AI Professional Insights
                        </h5>
                        <p className="text-sm text-blue-800 leading-relaxed whitespace-pre-line">{analysis}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <label className="block text-sm font-bold text-slate-900 uppercase">Delivery Email</label>
                  <input required type="email" placeholder="you@company.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600" />
                </div>

                <button type="submit" disabled={files.length === 0} className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 disabled:opacity-50">
                  Send to Professional Editors
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
