import React from 'react';
import { Key, TrendingUp, Trophy } from 'lucide-react';

const ValueItem: React.FC<{
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  delay?: string;
}> = ({ title, subtitle, icon, delay = "0s" }) => (
  <div 
    className="reveal flex flex-col items-center text-center p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-lg hover:-translate-y-2 group"
    style={{ transitionDelay: delay }}
  >
    <div className="mb-6 p-5 rounded-full bg-gradient-to-b from-gray-800 to-black border border-gray-700 shadow-xl text-white group-hover:scale-110 group-hover:shadow-purple-500/20 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-100 transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light group-hover:text-gray-300 transition-colors">{subtitle}</p>
  </div>
);

const ValueProp: React.FC = () => {
  return (
    <section id="value" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            服主的秘密武器
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            不止是乐趣，更是价值。<br className="md:hidden"/>
            <span className="text-gray-500 text-base mt-2 block md:inline md:mt-0">如何在不破坏游戏平衡的前提下，为服务器注入源源不断的活力？</span>
          </p>
          <div className="mt-4 text-purple-400 font-medium animate-pulse">答案就在这里：将社交特权价值化</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueItem 
            title="创造优雅的“氪金点”"
            subtitle="支持所有颜色权限 (cjm.color) 作为基础赞助/捐赠的奖励。这不会影响PVP或经济平衡，却能极大地满足玩家的虚荣心和归属感。"
            icon={<Key size={32} className="text-yellow-400" />}
            delay="0.1s"
          />
          <ValueItem 
            title="激活半公益服的“收入”模型"
            subtitle="对于半公益服，这是一个完美的切入点。玩家为了获得一个独特的、彩色的、能彰显身份的加入消息而慷慨解囊，他们会觉得这是在为“自己的面子”和“服务器的氛围”投票。"
            icon={<TrendingUp size={32} className="text-green-400" />}
            delay="0.2s"
          />
          <ValueItem 
            title="构建无形的“荣誉体系”"
            subtitle="通过为不同贡献度的玩家设置不同的前缀权限（如[赞助者]、[守护神]），你构建了一个让玩家主动追求的荣誉阶梯。"
            icon={<Trophy size={32} className="text-purple-400" />}
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

export default ValueProp;