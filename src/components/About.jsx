export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="animate-in mb-10">
        <div className="section-stamp">
          <h2 className="font-display text-3xl text-text tracking-tight">About This Protocol</h2>
        </div>
      </div>

      <div className="space-y-6">
        <p className="animate-in stagger-1 font-serif text-sm text-dim leading-relaxed max-w-2xl">
          This is Victor's personal training reference for returning to BJJ after a shoulder injury
          (AC sprain grade 1.5 — partial ligament rupture, between grade 1 and grade 2). Built in April 2026.
        </p>

        <div className="animate-in stagger-2 crop-marks border border-border border-t-3 border-t-orange bg-card p-6">
          <h3 className="font-mono text-[10px] text-orange uppercase tracking-[0.2em] mb-4">Current Status</h3>
          <div className="space-y-3">
            {[
              { label: 'SHOULDER', value: '~80%. Cleared for rolling by kine, being cautious.', color: 'orange' },
              { label: 'CUT', value: '88.3kg → 85kg target (from 94kg).', color: 'accent' },
              { label: 'IF', value: 'No solid food before noon. Flat whites only in the morning. Protein shake post-gym on training days.', color: 'dim' },
              { label: 'GYM', value: 'Fasted sessions at 07:00 before office days with a 1h–1h30 commute.', color: 'dim' },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 items-start">
                <span className={`font-mono text-[10px] text-${item.color} font-medium shrink-0 w-16 tracking-wider`}>{item.label}</span>
                <span className="font-serif text-sm text-text">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-in stagger-3 border border-border bg-card p-6 card-lift">
          <h3 className="font-mono text-[10px] text-dim uppercase tracking-[0.2em] mb-4">Training Split</h3>
          <div className="space-y-2">
            {[
              { days: 'Mon / Wed / Fri', desc: 'BJJ at noon (work from home days)', color: 'accent' },
              { days: 'Tue / Thu', desc: 'Gym at 07:00 (office days)', color: 'green' },
              { days: 'Sat', desc: 'Rest + optional open mat as makeup only', color: 'blue' },
              { days: 'Sun', desc: 'Full rest + meal prep', color: 'blue' },
            ].map((item) => (
              <div key={item.days} className="flex gap-4 items-baseline">
                <span className={`font-mono text-[11px] text-${item.color} w-28 shrink-0 tracking-wide`}>{item.days}</span>
                <span className="font-serif text-sm text-dim">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-in stagger-4 border border-border bg-card p-6 card-lift">
          <h3 className="font-mono text-[10px] text-dim uppercase tracking-[0.2em] mb-4">Gym Session Structure</h3>
          <div className="space-y-2.5">
            <div>
              <span className="font-mono text-[11px] text-green tracking-wide">Tuesday:</span>{' '}
              <span className="font-serif text-sm text-dim">Shoulder work (HFCC) + Compound lift (heavy rotation) + 30 min zone 2 run</span>
            </div>
            <div>
              <span className="font-mono text-[11px] text-green tracking-wide">Thursday:</span>{' '}
              <span className="font-serif text-sm text-dim">Shoulder work (HFCC) + KB sequence + 30 min zone 2 run</span>
            </div>
          </div>
        </div>

        <div className="animate-in stagger-5 border border-border border-t-3 border-t-accent bg-card p-6 card-lift">
          <h3 className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-3">HFCC Protocol</h3>
          <p className="font-serif text-sm text-dim italic leading-relaxed">
            Every exercise follows the criteria prescribed by Victor's kine: Heavy, Fast, Consecutive, Clean.
            This trains tendon elastic properties and reactive neuromuscular patterns — not just muscle strength.
          </p>
        </div>

        <div className="animate-in stagger-6 crop-marks border border-border border-t-3 border-t-red bg-card p-6">
          <h3 className="font-mono text-[10px] text-red uppercase tracking-[0.2em] mb-4">Key Constraints</h3>
          <ul className="space-y-2.5">
            {[
              'No HIIT for now (cut + fasted + injury return)',
              'No overhead press with compromised form',
              'Rehab block is never cut regardless of available time',
              'Saturday open mat = makeup slot only, never bonus session',
              'Monday and Wednesday evening BJJ never viable due to 07:00 gym the next morning',
              'Friday evening BJJ viable (no alarm Saturday)',
            ].map((constraint, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-red font-mono text-xs shrink-0 mt-0.5">—</span>
                <span className="font-serif text-sm text-dim leading-relaxed">{constraint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
