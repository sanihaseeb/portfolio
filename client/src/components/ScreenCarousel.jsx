import { useState, useEffect, useRef } from 'react'

function normalize(slide, i) {
  if (typeof slide === 'string') return { src: slide, label: `Screen ${i + 1}` }
  return { src: slide.src, label: slide.label ?? `Screen ${i + 1}` }
}

export default function ScreenCarousel({ slides }) {
  const normalized = slides.map(normalize)
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIdx(i => (i + 1) % normalized.length)
    }, 3500)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [normalized.length])

  const goTo = (i) => {
    setIdx(i)
    startTimer()
  }

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {normalized.map(({ src, label }, i) => (
          <img
            key={src}
            src={src}
            alt={label}
            className={`carousel-slide ${i === idx ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="carousel-footer">
        <span className="carousel-label">{normalized[idx].label}</span>
        <div className="carousel-dots">
          {normalized.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === idx ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to screen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
