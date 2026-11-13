import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Blender Portable',
    price: 'Rp. 89.000',
    originalPrice: 'Rp. 175.000',
    sold: '7.2K',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Speaker Bluetooth',
    price: 'Rp. 155.000',
    originalPrice: 'Rp. 300.000',
    sold: '6.8K',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Botol Minum Premium',
    price: 'Rp. 45.000',
    originalPrice: 'Rp. 100.000',
    sold: '11K',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Dompet Kulit Pria',
    price: 'Rp. 95.000',
    originalPrice: 'Rp. 190.000',
    sold: '4.5K',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Lampu Meja Minimalis',
    price: 'Rp. 115.000',
    originalPrice: 'Rp. 230.000',
    sold: '3.2K',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Coffee Maker',
    price: 'Rp. 275.000',
    originalPrice: 'Rp. 450.000',
    sold: '2.9K',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Tanaman Hias Indoor',
    price: 'Rp. 55.000',
    originalPrice: 'Rp. 120.000',
    sold: '8.1K',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Bantal Sofa Premium',
    price: 'Rp. 65.000',
    originalPrice: 'Rp. 130.000',
    sold: '5.6K',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop',
  },
];

function FlashSaleSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [timeLeft] = useState(() => Date.now() + 24 * 24 * 60 * 60 * 1000);

  const [remaining, setRemaining] = useState(6 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      const seconds = Math.max(0, Math.floor((timeLeft - Date.now()) / 1000));

      setRemaining(seconds);

      if (seconds <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  const formatTime = (value: number) => String(value).padStart(2, '0');

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
        <div className="flex items-center gap-3">
          <h1 className="text-xl">Flash Sale</h1>

          <div className="flex items-center gap-1">
            <span className="bg-zinc-900 text-white text-xs px-2 py-1 rounded-md tabular-nums">{formatTime(hours)}</span>
            <span className="text-sm font-bold">:</span>
            <span className="bg-zinc-900 text-white text-xs px-2 py-1 rounded-md tabular-nums">{formatTime(minutes)}</span>
            <span className="text-sm font-bold">:</span>
            <span className="bg-zinc-900 text-white text-xs px-2 py-1 rounded-md tabular-nums">{formatTime(seconds)}</span>
          </div>
        </div>

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
            <div className="bg-zinc-100">
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-md" />
            </div>

            <div className="p-1">
              <p className="text-sm font-bold">{product.name}</p>
              <p className="text-xs mt-1">{product.price}</p>
              <p className="text-xs line-through mt-1">{product.originalPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSaleSection;
