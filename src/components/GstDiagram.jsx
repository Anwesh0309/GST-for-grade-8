import React from 'react';

/* =========================================================================
   GST DIAGRAM — visuals for Goods & Services Tax.
   • GstBar     price bar (100%) plus GST block (9%) and extra blocks
   • PriceTag   a before / after price tag
   • Chain      value boxes joined by multiplier arrows
   ========================================================================= */

export const C_PRICE = '#38bdf8';
export const C_GST = '#facc15';
export const C_SC = '#f472b6';
export const money = v => {
  if (!Number.isFinite(v)) return '?';
  const r = Math.round(v * 100) / 100;
  return '$' + (Number.isInteger(r) ? r.toLocaleString('en-US') : r.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
};

/**
 * Stacked bar: segments [{ pct, label, color }] drawn left→right on a 0–130% scale.
 */
export function GstBar({ segments, x = 16, y = 60, w = 328, h = 40, fs = 12 }) {
  const total = 130;
  let cur = 0;
  return (
    <g>
      {segments.map((s, i) => {
        const sx = x + (cur / total) * w, sw = (s.pct / total) * w;
        cur += s.pct;
        return (
          <g key={i}>
            <rect x={sx} y={y} width={Math.max(2, sw - 2)} height={h} rx="6" fill={s.color} fillOpacity={s.fill ?? 0.8} stroke={s.color} strokeWidth="2" strokeDasharray={s.dashed ? '5 4' : undefined} />
            <text x={sx + sw / 2} y={i % 2 ? y + h + 18 : y - 8} fill={s.color} fontSize={fs} fontWeight="900" textAnchor="middle">{s.label}</text>
          </g>
        );
      })}
    </g>
  );
}

/** A price tag with a small label and big value. */
export function PriceTag({ cx = 180, cy = 100, label, value, col = '#facc15', w = 200, h = 96 }) {
  const x = cx - w / 2, y = cy - h / 2;
  return (
    <g>
      <path d={`M${x} ${y + h * 0.25} L${x + 26} ${y} L${x + w} ${y} L${x + w} ${y + h} L${x + 26} ${y + h} L${x} ${y + h * 0.75}Z`} fill="#14082c" stroke={col} strokeWidth="3" />
      <circle cx={x + 28} cy={cy} r="7" fill={col} />
      <text x={cx + 14} y={y + 30} fill="#c4b5fd" fontSize="13" fontWeight="900" textAnchor="middle">{label}</text>
      <text x={cx + 14} y={y + 70} fill="#fff" fontSize="30" fontWeight="900" textAnchor="middle">{value}</text>
    </g>
  );
}

/** Chain of value boxes. nodes: [{ label, ok, caption }], edges: ['×1.09', ...] */
export function Chain({ nodes, edges, y = 80, w = 360, fs = 14 }) {
  const n = nodes.length;
  const bw = Math.min(92, (w - 20) / n - 26);
  const step = (w - 20 - bw) / Math.max(1, n - 1);
  const X = i => 10 + i * step;
  return (
    <g>
      <defs>
        <marker id="gst-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8Z" fill="#facc15" /></marker>
      </defs>
      {edges.map((e, i) => (
        <g key={i}>
          <line x1={X(i) + bw + 2} y1={y + 22} x2={X(i + 1) - 4} y2={y + 22} stroke="#facc15" strokeWidth="3" markerEnd="url(#gst-arrow)" />
          <text x={(X(i) + bw + X(i + 1)) / 2} y={y - 6} fill="#facc15" fontSize={fs - 2} fontWeight="900" textAnchor="middle">{e}</text>
        </g>
      ))}
      {nodes.map((nd, i) => (
        <g key={i}>
          <rect x={X(i)} y={y} width={bw} height="44" rx="12" fill={nd.ok ? '#064e3b' : '#14082c'} stroke={nd.ok ? '#4ade80' : nd.label === '?' ? '#f472b6' : '#a78bfa'} strokeWidth="2.5" />
          <text x={X(i) + bw / 2} y={y + 28} fill="#fff" fontSize={nd.label.length > 7 ? fs - 3 : fs} fontWeight="900" textAnchor="middle">{nd.label}</text>
          {nd.caption && <text x={X(i) + bw / 2} y={y + 62} fill="#c4b5fd" fontSize={fs - 3} fontWeight="800" textAnchor="middle">{nd.caption}</text>}
        </g>
      ))}
    </g>
  );
}

/** Practice diagram wrapper. */
export function GstDiagram({ diagramData, size = 180 }) {
  if (!diagramData) return null;
  const d = diagramData;
  let body = null;
  if (d.type === 'bar') body = <GstBar segments={d.segments} y={80} />;
  else if (d.type === 'tag') body = <PriceTag cx={180} cy={100} label={d.label} value={d.value} col={d.col} w={220} />;
  else if (d.type === 'chain') body = <Chain nodes={d.nodes} edges={d.edges} y={70} />;
  if (!body) return null;
  return (
    <div className="flex items-center justify-center my-1">
      <svg width={size * 1.8} height={size} viewBox="0 0 360 200" className="max-w-full drop-shadow-[0_0_18px_rgba(250,204,21,0.25)]">
        {body}
      </svg>
    </div>
  );
}
