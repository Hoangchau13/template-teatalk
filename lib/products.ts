export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  // Nước Ép
  {
    id: 'nuoc-ep-dua-hau',
    name: 'Nước ép dưa hấu',
    category: 'Nước Ép',
    description: 'Nước ép dưa hấu tươi mát, ngọt thanh và giải nhiệt tuyệt vời.',
    price: 35000,
    image: '/Nước ép/nước ép dưa hấu.jpg',
    featured: true,
  },
  {
    id: 'nuoc-ep-cam',
    name: 'Nước ép cam',
    category: 'Nước Ép',
    description: 'Nước cam tươi giàu vitamin C, tốt cho sức khỏe và làm đẹp da.',
    price: 38000,
    image: '/Nước ép/nước ép cam.jpg',
    featured: true,
  },
  {
    id: 'nuoc-ep-tao',
    name: 'Nước ép táo',
    category: 'Nước Ép',
    description: 'Nước ép táo tươi với hương vị ngọt nhẹ và bổ dưỡng.',
    price: 35000,
    image: '/Nước ép/nước ép táo.webp',
    featured: false,
  },
  {
    id: 'nuoc-ep-ca-rot',
    name: 'Nước ép cà rốt',
    category: 'Nước Ép',
    description: 'Nước ép cà rốt giàu vitamin A, tốt cho sức khỏe đôi mắt.',
    price: 35000,
    image: '/Nước ép/nước ép cà rốt.webp',
    featured: false,
  },
  {
    id: 'nuoc-ep-thom',
    name: 'Nước ép thơm',
    category: 'Nước Ép',
    description: 'Nước ép dứa (thơm) tươi mát, giúp tiêu hóa tốt hơn.',
    price: 35000,
    image: '/Nước ép/nước ép thơm.webp',
    featured: false,
  },
  {
    id: 'nuoc-ep-dua-luoi',
    name: 'Nước ép dưa lưới',
    category: 'Nước Ép',
    description: 'Nước ép dưa lưới thơm ngọt, thanh mát và bổ dưỡng.',
    price: 38000,
    image: '/Nước ép/nước ép dưa lưới.jpg',
    featured: true,
  },
  
  // Trà Trái Cây
  {
    id: 'tra-lai-dac-thom',
    name: 'Trà lài đác thơm',
    category: 'Trà Trái Cây',
    description: 'Trà lài với hương thơm đặc trưng, thơm nồng và dễ chịu.',
    price: 40000,
    image: '/Trà trái cây/trà lài đác thơm.jpeg',
    featured: true,
  },
  {
    id: 'tra-tac',
    name: 'Trà tắc',
    category: 'Trà Trái Cây',
    description: 'Trà tắc với vị chua thanh, giải nhiệt tuyệt vời.',
    price: 42000,
    image: '/Trà trái cây/trà tắc.webp',
    featured: false,
  },
  {
    id: 'tra-dao',
    name: 'Trà đào',
    category: 'Trà Trái Cây',
    description: 'Trà đào thơm ngon với hương vị ngọt dịu của đào tươi.',
    price: 45000,
    image: '/Trà trái cây/trà đào.webp',
    featured: true,
  },
  {
    id: 'tra-vai',
    name: 'Trà vải',
    category: 'Trà Trái Cây',
    description: 'Trà vải với hương vị ngọt ngào đặc trưng của trái vải.',
    price: 42000,
    image: '/Trà trái cây/trà vải.webp',
    featured: false,
  },
  {
    id: 'tra-dau-tay',
    name: 'Trà dâu tây',
    category: 'Trà Trái Cây',
    description: 'Trà dâu tây thơm ngọt, màu sắc bắt mắt và hấp dẫn.',
    price: 48000,
    image: '/Trà trái cây/trà dâu tây.jpg',
    featured: false,
  },
  {
    id: 'tra-dau-tam',
    name: 'Trà dâu tằm',
    category: 'Trà Trái Cây',
    description: 'Trà dâu tằm thanh mát với hương vị đặc biệt từ trái dâu tằm.',
    price: 45000,
    image: '/Trà trái cây/trà dâu tằm.jpg',
    featured: false,
  },
  {
    id: 'tra-mang-cau',
    name: 'Trà mãng cầu',
    category: 'Trà Trái Cây',
    description: 'Trà mãng cầu với hương vị độc đáo, thơm ngon và lạ miệng.',
    price: 48000,
    image: '/Trà trái cây/trà mãng cầu.jpg',
    featured: false,
  },
  {
    id: 'tra-trai-cay-nhiet-doi',
    name: 'Trà trái cây nhiệt đới',
    category: 'Trà Trái Cây',
    description: 'Trà trái cây nhiệt đới với sự kết hợp của nhiều loại trái cây tươi ngon.',
    price: 50000,
    image: '/Trà trái cây/trà trái cây nhiệt đới.webp',
    featured: true,
  },
  {
    id: 'tra-hibiscus',
    name: 'Trà hibiscus',
    category: 'Trà Trái Cây',
    description: 'Trà hoa hibiscus đỏ rực, tốt cho sức khỏe tim mạch.',
    price: 45000,
    image: '/Trà trái cây/trà hibiscus.webp',
    featured: false,
  },
  {
    id: 'tra-oi-hong',
    name: 'Trà ổi hồng',
    category: 'Trà Trái Cây',
    description: 'Trà ổi hồng với màu sắc bắt mắt, giàu vitamin C.',
    price: 42000,
    image: '/Trà trái cây/trà ổi hồng.jpg',
    featured: false,
  },
  {
    id: 'tra-xoai-chanh-day',
    name: 'Trà xoài chanh dây',
    category: 'Trà Trái Cây',
    description: 'Trà xoài chanh dây với sự kết hợp hoàn hảo giữa ngọt và chua.',
    price: 48000,
    image: '/Trà trái cây/trà xoài chanh dây.jpg',
    featured: true,
  },
  {
    id: 'tra-dua-luoi',
    name: 'Trà dưa lưới',
    category: 'Trà Trái Cây',
    description: 'Trà dưa lưới thơm ngọt, thanh mát và dễ uống.',
    price: 45000,
    image: '/Trà trái cây/trà dưa lưới.webp',
    featured: false,
  },
  {
    id: 'tra-chanh',
    name: 'Trà chanh',
    category: 'Trà Trái Cây',
    description: 'Trà chanh cổ điển, giải khát tuyệt vời cho ngày nắng nóng.',
    price: 35000,
    image: '/Trà trái cây/trà chanh.webp',
    featured: false,
  },
  
  // Others
  {
    id: 'nuoc-kompot',
    name: 'Nước Kompot',
    category: 'Others',
    description: 'Nước trái cây lên men theo công thức truyền thống, tốt cho tiêu hóa.',
    price: 40000,
    image: '/Others/nước kompot.webp',
    featured: false,
  },
  {
    id: 'sua-hat',
    name: 'Sữa hạt',
    category: 'Others',
    description: 'Sữa hạt dinh dưỡng từ các loại hạt tự nhiên, tốt cho sức khỏe.',
    price: 45000,
    image: '/Others/sữa hạt.webp',
    featured: false,
  },
  {
    id: 'sua-chua-kefir',
    name: 'Sữa chua Kefir',
    category: 'Others',
    description: 'Sữa chua Kefir giàu men vi sinh, tốt cho hệ tiêu hóa.',
    price: 48000,
    image: '/Others/sữa chua kefir.webp',
    featured: false,
  },
  {
    id: 'lassi-xoai',
    name: 'Lassi xoài',
    category: 'Others',
    description: 'Lassi xoài Ấn Độ, mịn màng và thơm ngon với xoài tươi.',
    price: 50000,
    image: '/Others/lassi xoài.webp',
    featured: true,
  },
];

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.featured);
};

export const getCategories = () => {
  return Array.from(new Set(products.map(p => p.category)));
};
