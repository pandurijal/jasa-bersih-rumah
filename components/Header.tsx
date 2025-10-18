
import React from 'react';

interface HeaderProps {
  onBookNow: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookNow }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-slate-800 font-serif">
          EasyClean ID
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-slate-800 transition-colors">Layanan</a>
          <a href="#testimonials" className="text-gray-600 hover:text-slate-800 transition-colors">Testimoni</a>
          <a href="#about" className="text-gray-600 hover:text-slate-800 transition-colors">Tentang Kami</a>
        </nav>
        <button
          onClick={onBookNow}
          className="bg-slate-800 text-white font-bold py-2 px-6 rounded-full hover:bg-slate-700 transition-all transform hover:scale-105"
        >
          Pesan Sekarang
        </button>
      </div>
    </header>
  );
};

export default Header;
