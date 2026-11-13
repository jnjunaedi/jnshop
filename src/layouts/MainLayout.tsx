import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Topbar />
      <Navbar />

      <main className="max-w-6xl mx-auto pb-20">{children}</main>
    </div>
  );
}

export default MainLayout;
