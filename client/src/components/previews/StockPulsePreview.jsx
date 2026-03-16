export default function StockPulsePreview() {
  const chartPoints = [
    [0, 100], [30, 85], [60, 95], [90, 70], [120, 80],
    [150, 60], [180, 75], [210, 55], [240, 65], [270, 45], [290, 50],
  ]

  const toSvg = (pts, w, h, offsetX, offsetY) => {
    const xs = pts.map(p => p[0])
    const ys = pts.map(p => p[1])
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)
    const scaleX = w / (Math.max(...xs) || 1)
    const scaleY = h / (maxY - minY || 1)

    return pts.map(([x, y], i) => {
      const sx = offsetX + x * scaleX
      const sy = offsetY + h - (y - minY) * scaleY
      return `${i === 0 ? 'M' : 'L'} ${sx} ${sy}`
    }).join(' ')
  }

  const linePath = toSvg(chartPoints, 230, 70, 20, 100)
  const areaPath = linePath + ` L 250 170 L 20 170 Z`

  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="stock-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id="chart-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="250" fill="url(#stock-bg)" />

      {/* Sidebar / watchlist */}
      <rect x="0" y="0" width="100" height="250" fill="rgba(0,0,0,0.3)" />
      <text x="12" y="20" fill="rgba(255,255,255,0.5)" fontSize="7.5"
        fontFamily="sans-serif" fontWeight="700" letterSpacing="0.1em">WATCHLIST</text>
      <line x1="0" y1="26" x2="100" y2="26" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {[
        { ticker: 'AAPL', price: '189.25', change: '+1.2%', color: '#10B981', active: true },
        { ticker: 'TSLA', price: '242.80', change: '-0.8%', color: '#EF4444', active: false },
        { ticker: 'NVDA', price: '875.40', change: '+3.4%', color: '#10B981', active: false },
        { ticker: 'MSFT', price: '415.10', change: '+0.6%', color: '#10B981', active: false },
      ].map((s, i) => (
        <g key={s.ticker}>
          {s.active && <rect x="0" y={32 + i * 44} width="100" height="44" fill="rgba(59,130,246,0.15)" />}
          {s.active && <rect x="0" y={32 + i * 44} width="2.5" height="44" fill="#3B82F6" />}
          <text x="12" y={52 + i * 44} fill={s.active ? 'white' : 'rgba(255,255,255,0.7)'}
            fontSize="10" fontFamily="sans-serif" fontWeight="700">{s.ticker}</text>
          <text x="12" y={64 + i * 44} fill={s.active ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)'}
            fontSize="8" fontFamily="sans-serif">{s.price}</text>
          <text x="88" y={64 + i * 44} textAnchor="end" fill={s.color}
            fontSize="7.5" fontFamily="sans-serif" fontWeight="600">{s.change}</text>
        </g>
      ))}

      {/* Main chart area */}
      {/* Header */}
      <text x="116" y="22" fill="white" fontSize="13"
        fontFamily="sans-serif" fontWeight="800">AAPL</text>
      <text x="156" y="22" fill="rgba(255,255,255,0.4)" fontSize="9"
        fontFamily="sans-serif">Apple Inc.</text>

      <text x="116" y="42" fill="white" fontSize="18"
        fontFamily="sans-serif" fontWeight="900">$189.25</text>
      <text x="200" y="42" fill="#10B981" fontSize="10"
        fontFamily="sans-serif" fontWeight="600">▲ +2.25 (+1.20%)</text>

      {/* Time range tabs */}
      {['1D', '1W', '1M', '3M', '1Y'].map((t, i) => (
        <g key={t}>
          {i === 2 && <rect x={112 + i * 28} y={52} width="26" height="14" rx="7" fill="#3B82F6" />}
          <text x={125 + i * 28} y={63} textAnchor="middle"
            fill={i === 2 ? 'white' : 'rgba(255,255,255,0.4)'}
            fontSize="8" fontFamily="sans-serif" fontWeight={i === 2 ? '700' : '500'}>{t}</text>
        </g>
      ))}

      {/* Grid lines */}
      {[0, 1, 2, 3].map(i => (
        <line key={i} x1="20" y1={100 + i * 23} x2="280" y2={100 + i * 23}
          stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}

      {/* Chart area fill */}
      <path d={areaPath} fill="url(#chart-fill)" />

      {/* Chart line */}
      <path d={linePath} fill="none" stroke="#3B82F6" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />

      {/* Dot at end */}
      <circle cx="250" cy="120" r="4" fill="#3B82F6" />
      <circle cx="250" cy="120" r="7" fill="#3B82F6" opacity="0.2" />

      {/* Price tooltip */}
      <rect x="254" y="108" width="54" height="22" rx="6"
        fill="#3B82F6" />
      <text x="281" y="123" textAnchor="middle" fill="white"
        fontSize="9" fontFamily="sans-serif" fontWeight="700">$189.25</text>

      {/* Volume bars */}
      {[18,12,20,10,16,8,14,10,18,12,16].map((h, i) => (
        <rect key={i} x={20 + i * 22} y={180 - h} width="14" height={h} rx="2"
          fill={i === 10 ? 'rgba(59,130,246,0.6)' : 'rgba(255,255,255,0.12)'} />
      ))}
      <text x="116" y="200" fill="rgba(255,255,255,0.3)"
        fontSize="7" fontFamily="sans-serif">Volume</text>

      {/* Right panel: stats */}
      <rect x="292" y="0" width="108" height="250" fill="rgba(0,0,0,0.25)" />
      <text x="300" y="20" fill="rgba(255,255,255,0.4)"
        fontSize="7.5" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.1em">DETAILS</text>
      <line x1="292" y1="26" x2="400" y2="26" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {[
        ['Open', '$187.00'],
        ['High', '$191.40'],
        ['Low', '$186.50'],
        ['Volume', '52.3M'],
        ['Mkt Cap', '$2.94T'],
        ['P/E', '30.2'],
      ].map(([label, val], i) => (
        <g key={label}>
          <text x="300" y={44 + i * 30} fill="rgba(255,255,255,0.35)"
            fontSize="7.5" fontFamily="sans-serif">{label}</text>
          <text x="300" y={57 + i * 30} fill="rgba(255,255,255,0.85)"
            fontSize="9" fontFamily="sans-serif" fontWeight="600">{val}</text>
        </g>
      ))}
    </svg>
  )
}
