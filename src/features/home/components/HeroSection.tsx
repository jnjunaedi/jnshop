import { useRef, useEffect, useState } from 'react';

function HeroSection() {
  const heroImages = [
    'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600&auto=format&fit=crop',
    'https://images.pexels.com/photos/7986993/pexels-photo-7986993.jpeg',
    'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1600&auto=format&fit=crop',
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, clientWidth, scrollWidth } = current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

      if (direction === 'right') {
        if (isAtEnd) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      } else {
        current.scrollBy({ left: -clientWidth, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative mx-2 my-2 group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <button
        onClick={() => scroll('left')}
        aria-label="Geser ke kiri"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 md:p-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-lg"
      >
        ❮
      </button>

      <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none] rounded-md gap-2">
        {heroImages.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`Banner Hero ${index + 1}`} className="w-full sm:h-72 h-48 object-cover flex-shrink-0 snap-center rounded-md" />
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        aria-label="Geser ke kanan"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 md:p-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-lg"
      >
        ❯
      </button>
    </div>
  );
}

export default HeroSection;
