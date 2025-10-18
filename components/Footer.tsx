
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">Jasa Bersih Rumah</h3>
            <p className="text-slate-400">Layanan kebersihan premium untuk hunian perumahan Anda.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white">Kilau Dasar</a></li>
              <li><a href="#services" className="hover:text-white">Standard Clean</a></li>
              <li><a href="#services" className="hover:text-white">Premium Deep Clean</a></li>
              <li><a href="#services" className="hover:text-white">Ultra-Luxury Detail</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Email: contact@jasabersihrumah.id</li>
              <li>Telepon: +62 812 3456 7890</li>
              <li>Jam Operasional: 08:00 - 17:00 WIB</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              {/* Placeholder icons */}
              <a href="#" className="text-slate-400 hover:text-white">FB</a>
              <a href="#" className="text-slate-400 hover:text-white">IG</a>
              <a href="#" className="text-slate-400 hover:text-white">TW</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500">
          <p>&copy; {currentYear} Jasa Bersih Rumah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;