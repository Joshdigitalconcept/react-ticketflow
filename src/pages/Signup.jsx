import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    setError('')

    if (password.length < 6) {
      const msg = 'Password must be 6+ characters'
      setError(msg)
      toast.error(msg)
      return
    }

    const session = {
      email,
      token: 'mock-jwt-' + Date.now(),
      expires: Date.now() + 3600000,
    }
    localStorage.setItem('ticketapp_session', JSON.stringify(session))
    toast.success('Account created! Welcome!')
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl border-t-4 border-green-500">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-3">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H9v-1c0-1.657-1.343-3-3-3s-3 1.343-3 3v1m6-6c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Join TicketFlow</h2>
          <p className="text-gray-600 mt-1">Create your account in seconds</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition"
            required
          />
          <input
            type="password"
            placeholder="Choose a strong password (6+ chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition"
            required
          />

          {error && <p className="text-red-600 text-sm text-center animate-pulse">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition shadow-lg transform hover:scale-[1.02]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-green-600 hover:underline font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}