import { useState } from 'react';
import { shoulderExercises, compounds, compoundRotation, kbSequences, timePlanB } from '../data/gym';

function HFCCCallout() {
  return (
    <div className="crop-marks border border-border border-t-3 border-t-accent bg-card p-6 mb-10 animate-in stagger-3">
      <h4 className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-4">HFCC Protocol</h4>
      <p className="font-serif text-sm text-text italic leading-relaxed mb-4">
        Every exercise — shoulder work and compound — follows the HFCC protocol prescribed by Victor's kine:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { letter: 'H', word: 'HEAVY', desc: 'enough load that the movement is genuinely challenging' },
          { letter: 'F', word: 'FAST', desc: 'the concentric (working) phase is explosive and intentional — not slow and controlled' },
          { letter: 'C', word: 'CONSECUTIVE', desc: 'no pausing between reps, continuous rhythm throughout the set' },
          { letter: 'C', word: 'CLEAN', desc: 'perfect form throughout. The moment form degrades, the set ends.' },
        ].map((item) => (
          <div key={item.word} className="flex gap-3 items-start">
            <span className="font-mono text-accent font-bold text-lg leading-none shrink-0 mt-0.5">{item.letter}</span>
            <div>
              <span className="font-mono text-[11px] text-text font-semibold tracking-wide">{item.word}</span>
              <p className="font-serif text-xs text-dim mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-px bg-border mt-4 mb-3" style={{ backgroundImage: `repeating-linear-gradient(90deg, var(--theme-border) 0px, var(--theme-border) 4px, transparent 4px, transparent 8px)` }} />
      <p className="font-serif text-xs text-dim italic leading-relaxed">
        This trains the tendon's elastic and reactive properties — not just the muscle. Critical for returning to a contact sport.
      </p>
    </div>
  );
}

function SessionStructure() {
  return (
    <div className="mb-10">
      <div className="section-stamp mb-5">
        <h3 className="font-mono text-[10px] text-dim uppercase tracking-[0.2em]">Session Structure</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          {
            day: 'TUESDAY', label: 'HEAVY', color: 'green',
            items: [
              { time: '07:30–07:45', label: 'Shoulder work (3–4 exercises, HFCC, ~15 min)' },
              { time: '07:45–08:15', label: 'Compound lift (heavier, see rotation below, ~15 min)' },
              { time: '08:15–08:45', label: 'Treadmill zone 2 (30 min)' },
            ]
          },
          {
            day: 'THURSDAY', label: 'DYNAMIC', color: 'green',
            items: [
              { time: '07:30–07:45', label: 'Shoulder work (3–4 exercises, HFCC, ~15 min)' },
              { time: '07:45–08:15', label: 'KB sequence (pick one from pool, ~15 min)' },
              { time: '08:15–08:45', label: 'Treadmill zone 2 (30 min)' },
            ]
          }
        ].map((block, idx) => (
          <div key={idx} className={`animate-in stagger-${idx + 1} border border-border border-t-3 border-t-green bg-green-bg p-5 card-lift`}>
            <h4 className="font-mono text-[11px] text-green font-semibold tracking-wider mb-4">
              {block.day} — <span className="opacity-70">{block.label}</span>
            </h4>
            <div className="space-y-3">
              {block.items.map((item) => (
                <div key={item.time} className="flex gap-3 items-baseline">
                  <span className="font-mono text-[10px] text-dim whitespace-nowrap tracking-wide">{item.time}</span>
                  <span className="font-serif text-xs text-text">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <HFCCCallout />
    </div>
  );
}

function TimePlanBSection() {
  return (
    <div className="mb-10">
      <div className="section-stamp mb-5">
        <h3 className="font-mono text-[10px] text-dim uppercase tracking-[0.2em]">Time-Based Plan B</h3>
      </div>
      <div className="animate-in stagger-1 border border-border overflow-x-auto" style={{ backgroundColor: 'var(--theme-card)' }}>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="font-mono text-[9px] text-dim uppercase tracking-wider p-3 border-b border-border">Time</th>
              <th className="font-mono text-[9px] text-dim uppercase tracking-wider p-3 border-b border-border">Label</th>
              <th className="font-mono text-[9px] text-green uppercase tracking-wider p-3 border-b border-border">Tuesday</th>
              <th className="font-mono text-[9px] text-green uppercase tracking-wider p-3 border-b border-border">Thursday</th>
            </tr>
          </thead>
          <tbody>
            {timePlanB.map((row, i) => (
              <tr
                key={i}
                className="hover:bg-card-hover transition-colors border-b border-border last:border-b-0"
              >
                <td className="font-mono text-xs text-accent p-3 font-medium">{row.time}</td>
                <td className="font-mono text-xs text-text p-3">{row.label}</td>
                <td className="font-serif text-xs text-dim p-3 italic">{row.tuesday}</td>
                <td className="font-serif text-xs text-dim p-3 italic">{row.thursday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="animate-in stagger-2 crop-marks border border-border border-t-3 border-t-red bg-red-bg p-5 mt-4">
        <p className="font-serif text-xs text-text italic leading-relaxed">
          <span className="text-red font-mono font-bold tracking-wider">RULE:</span> Shoulder work is never cut. If you don't have time for a full shoulder work block, skip the gym entirely. The shoulder is at 80% — skipping rehab to fit in a deadlift set is exactly the trade you don't make.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div className="animate-in stagger-3 border border-border bg-card p-4 card-lift">
          <h5 className="font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-3">Cut Priority</h5>
          <div className="space-y-1.5">
            <p className="font-serif text-xs text-text"><span className="text-green font-mono font-medium">TUE:</span> Cardio cut first → compound → shoulder work never</p>
            <p className="font-serif text-xs text-text"><span className="text-green font-mono font-medium">THU:</span> KB sequence cut first → cardio → shoulder work never</p>
          </div>
          <p className="font-serif text-[10px] text-dim italic mt-3 leading-relaxed">Tuesday: strength is priority (nothing after). Thursday: recovery cost of KB matters more (BJJ at noon Friday).</p>
        </div>
        <div className="animate-in stagger-4 border border-border bg-card p-4 card-lift">
          <h5 className="font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-3">Minimum Cardio Threshold</h5>
          <p className="font-serif text-xs text-dim italic leading-relaxed">
            15 minutes is the minimum useful cardio duration. Below 15 min of actual running you're not getting meaningful aerobic adaptation — you're just warming up. If you can't hit 15 min, skip cardio entirely.
          </p>
        </div>
      </div>
    </div>
  );
}

function getRowIndices(index, cols) {
  const rowStart = Math.floor(index / cols) * cols;
  return [rowStart, rowStart + 1, rowStart + 2];
}

function ShoulderPool() {
  const [expandedRow, setExpandedRow] = useState(null);
  const cols = 3;

  const handleClick = (i) => {
    const rowStart = Math.floor(i / cols) * cols;
    setExpandedRow(expandedRow === rowStart ? null : rowStart);
  };

  const isRowExpanded = (i) => {
    if (expandedRow === null) return false;
    const rowStart = Math.floor(i / cols) * cols;
    return rowStart === expandedRow;
  };

  return (
    <div className="mb-10">
      <div className="section-stamp mb-2">
        <h3 className="font-mono text-[10px] text-dim uppercase tracking-[0.2em]">Shoulder Work Pool</h3>
      </div>
      <p className="font-serif text-xs text-dim italic mb-5 ml-4">
        Pick 3–4 exercises per session. Rotate across sessions — don't repeat the same selection two sessions in a row.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
        {shoulderExercises.map((ex, i) => {
          const show = isRowExpanded(i);
          return (
            <div
              key={i}
              className={`animate-in stagger-${Math.min(i + 1, 7)} border border-border bg-card cursor-pointer hover:bg-card-hover transition-all card-lift`}
              onClick={() => handleClick(i)}
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-mono text-[11px] text-text font-semibold leading-tight">
                    <span className="text-dim opacity-50">{String(i + 1).padStart(2, '0')}</span> {ex.name}
                  </h4>
                  <span className="font-mono text-[8px] text-green px-1.5 py-0.5 border border-green/30 bg-green-bg shrink-0 tracking-wider">
                    ACTIVE
                  </span>
                </div>
                {show ? (
                  <div className="space-y-3 mt-3 animate-fade">
                    <p className="font-serif text-xs text-dim leading-relaxed">{ex.description}</p>
                    <div>
                      <div className="font-mono text-[9px] text-accent uppercase tracking-wider mb-1.5">HFCC Cues</div>
                      <div className="space-y-1">
                        {Object.entries(ex.cues).map(([key, val]) => (
                          <div key={key} className="flex gap-2 items-start">
                            <span className="font-mono text-[9px] text-accent font-bold uppercase shrink-0">{key[0]}:</span>
                            <span className="font-serif text-[11px] text-dim">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-orange uppercase tracking-wider mb-1">Shoulder Benefit</div>
                      <p className="font-serif text-[11px] text-dim italic">{ex.benefit}</p>
                    </div>
                    <div className="font-mono text-[9px] text-dim opacity-50 pt-1">▲ collapse row</div>
                  </div>
                ) : (
                  <div className="font-mono text-[9px] text-dim opacity-40 mt-1">▼ details</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CompoundRotationSection() {
  const [expandedRow, setExpandedRow] = useState(null);
  const cols = 3;

  const handleClick = (i) => {
    const rowStart = Math.floor(i / cols) * cols;
    setExpandedRow(expandedRow === rowStart ? null : rowStart);
  };

  const isRowExpanded = (i) => {
    if (expandedRow === null) return false;
    return Math.floor(i / cols) * cols === expandedRow;
  };

  return (
    <div className="mb-10">
      <div className="section-stamp mb-2">
        <h3 className="font-mono text-[10px] text-dim uppercase tracking-[0.2em]">Compound Rotation (Tuesday)</h3>
      </div>
      <p className="font-serif text-xs text-dim italic mb-5 ml-4">
        Alternating lower and upper body patterns. Every major movement roughly every 2–3 weeks.
      </p>

      {/* Rotation timeline */}
      <div className="animate-in stagger-1 border border-border p-5 mb-5 overflow-x-auto">
        <div className="font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-3">6-Week Rotation</div>
        <div className="flex gap-[2px]">
          {compoundRotation.map((r) => (
            <div key={r.week} className="border border-border p-2.5 min-w-[110px]" style={{ backgroundColor: 'var(--theme-card)' }}>
              <div className="font-mono text-[9px] text-dim tracking-wide">Week {r.week}</div>
              <div className={`font-mono text-xs font-bold mt-0.5 ${r.type === 'Lower' ? 'text-accent' : 'text-blue'}`}>
                {r.exercise}
              </div>
              <div className={`font-mono text-[8px] mt-0.5 ${r.type === 'Lower' ? 'text-accent' : 'text-blue'} opacity-50`}>{r.type}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
        {compounds.map((c, i) => {
          const show = isRowExpanded(i);
          return (
            <div
              key={i}
              className={`animate-in stagger-${Math.min(i + 1, 6)} border border-border bg-card cursor-pointer hover:bg-card-hover transition-all card-lift`}
              onClick={() => handleClick(i)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-mono text-[11px] text-text font-semibold">{c.name}</h4>
                  <span className={`font-mono text-[8px] px-1.5 py-0.5 border tracking-wider ${c.category === 'Lower' ? 'text-accent border-accent/30' : 'text-blue border-blue/30'}`}>
                    {c.category.toUpperCase()}
                  </span>
                </div>
                {show ? (
                  <div className="space-y-2.5 mt-2 animate-fade">
                    <p className="font-serif text-xs text-dim">{c.description}</p>
                    <div>
                      <div className="font-mono text-[9px] text-dim uppercase tracking-wider mb-1">Form Cues</div>
                      {c.cues.map((cue, j) => (
                        <p key={j} className="font-serif text-[11px] text-dim">• {cue}</p>
                      ))}
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-accent uppercase tracking-wider mb-1">BJJ Relevance</div>
                      <p className="font-serif text-[11px] text-dim italic">{c.bjj}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-green uppercase tracking-wider mb-1">HFCC</div>
                      <p className="font-serif text-[11px] text-dim italic">{c.hfcc}</p>
                    </div>
                    {c.shoulderNote && (
                      <div>
                        <div className="font-mono text-[9px] text-orange uppercase tracking-wider mb-1">Shoulder</div>
                        <p className="font-serif text-[11px] text-orange italic">{c.shoulderNote}</p>
                      </div>
                    )}
                    <div className="font-mono text-[9px] text-dim opacity-40 pt-1">▲ collapse row</div>
                  </div>
                ) : (
                  <div className="font-mono text-[9px] text-dim opacity-40 mt-1">▼ details</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function KBSequenceSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="mb-10">
      <div className="section-stamp mb-2">
        <h3 className="font-mono text-[10px] text-dim uppercase tracking-[0.2em]">KB Sequence Pool (Thursday)</h3>
      </div>
      <p className="font-serif text-xs text-dim italic mb-5 ml-4">
        Pick one based on energy, shoulder feel, and familiarity. Sets and reps are open — use HFCC and your judgment.
      </p>
      <div className="space-y-[2px]">
        {kbSequences.map((seq, i) => (
          <div
            key={i}
            className={`animate-in stagger-${i + 1} border border-border bg-card cursor-pointer hover:bg-card-hover transition-all card-lift`}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h4 className="font-mono text-sm text-text font-semibold tracking-tight">
                    <span className="text-dim opacity-40">{String(i + 1).padStart(2, '0')}</span> {seq.name}
                  </h4>
                  <div className="flex gap-4 mt-1.5 flex-wrap">
                    <span className="font-mono text-[9px] text-dim tracking-wide">
                      Difficulty: <span className="text-text">{seq.difficulty}</span>
                    </span>
                    <span className="font-mono text-[9px] text-dim tracking-wide">
                      Shoulder: <span className={seq.shoulderLoad.includes('High') ? 'text-orange' : seq.shoulderLoad === 'Medium' ? 'text-accent' : 'text-green'}>{seq.shoulderLoad}</span>
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-dim opacity-40 shrink-0">
                  {expanded === i ? '▲' : '▼'}
                </span>
              </div>

              <div className="font-mono text-[11px] text-accent mt-2 tracking-wide">
                {seq.movements.map((m) => m.name).join(' → ')}
              </div>

              {seq.note && expanded !== i && (
                <p className="font-serif text-[10px] text-dim italic mt-1.5">{seq.note}</p>
              )}

              {expanded === i && (
                <div className="mt-5 space-y-4 animate-fade">
                  {seq.note && (
                    <p className="font-serif text-xs text-accent italic border border-border bg-amber-bg p-3">{seq.note}</p>
                  )}
                  {seq.movements.map((m, j) => (
                    <div key={j} className="border-l-2 pl-4" style={{ borderColor: 'var(--theme-accent)', opacity: 0.9 }}>
                      <h5 className="font-mono text-[11px] text-text font-semibold mb-1.5">{m.name}</h5>
                      <p className="font-serif text-[11px] text-dim mb-2">{m.description}</p>
                      <div className="space-y-1">
                        <div>
                          <span className="font-mono text-[8px] text-accent uppercase tracking-wider">HFCC: </span>
                          <span className="font-serif text-[10px] text-dim">{m.hfcc}</span>
                        </div>
                        <div>
                          <span className="font-mono text-[8px] text-blue uppercase tracking-wider">BJJ: </span>
                          <span className="font-serif text-[10px] text-dim">{m.bjj}</span>
                        </div>
                        {m.shoulderNote && (
                          <div>
                            <span className="font-mono text-[8px] text-orange uppercase tracking-wider">SHOULDER: </span>
                            <span className="font-serif text-[10px] text-orange italic">{m.shoulderNote}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GymPlan() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="animate-in mb-8">
        <div className="section-stamp">
          <h2 className="font-display text-3xl text-text tracking-tight">Gym Plan</h2>
          <p className="font-serif text-sm text-dim italic mt-1">Session structure, time-based fallbacks, exercise pools.</p>
        </div>
      </div>

      <SessionStructure />
      <TimePlanBSection />
      <ShoulderPool />
      <CompoundRotationSection />
      <KBSequenceSection />
    </div>
  );
}
