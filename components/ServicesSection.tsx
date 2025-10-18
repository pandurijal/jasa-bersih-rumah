
import React from 'react';
import { type ServicePackage } from '../types';

interface ServicesSectionProps {
  onSelectPackage: (servicePackage: ServicePackage) => void;
}

const servicePackages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Kilau Dasar',
    price: 50000,
    priceDisplay: 'Mulai dari Rp 50.000',
    description: 'Pembersihan cepat untuk area-area penting, menjaga rumah tetap terlihat baik.',
    features: ['Penyapuan & Pengepelan', 'Pembersihan Debu Permukaan'],
    tier: 'basic',
  },
  {
    id: 'standard',
    name: 'Standard Clean',
    price: 100000,
    priceDisplay: 'Rp 100.000 - Rp 250.000',
    description: 'Pembersihan esensial untuk menjaga rumah Anda tetap segar dan rapi setiap hari.',
    features: ['Penyapuan & Pengepelan', 'Pembersihan Debu', 'Pembersihan Kamar Mandi', 'Pembersihan Dapur'],
    tier: 'standard',
  },
  {
    id: 'premium',
    name: 'Premium Deep Clean',
    price: 250000,
    priceDisplay: 'Rp 250.000 - Rp 500.000',
    description: 'Pembersihan menyeluruh untuk hasil yang berkilau dan higienis di setiap sudut.',
    features: ['Semua layanan Standard', 'Pembersihan Jendela Interior', 'Pembersihan Peralatan Dapur', 'Ganti Sprei'],
    tier: 'premium',
  },
  {
    id: 'luxury',
    name: 'Ultra-Luxury Detail',
    price: 500000,
    priceDisplay: 'Mulai dari Rp 500.000',
    description: 'Layanan kebersihan paling detail untuk perawatan properti mewah Anda.',
    features: ['Semua layanan Premium', 'Pembersihan Karpet & Sofa', 'Detailing Furnitur', 'Organisasi Kabinet'],
    tier: 'luxury',
  },
];

const tierStyles = {
    basic: {
        borderColor: 'border-gray-200',
        buttonClass: 'bg-slate-800 hover:bg-slate-700 text-white',
    },
    standard: {
        borderColor: 'border-gray-300',
        buttonClass: 'bg-slate-800 hover:bg-slate-700 text-white',
    },
    premium: {
        borderColor: 'border-yellow-400',
        buttonClass: 'bg-yellow-400 hover:bg-yellow-300 text-slate-900',
    },
    luxury: {
        borderColor: 'border-slate-800',
        buttonClass: 'bg-slate-800 hover:bg-slate-700 text-white',
    }
}

const ServiceCard: React.FC<{ pkg: ServicePackage; onSelect: () => void }> = ({ pkg, onSelect }) => (
  <div className={`bg-white p-8 rounded-lg shadow-lg border-t-4 ${tierStyles[pkg.tier].borderColor} flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300`}>
    <h3 className="text-2xl font-bold font-serif mb-2">{pkg.name}</h3>
    <p className="text-gray-500 mb-4">{pkg.description}</p>
    <p className="text-3xl font-bold text-slate-800 mb-6 font-serif">{pkg.priceDisplay}</p>
    <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
      {pkg.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button onClick={onSelect} className={`w-full font-bold py-3 px-6 rounded-full transition-colors ${tierStyles[pkg.tier].buttonClass}`}>
      Pilih Paket
    </button>
  </div>
);

const CheckIcon: React.FC<{className: string}> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif mb-4">Paket Layanan Kami</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Pilih paket yang paling sesuai dengan kebutuhan Anda, dari pembersihan rutin hingga perawatan detail yang mewah.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicePackages.map(pkg => (
            <ServiceCard key={pkg.id} pkg={pkg} onSelect={() => onSelectPackage(pkg)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;