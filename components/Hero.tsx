import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation values (max 8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-32 pb-20 perspective-1000">
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] -z-10 animate-pulse duration-[5000ms]"></div>
      
      <div className={`transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center justify-center gap-2 mb-6">
           <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wider uppercase animate-[bounce_2s_infinite]">
             MIT License
           </span>
        </div>
        
        <h2 className="text-xl md:text-2xl font-medium text-purple-400 mb-4 tracking-wide">
          CustomJoinMessage
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
          把<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse">“登场”</span>的权力<br />
          交给玩家！
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
           一个充满活力的服务器，始于每一次有趣的互动。<br className="hidden md:block"/>
           而玩家的加入，就是第一次互动！
        </p>
        
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <button className="group bg-white text-black px-8 py-3.5 rounded-full text-lg font-semibold transition-all hover:bg-gray-200 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            立即下载
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#features" className="text-gray-400 hover:text-white px-6 py-3 font-medium transition-colors border border-white/10 rounded-full hover:bg-white/5 hover:border-white/30">
            了解更多 &gt;
          </a>
        </div>
      </div>

      {/* Floating Wrapper */}
      <div className="mt-24 w-full max-w-2xl mx-auto relative animate-float">
         {/* 3D Tilt Container */}
         <div 
           ref={cardRef}
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
           className={`transition-all duration-300 ease-out transform ${loaded ? 'opacity-100' : 'opacity-0'}`}
           style={{
             transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
             transformStyle: 'preserve-3d'
           }}
         >
            {/* Simulated Chat Box */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 text-left shadow-2xl mx-4 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(88,28,135,0.3)] hover:border-purple-500/30 transition-all duration-300">
               {/* MacOS Window Controls */}
               <div className="flex items-center gap-2 mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:scale-110 transition-transform"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:scale-110 transition-transform"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:scale-110 transition-transform"></div>
               </div>
               
               <div className="space-y-4 font-mono text-sm md:text-base leading-relaxed transform translate-z-10">
                  {/* Default Message */}
                  <div className="flex items-start gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                     <span className="text-gray-500 whitespace-nowrap">[12:00:01]</span>
                     <span className="text-yellow-200">Steve joined the game</span>
                  </div>
                  
                  <div className="h-px bg-white/5 my-2 w-full"></div>
                  
                  {/* CJM Enhanced Message */}
                  <div className="flex items-start gap-3 relative">
                     <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-500 rounded-r opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"></div>
                     <span className="text-gray-500 whitespace-nowrap">[12:05:22]</span> 
                     <span className="break-words">
                       <span className="font-bold text-orange-400 animate-pulse">[赞助者]</span> 
                       <span className="text-blue-400 mx-1">Steve</span> 
                       <span className="text-white relative">
                         刚下飞机，准备搞事！
                         <span className="absolute -right-3 top-0 w-2 h-4 bg-white animate-pulse"></span>
                       </span>
                     </span>
                  </div>
               </div>

               {/* Gradient glow at bottom */}
               <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;