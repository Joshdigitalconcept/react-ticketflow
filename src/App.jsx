import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'
import CreateTicket from './pages/CreateTicket'
import EditTicket from './pages/EditTicket'

function App() {
  const ProtectedRoute = ({ children }) => {
    const session = localStorage.getItem('ticketapp_session')
    return session ? children : <Navigate to="/auth/login" />
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/tickets" element={<ProtectedRoute><Tickets /></ProtectedRoute>} />
      <Route path="/tickets/create" element={<ProtectedRoute><CreateTicket /></ProtectedRoute>} />
      <Route path="/tickets/edit/:id" element={<ProtectedRoute><EditTicket /></ProtectedRoute>} />
    </Routes>
  )
}

export default App