'use client';

import Link from 'next/link';

export function HomeCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2D2D2D] to-[#8B6F47]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Sẵn Sàng Để Khám Phá Những Thức Uống Tuyệt Vời?
          </h2>
          <p className="text-xl text-[#D4AF9F] max-w-2xl mx-auto">
            Ghé thăm cửa hàng TeaTalk ngay hôm nay và tìm cho mình thức uống yêu thích.
          </p>
          <Link
            href="/menu"
            className="inline-block bg-[#CD7F32] hover:bg-[#B8702A] text-white font-bold px-10 py-4 rounded-lg transition-all transform hover:scale-105 text-lg"
          >
            Bắt Đầu Đặt Hàng Ngay
          </Link>
        </div>
      </div>
    </section>
  );
}
