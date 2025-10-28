import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    in_progress: 0,
    closed: 0,
  })
  const navigate = useNavigate()

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
    setStats({
      total: tickets.length,
      open: tickets.filter(t => t.status === 'open').length,
      in_progress: tickets.filter(t => t.status === 'in_progress').length,
      closed: tickets.filter(t => t.status === 'closed').length,
    })
  }, [])

  const logout = () => {
    localStorage.removeItem('ticketapp_session')
    toast.success('Logged out successfully')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition shadow-sm"
          >
            Logout
          </button>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-600">Total Tickets</h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stats.total}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-green-600">Open</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">{stats.open}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-amber-600">In Progress</h3>
              <p className="text-3xl font-bold text-amber-600 mt-2">{stats.in_progress}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-600">Closed</h3>
              <p className="text-3xl font-bold text-gray-600 mt-2">{stats.closed}</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/tickets"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              View All Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}