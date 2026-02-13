
import React from 'react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: string; 
  accentColor: string; 
}> = ({ title, description, icon, accentColor }) => (
  <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
    <div className={`w-16 h-16 rounded-lg ${accentColor}/10 flex items-center justify-center ${accentColor} mb-8 group-hover:bg-primary-dark group-hover:text-white transition-colors`}>
      <span className="material-symbols-outlined text-4xl">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-500 mb-8 leading-relaxed">
      {description}
    </p>
    <a className="text-accent-orange font-bold inline-flex items-center gap-2 group/link hover:text-accent-teal transition-colors" href="#">
      VIEW TECHNIQUE <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_forward</span>
    </a>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="px-6 lg:px-40 py-24 bg-background-light" id="services">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-20">
          <h2 className="text-accent-orange text-sm font-black tracking-[0.3em] uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-primary-dark mb-6">Medical Excellence in Hair Restoration</h3>
          <p className="text-gray-500 max-w-2xl text-xl font-light">
            Utilizing state-of-the-art technology to provide permanent, natural-looking solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard 
            title="Sapphire FUE" 
            description="Advanced Follicular Unit Extraction using sapphire blades for faster healing and denser results." 
            icon="biotech"
            accentColor="text-accent-teal"
          />
          <ServiceCard 
            title="DHI Pro" 
            description="Direct Hair Implantation for maximum precision and natural growth angles with no channel opening." 
            icon="precision_manufacturing"
            accentColor="text-accent-orange"
          />
          <ServiceCard 
            title="Facial Restoration" 
            description="Specialized beard and eyebrow transplants to enhance facial definition and masculine contours." 
            icon="face"
            accentColor="text-accent-teal"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
