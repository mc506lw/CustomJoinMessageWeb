import React from 'react';
import { Edit3, Layers, Palette, Sparkles, MessageSquare } from 'lucide-react';

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  delay?: string;
}> = ({ title, desc, icon, children, className = "", delay = "0s" }) => (
  <div 
    className={`reveal glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group transition-all duration-500 hover:bg-zinc-900/80 hover:border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] hover:-translate-y-1 ${className}`}
    style={{ transitionDelay: delay }}
  >
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-100 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">{desc}</p>
    </div>
    {children && <div className="mt-8 relative z-10">{children}</div>}
  </div>
);

const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-20 text-center reveal">
        <h2 className="text-purple-400 font-semibold mb-4 tracking-wide uppercase text-sm animate-pulse">Features</h2>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">核心魅力</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          不仅仅是一个插件，它是连接玩家热情与服务器可持续发展的桥梁。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {/* Card 1: My Message */}
        <FeatureCard 
          title="我的消息，我做主！" 
          desc="玩家只需要一个简单的 /setjoin 命令，就能写下自己的专属台词。"
          icon={<Edit3 className="text-blue-400" />}
          className="lg:col-span-2 bg-gradient-to-br from-[#111] to-black"
          delay="0.1s"
        >
          <div className="bg-black/50 rounded-xl p-4 font-mono text-sm border border-white/10 space-y-3 group-hover:border-white/20 transition-colors">
            <div className="flex items-center gap-3 border-b border-white/5 pb-2">
               <div className="w-2 h-2 rounded-full bg-red-500"></div>
               <span className="text-gray-500 text-xs">Input</span>
            </div>
            <div className="space-y-2">
                <div className="flex gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                   <span className="text-blue-400">/setjoin</span>
                   <span className="text-green-400">&a国王回宫！</span>
                </div>
                <div className="flex gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                   <span className="text-blue-400">/setjoin</span>
                   <span className="text-purple-400">&b摸鱼的我又回来了？</span>
                </div>
            </div>
          </div>
        </FeatureCard>

        {/* Card 2: Dual Modes */}
        <FeatureCard 
          title="不止一种玩法" 
          desc="双重创意模式：简单模式秀个性，前后缀模式造身份。"
          icon={<Layers className="text-purple-400" />}
          className="lg:col-span-1 bg-[#0a0a0a]"
          delay="0.2s"
        >
           <div className="mt-4 space-y-3">
              <div className="bg-white/5 p-3 rounded-lg border border-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default">
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">简单模式</div>
                  <div className="font-mono text-xs text-pink-400">&d闪耀登场，别眨眼！</div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default">
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">前后缀模式</div>
                  <div className="font-mono text-xs">
                    <span className="text-orange-400">[大佬]</span>
                    <span className="text-white mx-1">Player</span>
                    <span className="text-gray-300">刚下飞机</span>
                  </div>
              </div>
           </div>
        </FeatureCard>

        {/* Card 3: Colors */}
        <FeatureCard 
          title="炫酷登场，色彩由我！" 
          desc="支持所有颜色代码 (&a-f) 和十六进制颜色代码 (&#RRGGBB)。"
          icon={<Palette className="text-pink-400" />}
          className="lg:col-span-1 bg-[#0a0a0a]"
          delay="0.3s"
        >
           <div className="grid grid-cols-3 gap-2 mt-6">
              <div className="h-10 rounded bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-500 font-bold text-xs hover:scale-105 transition-transform">&c</div>
              <div className="h-10 rounded bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-500 font-bold text-xs hover:scale-105 transition-transform">&a</div>
              <div className="h-10 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold text-xs hover:scale-105 transition-transform">&9</div>
              <div className="col-span-3 h-10 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border border-white/10 flex items-center justify-center text-white font-bold text-xs tracking-widest hover:scale-105 transition-transform">
                GRADIENT
              </div>
           </div>
        </FeatureCard>
        
        {/* Card 4: PlaceholderAPI */}
        <FeatureCard 
          title="PlaceholderAPI 支持" 
          desc="完美支持变量，让每一条进服消息都独一无二。与服务器生态无缝融合。"
          icon={<Sparkles className="text-yellow-400" />}
          className="lg:col-span-2 bg-gradient-to-br from-[#111] to-black"
          delay="0.4s"
        >
            <div className="flex items-center gap-4 mt-4 text-sm font-mono text-gray-400 bg-black/40 p-3 rounded-lg border border-white/5 group-hover:border-white/20 transition-colors">
                <span className="text-yellow-500 hover:text-yellow-400 transition-colors cursor-help">%player_name%</span>
                <span className="text-green-500 hover:text-green-400 transition-colors cursor-help">%server_online%</span>
                <span className="text-blue-500 hover:text-blue-400 transition-colors cursor-help">%vault_eco_balance%</span>
            </div>
        </FeatureCard>
      </div>
    </section>
  );
};

export default FeatureGrid;