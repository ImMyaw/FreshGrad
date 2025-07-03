import { useTranslation } from '@/hooks/use-translation';

export const Hero = () => {
  const { t } = useTranslation();
  const scrollToCertifications = () => {
    const element = document.getElementById('certifications');
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white pt-[120px] pb-20 text-center">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {t('heroSubtitle')}
        </p>
        <button 
          className="cta-button"
          onClick={scrollToCertifications}
        >
          {t('startJourney')}
          <i className="fas fa-arrow-down mr-2"></i>
        </button>
      </div>
    </section>
  );
};
