'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            ☕
          </div>
          <span className="text-primary">TeaTalk</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="#menu" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Menu
          </Link>
          <Link href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Giới Thiệu
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Liên Hệ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link href="#menu" className="text-sm font-medium text-foreground hover:text-accent">
              Menu
            </Link>
            <Link href="#about" className="text-sm font-medium text-foreground hover:text-accent">
              Giới Thiệu
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:text-accent">
              Liên Hệ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
