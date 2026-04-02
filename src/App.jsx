import { useState, useEffect } from 'react';
import ContextBar from './components/ContextBar';
import Navigation from './components/Navigation';
import WeeklyPlan from './components/WeeklyPlan';
import GymPlan from './components/GymPlan';
import PlanB from './components/PlanB';
import About from './components/About';

function App() {
  const [activeTab, setActiveTab] = useState('weekly');
  const [light, setLight] = useState(true);
  const [tabKey, setTabKey] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle('light', light);
  }, [light]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTabKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-bg text-text grid-bg grain transition-colors duration-300">
      {/* Document header */}
      <header className="border-b border-border relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[9px] text-dim uppercase tracking-[0.3em] mb-2">
                Document ref: BRP-2026-04 — For personal use only
              </p>
              <h1 className="font-display text-3xl sm:text-4xl text-text tracking-tight leading-none">
                BJJ Return Protocol
              </h1>
              <div className="flex items-center gap-4 mt-3">
                <div className="h-px flex-1 bg-border max-w-[120px]" />
                <p className="font-mono text-[10px] text-accent uppercase tracking-[0.2em]">
                  Training Reference
                </p>
                <div className="h-px flex-1 bg-border max-w-[120px]" />
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => setLight(!light)}
                className="font-mono text-[10px] text-dim hover:text-accent border border-border px-3 py-1.5 bg-card hover:bg-card-hover transition-all cursor-pointer uppercase tracking-wider"
                title={light ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {light ? '● Dark' : '○ Light'}
              </button>
              <span className="font-mono text-[9px] text-dim opacity-60">APR 2026</span>
            </div>
          </div>
        </div>
        {/* Decorative scanline */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent opacity-20" />
      </header>

      <ContextBar />
      <Navigation active={activeTab} onTabChange={handleTabChange} />

      <main key={tabKey} className="animate-fade">
        {activeTab === 'weekly' && <WeeklyPlan />}
        {activeTab === 'gym' && <GymPlan />}
        {activeTab === 'planb' && <PlanB />}
        {activeTab === 'about' && <About />}
      </main>

      <footer className="border-t border-border px-6 py-6 mt-16">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-mono text-[9px] text-dim uppercase tracking-[0.2em]">
            Private reference — not a public application
          </span>
          <span className="font-mono text-[9px] text-dim opacity-40">BRP-2026</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
