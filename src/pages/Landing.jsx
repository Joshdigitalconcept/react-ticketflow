import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-300">TicketFlow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">Manage tickets with ease.</p>
          <div className="space-x-4">
            <Link
              to="/auth/login"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* WAVY SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 transform translate-y-8"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9fafb"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,112C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"
          />
        </svg>

        {/* CIRCLES */}
        <div className="absolute top-[-150px] right-[-80px] w-96 h-96 bg-green-500/15 rounded-full"></div>
        <div className="absolute bottom-10 left-[-100px] w-72 h-72 bg-amber-500/20 rounded-full"></div>
        <div className="absolute top-40 right-40 w-48 h-48 bg-purple-500/10 rounded-full"></div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why TicketFlow?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                Fast
              </div>
              <h3 className="text-xl font-semibold mb-2">Blazing Fast</h3>
              <p>Create tickets in seconds.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                Secure
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p>Your data, protected.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                Easy
              </div>
              <h3 className="text-xl font-semibold mb-2">Simple</h3>
              <p>No complexity.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 TicketFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}