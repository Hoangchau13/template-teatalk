'use client';

import Image from 'next/image';

export function MenuHero() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/hero-mn.jpg" 
          alt="Menu Hero Background" 
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
          Menu TeaTalk
        </h1>
        <p className="text-xl text-[#D4AF9F] drop-shadow-lg">
          Khám phá những lựa chọn ngon lành và đa dạng của chúng tôi
        </p>
      </div>
    </section>
  );
}
