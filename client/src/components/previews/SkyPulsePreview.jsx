export default function SkyPulsePreview() {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="sky-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#48CAE4" />
          <stop offset="50%" stopColor="#0096C7" />
          <stop offset="100%" stopColor="#03045E" />
        </linearGradient>
        <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90E0EF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#48CAE4" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="250" fill="url(#sky-bg)" />

      {/* Aurora blobs */}
      <ellipse cx="320" cy="60" rx="120" ry="80" fill="url(#aurora1)" />
      <ellipse cx="80" cy="190" rx="100" ry="70" fill="rgba(0,180,216,0.2)" />

      {/* Stars */}
      {[[30,20],[350,15],[200,8],[130,30],[290,25],[370,40]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.7" />
      ))}

      {/* Main glass card */}
      <rect x="60" y="40" width="280" height="160" rx="16"
        fill="rgba(255,255,255,0.12)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1" />

      {/* City & search bar */}
      <rect x="80" y="56" width="240" height="24" rx="12"
        fill="rgba(255,255,255,0.15)" />
      <text x="200" y="73" textAnchor="middle" fill="rgba(255,255,255,0.9)"
        fontSize="11" fontFamily="sans-serif" fontWeight="600">Montreal, Quebec</text>

      {/* Weather icon area */}
      <text x="130" y="130" textAnchor="middle" fontSize="38">⛅</text>

      {/* Temperature */}
      <text x="245" y="115" textAnchor="middle" fill="white"
        fontSize="42" fontFamily="sans-serif" fontWeight="900">19°</text>
      <text x="245" y="133" textAnchor="middle" fill="rgba(255,255,255,0.75)"
        fontSize="10" fontFamily="sans-serif">Partly Cloudy</text>

      {/* Divider */}
      <line x1="80" y1="155" x2="320" y2="155" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Bottom forecast row */}
      {[['Mon','☀️','22°'],['Tue','🌧','14°'],['Wed','⛅','18°'],['Thu','🌩','12°']].map(([day,icon,temp], i) => (
        <g key={day}>
          <text x={100 + i * 68} y="172" textAnchor="middle" fill="rgba(255,255,255,0.6)"
            fontSize="8" fontFamily="sans-serif">{day}</text>
          <text x={100 + i * 68} y="186" textAnchor="middle" fontSize="13">{icon}</text>
          <text x={100 + i * 68} y="198" textAnchor="middle" fill="rgba(255,255,255,0.9)"
            fontSize="9" fontFamily="sans-serif" fontWeight="600">{temp}</text>
        </g>
      ))}
    </svg>
  )
}
