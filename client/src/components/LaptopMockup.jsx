export default function LaptopMockup({ children }) {
  return (
    <div className="laptop-wrapper">
      {/* Lid / Screen */}
      <div className="laptop-lid">
        <div className="laptop-camera" />
        <div className="laptop-screen">
          {children}
        </div>
      </div>
      {/* Hinge */}
      <div className="laptop-hinge" />
      {/* Base */}
      <div className="laptop-base">
        <div className="laptop-notch" />
      </div>
    </div>
  )
}
