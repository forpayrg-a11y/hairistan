import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Natural Hair Transplant in Istanbul
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Restore your confidence with our expert medical team. 
          The most seamless experience for your new look.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition">
          Get Free Consultation
        </button>
      </section>
    </main>
  );
}