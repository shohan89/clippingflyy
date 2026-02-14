
import React, { useState } from 'react';
import { apiService } from '../api';

const FreeTrial: React.FC = () => {
  const [files, setFiles] = useState<{file: File, preview: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file: File) => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setFiles(prev => [...prev, ...newFiles].slice(0, 3));
    }
  };

  const getAIAnalysis = async () => {
    if (files.length === 0) return;
    setLoading(true);
    try {
      const file = files[0].file;
      const base64Data = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.readAsDataURL(file);
      });

      const result = await apiService.analyzeImage(base64Data, file.type);
      setAnalysis(result.text || 'Analysis complete. Experts will review shortly.');
    } catch (err) {
      setAnalysis('AI is busy. Our human experts will analyze your photos.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) return;
    setLoading(true);
    try {
      await apiService.submitFreeTrial({
        email,
        files: files.map(f => f.file.name),
        analysis: analysis || ''
      });
      setSubmitted(true);
    } catch (err) {
      alert('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round"/></svg>
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-6">Trial Started!</h1>
          <p className="text-lg text-slate-600 mb-8">
            Your images are in the queue. You can track your order in your new dashboard.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/dashboard" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all">Go to Dashboard</a>
            <a href="/" className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">Home</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Try PixelPerfect Quality</h1>
            <p className="text-xl text-slate-500 leading-relaxed">Upload 3 sample photos. No credit card required. Experience the manual precision that sets us apart.</p>
            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white">
              <h3 className="text-xl font-bold mb-4">What happens next?</h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex gap-3"><span>1.</span> Expert assigns a designer</li>
                <li className="flex gap-3"><span>2.</span> Manual Pen Tool paths drawn</li>
                <li className="flex gap-3"><span>3.</span> 3-stage QA review</li>
                <li className="flex gap-3"><span>4.</span> Download ready in 24h</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className={`relative border-2 border-dashed rounded-[2.5rem] p-16 text-center transition-all ${files.length >= 3 ? 'bg-slate-50 border-slate-200' : 'bg-blue-50/50 border-blue-200 hover:border-blue-500'}`}>
                  <input type="file" disabled={files.length >= 3} onChange={handleFileChange} multiple accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2.5" /></svg>
                  </div>
                  <p className="font-bold text-slate-900 text-lg">Drop your photos here</p>
                </div>

                {files.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-black">Queue ({files.length}/3)</h4>
                      <button type="button" onClick={getAIAnalysis} disabled={loading} className="text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100">
                        {loading ? 'Processing...' : '✨ Get AI Insights'}
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {files.map((f, i) => (
                        <img key={i} src={f.preview} className="aspect-square object-cover rounded-2xl border border-slate-100" />
                      ))}
                    </div>
                    {analysis && (
                      <div className="p-6 bg-slate-900 text-white rounded-[2rem] text-sm leading-relaxed italic">
                        <span className="text-blue-400 font-black block mb-2 uppercase tracking-widest text-[10px]">AI Assessment</span>
                        {analysis}
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Where should we send the results?</label>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 border border-slate-100 font-medium" />
                </div>

                <button type="submit" disabled={files.length === 0 || loading} className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 shadow-2xl disabled:opacity-50 transition-all text-xl">
                  {loading ? 'Submitting...' : 'Send Trial Request'}
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
