export default function StatsCard({ label, value, change, color }) {
  const isPositive = change.startsWith('+')
  return (
    <div className="stats-card">
      <div className="stats-header">
        <span className="stats-label">{label}</span>
        <span className="stats-indicator" style={{ background: color }} />
      </div>
      <div className="stats-value">{value}</div>
      <span className={`stats-change ${isPositive ? 'up' : 'down'}`}>
        {change} vs last month
      </span>
    </div>
  )
}
