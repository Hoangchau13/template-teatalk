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
  // Trà Trái Cây
  {
    id: 'tra-dau',
    name: 'Trà Dâu',
    category: 'Trà Trái Cây',
    description: 'Trà dâu tươi mát với hương vị ngọt ngào và nhẹ nhàng. Tươi mát và bổ dưỡng.',
    price: 45000,
    image: '/products/tra-dau.jpg',
    featured: true,
  },
  {
    id: 'tra-quat',
    name: 'Trà Quất',
    category: 'Trà Trái Cây',
    description: 'Trà quất thanh mát với vị chua dịu và ngọt tự nhiên. Tuyệt vời để làm mát cơ thể.',
    price: 48000,
    image: '/products/tra-quat.jpg',
    featured: true,
  },
  {
    id: 'tra-dao',
    name: 'Trà Đào',
    category: 'Trà Trái Cây',
    description: 'Trà đào thơm lừng với hương thơm và vị ngọt dễ chịu. Được làm từ đào tươi.',
    price: 50000,
    image: '/products/tra-dao.jpg',
    featured: false,
  },
  {
    id: 'tra-vai',
    name: 'Trà Vải',
    category: 'Trà Trái Cây',
    description: 'Trà vải tráng miệng với hương vị độc đáo và mát lạnh. Đặc sản miền Nam.',
    price: 45000,
    image: '/products/tra-vai.jpg',
    featured: false,
  },
  {
    id: 'tra-sen',
    name: 'Trà Sen',
    category: 'Trà Trái Cây',
    description: 'Trà sen thanh khiết với hương hoa sen duyên dáng. Tinh tế và sang trọng.',
    price: 55000,
    image: '/products/tra-sen.jpg',
    featured: true,
  },
  {
    id: 'tra-oi-hong',
    name: 'Trà Ổi Hồng',
    category: 'Trà Trái Cây',
    description: 'Trà ổi hồng với màu sắc rực rỡ và vị ngọt tự nhiên. Giàu vitamin C.',
    price: 48000,
    image: '/products/tra-oi-hong.jpg',
    featured: false,
  },
  // Others
  {
    id: 'tra-sua',
    name: 'Trà Sữa',
    category: 'Others',
    description: 'Trà sữa kem mịn với hương vị cân bằng. Kèm theo trân châu dẻo.',
    price: 52000,
    image: '/products/tra-sua.jpg',
    featured: true,
  },
  {
    id: 'nuoc-kompot',
    name: 'Nước Kompot',
    category: 'Others',
    description: 'Nước ép trái cây tự nhiên với vị thanh mát. Không chứa đường nhân tạo.',
    price: 42000,
    image: '/products/nuoc-kompot.jpg',
    featured: false,
  },
  {
    id: 'sua-hat',
    name: 'Sữa Hạt',
    category: 'Others',
    description: 'Sữa hạt dinh dưỡng từ các loại hạt tuyệt vời. Uống vào sáng sẽ đủ năng lượng.',
    price: 48000,
    image: '/products/sua-hat.jpg',
    featured: false,
  },
  {
    id: 'sua-chua-kefir',
    name: 'Sữa Chua Kefir',
    category: 'Others',
    description: 'Sữa chua Kefir sống với lợi khuẩn tốt cho sức khỏe. Vị chua nhẹ, kem mịn.',
    price: 50000,
    image: '/products/sua-chua-kefir.jpg',
    featured: false,
  },
  {
    id: 'lassi-xoai',
    name: 'Lassi Xoài',
    category: 'Others',
    description: 'Lassi xoài mềm mịn từ xoài tươi. Thức uống Ấn Độ truyền thống, rất ngon.',
    price: 52000,
    image: '/products/lassi-xoai.jpg',
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
