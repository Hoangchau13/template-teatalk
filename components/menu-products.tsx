'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products, getCategories } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { ShoppingCart, Minus, Plus } from 'lucide-react';

export function MenuProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { addToCart } = useCart();
  const categories = getCategories();

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    const quantity = quantities[productId] || 1;
    if (product) {
      addToCart(product, quantity);
      setQuantities(prev => ({ ...prev, [productId]: 1 }));
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

  const updateQuantity = (productId: string, change: number) => {
    setQuantities(prev => {
      const current = prev[productId] || 1;
      const newValue = Math.max(1, current + change);
      return { ...prev, [productId]: newValue };
    });
  };

  return (
    <section className="bg-[#F5F1ED] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === null
                  ? 'bg-[#CD7F32] text-white'
                  : 'bg-white text-[#2D2D2D] border-2 border-[#CD7F32] hover:bg-[#CD7F32] hover:text-white'
              }`}
            >
              Tất Cả Sản Phẩm
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#CD7F32] text-white'
                    : 'bg-white text-[#2D2D2D] border-2 border-[#CD7F32] hover:bg-[#CD7F32] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-72 overflow-hidden bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#CD7F32] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Name and Description */}
                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                  {product.name}
                </h3>
                <p className="text-[#8B6F47] text-sm mb-4 flex-grow leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <div className="text-3xl font-bold text-[#CD7F32] mb-6">
                  {(product.price / 1000).toFixed(0)}k VND
                </div>

                {/* Quantity and Button */}
                <div className="flex gap-3">
                  {/* Quantity Selector */}
                  <div className="flex items-center border-2 border-[#D4AF9F] rounded-lg">
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      className="p-2 hover:bg-[#F5F1ED] transition"
                    >
                      <Minus size={16} className="text-[#CD7F32]" />
                    </button>
                    <span className="px-4 font-semibold text-[#2D2D2D] min-w-12 text-center">
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="p-2 hover:bg-[#F5F1ED] transition"
                    >
                      <Plus size={16} className="text-[#CD7F32]" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`flex-1 font-semibold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                      addedItems.has(product.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-[#CD7F32] hover:bg-[#B8702A] text-white'
                    }`}
                  >
                    <ShoppingCart size={18} />
                    {addedItems.has(product.id) ? 'Đã Thêm' : 'Thêm Giỏ'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-[#8B6F47]">
              Không có sản phẩm trong danh mục này
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
