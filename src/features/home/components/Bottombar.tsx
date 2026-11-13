import { Bell, Heart, Home, ShoppingCart, User, type LucideIcon } from 'lucide-react';

interface IMenu {
  id: number;
  icon: LucideIcon;
  name: string;
}

const menu: IMenu[] = [
  {
    id: 1,
    icon: Home,
    name: 'Beranda',
  },
  {
    id: 2,
    icon: Heart,
    name: 'Suka',
  },
  {
    id: 3,
    icon: ShoppingCart,
    name: 'Keranjang',
  },
  {
    id: 4,
    icon: Bell,
    name: 'Notifikasi',
  },
  {
    id: 5,
    icon: User,
    name: 'Saya',
  },
];

function Bottombar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between md:justify-evenly px-3 bg-white py-1.5 lg:hidden">
      {menu.map((m) => {
        const Icon = m.icon;
        return (
          <div className="flex flex-col justify-center items-center" key={m.id}>
            <span>
              <Icon strokeWidth={1.5} />
            </span>
            <p className="text-xs mt-1">{m.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Bottombar;
