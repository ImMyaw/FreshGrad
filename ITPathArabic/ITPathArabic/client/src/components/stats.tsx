import { useEffect, useState, useRef } from 'react';

interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: '120+', label: 'شهادة مهنية' },
  { number: '30K+', label: 'متخصص نجح' },
  { number: '7', label: 'مسارات مهنية' }
];

export const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(['0', '0', '0']);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    const finalValues = ['120+', '30K+', '7'];
    const numericValues = [120, 30000, 7];
    
    finalValues.forEach((finalValue, index) => {
      let currentValue = 0;
      const increment = numericValues[index] / 50;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValues[index]) {
          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = finalValue;
            return newNumbers;
          });
          clearInterval(timer);
        } else {
          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            const suffix = index === 0 ? '+' : index === 1 ? 'K+' : '';
            const displayValue = index === 1 ? 
              Math.floor(currentValue / 1000) + suffix : 
              Math.floor(currentValue) + suffix;
            newNumbers[index] = displayValue;
            return newNumbers;
          });
        }
      }, 30);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="stat-number">
                {animatedNumbers[index]}
              </span>
              <span className="text-secondary font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
