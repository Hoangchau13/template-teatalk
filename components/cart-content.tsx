'use client';

import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function CartContent() {
  const { items, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });
  const [isOrdered, setIsOrdered] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleOrder = () => {
    if (!orderInfo.name || !orderInfo.phone || !orderInfo.address) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <section className="bg-[#F5F1ED] min-h-[calc(100vh-200px)] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center space-y-6">
            <div className="text-6xl text-green-500">✓</div>
            <h1 className="text-4xl font-bold text-[#2D2D2D]">
              Đặt Hàng Thành Công!
            </h1>
            <p className="text-xl text-[#8B6F47]">
              Cảm ơn {orderInfo.name} đã đặt hàng tại TeaTalk
            </p>
            <div className="bg-[#F5F1ED] rounded-lg p-6 space-y-3 text-left my-8">
              <p>
                <span className="font-semibold text-[#2D2D2D]">Số Điện Thoại:</span>
                <span className="text-[#8B6F47] ml-2">{orderInfo.phone}</span>
              </p>
              <p>
                <span className="font-semibold text-[#2D2D2D]">Địa Chỉ Giao Hàng:</span>
                <span className="text-[#8B6F47] ml-2">{orderInfo.address}</span>
              </p>
              <p>
                <span className="font-semibold text-[#2D2D2D]">Ghi Chú:</span>
                <span className="text-[#8B6F47] ml-2">{orderInfo.note || 'Không có'}</span>
              </p>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Chúng tôi sẽ liên hệ với bạn sớm để xác nhận đơn hàng. Cảm ơn bạn!
            </p>
            <Link
              href="/"
              className="inline-block bg-[#CD7F32] hover:bg-[#B8702A] text-white font-bold px-8 py-4 rounded-lg transition-all"
            >
              Quay Lại Trang Chủ
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F1ED] min-h-[calc(100vh-200px)] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#2D2D2D] mb-12">Giỏ Hàng Của Bạn</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center space-y-6">
            <h2 className="text-2xl font-bold text-[#2D2D2D]">
              Giỏ hàng của bạn trống
            </h2>
            <p className="text-lg text-[#8B6F47]">
              Hãy thêm một số sản phẩm để bắt đầu mua sắm
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#CD7F32] hover:bg-[#B8702A] text-white font-bold px-8 py-4 rounded-lg transition-all"
            >
              <ArrowLeft size={20} />
              Tiếp Tục Mua Sắm
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-xl shadow-md p-6 flex gap-6 items-start hover:shadow-lg transition-all"
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-[#8B6F47] text-sm mb-3">
                      {item.product.category}
                    </p>
                    <p className="text-2xl font-bold text-[#CD7F32]">
                      {(item.product.price / 1000).toFixed(0)}k VND
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-4">
                    <div className="flex items-center border-2 border-[#D4AF9F] rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-[#F5F1ED] transition"
                      >
                        <Minus size={16} className="text-[#CD7F32]" />
                      </button>
                      <span className="px-3 font-semibold text-[#2D2D2D]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-[#F5F1ED] transition"
                      >
                        <Plus size={16} className="text-[#CD7F32]" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary and Form */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-[#2D2D2D]">Tóm Tắt Đơn Hàng</h2>
                <div className="space-y-3 border-t border-b border-gray-200 py-4">
                  {items.map(item => (
                    <div key={item.product.id} className="flex justify-between text-[#8B6F47]">
                      <span>
                        {item.product.name} x {item.quantity}
                      </span>
                      <span className="font-semibold">
                        {((item.product.price * item.quantity) / 1000).toFixed(0)}k
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-[#2D2D2D]">Tổng Cộng:</span>
                  <span className="text-[#CD7F32]">
                    {(getTotal() / 1000).toFixed(0)}k VND
                  </span>
                </div>
              </div>

              {/* Checkout Form */}
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-[#2D2D2D]">Thông Tin Giao Hàng</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">
                      Họ Và Tên
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={orderInfo.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-[#D4AF9F] rounded-lg focus:outline-none focus:border-[#CD7F32]"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">
                      Số Điện Thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={orderInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-[#D4AF9F] rounded-lg focus:outline-none focus:border-[#CD7F32]"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">
                      Địa Chỉ Giao Hàng
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={orderInfo.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-[#D4AF9F] rounded-lg focus:outline-none focus:border-[#CD7F32]"
                      placeholder="Nhập địa chỉ giao hàng"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">
                      Ghi Chú (Tùy Chọn)
                    </label>
                    <textarea
                      name="note"
                      value={orderInfo.note}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-[#D4AF9F] rounded-lg focus:outline-none focus:border-[#CD7F32]"
                      placeholder="Thêm ghi chú cho đơn hàng"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={handleOrder}
                  className="w-full bg-[#CD7F32] hover:bg-[#B8702A] text-white font-bold py-4 rounded-lg transition-all text-lg"
                >
                  Đặt Hàng Ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
