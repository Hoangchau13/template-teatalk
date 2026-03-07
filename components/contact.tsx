'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">
            Liên Hệ Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hãy ghé thăm cửa hàng của chúng tôi để trải nghiệm những thức uống tuyệt vời
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Location */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-background">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                <MapPin size={24} />
              </div>
            </div>
            <h3 className="font-semibold text-primary mb-2">Địa Chỉ</h3>
            <p className="text-sm text-muted-foreground">
              123 Đường Trà<br/>
              Quận 1, TP.HCM
            </p>
          </Card>

          {/* Phone */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-background">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                <Phone size={24} />
              </div>
            </div>
            <h3 className="font-semibold text-primary mb-2">Điện Thoại</h3>
            <p className="text-sm text-muted-foreground">
              <a href="tel:+84123456789" className="hover:text-accent transition-colors">
                +84 (123) 456-789
              </a>
            </p>
          </Card>

          {/* Email */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-background">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                <Mail size={24} />
              </div>
            </div>
            <h3 className="font-semibold text-primary mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:hello@teatalk.vn" className="hover:text-accent transition-colors">
                hello@teatalk.vn
              </a>
            </p>
          </Card>

          {/* Hours */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-background">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                <Clock size={24} />
              </div>
            </div>
            <h3 className="font-semibold text-primary mb-2">Giờ Mở Cửa</h3>
            <p className="text-sm text-muted-foreground">
              08:00 - 22:00<br/>
              Mở cửa hàng ngày
            </p>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-8 sm:p-10 bg-background">
          <h3 className="text-2xl font-bold text-primary mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tiêu Đề
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Chủ đề của bạn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tin Nhắn
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Nội dung tin nhắn của bạn..."
              />
            </div>
            <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
              Gửi Tin Nhắn
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
