import { Certification } from '../types/certification';

interface CertificationCardProps {
  certification: Certification;
}

const getDifficultyLabel = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner': return 'مبتدئ';
    case 'intermediate': return 'متوسط';
    case 'advanced': return 'متقدم';
    default: return difficulty;
  }
};

export const CertificationCard = ({ certification }: CertificationCardProps) => {
  return (
    <article className="cert-card card-hover">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-primary">
          {certification.title}
        </h3>
        <p className="text-blue-600 font-semibold text-sm">
          {certification.provider}
        </p>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 difficulty-${certification.difficulty}`}>
          {getDifficultyLabel(certification.difficulty)}
        </span>
      </div>
      
      <p className="text-secondary mb-6 leading-relaxed">
        {certification.description}
      </p>
      
      <ul className="mb-6 space-y-1">
        {certification.features.map((feature, index) => (
          <li key={index} className="text-secondary text-sm flex items-start">
            <span className="text-blue-600 font-bold ml-2 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="text-xl font-bold text-orange-500 mb-4">
        {certification.price}
      </div>
      
      <button className="cert-button">
        عرض التفاصيل
      </button>
    </article>
  );
};
