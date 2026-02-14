
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const FreeTrial: React.FC = () => {
  const [files, setFiles] = useState<{file: File, preview: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
      // Fix: Directly use process.env.API_KEY when initializing GoogleGenAI as per SDK instructions
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
            { text: "You are a senior professional photo editor. Analyze this uploaded image and provide a bulleted list of 3 specific technical improvements that our team should focus on." }
          ]
        }
      });

      setAnalysis(response.text || 'Analysis unavailable.');
    } catch (err) {
      console.error(err);
      setAnalysis('Our human experts will provide a full assessment during processing.');
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
            Your professional trial is now in our queue. Check your email for a confirmation.
          </p>
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
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Start Your Trial</h1>
              <p className="text-lg text-slate-600">
                Test our quality for free. Upload up to 3 images and receive professional edits within 24 hours. No credit card required.
              </p>
            </div>
            <div className="space-y-4">
              {['Upload 1-3 RAW or JPEG files', 'AI analyzes your specific needs', 'Receive final edits in 24 hours'].map((step, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">{i+1}</span>
                  <p className="font-bold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Select Photos (Max 3)</label>
                  <div className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all ${files.length >= 3 ? 'bg-slate-50 border-slate-200' : 'bg-blue-50/30 border-blue-100 hover:border-blue-400 cursor-pointer group'}`}>
                    <input 
                      type="file" 
                      disabled={files.length >= 3}
                      onChange={handleFileChange}
                      multiple
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="font-black text-slate-900 text-lg">Drop your images here</p>
                    <p className="text-slate-400 text-sm mt-2">RAW, JPG or PNG supported</p>
                  </div>
                </div>

                {files.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h4 className="font-black text-slate-900">Upload Queue ({files.length}/3)</h4>
                      <button 
                        type="button" 
                        onClick={getAIAnalysis}
                        disabled={loading}
                        className="text-sm font-black text-blue-600 flex items-center gap-2 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        {loading ? 'Analyzing...' : '✨ Get AI Analysis'}
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {files.map((f, i) => (
                        <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group border border-slate-100">
                          <img src={f.preview} className="w-full h-full object-cover" />
                          <button onClick={() => removeFile(i)} className="absolute top-2 right-2 bg-rose-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="3" strokeLinecap="round"/></svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    {analysis && (
                      <div className="p-6 bg-slate-900 text-white rounded-[2rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
                        <h5 className="font-black text-blue-400 mb-4 flex items-center gap-2 tracking-widest text-xs uppercase">
                          AI Professional Insights
                        </h5>
                        <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line relative z-10">{analysis}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Delivery Email</label>
                  <input required type="email" placeholder="you@company.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" />
                </div>

                <button type="submit" disabled={files.length === 0} className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-100 disabled:opacity-50 text-lg">
                  Submit Trial Request
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