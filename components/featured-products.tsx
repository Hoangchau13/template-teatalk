'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

export function FeaturedProducts() {
  const featured = getFeaturedProducts();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (productId: string) => {
    const product = featured.find(p => p.id === productId);
    if (product) {
      addToCart(product, 1);
      setAddedItems(prev => new Set([...prev, productId]));
      setTimeout(() => {
        setAddedItems(prev => {
          const next = new Set(prev);
          next.delete(productId);
          return next;
        });
      }, 2000);
    }
  };

  return (
    <section className="py-20 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
            Sản Phẩm Nổi Bật
          </h2>
          <p className="text-lg text-[#8B6F47]">
            Những lựa chọn yêu thích của khách hàng TeaTalk
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featured.map(product => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#CD7F32] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Nổi Bật
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{product.name}</h3>
                <p className="text-[#8B6F47] text-sm mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-[#CD7F32]">
                    {(product.price / 1000).toFixed(0)}k
                  </span>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`transition-all p-2 rounded-lg ${
                      addedItems.has(product.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-[#D4AF9F] hover:bg-[#CD7F32] text-white'
                    }`}
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block bg-[#2D2D2D] hover:bg-[#8B6F47] text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            Xem Tất Cả Sản Phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}
