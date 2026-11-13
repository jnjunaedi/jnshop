import { Store } from "lucide-react";

const allProducts = [
  {
    id: 1,
    name: 'Smartphone Android',
    price: 'Rp. 2.500.000',
    rating: 4.9,
    sold: '2.1K',
    storeName: 'TechStore Official',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Laptop Ultrabook',
    price: 'Rp. 7.500.000',
    rating: 4.8,
    sold: '1.5K',
    storeName: 'Laptop Center',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Tablet Digital',
    price: 'Rp. 3.200.000',
    rating: 4.7,
    sold: '980',
    storeName: 'Gadget House',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Smartwatch Premium',
    price: 'Rp. 650.000',
    rating: 4.8,
    sold: '3.2K',
    storeName: 'Wearable Hub',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Kemeja Casual',
    price: 'Rp. 145.000',
    rating: 4.9,
    sold: '4.5K',
    storeName: 'Urban Fashion',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Jaket Denim',
    price: 'Rp. 225.000',
    rating: 4.7,
    sold: '1.8K',
    storeName: 'Denim Culture',
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Sneakers Casual',
    price: 'Rp. 350.000',
    rating: 4.8,
    sold: '5.2K',
    storeName: 'Sneakers District',
    image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Sepatu Formal',
    price: 'Rp. 425.000',
    rating: 4.6,
    sold: '1.2K',
    storeName: 'Classic Footwear',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Sandal Casual',
    price: 'Rp. 75.000',
    rating: 4.7,
    sold: '3.8K',
    storeName: 'Daily Steps',
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Tas Selempang',
    price: 'Rp. 120.000',
    rating: 4.8,
    sold: '2.4K',
    storeName: 'Bag Station',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop',
  },
  {
    id: 11,
    name: 'Backpack Travel',
    price: 'Rp. 275.000',
    rating: 4.9,
    sold: '1.9K',
    storeName: 'Adventure Gear',
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&auto=format&fit=crop',
  },
  {
    id: 12,
    name: 'Parfum Unisex',
    price: 'Rp. 195.000',
    rating: 4.8,
    sold: '3.1K',
    storeName: 'Aroma Gallery',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop',
  },
  {
    id: 13,
    name: 'Kacamata Fashion',
    price: 'Rp. 110.000',
    rating: 4.7,
    sold: '2.6K',
    storeName: 'Vision Style',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop',
  },
  {
    id: 14,
    name: 'Kursi Minimalis',
    price: 'Rp. 550.000',
    rating: 4.8,
    sold: '850',
    storeName: 'Modern Living',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop',
  },
  {
    id: 15,
    name: 'Lampu Dekorasi',
    price: 'Rp. 175.000',
    rating: 4.9,
    sold: '1.5K',
    storeName: 'Light & Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop',
  },
  {
    id: 16,
    name: 'Vas Bunga Keramik',
    price: 'Rp. 95.000',
    rating: 4.6,
    sold: '720',
    storeName: 'Home Decor ID',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&auto=format&fit=crop',
  },
  {
    id: 17,
    name: 'Coffee Table',
    price: 'Rp. 850.000',
    rating: 4.8,
    sold: '640',
    storeName: 'Wooden Space',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&auto=format&fit=crop',
  },
  {
    id: 18,
    name: 'Bola Basket',
    price: 'Rp. 125.000',
    rating: 4.7,
    sold: '1.3K',
    storeName: 'Sport Arena',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&auto=format&fit=crop',
  },
  {
    id: 19,
    name: 'Matras Yoga',
    price: 'Rp. 150.000',
    rating: 4.9,
    sold: '2.2K',
    storeName: 'Fit Lifestyle',
    image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c5?w=500&auto=format&fit=crop',
  },
  {
    id: 20,
    name: 'Skincare Set',
    price: 'Rp. 220.000',
    rating: 4.9,
    sold: '4.1K',
    storeName: 'Glow Beauty Store',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop',
  },
  {
    id: 21,
    name: 'Makeup Palette',
    price: 'Rp. 135.000',
    rating: 4.8,
    sold: '2.9K',
    storeName: 'Beauty Corner',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&auto=format&fit=crop',
  },
];

function ProductSection() {
  return (
    <div className="mt-10 mx-2">
      <h1 className="text-xl">Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-6 justify-center items-center gap-5 mt-5 ">
        {allProducts.map((a) => (
          <div key={a.id}>
            <div>
              <img src={a.image} alt="" className="w-52 h-52 object-cover rounded-md" />
            </div>
            <div className="mt-2">
              <p className="text-sm font-bold">{a.name}</p>
              <p className="text-sm mt-1.5">{a.price}</p>
              <p className="text-xs mt-1">
                Terjual {a.sold} | ⭐ {a.rating}
              </p>
              <p className="text-xs"></p>
              <p className="text-xs flex items-center mt-1.5 gap-1">
                <Store size={20} strokeWidth={1} /> {a.storeName}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-10 border border-blue-600 py-2 px-3 text-blue-600 mx-28 md:mx-56 lg:mx-80">Lihat selengkapnya</p>
    </div>
  );
}

export default ProductSection;
