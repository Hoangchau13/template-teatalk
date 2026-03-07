export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
      <div className="text-center max-w-3xl mx-auto">
        {/* Logo Circle */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white text-5xl shadow-lg">
            🍵
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pretty mb-6 text-primary">
          TeaTalk
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 font-medium">
          Coffee & Tea
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Khám phá những trà trái cây tươi ngon, trà sữa hoa, nước ép tự nhiên và các đặc sản từ khắp nơi trên thế giới. Mỗi tách trà là một hành trình hương vị độc đáo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Xem Menu
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Liên Hệ Chúng Tôi
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary rounded-full opacity-10 blur-3xl"></div>
    </section>
  )
}
