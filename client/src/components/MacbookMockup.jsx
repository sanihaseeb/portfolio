export default function MacbookMockup({ children }) {
  return (
    <div className="mbp-wrapper">
      <div className="mbp-lid">
        <div className="mbp-camera-row">
          <div className="mbp-camera" />
        </div>
        <div className="mbp-screen">
          <div className="mbp-screen-inner">{children}</div>
        </div>
      </div>
      <div className="mbp-hinge" />
      <div className="mbp-base">
        <div className="mbp-trackpad" />
      </div>
      <div className="mbp-foot-bar" />
    </div>
  )
}
