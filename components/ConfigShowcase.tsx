import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ConfigShowcase: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
             New Update
           </div>
           <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
             权限系统，<br />
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">全面升级。</span>
           </h2>
           <p className="text-xl text-gray-400 mb-8 leading-relaxed font-light">
             全新的分组系统让管理变得前所未有的简单。预设优先级，自动注册，让每一个玩家群体都能找到属于他们的位置。
           </p>

           <ul className="space-y-6">
              {[
                { title: '自定义权限组功能', desc: '支持通过配置文件创建自定义权限组' },
                { title: '动态权限注册', desc: '自定义权限组会自动注册对应的权限节点' },
                { title: '增强优先级系统', desc: '支持自定义权限组和预设权限组的优先级配置' },
                { title: '权限组管理命令', desc: '/cjm group list/info/help 轻松管理' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group cursor-default">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300" />
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h4 className="font-bold text-white text-lg group-hover:text-purple-100 transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
           </ul>
           
           <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-sm text-gray-500">
                <span className="text-purple-400 font-mono font-bold">New:</span> 预设权限组优先级也可在配置中自由调整
              </div>
           </div>
        </div>

        <div className="relative reveal group" style={{ transitionDelay: '0.2s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10 transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="bg-[#1e1e1e] px-4 py-3 flex gap-2 items-center border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <div className="ml-4 text-xs text-gray-500 font-mono">config.yml</div>
            </div>
            <div className="p-6 overflow-x-auto bg-[#0d0d0d]">
              <pre className="font-mono text-sm leading-6">
                <code className="text-gray-300">
                  <span className="text-gray-500"># 自定义权限组示例</span>{'\n'}
                  <span className="text-purple-400">groups</span>:{'\n'}
                  {'  '}<span className="text-blue-400">vip</span>:{'\n'}
                  {'    '}<span className="text-purple-400">prefix</span>: <span className="text-green-400">'[VIP]'</span>{'\n'}
                  {'    '}<span className="text-purple-400">priority</span>: <span className="text-orange-300">50</span>{'\n'}
                  {'    '}<span className="text-purple-400">permissions</span>:{'\n'}
                  {'      '}- <span className="text-green-400">[cjm.color]</span>{'\n'}
                  {'  '}<span className="text-blue-400">mvp</span>:{'\n'}
                  {'    '}<span className="text-purple-400">prefix</span>: <span className="text-green-400">'[MVP]'</span>{'\n'}
                  {'    '}<span className="text-purple-400">priority</span>: <span className="text-orange-300">80</span>{'\n'}
                  {'    '}<span className="text-purple-400">permissions</span>: <span className="text-green-400">[cjm.color, cjm.hex]</span>{'\n'}
                  {'\n'}
                  <span className="text-gray-500"># 预设组优先级也可调整</span>{'\n'}
                  <span className="text-purple-400">preset-groups</span>:{'\n'}
                  {'  '}<span className="text-blue-400">admin</span>:{'\n'}
                  {'    '}<span className="text-purple-400">priority</span>: <span className="text-orange-300">100</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigShowcase;