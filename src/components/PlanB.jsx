import { useState } from 'react';

const causes = [
  {
    id: 'work',
    icon: '💼',
    title: 'Work / Scheduling',
    color: 'var(--theme-blue)',
    bgColor: 'var(--theme-blue-bg)',
    summary: "Physical capacity is fine — you just couldn't make it. This is the only case where makeup options open up.",
    eveningHeader: 'Evening class (19:00–20:30)',
    evening: [
      { day: 'Monday miss', verdict: 'SKIP', color: 'var(--theme-red)', reason: 'Home 21:00–21:30. Gym at 07:00 tomorrow. Not enough recovery. Skip and move on.' },
      { day: 'Wednesday miss', verdict: 'SKIP', color: 'var(--theme-red)', reason: 'Same as Monday. Gym at 07:00 Thursday. Evening BJJ kills your most critical bedtime.' },
      { day: 'Friday miss', verdict: 'GO', color: 'var(--theme-green)', reason: 'No alarm Saturday. Evening is fully viable — absorb it and sleep in.' },
    ],
    saturday: {
      verdict: 'GO',
      color: 'var(--theme-green)',
      reason: 'You have the physical capacity and the week was shorter. Open mat brings you back to target volume.',
      caveat: "Only if you didn't already complete all 5 sessions this week.",
    },
    fallback: 'If no evening and no open mat available → accept the miss. 2/3 sessions is still a solid week.',
  },
  {
    id: 'fatigue',
    icon: '😴',
    title: 'Fatigue / Sleep Debt',
    color: 'var(--theme-orange)',
    bgColor: 'var(--theme-amber-bg)',
    summary: "Rest IS the session. You're fasted and cutting. Fatigue misses mean the body is telling you something — don't override it.",
    eveningHeader: 'Evening class',
    evening: [
      { day: 'All days', verdict: 'NO', color: 'var(--theme-red)', reason: "You're fatigued. Adding a session doesn't fix the fatigue — it deepens it." },
    ],
    saturday: {
      verdict: 'NO',
      color: 'var(--theme-red)',
      reason: 'The fatigue that caused the miss is still in your system. One fewer session this week is the correct outcome.',
    },
    fallback: 'Pattern of fatigue misses → audit Wednesday night bedtime first. Then Thursday logistics.',
  },
  {
    id: 'shoulder',
    icon: '🩺',
    title: 'Shoulder Flare-Up',
    color: 'var(--theme-red)',
    bgColor: 'var(--theme-red-bg)',
    summary: 'Ice + CARs only. No training. Tell your coach. Drop the compound on next gym day (shoulder work + cardio only). Monitor 48h.',
    eveningHeader: 'Evening class',
    evening: [
      { day: 'All days', verdict: 'NO', color: 'var(--theme-red)', reason: 'Shoulder flare = no mat time regardless of timing.' },
    ],
    saturday: {
      verdict: 'NO',
      color: 'var(--theme-red)',
      reason: "Shoulder flare-ups need 48h minimum. If resolved by Saturday, still skip — rest does more than one session of rolling.",
    },
    fallback: 'After 48h: resolved → resume next BJJ with coach communication. Still painful → contact kine / Dr. De Jager before returning.',
  },
];

const universalRules = [
  { type: 'no', text: 'Never compensate with extra gym volume after a missed BJJ.' },
  { type: 'no', text: 'Open mat is a makeup slot only — never an addition to a full week.' },
  { type: 'no', text: 'Never train through shoulder pain to make up for a missed session.' },
  { type: 'yes', text: '2 sessions/week is enough to progress during a return phase. Consistency beats volume.' },
];

function CauseCard({ cause, isExpanded, onClick, index }) {
  return (
    <div
      className={`animate-in stagger-${index + 1} border border-border cursor-pointer transition-all card-lift`}
      style={{
        borderTopWidth: '3px',
        borderTopColor: cause.color,
        backgroundColor: isExpanded ? cause.bgColor : 'var(--theme-card)',
      }}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl">{cause.icon}</span>
          <h4 className="font-mono text-[12px] font-semibold tracking-wide" style={{ color: cause.color }}>
            {cause.title}
          </h4>
          <span className="ml-auto font-mono text-[9px] text-dim opacity-40">
            {isExpanded ? '▲' : '▼'}
          </span>
        </div>
        <p className="font-serif text-xs text-dim italic leading-relaxed">{cause.summary}</p>
      </div>

      {isExpanded && (
        <div className="border-t border-border p-5 space-y-5 animate-fade">
          <div>
            <h5 className="font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-3">{cause.eveningHeader}</h5>
            <div className="space-y-2">
              {cause.evening.map((e, i) => (
                <div key={i} className="flex gap-3 items-start border border-border bg-bg p-3">
                  <div className="shrink-0 flex items-center gap-2">
                    <span className="font-mono text-[11px] text-text">{e.day}</span>
                    <span
                      className="font-mono text-[10px] font-bold px-2 py-0.5 border border-border tracking-wider"
                      style={{ color: e.color }}
                    >
                      {e.verdict}
                    </span>
                  </div>
                  <p className="font-serif text-xs text-dim italic">{e.reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-3">Saturday Open Mat (13:45–15:45)</h5>
            <div className="flex gap-3 items-start border border-border bg-bg p-3">
              <span
                className="font-mono text-[10px] font-bold px-2 py-0.5 shrink-0 border border-border tracking-wider"
                style={{ color: cause.saturday.color }}
              >
                {cause.saturday.verdict}
              </span>
              <div>
                <p className="font-serif text-xs text-dim italic">{cause.saturday.reason}</p>
                {cause.saturday.caveat && (
                  <p className="font-serif text-[10px] text-orange italic mt-1.5">⚠️ {cause.saturday.caveat}</p>
                )}
              </div>
            </div>
          </div>

          <div className="border border-border bg-card p-3">
            <span className="font-mono text-[9px] text-dim uppercase tracking-wider">Fallback: </span>
            <span className="font-serif text-xs text-dim italic">{cause.fallback}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PlanB() {
  const [expandedCause, setExpandedCause] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="animate-in mb-8">
        <div className="section-stamp">
          <h2 className="font-display text-3xl text-text tracking-tight">Plan B — Missed BJJ</h2>
          <p className="font-serif text-sm text-dim italic mt-1">Decision framework when you miss a session.</p>
        </div>
      </div>

      {/* Trigger */}
      <div className="animate-in stagger-1 crop-marks border border-border border-t-3 border-t-accent bg-amber-bg p-6 mb-8">
        <h3 className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-3">Trigger</h3>
        <p className="font-serif text-base text-text italic">You missed a BJJ session (Mon, Wed, or Fri at noon). What now?</p>
        <div className="flex items-center gap-3 mt-3">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[9px] text-accent tracking-[0.2em] uppercase">Why did you miss?</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>

      {/* Cause cards */}
      <div className="space-y-[2px] mb-10">
        {causes.map((cause, i) => (
          <CauseCard
            key={cause.id}
            cause={cause}
            index={i}
            isExpanded={expandedCause === cause.id}
            onClick={() => setExpandedCause(expandedCause === cause.id ? null : cause.id)}
          />
        ))}
      </div>

      {/* Universal Rules */}
      <div className="animate-in stagger-5 border border-border bg-card p-6">
        <h3 className="font-mono text-[10px] text-dim uppercase tracking-[0.2em] mb-5">Universal Rules</h3>
        <div className="space-y-3">
          {universalRules.map((rule, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className={`font-mono text-xs font-bold mt-0.5 ${rule.type === 'yes' ? 'text-green' : 'text-red'}`}>
                {rule.type === 'yes' ? '✓' : '✗'}
              </span>
              <span className="font-serif text-sm text-dim leading-relaxed">{rule.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
