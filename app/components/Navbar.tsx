'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Terminal } from 'lucide-react'

const navItems = [
  { name: 'Interview Copilot', href: '/copilot' },
  { name: 'AI Resume Builder', href: '/resume' },
  { name: 'AI Mock Interview', href: '/mock-interview' },
  { name: 'Resources', href: '/resources' },
  { name: 'Question Bank', href: '/questions' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-hacker-black text-hacker-green p-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Terminal className="mr-2" />
            <span className="hidden sm:inline">Hack Interview AI</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-[#00cc00]">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/signin" className="hover:text-[#00cc00]">Sign In</Link>
          <Link href="/signup" className="bg-hacker-green text-hacker-black px-3 py-1 rounded hover:bg-[#00cc00]">
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md hover:bg-hacker-green hover:text-hacker-black"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}