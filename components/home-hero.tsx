'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/hero-bg.jpg" 
          alt="TeaTalk Hero Background" 
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 h-screen flex flex-col items-center justify-center">
        <div className="text-center space-y-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
              Tea<span className="text-[#CD7F32]">Talk</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D4AF9F] font-light drop-shadow-lg">
              Trà trái cây & nước ép
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-100 leading-relaxed drop-shadow-lg">
            Khám phá thế giới của những thức uống tuyệt vời được chế biến từ nguyên liệu tốt nhất. Từ trà trái cây tươi mát đến các đặc sản quốc tế, mỗi ly đều là một trải nghiệm độc đáo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-[#CD7F32] hover:bg-[#B8702A] text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Xem Menu
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#D4AF9F] hover:bg-[#D4AF9F] hover:text-[#2D2D2D] text-[#D4AF9F] font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Đặt Hàng Ngay
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-[#D4AF9F] text-sm">Cuộn xuống để tiếp tục</div>
        </div>
      </div>
    </section>
  );
}
