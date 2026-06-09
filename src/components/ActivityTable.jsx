export default function ActivityTable({ items }) {
  return (
    <div className="activity-table">
      {items.map((item, i) => (
        <div key={i} className="activity-row">
          <div className="activity-avatar">{item.user[0]}</div>
          <div className="activity-body">
            <div className="activity-user">{item.user}</div>
            <div className="activity-action">{item.action}</div>
          </div>
          <span className="activity-time">{item.time}</span>
        </div>
      ))}
    </div>
  )
}
