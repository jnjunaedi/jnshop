import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Sepatu Pria',
    price: 'Rp. 120.000',
    originalPrice: 'Rp. 250.000',
    sold: '12K',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Jam Tangan Sport',
    price: 'Rp. 185.000',
    originalPrice: 'Rp. 350.000',
    sold: '8.5K',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Tas Ransel Laptop',
    price: 'Rp. 150.000',
    originalPrice: 'Rp. 300.000',
    sold: '5.2K',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Headphone Wireless',
    price: 'Rp. 210.000',
    originalPrice: 'Rp. 420.000',
    sold: '9.1K',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Kacamata Hitam',
    price: 'Rp. 75.000',
    originalPrice: 'Rp. 150.000',
    sold: '15K',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Jaket Hoodie Polos',
    price: 'Rp. 135.000',
    originalPrice: 'Rp. 270.000',
    sold: '10K',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Kamera Mirrorless',
    price: 'Rp. 4.500.000',
    originalPrice: 'Rp. 5.200.000',
    sold: '1.2K',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Keyboard Mechanical',
    price: 'Rp. 450.000',
    originalPrice: 'Rp. 650.000',
    sold: '3.4K',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop',
  },
];

function BestDealsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -350, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 350, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mt-10 mx-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Best Deals</h1>

        <div className="flex gap-2">
          <button type="button" onClick={scrollLeft} aria-label="Scroll Left" className="p-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 cursor-pointer transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button type="button" onClick={scrollRight} aria-label="Scroll Right" className="p-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 cursor-pointer transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="mt-5 flex overflow-x-auto gap-3 pb-3 scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {products.map((product) => (
          <div key={product.id} className="w-fit shrink-0">
            <div className="bg-zinc-100 ">
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-md" />
            </div>
            <div className="p-1">
              <p className="text-sm font-bold">{product.name}</p>
              <p className="text-xs mt-1">{product.price}</p>
              <p className="text-xs line-through mt-1">{product.originalPrice}</p>
              <p className="text-xs mt-1">Terjual: {product.sold}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestDealsSection;
