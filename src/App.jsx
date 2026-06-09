import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import ActivityTable from './components/ActivityTable'
import './App.css'

const stats = [
  { label: 'Revenue', value: '$24,780', change: '+12.5%', color: 'var(--color-primary)' },
  { label: 'Users', value: '1,482', change: '+8.2%', color: 'var(--color-success)' },
  { label: 'Orders', value: '643', change: '+3.1%', color: 'var(--color-warning)' },
  { label: 'Bounce Rate', value: '24.5%', change: '-2.4%', color: 'var(--color-danger)' },
]

const recentActivity = [
  { user: 'Alice Johnson', action: 'Created invoice #INV-042', time: '2 min ago' },
  { user: 'Bob Smith', action: 'Updated project settings', time: '15 min ago' },
  { user: 'Carol White', action: 'Deleted user account #329', time: '1 hour ago' },
  { user: 'David Lee', action: 'Approved payout $1,200', time: '3 hours ago' },
  { user: 'Eve Davis', action: 'Added new team member', time: '5 hours ago' },
]

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('Dashboard')

  return (
    <div className="layout">
      <Sidebar
        open={sidebarOpen}
        activeNav={activeNav}
        onNavChange={setActiveNav}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="main">
        <Header onToggleSidebar={() => setSidebarOpen((o) => !o)} />
        <div className="content">
          <h2 className="page-title">Dashboard</h2>

          <div className="stats-grid">
            {stats.map((s) => (
              <StatsCard key={s.label} {...s} />
            ))}
          </div>

          <div className="dashboard-grid">
            <div className="card chart-card">
              <h3>Monthly Revenue</h3>
              <div className="chart-placeholder">
                <svg viewBox="0 0 400 160" className="chart-svg">
                  <polyline
                    points="0,140 50,120 100,100 150,110 200,60 250,70 300,30 350,40 400,20"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polygon
                    points="0,140 50,120 100,100 150,110 200,60 250,70 300,30 350,40 400,20 400,160 0,160"
                    fill="url(#gradient)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-primary)" />
                      <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="card">
              <h3>Recent Activity</h3>
              <ActivityTable items={recentActivity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
