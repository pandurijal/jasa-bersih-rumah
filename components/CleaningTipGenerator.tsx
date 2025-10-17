
import React, { useState, useCallback } from 'react';
import { generateCleaningTip } from '../services/geminiService';

const CleaningTipGenerator: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [tip, setTip] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateTip = useCallback(async () => {
    if (!problem.trim()) {
      setError('Harap masukkan masalah kebersihan Anda.');
      return;
    }
    setIsLoading(true);
    setError('');
    setTip('');
    try {
      const generatedTip = await generateCleaningTip(problem);
      setTip(generatedTip);
    } catch (err) {
      setError('Gagal menghasilkan tips. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  }, [problem]);

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif mb-4 text-yellow-400">Tips Kebersihan Cerdas</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Punya masalah kebersihan yang sulit diatasi? Tanyakan pada ahli AI kami untuk solusi cepat.
        </p>
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Contoh: Noda kopi di karpet putih"
              className="w-full px-4 py-3 rounded-full text-gray-800 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <button
              onClick={handleGenerateTip}
              disabled={isLoading}
              className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Memuat...' : 'Dapatkan Tips'}
            </button>
          </div>
          {error && <p className="text-red-400 mb-4">{error}</p>}
          {tip && (
            <div className="bg-white/10 p-6 rounded-lg text-left mt-6 whitespace-pre-wrap">
              <p className="text-slate-200">{tip}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CleaningTipGenerator;
