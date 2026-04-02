import { useState } from 'react';
import { days, keyRules, fatigueColors, typeColors, typeClassMap } from '../data/days';

function FatigueBar({ level }) {
  const color = fatigueColors[level];
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-[2px] items-end h-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-[6px] transition-all duration-300"
            style={{
              height: `${4 + i * 2}px`,
              backgroundColor: i <= level ? color : 'var(--theme-border)',
              opacity: i <= level ? 1 : 0.4,
            }}
          />
        ))}
      </div>
      <span className="font-mono text-[9px] text-dim">{level}/5</span>
    </div>
  );
}

function DayCard({ day, isActive, onClick, index }) {
  const colors = typeColors[day.type];
  const classes = typeClassMap[day.type];

  return (
    <button
      onClick={onClick}
      className={`
        animate-in stagger-${index + 1}
        flex-1 min-w-[125px] p-3 border cursor-pointer text-left
        transition-all duration-200 card-lift relative
        ${isActive
          ? 'border-border bg-card z-10'
          : 'border-border hover:bg-card-hover bg-card'
        }
      `}
      style={{
        borderTopWidth: '3px',
        borderTopColor: isActive ? colors.accent : 'var(--theme-border)',
        backgroundColor: isActive ? colors.bg : undefined,
      }}
    >
      {/* Day abbreviation */}
      <div className="flex items-center justify-between mb-2">
        <span className={`font-mono text-base font-bold tracking-tight ${classes.accent}`}>
          {day.abbr}
        </span>
        <span className="text-sm">{day.workIcon}</span>
      </div>

      {/* Day name */}
      <div className="font-serif text-[11px] text-dim mb-2 italic">{day.name}</div>

      {/* Type badge */}
      <div
        className={`font-mono text-[9px] font-semibold px-2 py-0.5 inline-block mb-3 tracking-wider ${classes.accent}`}
        style={{ backgroundColor: colors.bg, border: `1px solid var(--theme-border)` }}
      >
        {day.type}
      </div>

      {/* Fatigue */}
      <div className="mb-2">
        <FatigueBar level={day.fatigue} />
      </div>

      {/* Tag */}
      <div className="font-mono text-[9px] text-dim leading-snug tracking-wide">{day.tag}</div>

      {/* Expand prompt */}
      <div className={`font-mono text-[9px] mt-3 transition-colors ${isActive ? 'text-accent' : 'text-dim opacity-50'}`}>
        {isActive ? '▲ collapse' : '▼ details'}
      </div>
    </button>
  );
}

function DayDetail({ day }) {
  const colors = typeColors[day.type];
  const classes = typeClassMap[day.type];

  return (
    <div
      className="animate-expand crop-marks border border-border p-6 sm:p-8 relative"
      style={{ borderTopWidth: '3px', borderTopColor: colors.accent, backgroundColor: colors.bg }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-display text-2xl text-text tracking-tight">
              {day.name}
            </h3>
            <span className="text-lg">{day.workIcon}</span>
          </div>
          <span
            className={`font-mono text-[10px] font-medium px-2 py-1 inline-block border border-border tracking-wider ${classes.accent}`}
          >
            {day.tag}
          </span>
        </div>
        <div className="sm:text-right">
          <div className="font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-1">Fatigue Load</div>
          <FatigueBar level={day.fatigue} />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-6" style={{ backgroundImage: `repeating-linear-gradient(90deg, var(--theme-border) 0px, var(--theme-border) 4px, transparent 4px, transparent 8px)` }} />

      {/* Timeline */}
      <div className="space-y-0 relative">
        {/* Vertical line */}
        <div
          className="absolute left-[3px] top-1 bottom-4 w-px"
          style={{ backgroundColor: `color-mix(in srgb, ${colors.accent} 25%, transparent)` }}
        />

        {day.sessions.map((session, i) => (
          <div
            key={i}
            className={`flex gap-4 items-start animate-in stagger-${Math.min(i + 1, 7)}`}
          >
            {/* Timeline dot */}
            <div className="relative z-10 mt-1.5 shrink-0">
              <div className="w-[7px] h-[7px]" style={{ backgroundColor: colors.accent }} />
            </div>

            {/* Content */}
            <div className="pb-5 flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="font-mono text-[11px] text-dim tracking-wide">{session.time}</span>
                <span className="text-sm">{session.icon}</span>
                <span className="font-serif text-sm text-text font-semibold">{session.label}</span>
              </div>
              {session.note && (
                <p className="font-serif text-xs text-dim italic mt-1 leading-relaxed opacity-80">{session.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Sleep & Recovery */}
      <div className="h-px bg-border mt-2 mb-5" style={{ backgroundImage: `repeating-linear-gradient(90deg, var(--theme-border) 0px, var(--theme-border) 4px, transparent 4px, transparent 8px)` }} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-2">Sleep Target</div>
          <div className="font-mono text-sm text-text font-medium">{day.sleepTarget}</div>
          <p className="font-serif text-xs text-dim italic mt-1.5 leading-relaxed">{day.sleepNote}</p>
        </div>
        <div>
          <div className="font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-2">Recovery</div>
          <p className="font-serif text-xs text-dim italic leading-relaxed">{day.recovery}</p>
        </div>
      </div>
    </div>
  );
}

export default function WeeklyPlan() {
  const [activeDay, setActiveDay] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Section header */}
      <div className="animate-in mb-8">
        <div className="section-stamp">
          <h2 className="font-display text-3xl text-text tracking-tight">Weekly Plan</h2>
          <p className="font-serif text-sm text-dim italic mt-1">7-day training schedule. Select a day for the full breakdown.</p>
        </div>
      </div>

      {/* Day cards row */}
      <div className="flex gap-[2px] overflow-x-auto pb-2 -mx-1 px-1">
        {days.map((day, i) => (
          <DayCard
            key={day.id}
            day={day}
            index={i}
            isActive={activeDay === day.id}
            onClick={() => setActiveDay(activeDay === day.id ? null : day.id)}
          />
        ))}
      </div>

      {/* Expanded detail */}
      {activeDay && (
        <DayDetail key={activeDay} day={days.find((d) => d.id === activeDay)} />
      )}

      {/* Key Rules */}
      <div className="mt-14 animate-in">
        <div className="section-stamp mb-6">
          <h3 className="font-mono text-[10px] text-dim uppercase tracking-[0.2em]">Key Rules</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {keyRules.map((rule, i) => (
            <div
              key={i}
              className={`animate-in stagger-${i + 1} border border-border bg-card p-5 card-lift`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-lg">{rule.icon}</span>
                <span className="font-mono text-[11px] text-text font-semibold uppercase tracking-wide leading-tight">{rule.title}</span>
              </div>
              <p className="font-serif text-xs text-dim italic leading-relaxed">{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
