export interface CertificationItem {
  id: string;
  nameAr: string;
  nameEn: string;
  description: string;
  provider: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface CertificationTrack {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  color: string;
  certifications: CertificationItem[];
}

export const certificationTracks = {
  itInfrastructure: {
    id: 'infrastructure',
    titleKey: 'itInfrastructure',
    descriptionKey: 'itInfrastructureDesc',
    icon: '🖥️',
    color: 'bg-blue-500',
    certifications: [
      {
        id: 'ccna',
        nameAr: 'CCNA – Cisco Certified Network Associate',
        nameEn: 'CCNA – Cisco Certified Network Associate',
        description: 'شهادة أساسية في الشبكات تغطي التوجيه والتبديل وأساسيات البروتوكولات',
        provider: 'Cisco',
        level: 'intermediate'
      },
      {
        id: 'network-plus',
        nameAr: 'CompTIA Network+',
        nameEn: 'CompTIA Network+',
        description: 'شهادة محايدة في أساسيات الشبكات تعطي فهماً شاملاً لتقنيات الشبكات المختلفة',
        provider: 'CompTIA',
        level: 'beginner'
      },
      {
        id: 'cisco-cct',
        nameAr: 'Cisco CCT / CCST',
        nameEn: 'Cisco CCT / CCST',
        description: 'شهادات المستوى المبتدئ من سيسكو للدعم الفني والشبكات',
        provider: 'Cisco',
        level: 'beginner'
      },
      {
        id: 'windows-server',
        nameAr: 'Microsoft Windows Server Hybrid Admin Associate',
        nameEn: 'Microsoft Windows Server Hybrid Admin Associate',
        description: 'إدارة بيئات Windows Server في البيئات المختلطة',
        provider: 'Microsoft',
        level: 'intermediate'
      },
      {
        id: 'fortinet-nse4',
        nameAr: 'Fortinet NSE 4',
        nameEn: 'Fortinet NSE 4',
        description: 'تخصص في حلول الأمان وجدران الحماية من فورتينت',
        provider: 'Fortinet',
        level: 'intermediate'
      }
    ]
  },
  cloudComputing: {
    id: 'cloud',
    titleKey: 'cloudComputing',
    descriptionKey: 'cloudComputingDesc',
    icon: '☁️',
    color: 'bg-cyan-500',
    certifications: [
      {
        id: 'aws-saa',
        nameAr: 'AWS Certified Solutions Architect – Associate',
        nameEn: 'AWS Certified Solutions Architect – Associate',
        description: 'تصميم وبناء أنظمة موزعة على منصة AWS',
        provider: 'AWS',
        level: 'intermediate'
      },
      {
        id: 'aws-cp',
        nameAr: 'AWS Cloud Practitioner',
        nameEn: 'AWS Cloud Practitioner',
        description: 'المدخل الأساسي لمنصة AWS يغطي المفاهيم الأساسية للحوسبة السحابية',
        provider: 'AWS',
        level: 'beginner'
      },
      {
        id: 'azure-admin',
        nameAr: 'Azure Administrator Associate (AZ-104)',
        nameEn: 'Azure Administrator Associate (AZ-104)',
        description: 'إدارة الموارد السحابية على منصة Microsoft Azure',
        provider: 'Microsoft',
        level: 'intermediate'
      },
      {
        id: 'azure-fundamentals',
        nameAr: 'Azure Fundamentals (AZ-900)',
        nameEn: 'Azure Fundamentals (AZ-900)',
        description: 'أساسيات منصة Microsoft Azure السحابية',
        provider: 'Microsoft',
        level: 'beginner'
      },
      {
        id: 'terraform',
        nameAr: 'HashiCorp Terraform Associate',
        nameEn: 'HashiCorp Terraform Associate',
        description: 'أتمتة إدارة البنية التحتية كرمز',
        provider: 'HashiCorp',
        level: 'intermediate'
      }
    ]
  },
  cybersecurity: {
    id: 'cybersecurity',
    titleKey: 'cybersecurity',
    descriptionKey: 'cybersecurityDesc',
    icon: '🛡️',
    color: 'bg-red-500',
    certifications: [
      {
        id: 'isc2-cc',
        nameAr: 'ISC2 Certified in Cybersecurity (CC)',
        nameEn: 'ISC2 Certified in Cybersecurity (CC)',
        description: 'شهادة أساسية في الأمن السيبراني من ISC2',
        provider: 'ISC2',
        level: 'beginner'
      },
      {
        id: 'security-plus',
        nameAr: 'CompTIA Security+',
        nameEn: 'CompTIA Security+',
        description: 'شهادة معتمدة دولياً في أساسيات الأمن السيبراني',
        provider: 'CompTIA',
        level: 'intermediate'
      },
      {
        id: 'google-cyber',
        nameAr: 'Google Cybersecurity Certificate',
        nameEn: 'Google Cybersecurity Certificate',
        description: 'برنامج شامل من جوجل في الأمن السيبراني',
        provider: 'Google',
        level: 'beginner'
      },
      {
        id: 'ejpt',
        nameAr: 'eJPT v2 – INE',
        nameEn: 'eJPT v2 – INE',
        description: 'اختبار اختراق عملي للمبتدئين',
        provider: 'INE',
        level: 'beginner'
      },
      {
        id: 'oscp',
        nameAr: 'OSCP – Offensive Security',
        nameEn: 'OSCP – Offensive Security',
        description: 'الشهادة الذهبية في اختبار الاختراق الأخلاقي',
        provider: 'Offensive Security',
        level: 'advanced'
      }
    ]
  },
  itSupport: {
    id: 'support',
    titleKey: 'itSupport',
    descriptionKey: 'itSupportDesc',
    icon: '🎧',
    color: 'bg-green-500',
    certifications: [
      {
        id: 'comptia-a-plus',
        nameAr: 'CompTIA A+',
        nameEn: 'CompTIA A+',
        description: 'الشهادة الأساسية في دعم الحاسوب وإصلاح الأعطال',
        provider: 'CompTIA',
        level: 'beginner'
      },
      {
        id: 'itil-foundation',
        nameAr: 'ITIL 4 Foundation',
        nameEn: 'ITIL 4 Foundation',
        description: 'إطار عمل لإدارة خدمات تقنية المعلومات',
        provider: 'ITIL',
        level: 'beginner'
      },
      {
        id: 'google-it-support',
        nameAr: 'Google IT Support',
        nameEn: 'Google IT Support',
        description: 'برنامج شامل من جوجل يغطي أساسيات الدعم الفني',
        provider: 'Google',
        level: 'beginner'
      },
      {
        id: 'ms365-fundamentals',
        nameAr: 'Microsoft 365 Fundamentals (MS-900)',
        nameEn: 'Microsoft 365 Fundamentals (MS-900)',
        description: 'أساسيات منصة Microsoft 365',
        provider: 'Microsoft',
        level: 'beginner'
      },
      {
        id: 'apple-acsp',
        nameAr: 'Apple ACSP',
        nameEn: 'Apple ACSP',
        description: 'دعم وإدارة أنظمة Apple',
        provider: 'Apple',
        level: 'intermediate'
      }
    ]
  },
  engineering: {
    id: 'engineering',
    titleKey: 'engineering',
    descriptionKey: 'engineeringDesc',
    icon: '⚙️',
    color: 'bg-purple-500',
    certifications: [
      {
        id: 'autocad-professional',
        nameAr: 'Autodesk Certified Professional – AutoCAD',
        nameEn: 'Autodesk Certified Professional – AutoCAD',
        description: 'الشهادة المهنية في برنامج أوتوكاد للرسم الهندسي',
        provider: 'Autodesk',
        level: 'intermediate'
      },
      {
        id: 'revit-professional',
        nameAr: 'Revit Certified Professional',
        nameEn: 'Revit Certified Professional',
        description: 'شهادة في برنامج Revit للنمذجة المعمارية',
        provider: 'Autodesk',
        level: 'intermediate'
      },
      {
        id: 'solidworks-cswa',
        nameAr: 'SolidWorks CSWA/CSWP',
        nameEn: 'SolidWorks CSWA/CSWP',
        description: 'شهادات في التصميم ثلاثي الأبعاد والنمذجة الهندسية',
        provider: 'SolidWorks',
        level: 'intermediate'
      },
      {
        id: 'siemens-automation',
        nameAr: 'Siemens Certified Automation Technician',
        nameEn: 'Siemens Certified Automation Technician',
        description: 'تقني أتمتة معتمد من سيمنز',
        provider: 'Siemens',
        level: 'intermediate'
      },
      {
        id: 'labview-clad',
        nameAr: 'CLAD – LabVIEW',
        nameEn: 'CLAD – LabVIEW',
        description: 'برمجة أنظمة القياس والتحكم الآلي',
        provider: 'National Instruments',
        level: 'intermediate'
      }
    ]
  },
  dataAnalytics: {
    id: 'data',
    titleKey: 'dataAnalytics',
    descriptionKey: 'dataAnalyticsDesc',
    icon: '📊',
    color: 'bg-orange-500',
    certifications: [
      {
        id: 'power-bi-analyst',
        nameAr: 'PL-300 Power BI Data Analyst',
        nameEn: 'PL-300 Power BI Data Analyst',
        description: 'تحليل البيانات وإنشاء التقارير باستخدام Power BI',
        provider: 'Microsoft',
        level: 'intermediate'
      },
      {
        id: 'google-data-analytics',
        nameAr: 'Google Data Analytics',
        nameEn: 'Google Data Analytics',
        description: 'برنامج شامل من جوجل في تحليل البيانات',
        provider: 'Google',
        level: 'beginner'
      },
      {
        id: 'ibm-data-science',
        nameAr: 'IBM Data Science',
        nameEn: 'IBM Data Science',
        description: 'برنامج علوم البيانات من IBM',
        provider: 'IBM',
        level: 'intermediate'
      },
      {
        id: 'meta-frontend',
        nameAr: 'Meta Front-End Developer',
        nameEn: 'Meta Front-End Developer',
        description: 'تطوير واجهات المستخدم الأمامية',
        provider: 'Meta',
        level: 'intermediate'
      },
      {
        id: 'aws-developer',
        nameAr: 'AWS Developer – Associate',
        nameEn: 'AWS Developer – Associate',
        description: 'تطوير ونشر التطبيقات على منصة AWS',
        provider: 'AWS',
        level: 'intermediate'
      },
      {
        id: 'oracle-java',
        nameAr: 'Oracle Java Associate (OCA)',
        nameEn: 'Oracle Java Associate (OCA)',
        description: 'أساسيات برمجة Java',
        provider: 'Oracle',
        level: 'intermediate'
      }
    ]
  },
  projectManagement: {
    id: 'project',
    titleKey: 'projectManagement',
    descriptionKey: 'projectManagementDesc',
    icon: '📋',
    color: 'bg-teal-500',
    certifications: [
      {
        id: 'capm',
        nameAr: 'CAPM (PMI)',
        nameEn: 'CAPM (PMI)',
        description: 'شهادة مساعد إدارة المشاريع من PMI',
        provider: 'PMI',
        level: 'beginner'
      },
      {
        id: 'prince2-foundation',
        nameAr: 'Prince2 Foundation',
        nameEn: 'Prince2 Foundation',
        description: 'أساسيات منهجية Prince2 لإدارة المشاريع',
        provider: 'AXELOS',
        level: 'beginner'
      },
      {
        id: 'scrum-master',
        nameAr: 'Scrum Master Certified (SMC)',
        nameEn: 'Scrum Master Certified (SMC)',
        description: 'إدارة المشاريع بمنهجية Scrum',
        provider: 'Scrum Study',
        level: 'intermediate'
      },
      {
        id: 'google-project-management',
        nameAr: 'Google Project Management',
        nameEn: 'Google Project Management',
        description: 'برنامج إدارة المشاريع من جوجل',
        provider: 'Google',
        level: 'beginner'
      },
      {
        id: 'agile-pm',
        nameAr: 'AgilePM Foundation',
        nameEn: 'AgilePM Foundation',
        description: 'أساسيات إدارة المشاريع الرشيقة',
        provider: 'APMG',
        level: 'beginner'
      }
    ]
  }
};