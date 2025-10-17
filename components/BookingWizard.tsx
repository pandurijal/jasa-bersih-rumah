import React, { useState, useEffect, useMemo } from 'react';
import { type ServicePackage, type BookingDetails } from '../types';

interface BookingWizardProps {
  initialPackage: ServicePackage | null;
  onClose: () => void;
}

const servicePackages: ServicePackage[] = [
    { id: 'standard', name: 'Standard Clean', price: 100000, priceDisplay: '', description: '', features: [], tier: 'standard' },
    { id: 'premium', name: 'Premium Deep Clean', price: 250000, priceDisplay: '', description: '', features: [], tier: 'premium' },
    { id: 'luxury', name: 'Ultra-Luxury Detail', price: 500000, priceDisplay: '', description: '', features: [], tier: 'luxury' },
];

const ProgressIndicator: React.FC<{ step: number, totalSteps: number }> = ({ step, totalSteps }) => (
    <div className="flex justify-between items-center mb-8">
        {[...Array(totalSteps)].map((_, i) => (
            <React.Fragment key={i}>
                <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step > i ? 'bg-slate-800 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        {i + 1}
                    </div>
                </div>
                {i < totalSteps - 1 && <div className={`flex-1 h-1 mx-2 ${step > i+1 ? 'bg-slate-800' : 'bg-gray-200'}`}></div>}
            </React.Fragment>
        ))}
    </div>
);


