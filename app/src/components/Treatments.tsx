import React from 'react';

const Treatments = () => {
    return (
        <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-primary-dark text-balance max-w-2xl mx-auto">Treatments</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">We offer a range of treatments to address different hair loss concerns.</p>
            <div className="flex flex-col gap-4 mt-16 max-w-2xl mx-auto">
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
    );
};

export default Treatments;