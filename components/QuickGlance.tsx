import React from 'react';
import { User, ShieldCheck, Zap } from 'lucide-react';

const Card: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: string;
}> = ({ title, icon, children, delay }) => (
  <div className="reveal glass-panel p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500/20 transition-all duration-300" style={{ transitionDelay: delay }}>
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-white/10 rounded-lg text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="flex-1 space-y-3 text-gray-400 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

const QuickGlance: React.FC = () => {
  return (
    <section id="glance" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 justify-center reveal">
           <Zap className="text-yellow-500 fill-yellow-500 animate-[bounce_3s_infinite]" />
           <h2 className="text-3xl md:text-4xl font-bold">服主一分钟速览 (懒人包)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="玩家能做什么？" icon={<User className="text-blue-400" />} delay="0.1s">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><span className="text-blue-300 font-mono">/setjoin &lt;消息&gt;</span> 自定义登场语</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>有权限的玩家还能用颜色、设置前后缀</span>
            </div>
          </Card>

          <Card title="服主管什么？" icon={<ShieldCheck className="text-purple-400" />} delay="0.2s">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>权限分级：</strong>自由决定谁能用颜色 (cjm.color)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>模式切换：</strong>在 config.yml 里一键切换</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>热重载：</strong><span className="text-blue-300 font-mono">/cjm reload</span> 无需重启</span>
            </div>
          </Card>

          <Card title="效果对比" icon={<Zap className="text-yellow-400" />} delay="0.3s">
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-1">安装前：</div>
              <div className="bg-white/5 p-3 rounded font-mono text-gray-300 text-xs border border-white/5 opacity-50">
                Steve 加入了游戏
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">安装后：</div>
              <div className="bg-white/5 p-3 rounded font-mono text-xs border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-orange-400">[赞助者]</span> <span className="text-blue-400">Steve</span> <span className="text-white">刚下飞机，准备搞事！</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickGlance;