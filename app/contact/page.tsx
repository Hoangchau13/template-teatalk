'use client';

import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F1ED] to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#2D2D2D] mb-6">
            Liên Hệ <span className="text-[#CD7F32]">Với Chúng Tôi</span>
          </h1>
          <p className="text-xl text-[#8B6F47] leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông tin và chúng tôi sẽ phản hồi sớm nhất!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="inline-block p-4 bg-[#F5F1ED] rounded-full mb-4">
                <MapPin size={28} className="text-[#CD7F32]" />
              </div>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">Địa Chỉ</h3>
              <p className="text-[#8B6F47] text-sm">
                123 Nguyễn Huệ, Quận 1<br />
                Thành phố Hồ Chí Minh
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="inline-block p-4 bg-[#F5F1ED] rounded-full mb-4">
                <Phone size={28} className="text-[#CD7F32]" />
              </div>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">Điện Thoại</h3>
              <p className="text-[#8B6F47] text-sm">
                +84 901 234 567<br />
                +84 901 234 568
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="inline-block p-4 bg-[#F5F1ED] rounded-full mb-4">
                <Mail size={28} className="text-[#CD7F32]" />
              </div>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">Email</h3>
              <p className="text-[#8B6F47] text-sm">
                info@teatalk.vn<br />
                support@teatalk.vn
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="inline-block p-4 bg-[#F5F1ED] rounded-full mb-4">
                <Clock size={28} className="text-[#CD7F32]" />
              </div>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">Giờ Mở Cửa</h3>
              <p className="text-[#8B6F47] text-sm">
                Thứ 2 - Chủ Nhật<br />
                8:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">
                Gửi Tin Nhắn
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Họ và Tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#D4AF9F] rounded-lg focus:outline-none focus:border-[#CD7F32] transition"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#D4AF9F] rounded-lg focus:outline-none focus:border-[#CD7F32] transition"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Số Điện Thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#D4AF9F] rounded-lg focus:outline-none focus:border-[#CD7F32] transition"
                    placeholder="0901234567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Tin Nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#D4AF9F] rounded-lg focus:outline-none focus:border-[#CD7F32] transition resize-none"
                    placeholder="Để lại tin nhắn của bạn..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Cảm ơn bạn đã liên hệ!</p>
                    <p className="text-sm">Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#CD7F32] to-[#D4AF9F] text-white font-bold px-8 py-4 rounded-lg hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Đang Gửi...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Gửi Tin Nhắn
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">
                Vị Trí Của Chúng Tôi
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-[#F5F1ED] rounded-xl overflow-hidden shadow-lg h-80 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin size={48} className="text-[#CD7F32] mx-auto mb-4" />
                    <p className="text-lg font-semibold text-[#2D2D2D] mb-2">
                      123 Nguyễn Huệ, Quận 1
                    </p>
                    <p className="text-[#8B6F47] mb-4">
                      Thành phố Hồ Chí Minh
                    </p>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#CD7F32] text-white px-6 py-2 rounded-lg hover:bg-[#B86F2D] transition"
                    >
                      Xem Trên Bản Đồ
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-[#CD7F32] to-[#D4AF9F] p-8 rounded-xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Ghé Thăm Chúng Tôi</h3>
                <p className="mb-6 leading-relaxed">
                  TeaTalk tọa lạc tại trung tâm thành phố, dễ dàng tiếp cận bằng mọi phương tiện. 
                  Không gian ấm cúng, hiện đại là nơi lý tưởng để thư giãn và gặp gỡ bạn bè.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 rounded-lg mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Gần các địa điểm</p>
                      <p className="text-sm text-white/90">Bến Thành Market, Nhà Thờ Đức Bà</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 rounded-lg mt-1">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Mở cửa 7 ngày/tuần</p>
                      <p className="text-sm text-white/90">8:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F1ED]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-12">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                Làm sao để đặt hàng trực tuyến?
              </h3>
              <p className="text-[#8B6F47] leading-relaxed">
                Bạn có thể xem menu, chọn món và thêm vào giỏ hàng ngay trên website. 
                Sau đó điền thông tin giao hàng và hoàn tất đơn hàng.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                Có giao hàng tận nơi không?
              </h3>
              <p className="text-[#8B6F47] leading-relaxed">
                Có, chúng tôi giao hàng trong bán kính 5km từ cửa hàng. 
                Phí giao hàng tùy thuộc vào khoảng cách và giá trị đơn hàng.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                Có chương trình khách hàng thân thiết không?
              </h3>
              <p className="text-[#8B6F47] leading-relaxed">
                Có, chúng tôi có chương trình tích điểm cho khách hàng thường xuyên. 
                Liên hệ với chúng tôi để biết thêm chi tiết.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
