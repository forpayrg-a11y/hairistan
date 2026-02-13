import React from 'react';

const FooterSimple: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 py-8 text-white px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-1">HairPro</h2>
          <p className="text-gray-400 text-sm">
            © 2024 HairTransplant Pro Agency. All rights reserved.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default FooterSimple;