const categories = [
  {
    id: 1,
    name: 'Elektronik',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Baju',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sepatu',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Jam Tangan',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Tas',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Gaming',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Kecantikan',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Olahraga',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop',
  }
];

function CategorySection() {
  return (
    <div className="mt-3 mx-2 bg-zinc-100 py-2 md:py-4 px-2">
      <h1 className="my-3 mx-1 text-lg md:ms-5">Kategori</h1>
      <div className="grid grid-cols-3 justify-center items-center sm:grid-cols-4 lg:grid-cols-5 md:ms-5 gap-4 ">
        {categories.map((c) => (
          <div key={c.id} className="bg-white p-1 md:mt-5 rounded-md w-28 h-fit md:w-40">
            <div>
              <img src={c.image} alt={c.name} className="w-28 h-24 md:w-40 md:h-40 object-cover" />
            </div>
            <p className="text-sm text-center mt-1.5">{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
