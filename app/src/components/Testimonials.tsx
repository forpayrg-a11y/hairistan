
import React from 'react';

const TestimonialCard: React.FC<{ 
  quote: string; 
  author: string; 
  meta: string; 
  avatar: string; 
}> = ({ quote, author, meta, avatar }) => (
  <div className="bg-white p-10 rounded-2xl border border-accent-peach/30 shadow-sm text-left">
    <div className="flex text-accent-orange mb-6">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className="material-symbols-outlined text-sm">star</span>
      ))}
    </div>
    <p className="text-gray-700 mb-10 text-lg font-light leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-4">
      <div 
        className="w-14 h-14 rounded-full bg-cover shadow-md" 
        style={{ backgroundImage: `url("${avatar}")` }}
      ></div>
      <div>
        <p className="font-black text-primary-dark uppercase text-sm">{author}</p>
        <p className="text-xs text-accent-teal font-bold">{meta}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="px-6 lg:px-40 py-24 bg-accent-peach/10" id="testimonials">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-accent-orange text-sm font-black tracking-[0.3em] uppercase mb-12">Patient Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="The level of professionalism was astounding. From my first consultation to the final check-up, I felt in safe hands."
            author="Mark Stevenson"
            meta="UK • FUE PATIENT"
            avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
          />
          <TestimonialCard 
            quote="Istanbul clinic was state-of-the-art. Better than anything I've seen in California. Results are 10/10."
            author="David Miller"
            meta="USA • DHI PATIENT"
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
          />
          <TestimonialCard 
            quote="The concierge service was a game-changer. I didn't have to worry about a single detail while I was in Turkey."
            author="James Wilson"
            meta="CA • BEARD TRANSPLANT"
            avatar="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
