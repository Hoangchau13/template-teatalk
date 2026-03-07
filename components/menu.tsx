'use client'

import { Card } from '@/components/ui/card'

const menuItems = {
  'Trà Trái Cây': [
    { name: 'Trà Dâu', description: 'Vị dâu tươi mát, giải khát hoàn hảo' },
    { name: 'Trà Quất', description: 'Cam quất đặc biệt, tone chanh tự nhiên' },
    { name: 'Trà Đào', description: 'Đào ngọt ngào, mùi hương quyến rũ' },
    { name: 'Trà Vải', description: 'Vải mượt mà, vị thanh ngọt' },
    { name: 'Trà Sen', description: 'Hương sen tinh tế, vị độc đáo Việt' },
    { name: 'Trà Ổi Hồng', description: 'Ổi hồng giàu vitamin, mát lạnh' },
  ],
  'Others': [
    { name: 'Trà Sữa', description: 'Trà sữa truyền thống, mịn mượt' },
    { name: 'Nước Kompot', description: 'Nước ép hoa quả Nga cổ điển' },
    { name: 'Sữa Hạt', description: 'Sữa hạt tự nhiên, bổ dưỡng' },
    { name: 'Sữa Chua Kefir', description: 'Sữa chua lên men tốt cho tiêu hóa' },
    { name: 'Lassi Xoài', description: 'Đặc sản Ấn Độ mát lạnh ngon lành' },
  ],
}

export function Menu() {
  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">
            TeaTalk's Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những lựa chọn đa dạng cho mọi khẩu vị
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12 sm:space-y-16">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category}>
              {/* Category Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-6 sm:mb-8">
                {category}
              </h3>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {items.map((item) => (
                  <Card
                    key={item.name}
                    className="p-5 sm:p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-accent bg-card"
                  >
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
