import React, { useState } from 'react';
import { Send, CheckCircle2, Terminal, ShieldCheck, Mail, User, MessageSquare } from 'lucide-react';

export default function ContactTransmission() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-12">
      <div className="glass-card p-6 md:p-12 border border-slate-800 relative overflow-hidden">
        
        {/* Header Tag */}
        <div className="flex flex-col items-center text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <span>// CONTACT TRANSMISSION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Let's Build Something Exceptional.
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Fill out the transmission form or preview your live payload stream directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Live JSON Payload Preview matching Screenshot 3 */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl font-mono text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-bold">// payload_preview.json</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  LIVE STREAM
                </span>
              </div>

              <div className="space-y-2 text-slate-300">
                <div>
                  <span className="text-indigo-400">sender: </span>
                  <span className="text-amber-300">
                    "{formData.firstName || formData.lastName ? `${formData.firstName} ${formData.lastName}`.trim() : '[Awaiting Name]'}"
                  </span>
                </div>

                <div>
                  <span className="text-indigo-400">email: </span>
                  <span className="text-cyan-300">
                    "{formData.email || '[Awaiting Email]'}"
                  </span>
                </div>

                <div>
                  <span className="text-indigo-400">message: </span>
                  <span className="text-emerald-300">
                    "{formData.message || '[Awaiting Message]'}"
                  </span>
                </div>

                <div>
                  <span className="text-indigo-400">permission_granted: </span>
                  <span className="text-violet-400">{formData.permission ? 'true' : 'false'}</span>
                </div>

                <div>
                  <span className="text-indigo-400">recipient: </span>
                  <span className="text-slate-400">"yashwanthvandili8494@gmail.com"</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between">
                <span>ENCRYPTION: AES-256</span>
                <span>STATUS: READY</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Direct Contact Details</span>
              </div>
              <p className="text-slate-400">Email: yashwanthvandili8494@gmail.com</p>
              <p className="text-slate-400">Location: Bengaluru, Karnataka, India</p>
            </div>
          </div>

          {/* Right Column: Form matching Screenshot 3 */}
          <div className="lg:col-span-7">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">FIRST NAME</label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Yashwanth"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 font-medium placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">LAST NAME</label>
                    <input 
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Vandili"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 font-medium placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">EMAIL ADDRESS</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 font-medium placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">TYPE YOUR MESSAGE HERE...</label>
                  <textarea 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Discussing data analyst roles, Power BI dashboards, or Python ETL projects..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 font-medium placeholder:text-slate-600"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input 
                    type="checkbox"
                    id="permission"
                    name="permission"
                    checked={formData.permission}
                    onChange={handleChange}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="permission" className="text-xs text-slate-400 cursor-pointer">
                    I give permission to contact me at this email address.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="glass-card p-8 text-center space-y-4 border border-emerald-500/40">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Transmission Received!</h3>
                <p className="text-sm text-slate-300">
                  Thank you, <strong className="text-white">{formData.firstName}</strong>. Your message payload has been sent to <strong className="text-cyan-400">yashwanthvandili8494@gmail.com</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                >
                  Send Another Transmission
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
