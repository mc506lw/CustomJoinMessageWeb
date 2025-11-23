import React, { useState, useEffect } from 'react';
import { MessageCircle, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative w-8 h-8 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            {/* Colorful Logo Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500 rounded-full blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <MessageCircle className="w-5 h-5 text-white relative z-10 fill-black/20" />
          </div>
          <span className="font-semibold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:text-white transition-colors">
            CustomJoinMessage
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-xs font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors hover:scale-105 transform">核心魅力</a>
          <a href="#value" className="hover:text-white transition-colors hover:scale-105 transform">价值</a>
          <a href="#glance" className="hover:text-white transition-colors hover:scale-105 transform">一分钟速览</a>
          <a href="#specs" className="hover:text-white transition-colors hover:scale-105 transform">规格</a>
          <a href="#community" className="hover:text-white transition-colors hover:scale-105 transform">社区</a>
        </div>

        <a href="https://www.minebbs.com/threads/folia-customjoinmessage.42321/" className="bg-white hover:bg-gray-200 text-black px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 hover:scale-105 active:scale-95 shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          下载
          <Download size={12} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;