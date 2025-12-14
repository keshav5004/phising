import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [url, setUrl] = useState("")
  const [result, setResult] = useState("")

  const handleSearch = () => {
    if (!url) return

    // UI-only fake result
    setResult("✅ This website appears to be SAFE")
  }



  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-[#070819] to-[#0a0a20] text-white">

        {/* ================= NAVBAR ================= */}
        <nav className="flex items-center justify-between px-10 py-4 border-b border-white/10">
          {/* Left */}
          <h1 className="text-xl font-bold text-cyan-400">
            Phishing Detection Website
          </h1>

          {/* Right */}
          <div className="flex gap-6">
            <Link to="/" className="hover:text-cyan-400">Home</Link>
            <Link to="/About" className="hover:text-cyan-400">About</Link>
            <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
          </div>
        </nav>

        {/* ================= HERO SECTION ================= */}
        <section className="flex flex-col items-center justify-center text-center py-32 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Detect Phishing Websites Instantly
          </h2>

          <p className="text-gray-400 max-w-2xl mb-10">
            This project demonstrates a user interface for detecting phishing URLs
            using modern web technologies and cybersecurity concepts.
          </p>

          {/* Search Box */}
          <div className="flex w-full max-w-xl">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL here..."
              className="flex-1 px-4 py-3 rounded-l-lg text-white bg-transparent border border-white outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-r-lg"
            >
              Search
            </button>
          </div>

          {/* RESULT (UI ONLY) */}
          {result && (
            <div className="mt-6 px-6 py-3 bg-green-500/20 border border-green-400 rounded-lg text-green-300">
              {result}
            </div>
          )}
        </section>

        {/* ================= INFO SECTION ================= */}
        <section className="px-10 py-20 bg-black/20">
          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                URL Analysis
              </h3>
              <p className="text-gray-400">
                Analyze suspicious URLs and identify phishing patterns.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Secure Browsing
              </h3>
              <p className="text-gray-400">
                Helps users stay safe from malicious websites.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Educational Project
              </h3>
              <p className="text-gray-400">
                Designed for academic and learning purposes only.
              </p>
            </div>

          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="text-center py-6 border-t border-white/10 text-gray-500">
          © 2025 Phishing Detection UI Project | For Educational Use Only
        </footer>

      </div>
    </>
  )
}

export default App
