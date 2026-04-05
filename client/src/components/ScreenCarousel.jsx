import { useState, useEffect, useRef } from 'react'

const LABELS = ['Landing', 'Client Home', 'Mover Dashboard', 'Mover Profile']

export default function ScreenCarousel({ slides }) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIdx(i => (i + 1) % slides.length)
    }, 3500)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [slides.length])

  const goTo = (i) => {
    setIdx(i)
    startTimer()
  }

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={LABELS[i] ?? `Screen ${i + 1}`}
            className={`carousel-slide ${i === idx ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="carousel-footer">
        <span className="carousel-label">{LABELS[idx] ?? `Screen ${idx + 1}`}</span>
        <div className="carousel-dots">
          {slides.map((_, i) => (
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
