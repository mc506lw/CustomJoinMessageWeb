import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="community" className="bg-zinc-950 py-24 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
        <h3 className="text-3xl font-bold mb-6">加入我们的社区</h3>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
          获取最新更新、提出建议、分享你的使用经验。<br />
          我们期待听到你的声音。
        </p>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://qm.qq.com/q/8XAbYQHguQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[#111] border border-white/10 px-8 py-5 rounded-2xl hover:bg-[#1a1a1a] hover:border-blue-500/30 transition-all cursor-pointer shadow-lg hover:-translate-y-2 hover:shadow-blue-900/20"
          >
            <div className="bg-blue-600/20 p-3 rounded-full text-blue-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
               <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
               <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1 group-hover:text-blue-400 transition-colors">QQ 交流群</div>
               <div className="font-mono text-xl font-bold text-white tracking-widest">810329264</div>
            </div>
          </a>
        </div>

        <div className="mt-20 text-gray-600 text-xs space-y-2">
          <p>© {new Date().getFullYear()} CustomJoinMessage. Released under the MIT License.</p>
          <p>Designed with passion for the Minecraft community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;