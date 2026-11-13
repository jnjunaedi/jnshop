import { Coins, ShoppingBag, ShoppingCart, Truck } from 'lucide-react';

function ProfitSection() {
  return (
    <div className="mx-2">
      <div className="flex flex-wrap justify-between sm:justify-evenly p-4 bg-zinc-100">
        <div>
          <span className="inline-block p-4 bg-white rounded-md">
            <ShoppingCart className="text-blue-600" />
          </span>
          <p className="text-xs text-wrap text-center">
            Toko <br /> Shopins
          </p>
        </div>
        <div>
          <span className="inline-block p-4 bg-white rounded-md">
            <ShoppingBag className="text-emerald-600" />
          </span>
          <p className="text-xs text-wrap text-center">
            Shopins <br /> Mall
          </p>
        </div>
        <div>
          <span className="inline-block p-4 bg-white rounded-md">
            <Truck className="text-yellow-600" />
          </span>
          <p className="text-xs text-wrap text-center">
            Gratis <br /> Ongkir
          </p>
        </div>
        <div>
          <span className="inline-block p-4 bg-white rounded-md">
            <Coins className="text-zinc-600" />
          </span>
          <p className="text-xs text-wrap text-center">
            Garansi <br /> Uang Kembali
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfitSection;
