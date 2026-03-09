'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/tachlogo.png" 
              alt="TeaTalk Logo" 
              width={40} 
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <div className="text-2xl font-bold">
              Tea<span className="text-[#CD7F32]">Talk</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-[#2D2D2D] hover:text-[#CD7F32] font-medium transition">
              Trang Chủ
            </Link>
            <Link href="/menu" className="text-[#2D2D2D] hover:text-[#CD7F32] font-medium transition">
              Menu
            </Link>
            <Link href="/about" className="text-[#2D2D2D] hover:text-[#CD7F32] font-medium transition">
              Về Chúng Tôi
            </Link>
            <Link href="/contact" className="text-[#2D2D2D] hover:text-[#CD7F32] font-medium transition">
              Liên Hệ
            </Link>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-[#2D2D2D] hover:text-[#CD7F32] transition"
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#CD7F32] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#2D2D2D]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4 border-t border-gray-200">
            <Link
              href="/"
              className="block text-[#2D2D2D] hover:text-[#CD7F32] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Trang Chủ
            </Link>
            <Link
              href="/menu"
              className="block text-[#2D2D2D] hover:text-[#CD7F32] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="block text-[#2D2D2D] hover:text-[#CD7F32] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Về Chúng Tôi
            </Link>
            <Link
              href="/contact"
              className="block text-[#2D2D2D] hover:text-[#CD7F32] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Liên Hệ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
