export default function ContextBar() {
  return (
    <div className="border-b border-border bg-card px-6 py-3">
      <div className="max-w-5xl mx-auto">
        {/* Status row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-3 flex-wrap">
            <StatusChip color="accent" label="BJJ" value="MON · WED · FRI @ 12:00" sub="WFH" />
            <span className="hidden sm:block w-px h-3 bg-border" />
            <StatusChip color="green" label="GYM" value="TUE · THU @ 07:00" sub="OFFICE" />
            <span className="hidden sm:block w-px h-3 bg-border" />
            <StatusChip color="blue" label="REST" value="SAT · SUN" />
          </div>
        </div>
        {/* Data row */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-x-4 mt-2 font-mono text-[10px]">
          <DataPoint label="CUT" value="88.3 → 85kg" color="accent" />
          <DataPoint label="IF" value="no solids before noon" />
          <DataPoint label="SHOULDER" value="AC grade 1.5 (~80%)" color="orange" />
          <DataPoint label="COMMUTE" value="~1h–1h30" />
        </div>
      </div>
    </div>
  );
}

function StatusChip({ color, label, value, sub }) {
  return (
    <span className="font-mono text-[11px] leading-none">
      <span className={`text-${color} font-semibold`}>{label}</span>
      <span className="text-dim mx-1">:</span>
      <span className="text-text">{value}</span>
      {sub && <span className="text-dim ml-1 opacity-60">({sub})</span>}
    </span>
  );
}

function DataPoint({ label, value, color = 'dim' }) {
  return (
    <span className="text-dim">
      <span className={`text-${color} font-medium`}>{label}</span>
      <span className="mx-1 opacity-40">:</span>
      {value}
    </span>
  );
}
