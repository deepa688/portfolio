const CYCLE = 200; // width of one heartbeat, in viewBox units
const MID = 30;

/** One PQRST complex, drawn from the left edge of its cycle. */
function beat(x: number) {
  return [
    `M ${x} ${MID}`,
    `H ${x + 46}`,
    // P wave
    `q 8 -7 16 0`,
    `H ${x + 84}`,
    // QRS
    `l 5 6`,
    `l 6 -26`,
    `l 7 42`,
    `l 6 -22`,
    `H ${x + 130}`,
    // T wave
    `q 14 -12 28 0`,
    `H ${x + CYCLE}`,
  ].join(" ");
}

/**
 * A rhythm strip. The faint path is always there; a short bright segment
 * sweeps along it the way a monitor redraws itself.
 */
export function Trace({ cycles = 7, className = "" }: { cycles?: number; className?: string }) {
  const path = Array.from({ length: cycles }, (_, i) => beat(i * CYCLE)).join(" ");

  return (
    <span className={`trace${className ? ` ${className}` : ""}`} aria-hidden="true">
      <svg viewBox={`0 0 ${CYCLE * cycles} 60`} preserveAspectRatio="none" role="presentation">
        <path className="trace__base" d={path} />
        <path className="trace__sweep" d={path} />
      </svg>
    </span>
  );
}
