import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="px-6 lg:px-40 py-24 bg-accent-teal text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-dark/10 skew-x-12 translate-x-1/2"></div>
      <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center gap-10 relative z-10">
        <h2 className="text-4xl lg:text-6xl font-black max-w-4xl tracking-tight leading-tight uppercase">
          Ready for your transformation?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl font-light">
          Join thousands of men who reclaimed their youth. Get your free personalized medical assessment within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <a 
            href="https://wa.me/905385291140"
            className="h-16 px-14 bg-primary-dark text-white rounded-lg font-black text-lg hover:bg-white hover:text-primary-dark transition-all shadow-2xl uppercase tracking-widest flex items-center justify-center"
          >
            WhatsApp Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;