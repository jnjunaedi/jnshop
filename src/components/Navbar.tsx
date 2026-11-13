import { Heart, LogOut, Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="bg-blue-600 flex items-center gap-3 justify-evenly py-3 px-1.5">
        <h1 className="text-white text-xl lg:text-2xl font-bold hidden sm:block">Jn Shop</h1>
        <div className="w-[70%] relative">
          <input type="text" className="border w-full py-2 rounded-md" />
          <div className="absolute -top-1 -right-1 bg-blue-600 text-white p-3 border border-white scale-75 rounded-md">
            <span>
              <Search />
            </span>
          </div>
        </div>
        <div className="lg:flex gap-10 text-white hidden">
          <span>
            <Heart />
          </span>
          <span>
            <ShoppingBag />
          </span>
        </div>
        <div>
          <p className="text-blue-600 bg-white p-2 rounded-full">
            <Link to="login" className="flex gap-1">
              <LogOut />
              <p>Masuk</p>
            </Link>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
