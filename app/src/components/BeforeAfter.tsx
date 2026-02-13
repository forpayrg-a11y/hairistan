import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const BeforeAfter = () => {
  return (
    <section id="before-after" className="py-24 bg-accent-teal/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 text-center">
          <h2 className="text-accent-orange text-xs font-black tracking-[0.3em] uppercase">Transformations</h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-primary-dark text-balance">
            See the Difference: <span className="text-accent-teal">Real Results</span>
          </h3>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Witness the precision of our hair restoration techniques. Slide to reveal stunning transformations from our elite clinic.
          </p>
        </div>

        {/* Slider Area */}
        <div className="max-w-4xl mx-auto shadow-2xl rounded-3xl overflow-hidden border-8 border-white bg-white group">
          <ReactCompareSlider
            handle={
              <div className="w-1 h-full bg-white relative shadow-lg">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-teal text-white rounded-full p-3 shadow-xl border-4 border-white transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl select-none">unfold_more</span>
                </div>
              </div>
            }
            itemOne={
              <ReactCompareSliderImage
                src="/before.png" 
                alt="Hair transplant before"
                className="grayscale-[0.2]"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="/after.png" 
                alt="Hair transplant after"
              />
            }
            style={{ height: "100%", minHeight: "500px", width: "100%" }}
          />
        </div>

        <div className="flex justify-center mt-12 gap-8">
            <div className="flex items-center gap-2 text-primary-dark">
                <span className="w-3 h-3 rounded-full bg-accent-orange"></span>
                <span className="text-xs font-bold uppercase tracking-widest">Initial Stage</span>
            </div>
            <div className="flex items-center gap-2 text-primary-dark">
                <span className="w-3 h-3 rounded-full bg-accent-teal"></span>
                <span className="text-xs font-bold uppercase tracking-widest">12 Months Post-Op</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
