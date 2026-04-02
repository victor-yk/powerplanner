const tabs = [
  { id: 'weekly', label: 'Weekly Plan', num: '01' },
  { id: 'gym', label: 'Gym Plan', num: '02' },
  { id: 'planb', label: 'Plan B', num: '03' },
  { id: 'about', label: 'About', num: '04' },
];

export default function Navigation({ active, onTabChange }) {
  return (
    <nav className="border-b border-border bg-bg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                group relative px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em]
                transition-all cursor-pointer border-b-2 -mb-px
                ${isActive
                  ? 'border-accent text-accent'
                  : 'border-transparent text-dim hover:text-text'
                }
              `}
            >
              <span className={`mr-1.5 text-[9px] opacity-40 ${isActive ? 'opacity-70' : ''}`}>
                {tab.num}
              </span>
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent -mb-[3px]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
