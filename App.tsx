/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { DataGenerator } from './components/DataGenerator';
import { ChatBot } from './components/ChatBot';
import { IdentificationIcon, SparklesIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-blue-500/30 overflow-x-hidden flex flex-col font-sans">
      {/* Background patterns */}
      <div className="fixed inset-0 bg-dot-grid opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <GlobeEuropeAfricaIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white leading-none">Egypt Data Bot</h1>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Autofill Assistant</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <nav className="flex items-center gap-6">
               <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Documentation</a>
               <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">API</a>
            </nav>
            <div className="h-4 w-px bg-zinc-800"></div>
            <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
               <SparklesIcon className="w-4 h-4" />
               v1.0
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-16">
        {/* Title Section */}
        <div className="max-w-3xl mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            The ultimate companion for <br/>
            <span className="text-blue-500 italic font-serif">Egyptian developers</span>.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Generate production-grade mock data for Egyptian forms and get instant answers about administrative codes, formatting, and local info.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Main Tools column */}
          <div className="xl:col-span-7 space-y-8">
            <div className="p-8 bg-zinc-900/20 border border-zinc-900 rounded-3xl backdrop-blur-xl">
               <DataGenerator />
            </div>
            
            {/* Quick Codes / Reference */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {[
                 { label: 'Emergency', value: '122', sub: 'Police' },
                 { label: 'Ambulance', value: '123', sub: 'Medical' },
                 { label: 'Fire', value: '180', sub: 'Civil' },
                 { label: 'Electricity', value: '121', sub: 'Technical' }
               ].map((item, i) => (
                 <div key={i} className="bg-zinc-900/40 border border-zinc-900 p-4 rounded-2xl hover:border-zinc-800 transition-all">
                    <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">{item.label}</div>
                    <div className="text-2xl font-black text-white">{item.value}</div>
                    <div className="text-[10px] text-zinc-500 font-medium">{item.sub}</div>
                 </div>
               ))}
            </div>
          </div>

          {/* Assistant column */}
          <div className="xl:col-span-5 relative">
            <div className="sticky top-8">
                <ChatBot />
                
                {/* Visual Accent */}
                <div className="mt-8 p-6 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/10 rounded-3xl">
                   <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">System Identity</div>
                   <p className="text-zinc-400 text-sm leading-relaxed italic">
                     "My purpose is to bridge the gap between complex Egyptian administrative requirements and modern digital systems."
                   </p>
                </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
             <GlobeEuropeAfricaIcon className="w-5 h-5 text-zinc-700" />
             <span className="text-zinc-600 text-sm font-medium">Egypt Data Autofill Bot © 2026</span>
          </div>
          <div className="flex items-center gap-8">
             <a href="#" className="text-xs font-medium text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest">Privacy Policy</a>
             <a href="#" className="text-xs font-medium text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest">Term of Service</a>
             <a href="#" className="text-xs font-medium text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
