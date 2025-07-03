import { useState, useEffect } from 'react';
import { useTheme } from './theme-provider';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/hooks/use-translation';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage, language } = useLanguage();
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'paths', 'certifications', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            onSectionChange(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-primary border-b transition-all duration-300 ease-in-out shadow-md">
      <div className="container">
        <nav className="flex items-center justify-between h-[70px]">
          <a href="#" className="text-xl font-bold text-blue-600 flex items-center">
            <i className="fas fa-certificate ml-2"></i>
            دليل الشهادات المهنية
          </a>
          
          <ul className={`nav-links ${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center gap-8 absolute md:relative top-full md:top-0 right-0 left-0 md:left-auto bg-primary md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none flex-col md:flex-row`}>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                {t('home')}
              </a>
            </li>
            <li>
              <a 
                href="#paths" 
                className={`nav-link ${activeSection === 'paths' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('paths');
                }}
              >
                {t('certifications')}
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                {t('about')}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                {t('contact')}
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button 
              className="theme-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <span className="text-sm font-semibold">
                {language === 'ar' ? 'EN' : 'ع'}
              </span>
            </button>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button 
              className="md:hidden text-xl text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
