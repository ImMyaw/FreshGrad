import { useState } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { useLanguage } from '@/contexts/language-context';
import { getTranslation } from '@/lib/translations';
import { certificationTracks } from '@/data/certifications';

interface TrackCardProps {
  track: typeof certificationTracks.itInfrastructure;
  isExpanded: boolean;
  onToggle: () => void;
}

const TrackCard = ({ track, isExpanded, onToggle }: TrackCardProps) => {
  const { t, language } = useTranslation();
  const { language: currentLang } = useLanguage();

  return (
    <div className="cert-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className={`text-4xl p-3 rounded-lg ${track.color} text-white`}>
          {track.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-primary mb-2">
            {getTranslation(currentLang, track.titleKey)}
          </h3>
          <p className="text-secondary text-sm">
            {getTranslation(currentLang, track.descriptionKey)}
          </p>
        </div>
      </div>

      {/* Top certifications preview */}
      <div className="mb-4">
        <h4 className="font-semibold text-primary mb-2 text-sm">
          {t('suitableFor')} {t('freshGraduates')}:
        </h4>
        <ul className="space-y-1">
          {track.certifications.slice(0, 3).map((cert) => (
            <li key={cert.id} className="text-sm text-secondary flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {language === 'ar' ? cert.nameAr : cert.nameEn}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onToggle}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
      >
        <span>{t('viewDetails')}</span>
        <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="mt-6 border-t pt-6">
          <h4 className="font-bold text-primary mb-4">
            جميع الشهادات في هذا المسار:
          </h4>
          <div className="grid gap-4">
            {track.certifications.map((cert) => (
              <div key={cert.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h5 className="font-semibold text-primary mb-1">
                      {language === 'ar' ? cert.nameAr : cert.nameEn}
                    </h5>
                    <p className="text-sm text-secondary mb-2">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                        {t('provider')}: {cert.provider}
                      </span>
                      <span className={`px-2 py-1 rounded ${
                        cert.level === 'beginner' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                      }`}>
                        {t('level')}: {getTranslation(currentLang, cert.level)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const TrackCards = () => {
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const handleToggle = (trackId: string) => {
    setExpandedTrack(expandedTrack === trackId ? null : trackId);
  };

  const tracks = Object.values(certificationTracks);

  return (
    <section id="paths" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            المسارات المهنية للمبتدئين والخريجين الجدد
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            اختر المسار المناسب لك وابدأ رحلتك المهنية مع الشهادات المعتمدة عالمياً
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              isExpanded={expandedTrack === track.id}
              onToggle={() => handleToggle(track.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};