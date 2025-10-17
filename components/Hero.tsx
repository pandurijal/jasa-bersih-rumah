
import React from 'react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <section className="relative h-[80vh] min-h-[500px] text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img 
        src="https://picsum.photos/1600/1200?random=1" 
        alt="Interior rumah mewah yang bersih dan rapi" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-4">
          Kebersihan Mewah untuk Hunian Anda
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8">
          Nikmati standar kebersihan premium dengan layanan terpercaya kami, dirancang khusus untuk kenyamanan dan ketenangan pikiran Anda di perumahan.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onBookNow}
            className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
          >
            Pesan Layanan
          </button>
          <div className="bg-white/20 backdrop-blur-sm py-2 px-6 rounded-full">
            <p className="font-semibold">Mulai dari Rp 100.000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
