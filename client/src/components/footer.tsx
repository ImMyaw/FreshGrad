import { useTranslation } from '@/hooks/use-translation';

const footerSections = [
  {
    title: 'المسارات التقنية',
    links: [
      { text: 'DevOps والأتمتة', href: '#devops' },
      { text: 'البنية التحتية', href: '#infrastructure' },
      { text: 'الحوسبة السحابية', href: '#cloud' },
      { text: 'الأمن السيبراني', href: '#security' }
    ]
  },
  {
    title: 'التخصصات المتقدمة',
    links: [
      { text: 'إدارة المشاريع', href: '#business' },
      { text: 'تحليل البيانات', href: '#data' },
      { text: 'الذكاء الاصطناعي', href: '#ai' },
      { text: 'تطوير التطبيقات', href: '#development' }
    ]
  },
  {
    title: 'الدعم والمساعدة',
    links: [
      { text: 'كيفية البداية', href: '#getting-started' },
      { text: 'اختيار الشهادة المناسبة', href: '#choosing' },
      { text: 'نصائح للنجاح', href: '#tips' },
      { text: 'الأسئلة الشائعة', href: '#faq' }
    ]
  },
  {
    title: 'تواصل معنا',
    links: [
      { text: 'Abdulrahman Shahar', href: '#', isName: true },
      { text: 'Abdualrahman.a.sh@gmail.com', href: 'mailto:Abdualrahman.a.sh@gmail.com' },
      { text: '0536995517', href: 'tel:0536995517' }
    ]
  }
];

export const Footer = () => {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/attached_assets/Abdulrahman Shahar CV _1751487175796.pdf';
    link.download = 'Abdulrahman_Shahar_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer id="contact" className="bg-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4 text-primary">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-secondary hover:text-blue-600 transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Resume Download Section */}
        <div className="border-t border-color pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-primary">
              {t('downloadCV')}
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              {t('downloadCVDescription')}
            </p>
            <button 
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <i className="fas fa-download text-lg"></i>
              <span className="text-lg">{t('downloadCVButton')}</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-color pt-8">
          <div className="text-center text-secondary">
            <p>&copy; 2025 دليل الشهادات المهنية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};