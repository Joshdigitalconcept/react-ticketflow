import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Tickets() {
  const [tickets, setTickets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    loadTickets()
  }, [])

  const loadTickets = () => {
    setTickets(JSON.parse(localStorage.getItem('tickets') || '[]'))
  }

  const deleteTicket = (id) => {
    if (confirm('Delete this ticket?')) {
      const updated = tickets.filter(t => t.id !== id)
      localStorage.setItem('tickets', JSON.stringify(updated))
      setTickets(updated)
      toast.success('Ticket deleted!')
    }
  }

  const logout = () => {
    localStorage.removeItem('ticketapp_session')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Tickets</h1>
          <div className="flex gap-2">
            <Link
              to="/tickets/create"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-sm"
            >
              + New Ticket
            </Link>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {tickets.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <p className="text-xl">No tickets yet.</p>
              <Link to="/tickets/create" className="text-blue-600 hover:underline">
                Create your first ticket
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {tickets.map(ticket => (
                <div key={ticket.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{ticket.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        ticket.status === 'open'
                          ? 'bg-green-100 text-green-800'
                          : ticket.status === 'in_progress'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {ticket.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {ticket.description || 'No description'}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      to={`/tickets/edit/${ticket.id}`}
                      className="flex-1 bg-blue-100 text-blue-700 text-center py-2 rounded text-sm hover:bg-blue-200 transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteTicket(ticket.id)}
                      className="flex-1 bg-red-100 text-red-700 py-2 rounded text-sm hover:bg-red-200 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}