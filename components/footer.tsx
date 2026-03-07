'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Tea<span className="text-[#CD7F32]">Talk</span>
            </div>
            <p className="text-gray-400">
              Khám phá những thức uống tuyệt vời được chế biến với tình yêu và tỉ mỉ.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#CD7F32] transition">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#CD7F32] transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#CD7F32] transition">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#CD7F32] transition">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Phone size={20} className="text-[#CD7F32] flex-shrink-0" />
                <div>
                  <p className="text-sm">Điện Thoại</p>
                  <p className="text-[#CD7F32]">(+84) 123 456 789</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={20} className="text-[#CD7F32] flex-shrink-0" />
                <div>
                  <p className="text-sm">Email</p>
                  <p className="text-[#CD7F32]">info@teatalk.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Theo Dõi</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-[#CD7F32] rounded-full hover:bg-[#8B6F47] transition"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#CD7F32] rounded-full hover:bg-[#8B6F47] transition"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#CD7F32] rounded-full hover:bg-[#8B6F47] transition"
              >
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2024 TeaTalk. Tất cả quyền được bảo vệ.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#CD7F32] transition">
                Điều Khoản Dịch Vụ
              </Link>
              <Link href="#" className="hover:text-[#CD7F32] transition">
                Chính Sách Riêng Tư
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
