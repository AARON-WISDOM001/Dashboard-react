export default function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onToggleSidebar}>☰</button>
        <span className="breadcrumb">Home / Dashboard</span>
      </div>
      <div className="header-right">
        <button className="icon-btn">🔔</button>
        <div className="avatar">JD</div>
      </div>
    </header>
  )
}
