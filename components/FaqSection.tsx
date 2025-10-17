import React, { useState } from 'react';

const faqData = [
  {
    question: 'Apa saja yang termasuk dalam setiap paket layanan?',
    answer: 'Setiap paket kami memiliki cakupan yang berbeda. Paket Standard mencakup pembersihan esensial seperti menyapu, mengepel, dan membersihkan debu. Paket Premium menambahkan pembersihan mendalam seperti jendela interior dan peralatan dapur. Paket Ultra-Luxury adalah layanan paling detail kami, termasuk pembersihan karpet dan detailing furnitur. Detail lengkap tersedia di bagian "Paket Layanan" kami.'
  },
  {
    question: 'Apakah saya perlu menyediakan peralatan dan produk pembersih?',
    answer: 'Tidak perlu. Tim kami akan datang dengan semua peralatan profesional dan produk pembersih premium yang ramah lingkungan untuk menyelesaikan pekerjaan dengan standar tertinggi. Anda hanya perlu menyediakan akses ke air dan listrik.'
  },
  {
    question: 'Bagaimana cara mengubah jadwal pemesanan saya?',
    answer: 'Anda dapat mengubah jadwal pemesanan dengan menghubungi layanan pelanggan kami melalui telepon atau email setidaknya 24 jam sebelum jadwal asli Anda. Kami akan dengan senang hati membantu Anda menemukan waktu baru yang sesuai.'
  },
  {
    question: 'Apakah ada biaya tambahan yang perlu saya ketahui?',
    answer: 'Harga yang ditampilkan adalah estimasi berdasarkan ukuran rumah dan paket yang dipilih. Biaya tambahan mungkin berlaku untuk permintaan khusus di luar cakupan paket atau untuk kondisi properti yang sangat kotor yang memerlukan waktu dan sumber daya ekstra. Semua biaya tambahan akan dikomunikasikan dan disetujui oleh Anda sebelum kami memulai pekerjaan.'
  },
  {
    question: 'Apakah staf Anda terpercaya dan terverifikasi?',
    answer: 'Tentu saja. Keamanan dan kepercayaan Anda adalah prioritas utama kami. Setiap anggota tim kami telah melalui proses seleksi yang ketat, termasuk pemeriksaan latar belakang dan pelatihan profesional intensif untuk memastikan layanan yang aman, berkualitas, dan dapat diandalkan.'
  }
];

const FaqItem: React.FC<{
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  const questionId = `faq-question-${item.question.replace(/\s/g, '')}`;
  const answerId = `faq-answer-${item.question.replace(/\s/g, '')}`;

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={questionId}
      >
        <h4 className="text-lg font-semibold text-slate-800">{item.question}</h4>
        <span className="text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <p className="pt-4 text-gray-600">
                {item.answer}
            </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-slate-800 mb-4">Pertanyaan Umum</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban cepat untuk pertanyaan yang sering diajukan tentang layanan kebersihan kami.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
