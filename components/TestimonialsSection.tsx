
import React from 'react';
import { type Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Ibu Maya',
    location: 'Warga Perumahan Pondok Indah',
    quote: 'Tim EasyClean ID sangat profesional dan teliti. Rumah saya tidak pernah sebersih ini! Layanan yang sangat bisa diandalkan.',
    avatarUrl: 'https://picsum.photos/100/100?random=2',
  },
  {
    name: 'Bapak Hendra',
    location: 'Warga BSD City',
    quote: 'Saya sangat terkesan dengan kualitas pembersihannya. Mereka menggunakan produk premium dan hasilnya luar biasa. Sangat direkomendasikan!',
    avatarUrl: 'https://picsum.photos/100/100?random=3',
  },
  {
    name: 'Keluarga Santoso',
    location: 'Warga Perumahan Alam Sutera',
    quote: 'Bookingnya mudah dan timnya datang tepat waktu. Layanan pelanggan yang ramah dan hasil kerja yang memuaskan. Kami akan menjadi pelanggan tetap.',
    avatarUrl: 'https://picsum.photos/100/100?random=4',
  },
];

const StarIcon: React.FC = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
      <div>
        <p className="font-bold text-lg">{testimonial.name}</p>
        <p className="text-gray-500 text-sm">{testimonial.location}</p>
      </div>
    </div>
    <div className="flex mb-4">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif mb-4">Apa Kata Pelanggan Kami</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Kami bangga melayani para penghuni perumahan elit dengan standar tertinggi.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
