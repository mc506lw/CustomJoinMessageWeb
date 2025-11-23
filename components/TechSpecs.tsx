import React from 'react';
import { Database, Server, Settings, Zap, CheckCircle2 } from 'lucide-react';

const SpecCard: React.FC<{
  title: string;
  value: string;
  subValue?: string;
  icon: React.ReactNode;
  delay?: string;
  statusText?: string;
}> = ({ title, value, subValue, icon, delay, statusText }) => (
  <div className="reveal bg-zinc-900/40 p-6 rounded-2xl border border-white/5 flex flex-col items-start hover:bg-zinc-900/60 transition-colors backdrop-blur-sm" style={{ transitionDelay: delay }}>
    <div className="text-gray-500 mb-4">{icon}</div>
    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">{title}</div>
    <div className="text-lg md:text-xl font-semibold text-white mb-1">{value}</div>
    {subValue && <div className="text-sm text-gray-400">{subValue}</div>}
    {statusText && (
       <div className="mt-4 flex items-center gap-1.5 px-2 py-1 bg-green-900/20 rounded border border-green-500/20">
         <CheckCircle2 size={12} className="text-green-500" />
         <span className="text-xs text-green-500 font-medium">{statusText}</span>
       </div>
    )}
  </div>
);

const TechSpecs: React.FC = () => {
  return (
    <section id="specs" className="py-24 bg-black relative">
       {/* Decorative Line */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
           <Settings className="w-8 h-8 mx-auto mb-4 text-gray-500" />
           <h2 className="text-3xl font-bold">兼容性与技术规格</h2>
           <p className="mt-4 text-gray-400">我们致力于为最广泛的服务器核心提供稳定支持</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
           <SpecCard 
             title="核心类型"
             value="Spigot / Paper"
             subValue="1.16.5+"
             icon={<Server />}
             delay="0.1s"
             statusText="完全支持"
           />
           <SpecCard 
             title="高性能核心"
             value="Folia"
             subValue="1.20.1+"
             icon={<Zap />}
             delay="0.2s"
             statusText="完全支持"
           />
           <SpecCard 
             title="Java版本"
             value="Java 17+"
             icon={<Settings />}
             delay="0.3s"
           />
           <SpecCard 
             title="数据库"
             value="SQLite"
             subValue="轻量级，无需配置"
             icon={<Database />}
             delay="0.4s"
           />
        </div>

        <div className="mt-12 text-center reveal border-t border-white/5 pt-8">
            <p className="text-gray-500 text-sm">
                * 可选依赖: PlaceholderAPI (用于支持更多变量)
            </p>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;