const BookingWizard: React.FC<BookingWizardProps> = ({ initialPackage, onClose }) => {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    servicePackage: initialPackage || null,
    homeSize: 100,
    rooms: 3,
    date: '',
    time: '09:00',
    name: '',
    phone: '',
    address: '',
    totalPrice: 0,
  });
  const [mapQuery, setMapQuery] = useState('Jakarta, Indonesia');

  useEffect(() => {
    if(initialPackage) {
        setBookingDetails(prev => ({ ...prev, servicePackage: initialPackage }));
    }
  }, [initialPackage]);

  const totalPrice = useMemo(() => {
    if (!bookingDetails.servicePackage) return 0;
    const basePrice = bookingDetails.servicePackage.price;
    const sizeMultiplier = bookingDetails.homeSize / 100;
    const roomCharge = bookingDetails.rooms * 25000;
    return Math.round((basePrice * sizeMultiplier) + roomCharge);
  }, [bookingDetails.servicePackage, bookingDetails.homeSize, bookingDetails.rooms]);
  
  useEffect(() => {
      setBookingDetails(prev => ({ ...prev, totalPrice }));
  }, [totalPrice]);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handlePackageSelect = (pkg: ServicePackage) => {
    setBookingDetails({ ...bookingDetails, servicePackage: pkg });
    nextStep();
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setBookingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Submitted:', bookingDetails);
    nextStep(); // Move to success step
  };


  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <div className="flex justify-between items-start mb-4">
             <h2 className="text-3xl font-bold font-serif mb-6">Pesan Layanan Anda</h2>
             <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl leading-none">&times;</button>
          </div>
         
          {step < 5 && <ProgressIndicator step={step} totalSteps={4} />}

          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold mb-4">1. Pilih Paket Layanan</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {servicePackages.map(pkg => (
                  <button key={pkg.id} onClick={() => handlePackageSelect(pkg)} className={`p-6 rounded-lg border-2 text-left transition-colors ${bookingDetails.servicePackage?.id === pkg.id ? 'border-slate-800 bg-slate-50' : 'border-gray-200 hover:border-slate-400'}`}>
                    <h4 className="font-bold">{pkg.name}</h4>
                    <p className="text-sm text-gray-500">Mulai dari Rp {pkg.price.toLocaleString('id-ID')}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
             <div>
              <h3 className="text-xl font-bold mb-4">2. Detail Properti Anda</h3>
               <div className="space-y-6">
                 <div>
                    <label htmlFor="homeSize" className="block font-medium mb-2">Ukuran Rumah (m²): {bookingDetails.homeSize} m²</label>
                    <input type="range" id="homeSize" name="homeSize" min="50" max="500" step="10" value={bookingDetails.homeSize} onChange={handleChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-slate-800" />
                 </div>
                 <div>
                    <label htmlFor="rooms" className="block font-medium mb-2">Jumlah Kamar Tidur: {bookingDetails.rooms}</label>
                     <input type="range" id="rooms" name="rooms" min="1" max="10" value={bookingDetails.rooms} onChange={handleChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-slate-800" />
                 </div>
                 <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <p className="text-gray-600">Estimasi Biaya</p>
                    <p className="text-3xl font-bold font-serif">Rp {totalPrice.toLocaleString('id-ID')}</p>
                 </div>
               </div>
            </div>
          )}

          {step === 3 && (
             <div>
              <h3 className="text-xl font-bold mb-4">3. Jadwalkan Kunjungan</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block font-medium mb-2">Tanggal</label>
                  <input type="date" id="date" name="date" value={bookingDetails.date} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                 <div>
                  <label htmlFor="time" className="block font-medium mb-2">Waktu</label>
                  <select id="time" name="time" value={bookingDetails.time} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg bg-white" required>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
             <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold mb-4">4. Informasi Kontak & Konfirmasi</h3>
              <div className="space-y-4 mb-6">
                  <input type="text" name="name" placeholder="Nama Lengkap" value={bookingDetails.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                  <input type="tel" name="phone" placeholder="Nomor Telepon" value={bookingDetails.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                  <div>
                    <label htmlFor="address" className="block font-medium mb-2">Alamat Lengkap</label>
                    <div className="flex gap-2">
                        <input type="text" id="address" name="address" placeholder="Masukkan alamat dan klik 'Cari'" value={bookingDetails.address} onChange={handleChange} className="flex-grow p-3 border border-gray-300 rounded-lg" required />
                        <button 
                            type="button" 
                            onClick={() => setMapQuery(bookingDetails.address)}
                            className="bg-slate-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors"
                            aria-label="Cari alamat di peta"
                        >
                            Cari
                        </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <iframe
                        title="Peta Lokasi"
                        className="w-full h-64 rounded-lg border border-gray-300"
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                    ></iframe>
                  </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold text-lg mb-4">Ringkasan Pesanan</h4>
                <div className="space-y-2 text-gray-700">
                    <p><strong>Layanan:</strong> {bookingDetails.servicePackage?.name}</p>
                    <p><strong>Jadwal:</strong> {bookingDetails.date} pukul {bookingDetails.time}</p>
                    <p className="text-xl font-bold mt-2"><strong>Total:</strong> Rp {totalPrice.toLocaleString('id-ID')}</p>
                </div>
              </div>
            </form>
          )}

         {step === 5 && (
             <div className="text-center py-12">
                <svg className="w-24 h-24 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="text-2xl font-bold font-serif mb-2">Pemesanan Berhasil!</h3>
                <p className="text-gray-600 mb-6">Terima kasih telah memesan layanan kami. Tim kami akan segera menghubungi Anda untuk konfirmasi.</p>
                <button onClick={onClose} className="bg-slate-800 text-white font-bold py-2 px-6 rounded-full hover:bg-slate-700">Kembali ke Beranda</button>
             </div>
          )}

          {step < 5 && (
              <div className="mt-8 pt-6 border-t flex justify-between items-center">
                <button onClick={prevStep} disabled={step === 1} className="text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                  Kembali
                </button>
                {step < 4 ? (
                    <button onClick={nextStep} className="bg-slate-800 text-white font-bold py-2 px-6 rounded-full hover:bg-slate-700">
                      Lanjut
                    </button>
                ) : (
                    <button onClick={handleSubmit} className="bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-300">
                      Konfirmasi Pesanan
                    </button>
                )}
              </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingWizard;
