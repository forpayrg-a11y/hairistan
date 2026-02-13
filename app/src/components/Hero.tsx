"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
  });
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Logic to send to your API route (e.g., /api/contact)
    console.log("Submitting:", { ...formData, file });
    alert("Form submitted! We'll contact you soon.");
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="px-6 lg:px-40 py-16 lg:py-24 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col gap-12 lg:flex-row items-center lg:items-start">
        <button onClick={() => setIsOpen(true)} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary-dark transition-all">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        {/* Left Side: Value Proposition */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-peach/20 text-accent-orange text-xs font-bold uppercase tracking-widest border border-accent-peach/30 w-fit">
            <span className="material-symbols-outlined text-sm">verified</span>
            Premium Medical Tourism
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-primary-dark">
            Restore Your <br />Confidence <br />
            <span className="text-accent-teal">With Precision.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-[540px] font-light">
            Elite hair restoration through advanced clinical techniques. Discover our all-inclusive medical packages in a luxury healthcare setting.
          </p>
          
          <div className="flex items-center gap-6">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User Reviewer" />
                    </div>
                ))}
             </div>
             <p className="text-sm font-medium text-gray-500">Joined by 2,000+ <br/>happy patients</p>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="w-full lg:w-[480px] relative">
          <div className="absolute -inset-10 bg-accent-teal/5 rounded-full blur-[100px] -z-10"></div>
          
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-8 lg:p-10">
            <h2 className="text-3xl font-bold text-primary-dark mb-8">
              free <span className="bg-accent-teal text-white px-3 py-1 rounded-lg">hair</span> analysis
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name" 
                    className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent-teal outline-none transition-all" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email" 
                    className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent-teal outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Phone</label>
                <div className="flex h-12 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden focus-within:ring-2 focus-within:ring-accent-teal transition-all">
                    <div className="flex items-center px-4 border-r border-gray-200 gap-2 bg-gray-100/50">
                        <span className="text-lg">🇬🇧</span>
                        <span className="text-sm font-bold">+44</span>
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-4 bg-transparent outline-none" 
                    />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Your Request / Complaint</label>
                <textarea 
                  name="request"
                  rows={3} 
                  value={formData.request}
                  onChange={handleInputChange}
                  placeholder="hair transplant, hair loss, hair thinning" 
                  className="p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent-teal outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Photos (optional)</label>
                <label className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:border-accent-teal cursor-pointer transition-colors bg-gray-50/50">
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={handleFileChange}
                      accept="image/png, image/jpeg"
                    />
                    <span className="material-symbols-outlined text-gray-400 text-3xl">upload_file</span>
                    <p className="text-sm text-gray-500">
                      {file ? file.name : "upload photos here"}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">JPEG, PNG (Max 10MB)</p>
                </label>
              </div>

              <button 
                type="submit" 
                className="mt-4 h-14 bg-primary-dark text-white rounded-xl font-bold text-lg hover:bg-accent-teal transition-all shadow-lg active:scale-95"
              >
                Submit Analysis
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;