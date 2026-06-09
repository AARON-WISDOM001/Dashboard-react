const navItems = [
  { label: 'Dashboard', icon: '📊' },
  { label: 'Analytics', icon: '📈' },
  { label: 'Users', icon: '👥' },
  { label: 'Orders', icon: '📦' },
  { label: 'Products', icon: '🛒' },
  { label: 'Settings', icon: '⚙️' },
]

export default function Sidebar({ open, activeNav, onNavChange, onClose }) {
  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div className="sidebar-brand">
          <span className="brand-icon">◆</span>
          <span className="brand-text">AdminPanel</span>
        </div>
        <nav className="sidebar-nav">
          <span className="nav-section">Main</span>
          {navItems.slice(0, 5).map((item) => (
            <a
              key={item.label}
              href="#"
              className={`nav-link${activeNav === item.label ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); onNavChange(item.label); onClose(); }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
          <span className="nav-section">System</span>
          {navItems.slice(5).map((item) => (
            <a
              key={item.label}
              href="#"
              className={`nav-link${activeNav === item.label ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); onNavChange(item.label); onClose(); }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
