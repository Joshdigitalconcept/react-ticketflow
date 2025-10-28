import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function EditTicket() {
  const { id } = useParams()
  const [form, setForm] = useState({ title: '', status: 'open', description: '' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
    const ticket = tickets.find(t => t.id === id)
    if (ticket) {
      setForm(ticket)
    } else {
      navigate('/tickets')
    }
  }, [id, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({})

    if (!form.title.trim()) {
      setErrors({ title: 'Title is required' })
      toast.error('Please enter a title')
      return
    }

    const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
    const index = tickets.findIndex(t => t.id === id)
    if (index !== -1) {
      tickets[index] = form
      localStorage.setItem('tickets', JSON.stringify(tickets))
      toast.success('Ticket updated!')
      navigate('/tickets')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Ticket</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.title && <p className="text-red-600 text-xs mt-1">{errors.title}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                rows="4"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Update Ticket
              </button>
              <Link
                to="/tickets"
                className="flex-1 text-center bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}