
import React from 'react';

const FeatureItem: React.FC<{ 
  icon: string; 
  title: string; 
  description: string; 
}> = ({ icon, title, description }) => (
  <div className="flex gap-6 group">
    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary-dark flex items-center justify-center text-accent-peach group-hover:bg-accent-teal transition-colors">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div>
      <h4 className="font-black text-lg mb-1 uppercase tracking-tight">{title}</h4>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="px-6 lg:px-40 py-24 bg-white" id="why-us">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
          <div 
            className="aspect-[4/5] rounded-xl bg-cover bg-center shadow-xl" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop")' }}
          ></div>
          <div 
            className="aspect-[4/5] rounded-xl bg-cover bg-center shadow-xl mt-12" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop")' }}
          ></div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-teal/5 rounded-full blur-3xl"></div>
        </div>
        <div className="lg:w-1/2 space-y-10">
          <div>
            <h2 className="text-accent-orange text-sm font-black tracking-[0.3em] uppercase mb-4">Elite Packages</h2>
            <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-primary-dark mb-6">Concierge Medical Care</h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Our all-inclusive services ensure a stress-free journey from the moment you land until your final follow-up.
            </p>
          </div>
          <div className="space-y-8">
            <FeatureItem 
              icon="workspace_premium" 
              title="World-Class Surgeons" 
              description="Board-certified specialists with over a decade of microsurgical experience." 
            />
            <FeatureItem 
              icon="hotel" 
              title="Luxury Accommodations" 
              description="5-star hotel stays and VIP private transfers included in every single package." 
            />
            <FeatureItem 
              icon="health_and_safety" 
              title="Lifetime Growth Warranty" 
              description="Official certification ensuring the permanent success of your procedure." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
