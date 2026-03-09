import type { Metadata } from 'next';
import { Clock, Heart, Leaf, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi - TeaTalk',
  description: 'Câu chuyện về TeaTalk - nơi mang đến những trải nghiệm trà độc đáo và tuyệt vời nhất.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F1ED] to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#2D2D2D] mb-6">
            Về <span className="text-[#CD7F32]">TeaTalk</span>
          </h1>
          <p className="text-xl text-[#8B6F47] leading-relaxed">
            Nơi mỗi tách trà kể một câu chuyện, mỗi hương vị mở ra một hành trình mới.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-6">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <div className="space-y-4 text-[#8B6F47] leading-relaxed">
                <p>
                  TeaTalk ra đời từ niềm đam mê với văn hóa trà và mong muốn mang đến những 
                  trải nghiệm thức uống độc đáo cho cộng đồng. Chúng tôi tin rằng mỗi tách 
                  trà không chỉ đơn thuần là một thức uống, mà còn là cầu nối giữa con người 
                  với thiên nhiên, giữa truyền thống và hiện đại.
                </p>
                <p>
                  Từ những loại trà trái cây tươi mát đến các đặc sản quốc tế như Kompot Nga, 
                  Kefir, hay Lassi Ấn Độ - mỗi món đồ uống tại TeaTalk đều được tuyển chọn và 
                  chế biến tỉ mỉ, với nguyên liệu tươi ngon nhất.
                </p>
                <p>
                  Chúng tôi không chỉ phục vụ đồ uống, mà còn tạo ra một không gian để mọi 
                  người có thể thư giãn, gặp gỡ bạn bè, và tận hưởng những khoảnh khắc tuyệt 
                  vời trong cuộc sống.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CD7F32] to-[#8B6F47] opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🍵</div>
                  <p className="text-2xl font-bold text-[#2D2D2D]">
                    Hơn 10,000+
                  </p>
                  <p className="text-lg text-[#8B6F47]">
                    Khách hàng hài lòng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F1ED]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            Giá Trị Cốt Lõi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="inline-block p-4 bg-[#F5F1ED] rounded-full mb-4">
                <Leaf size={32} className="text-[#CD7F32]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                Tự Nhiên
              </h3>
              <p className="text-[#8B6F47]">
                Nguyên liệu tươi ngon, không chất bảo quản, an toàn cho sức khỏe
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="inline-block p-4 bg-[#F5F1ED] rounded-full mb-4">
                <Heart size={32} className="text-[#CD7F32]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                Tận Tâm
              </h3>
              <p className="text-[#8B6F47]">
                Phục vụ tận tình, chu đáo, mang đến trải nghiệm tốt nhất
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="inline-block p-4 bg-[#F5F1ED] rounded-full mb-4">
                <Clock size={32} className="text-[#CD7F32]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                Tươi Mới
              </h3>
              <p className="text-[#8B6F47]">
                Pha chế tươi mỗi ngày, đảm bảo chất lượng tốt nhất
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="inline-block p-4 bg-[#F5F1ED] rounded-full mb-4">
                <Users size={32} className="text-[#CD7F32]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                Cộng Đồng
              </h3>
              <p className="text-[#8B6F47]">
                Xây dựng không gian gắn kết, nơi mọi người gặp gỡ và kết nối
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-6">
            Sứ Mệnh Của Chúng Tôi
          </h2>
          <p className="text-xl text-[#8B6F47] leading-relaxed mb-8">
            Mang đến những trải nghiệm thức uống tuyệt vời nhất, kết nối văn hóa 
            ẩm thực từ khắp nơi trên thế giới, và tạo ra một cộng đồng yêu thích 
            những điều tốt đẹp trong cuộc sống.
          </p>
          <div className="inline-block bg-gradient-to-r from-[#CD7F32] to-[#D4AF9F] p-8 rounded-2xl shadow-xl">
            <p className="text-2xl font-bold text-white italic">
              "Mỗi tách trà là một cuộc trò chuyện, mỗi hương vị là một câu chuyện"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#CD7F32] to-[#D4AF9F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ghé Thăm TeaTalk Ngay Hôm Nay
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Khám phá thế giới hương vị tuyệt vời cùng chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-block bg-white text-[#CD7F32] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Xem Menu
            </a>
            <a
              href="/contact"
              className="inline-block bg-[#2D2D2D] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#1a1a1a] transition shadow-lg"
            >
              Liên Hệ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
