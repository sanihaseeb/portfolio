export default function NotesCLIPreview() {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="term-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1C1C1E" />
          <stop offset="100%" stopColor="#141416" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="250" fill="url(#term-bg)" />

      {/* Terminal title bar */}
      <rect x="0" y="0" width="400" height="32" fill="#2C2C2E" />
      <circle cx="18" cy="16" r="6" fill="#FF5F57" />
      <circle cx="38" cy="16" r="6" fill="#FFBD2E" />
      <circle cx="58" cy="16" r="6" fill="#28CA41" />
      <text x="200" y="21" textAnchor="middle" fill="rgba(255,255,255,0.45)"
        fontSize="10" fontFamily="monospace">notes-cli — zsh</text>

      {/* Terminal content */}
      {/* Command 1 */}
      <text x="16" y="55" fill="#28CA41" fontSize="10" fontFamily="monospace" fontWeight="700">
        (.venv)
      </text>
      <text x="72" y="55" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="monospace">
        ~/projects/notes-cli
      </text>
      <text x="220" y="55" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">$</text>
      <text x="234" y="55" fill="white" fontSize="10" fontFamily="monospace">
        notes list
      </text>

      {/* Output: notes */}
      {[
        { id: 1, text: 'review PR for auth service',    time: '2026-03-15 09:12', color: '#06B6D4' },
        { id: 2, text: 'update API rate limiting logic',  time: '2026-03-15 10:30', color: '#06B6D4' },
        { id: 3, text: 'read Python docs — chapter 4',  time: '2026-03-15 11:05', color: '#06B6D4' },
        { id: 4, text: 'fix pagination bug in API',     time: '2026-03-15 13:22', color: '#06B6D4' },
      ].map((note, i) => (
        <g key={note.id}>
          <text x="16" y={76 + i * 18} fill={note.color}
            fontSize="10" fontFamily="monospace" fontWeight="700">
            [{note.id}]
          </text>
          <text x="40" y={76 + i * 18} fill="rgba(255,255,255,0.85)"
            fontSize="10" fontFamily="monospace">{note.text}</text>
          <text x="308" y={76 + i * 18} fill="rgba(255,255,255,0.3)"
            fontSize="8.5" fontFamily="monospace">({note.time})</text>
        </g>
      ))}

      {/* Command 2 */}
      <text x="16" y="160" fill="#28CA41" fontSize="10" fontFamily="monospace" fontWeight="700">
        (.venv)
      </text>
      <text x="72" y="160" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">$</text>
      <text x="86" y="160" fill="white" fontSize="10" fontFamily="monospace">
        notes add "follow up on code review"
      </text>

      {/* Output: saved */}
      <text x="16" y="178" fill="#28CA41" fontSize="10" fontFamily="monospace" fontWeight="700">
        Note #5 saved.
      </text>

      {/* Command 3 */}
      <text x="16" y="198" fill="#28CA41" fontSize="10" fontFamily="monospace" fontWeight="700">
        (.venv)
      </text>
      <text x="72" y="198" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">$</text>
      <text x="86" y="198" fill="white" fontSize="10" fontFamily="monospace">
        notes search "review"
      </text>

      {/* Search result */}
      <text x="16" y="216" fill="#06B6D4" fontSize="10" fontFamily="monospace" fontWeight="700">[5]</text>
      <text x="40" y="216" fill="rgba(255,255,255,0.85)" fontSize="10" fontFamily="monospace">
        follow up on code review
      </text>
      <text x="210" y="216" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace">
        (2026-03-15 14:02)
      </text>

      {/* Cursor */}
      <text x="16" y="234" fill="#28CA41" fontSize="10" fontFamily="monospace" fontWeight="700">
        (.venv)
      </text>
      <text x="72" y="234" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">$</text>
      <rect x="85" y="223" width="7" height="13" rx="1" fill="#28CA41" opacity="0.8" />
    </svg>
  )
}
