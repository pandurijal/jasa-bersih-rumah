
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/800/600?random=5" 
              alt="Tim pembersih profesional kami" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold font-serif mb-4">Tentang Jasa Bersih Rumah</h2>
            <p className="text-lg text-gray-600 mb-6">
              Didirikan dari hasrat untuk kebersihan dan kemewahan, Jasa Bersih Rumah bertujuan untuk mengubah cara Anda memandang layanan kebersihan. Kami bukan sekadar membersihkan; kami merawat rumah Anda dengan standar tertinggi, menggunakan produk ramah lingkungan dan staf terlatih secara profesional.
            </p>
            <div className="space-y-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                    <div className="ml-4">
                        <h4 className="text-xl font-bold">Staf Terpercaya</h4>
                        <p className="text-gray-600">Setiap anggota tim kami telah melalui proses verifikasi dan pelatihan intensif untuk menjamin keamanan dan kualitas.</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                    <div className="ml-4">
                        <h4 className="text-xl font-bold">Jaminan Kepuasan</h4>
                        <p className="text-gray-600">Kami berkomitmen pada keunggulan. Jika Anda tidak puas, kami akan kembali untuk memperbaikinya.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
