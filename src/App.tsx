import React from 'react'
import { Terminal, Zap, CheckCircle } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#00ff00] flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold hacker-text mb-4">Hack Interview AI</h1>
        <p className="text-xl">Your Interview Copilot</p>
      </header>

      <main className="max-w-4xl w-full">
        <section className="hacker-border p-6 rounded-lg mb-8">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <Terminal className="mr-2" /> Ace Your Interviews
          </h2>
          <p className="text-lg mb-4">
            Hack Interview AI is your secret weapon to conquer any interview. Our advanced AI-powered copilot helps you prepare, practice, and perfect your interview skills.
          </p>
          <button className="bg-[#00ff00] text-[#121212] px-6 py-2 rounded-md font-bold hover:bg-[#00cc00] transition-colors">
            Start Hacking Interviews
          </button>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="hacker-border p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Zap className="mr-2" /> Real-time Assistance
            </h3>
            <ul className="list-disc list-inside">
              <li>AI-powered mock interviews</li>
              <li>Instant feedback on your responses</li>
              <li>Personalized improvement suggestions</li>
            </ul>
          </div>
          <div className="hacker-border p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <CheckCircle className="mr-2" /> Comprehensive Preparation
            </h3>
            <ul className="list-disc list-inside">
              <li>Industry-specific question bank</li>
              <li>Customized interview strategies</li>
              <li>Confidence-boosting techniques</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center">
        <p>&copy; 2024 Hack Interview AI. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App