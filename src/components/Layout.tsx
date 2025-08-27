import { ReactNode } from 'react';
import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ParticleBackground />
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;