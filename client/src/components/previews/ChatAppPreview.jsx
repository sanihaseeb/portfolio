export default function ChatAppPreview() {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="chat-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A0533" />
          <stop offset="100%" stopColor="#2D1B69" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="250" fill="url(#chat-bg)" />

      {/* Sidebar */}
      <rect x="0" y="0" width="110" height="250" fill="rgba(0,0,0,0.35)" />

      {/* Sidebar header */}
      <text x="14" y="22" fill="rgba(255,255,255,0.9)" fontSize="9"
        fontFamily="sans-serif" fontWeight="700">💬 ChatApp</text>
      <line x1="0" y1="30" x2="110" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* Sidebar label */}
      <text x="14" y="46" fill="rgba(255,255,255,0.4)" fontSize="7"
        fontFamily="sans-serif" fontWeight="600" letterSpacing="0.08em">CHANNELS</text>

      {/* # general — active */}
      <rect x="6" y="50" width="98" height="20" rx="6" fill="rgba(157,78,221,0.4)" />
      <text x="14" y="63" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="600"># general</text>

      {/* DMs label */}
      <text x="14" y="88" fill="rgba(255,255,255,0.4)" fontSize="7"
        fontFamily="sans-serif" fontWeight="600" letterSpacing="0.08em">DIRECT MESSAGES</text>

      {/* DM users */}
      {[
        { name: 'alex_dev', color: '#F59E0B', online: true, y: 98 },
        { name: 'sarah_m', color: '#10B981', online: true, y: 118 },
        { name: 'john_k', color: '#3B82F6', online: false, y: 138 },
      ].map(u => (
        <g key={u.name}>
          <circle cx="20" cy={u.y + 6} r="8" fill={u.color} opacity="0.85" />
          <circle cx="27" cy={u.y + 12} r="3.5"
            fill={u.online ? '#10B981' : '#6B7280'}
            stroke="#1A0533" strokeWidth="1.5" />
          <text x="34" y={u.y + 10} fill="rgba(255,255,255,0.75)"
            fontSize="8.5" fontFamily="sans-serif">{u.name}</text>
        </g>
      ))}

      {/* Main chat area */}
      {/* Channel header */}
      <rect x="110" y="0" width="290" height="32" fill="rgba(0,0,0,0.2)" />
      <text x="124" y="20" fill="white" fontSize="10"
        fontFamily="sans-serif" fontWeight="700"># general</text>
      <circle cx="378" cy="16" r="5" fill="#10B981" />
      <text x="368" y="30" fill="rgba(255,255,255,0.5)" fontSize="7"
        fontFamily="sans-serif">3 online</text>

      {/* Messages */}
      {/* Message 1 - incoming */}
      <circle cx="128" cy="58" r="10" fill="#F59E0B" opacity="0.9" />
      <text x="128" y="62" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">A</text>
      <rect x="144" y="46" width="140" height="26" rx="10" fill="rgba(157,78,221,0.35)"
        stroke="rgba(157,78,221,0.3)" strokeWidth="1" />
      <text x="152" y="57" fill="rgba(255,255,255,0.9)" fontSize="8"
        fontFamily="sans-serif">Hey, can you review my PR?</text>
      <text x="152" y="68" fill="rgba(255,255,255,0.35)" fontSize="6.5"
        fontFamily="sans-serif">10:24 AM</text>

      {/* Message 2 - outgoing */}
      <rect x="216" y="86" width="158" height="26" rx="10"
        fill="rgba(157,78,221,0.7)" />
      <text x="224" y="97" fill="white" fontSize="8" fontFamily="sans-serif">Sure, sending feedback now</text>
      <text x="224" y="108" fill="rgba(255,255,255,0.45)" fontSize="6.5"
        fontFamily="sans-serif">10:25 AM ✓✓</text>
      <circle cx="382" cy="99" r="10" fill="#10B981" opacity="0.9" />
      <text x="382" y="103" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">S</text>

      {/* Typing indicator */}
      <rect x="144" y="124" width="70" height="20" rx="10"
        fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="162" cy="134" r="3" fill="rgba(255,255,255,0.5)" />
      <circle cx="174" cy="134" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="186" cy="134" r="3" fill="rgba(255,255,255,0.15)" />

      {/* Message 3 */}
      <circle cx="128" cy="162" r="10" fill="#3B82F6" opacity="0.9" />
      <text x="128" y="166" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">J</text>
      <rect x="144" y="150" width="120" height="26" rx="10" fill="rgba(157,78,221,0.35)"
        stroke="rgba(157,78,221,0.3)" strokeWidth="1" />
      <text x="152" y="161" fill="rgba(255,255,255,0.9)" fontSize="8"
        fontFamily="sans-serif">Left some comments 👍</text>
      <text x="152" y="172" fill="rgba(255,255,255,0.35)" fontSize="6.5"
        fontFamily="sans-serif">10:27 AM</text>

      {/* Input box */}
      <rect x="118" y="220" width="268" height="22" rx="11"
        fill="rgba(255,255,255,0.08)" stroke="rgba(157,78,221,0.4)" strokeWidth="1" />
      <text x="134" y="235" fill="rgba(255,255,255,0.3)" fontSize="8"
        fontFamily="sans-serif">Message #general...</text>
      <rect x="372" y="224" width="8" height="14" rx="2" fill="rgba(157,78,221,0.6)" />
    </svg>
  )
}
