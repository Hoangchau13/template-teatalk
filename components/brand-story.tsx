'use client';

import { Coffee, Leaf, Heart } from 'lucide-react';

export function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
            Câu Chuyện Của TeaTalk
          </h2>
          <p className="text-lg text-[#8B6F47]">
            Từ niềm đam mê đến từng ly trà hoàn hảo
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Feature 1 */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#CD7F32] rounded-full flex items-center justify-center">
                <Leaf className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#2D2D2D]">Nguyên Liệu Tươi</h3>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi chỉ sử dụng những nguyên liệu tươi mới nhất từ các nguồn đáng tin cậy. Mỗi trái cây được lựa chọn tỉ mỉ để đảm bảo chất lượng cao nhất.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#8B6F47] rounded-full flex items-center justify-center">
                <Coffee className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#2D2D2D]">Kỹ Thuật Chế Biến</h3>
            <p className="text-gray-600 leading-relaxed">
              Với kinh nghiệm từ những chuyên gia hàng đầu, chúng tôi tạo ra những công thức độc đáo. Mỗi ly uống là kết quả của sự tỉ mỉ và tình yêu.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#CD7F32] rounded-full flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#2D2D2D]">Tình Yêu Chi Tiết</h3>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi quan tâm đến mọi chi tiết, từ hương vị đến hình thức trình bày. Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.
            </p>
          </div>
        </div>

        {/* Main Story */}
        <div className="bg-[#F5F1ED] rounded-lg p-12 border-l-4 border-[#CD7F32]">
          <p className="text-xl text-[#2D2D2D] leading-relaxed mb-6">
            TeaTalk được sinh ra từ một người yêu thích trà và cà phê. Với nền tảng tri thức sâu rộng về các loại trà từ khắp nơi trên thế giới, chúng tôi quyết định tạo ra một không gian nơi mọi người có thể tìm thấy những thức uống tuyệt vời và được phục vụ bởi những người tốt bụng.
          </p>
          <p className="text-xl text-[#8B6F47] leading-relaxed">
            Hôm nay, TeaTalk không chỉ là một cửa hàng mà là một cộng đồng của những người yêu thích những điều tốt. Mỗi khách hàng là một phần của gia đình TeaTalk.
          </p>
        </div>
      </div>
    </section>
  );
}
