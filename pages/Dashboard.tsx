
import React, { useState, useEffect } from 'react';
import { apiService } from '../api';

const Dashboard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [orders, setOrders] = useState<any[]>([]);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await apiService.getUserOrders(email);
      setOrders(data);
      setIsLogged(true);
    } catch (err) {
      alert('Error fetching orders');
    } finally {
      setLoading(false);
    }
  };

  if (!isLogged) {
    return (
      <div className="pt-40 pb-20 max-w-md mx-auto px-4 text-center">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg">
             <span className="text-2xl font-black">P</span>
          </div>
          <h1 className="text-3xl font-black mb-4">Track Your Orders</h1>
          <p className="text-slate-500 mb-8 font-medium">Enter your email to view your project status and download completed assets.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 border border-slate-100" />
            <button disabled={loading} className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 transition-all">
              {loading ? 'Searching...' : 'Access Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
            <p className="text-slate-500 font-medium">Tracking assets for: <span className="text-blue-600 font-bold">{email}</span></p>
          </div>
          <button onClick={() => setIsLogged(false)} className="text-sm font-bold text-slate-400 hover:text-rose-500 transition-colors">Sign Out</button>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white p-20 rounded-[3rem] text-center border border-slate-100">
             <div className="text-6xl mb-6">📂</div>
             <h2 className="text-2xl font-black mb-2">No projects found</h2>
             <p className="text-slate-400 mb-8">Ready to start your first project?</p>
             <a href="/free-trial" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold">Start Free Trial</a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orders.map((order, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Order ID</span>
                    <h3 className="text-xl font-black text-slate-900">{order.id}</h3>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${order.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 font-medium">Submitted</span>
                    <span className="text-slate-900 font-bold">{new Date(order.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 font-medium">Items</span>
                    <span className="text-slate-900 font-bold">{order.files.length} Photos</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-slate-50 text-slate-400 rounded-2xl font-bold cursor-not-allowed border border-slate-100">
                  {order.status === 'Completed' ? 'Download Assets' : 'Processing...'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
