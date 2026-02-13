
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Procedures', value: '15,000+', color: 'text-accent-orange' },
    { label: 'Clinical Expertise', value: '12 Years', color: 'text-accent-teal' },
    { label: 'Success Rate', value: '99%', color: 'text-accent-orange' },
    { label: 'Certified Clinic', value: 'ISO', color: 'text-accent-teal' },
  ];

  return (
    <section className="px-6 lg:px-40 py-12 bg-primary-dark text-white">
      <div className="flex flex-wrap justify-between gap-8 max-w-[1280px] mx-auto">
        {stats.map((stat, idx) => (
          <React.Fragment key={stat.label}>
            <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
              <p className={`${stat.color} text-4xl font-black`}>{stat.value}</p>
              <p className="text-accent-peach/60 text-xs font-bold uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
            {idx < stats.length - 1 && (
              <div className="w-px h-12 bg-white/10 hidden md:block self-center"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;
