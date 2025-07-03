import { Certification } from '../types/certification';

export const certificationTracks = {
  itInfrastructure: {
    id: 'it-infrastructure',
    titleKey: 'itInfrastructure',
    descriptionKey: 'itInfrastructureDesc',
    icon: '🔧',
    color: 'bg-blue-500',
    certifications: [
      {
        id: 'comptia-aplus',
        nameAr: 'CompTIA A+',
        nameEn: 'CompTIA A+',
        level: 'beginner',
        provider: 'CompTIA',
        description: 'شهادة أساسية في دعم الحاسوب وإصلاح الأجهزة'
      },
      {
        id: 'comptia-network',
        nameAr: 'CompTIA Network+',
        nameEn: 'CompTIA Network+',
        level: 'beginner',
        provider: 'CompTIA',
        description: 'أساسيات الشبكات والاتصالات'
      },
      {
        id: 'comptia-server',
        nameAr: 'CompTIA Server+',
        nameEn: 'CompTIA Server+',
        level: 'intermediate',
        provider: 'CompTIA',
        description: 'إدارة الخوادم والبنية التحتية'
      },
      {
        id: 'ms-networking',
        nameAr: 'Microsoft MTA: Networking Fundamentals',
        nameEn: 'Microsoft MTA: Networking Fundamentals',
        level: 'beginner',
        provider: 'Microsoft',
        description: 'أساسيات الشبكات من مايكروسوفت'
      },
      {
        id: 'cisco-ccna',
        nameAr: 'Cisco CCNA',
        nameEn: 'Cisco CCNA',
        level: 'intermediate',
        provider: 'Cisco',
        description: 'شهادة سيسكو المشهورة في الشبكات'
      }
    ]
  },
  cloudComputing: {
    id: 'cloud-computing',
    titleKey: 'cloudComputing',
    descriptionKey: 'cloudComputingDesc',
    icon: '☁️',
    color: 'bg-sky-500',
    certifications: [
      {
        id: 'aws-practitioner',
        nameAr: 'AWS Certified Cloud Practitioner',
        nameEn: 'AWS Certified Cloud Practitioner',
        level: 'beginner',
        provider: 'Amazon Web Services',
        description: 'شهادة أساسية في الحوسبة السحابية من أمازون'
      },
      {
        id: 'azure-fundamentals',
        nameAr: 'Microsoft Azure Fundamentals (AZ-900)',
        nameEn: 'Microsoft Azure Fundamentals (AZ-900)',
        level: 'beginner',
        provider: 'Microsoft',
        description: 'أساسيات الحوسبة السحابية من مايكروسوفت'
      },
      {
        id: 'gcp-digital-leader',
        nameAr: 'Google Cloud Digital Leader',
        nameEn: 'Google Cloud Digital Leader',
        level: 'beginner',
        provider: 'Google Cloud',
        description: 'قيادة التحول الرقمي مع جوجل كلاود'
      },
      {
        id: 'ibm-cloud-essentials',
        nameAr: 'IBM Cloud Essentials',
        nameEn: 'IBM Cloud Essentials',
        level: 'beginner',
        provider: 'IBM',
        description: 'أساسيات الحوسبة السحابية من آي بي إم'
      },
      {
        id: 'oci-foundations',
        nameAr: 'Oracle Cloud Infrastructure Foundations',
        nameEn: 'Oracle Cloud Infrastructure Foundations',
        level: 'beginner',
        provider: 'Oracle',
        description: 'أساسيات البنية التحتية السحابية من أوراكل'
      }
    ]
  },
  cybersecurity: {
    id: 'cybersecurity',
    titleKey: 'cybersecurity',
    descriptionKey: 'cybersecurityDesc',
    icon: '🔒',
    color: 'bg-red-500',
    certifications: [
      {
        id: 'comptia-security',
        nameAr: 'CompTIA Security+',
        nameEn: 'CompTIA Security+',
        level: 'beginner',
        provider: 'CompTIA',
        description: 'شهادة أساسية في الأمن السيبراني'
      },
      {
        id: 'isc2-cc',
        nameAr: 'ISC2 Certified in Cybersecurity (CC)',
        nameEn: 'ISC2 Certified in Cybersecurity (CC)',
        level: 'beginner',
        provider: 'ISC2',
        description: 'شهادة مجانية في أساسيات الأمن السيبراني'
      },
      {
        id: 'ec-council-ceh',
        nameAr: 'EC-Council CEH',
        nameEn: 'EC-Council CEH',
        level: 'intermediate',
        provider: 'EC-Council',
        description: 'شهادة الهاكر الأخلاقي المعتمد'
      },
      {
        id: 'iso-27001',
        nameAr: 'ISO 27001 Foundation',
        nameEn: 'ISO 27001 Foundation',
        level: 'beginner',
        provider: 'ISO',
        description: 'أساسيات إدارة أمن المعلومات'
      },
      {
        id: 'crisc',
        nameAr: 'Certified Risk and Information Systems Control (CRISC)',
        nameEn: 'Certified Risk and Information Systems Control (CRISC)',
        level: 'intermediate',
        provider: 'ISACA',
        description: 'إدارة المخاطر وأنظمة المعلومات'
      }
    ]
  },
  itSupport: {
    id: 'it-support',
    titleKey: 'itSupport',
    descriptionKey: 'itSupportDesc',
    icon: '🎧',
    color: 'bg-green-500',
    certifications: [
      {
        id: 'google-it-support',
        nameAr: 'Google IT Support Professional Certificate',
        nameEn: 'Google IT Support Professional Certificate',
        level: 'beginner',
        provider: 'Google',
        description: 'شهادة جوجل المهنية في الدعم الفني'
      },
      {
        id: 'comptia-itf',
        nameAr: 'CompTIA IT Fundamentals (ITF+)',
        nameEn: 'CompTIA IT Fundamentals (ITF+)',
        level: 'beginner',
        provider: 'CompTIA',
        description: 'أساسيات تقنية المعلومات'
      },
      {
        id: 'hdi-support',
        nameAr: 'HDI Support Center Analyst',
        nameEn: 'HDI Support Center Analyst',
        level: 'beginner',
        provider: 'HDI',
        description: 'محلل مركز الدعم الفني'
      },
      {
        id: 'ms-365-fundamentals',
        nameAr: 'Microsoft 365 Certified: Fundamentals',
        nameEn: 'Microsoft 365 Certified: Fundamentals',
        level: 'beginner',
        provider: 'Microsoft',
        description: 'أساسيات مايكروسوفت 365'
      }
    ]
  },
  engineering: {
    id: 'engineering',
    titleKey: 'engineering',
    descriptionKey: 'engineeringDesc',
    icon: '⚙️',
    color: 'bg-orange-500',
    certifications: [
      {
        id: 'autocad-cert',
        nameAr: 'AutoCAD Certification',
        nameEn: 'AutoCAD Certification',
        level: 'beginner',
        provider: 'Autodesk',
        description: 'شهادة أوتوكاد للتصميم الهندسي'
      },
      {
        id: 'solidworks-cswa',
        nameAr: 'SolidWorks Associate (CSWA)',
        nameEn: 'SolidWorks Associate (CSWA)',
        level: 'beginner',
        provider: 'SolidWorks',
        description: 'شهادة أساسية في سوليدووركس'
      },
      {
        id: 'matlab-cert',
        nameAr: 'MATLAB Certification',
        nameEn: 'MATLAB Certification',
        level: 'intermediate',
        provider: 'MathWorks',
        description: 'شهادة ماتلاب للحوسبة العلمية'
      },
      {
        id: 'labview-clad',
        nameAr: 'Certified LabVIEW Associate Developer',
        nameEn: 'Certified LabVIEW Associate Developer',
        level: 'intermediate',
        provider: 'National Instruments',
        description: 'مطور لابفيو المعتمد'
      },
      {
        id: 'fe-electrical',
        nameAr: 'Electrical Engineering Fundamentals (NCEES FE)',
        nameEn: 'Electrical Engineering Fundamentals (NCEES FE)',
        level: 'intermediate',
        provider: 'NCEES',
        description: 'أساسيات الهندسة الكهربائية'
      }
    ]
  },
  dataAnalytics: {
    id: 'data-analytics',
    titleKey: 'dataAnalytics',
    descriptionKey: 'dataAnalyticsDesc',
    icon: '📊',
    color: 'bg-purple-500',
    certifications: [
      {
        id: 'power-bi-analyst',
        nameAr: 'Microsoft Power BI Data Analyst Associate',
        nameEn: 'Microsoft Power BI Data Analyst Associate',
        level: 'beginner',
        provider: 'Microsoft',
        description: 'محلل بيانات باور بي آي'
      },
      {
        id: 'google-data-analytics',
        nameAr: 'Google Data Analytics Certificate',
        nameEn: 'Google Data Analytics Certificate',
        level: 'beginner',
        provider: 'Google',
        description: 'شهادة جوجل في تحليل البيانات'
      },
      {
        id: 'ibm-data-science',
        nameAr: 'IBM Data Science Professional Certificate',
        nameEn: 'IBM Data Science Professional Certificate',
        level: 'intermediate',
        provider: 'IBM',
        description: 'شهادة آي بي إم في علوم البيانات'
      },
      {
        id: 'meta-frontend',
        nameAr: 'Meta Front-End Developer',
        nameEn: 'Meta Front-End Developer',
        level: 'beginner',
        provider: 'Meta',
        description: 'مطور واجهات من ميتا'
      },
      {
        id: 'oracle-java',
        nameAr: 'Oracle Java Foundations',
        nameEn: 'Oracle Java Foundations',
        level: 'beginner',
        provider: 'Oracle',
        description: 'أساسيات جافا من أوراكل'
      }
    ]
  },
  projectManagement: {
    id: 'project-management',
    titleKey: 'projectManagement',
    descriptionKey: 'projectManagementDesc',
    icon: '📋',
    color: 'bg-indigo-500',
    certifications: [
      {
        id: 'capm',
        nameAr: 'CAPM (PMI) – Associate Level',
        nameEn: 'CAPM (PMI) – Associate Level',
        level: 'beginner',
        provider: 'PMI',
        description: 'شهادة مساعد إدارة المشاريع'
      },
      {
        id: 'scrum-foundation',
        nameAr: 'Scrum Foundation Professional Certificate',
        nameEn: 'Scrum Foundation Professional Certificate',
        level: 'beginner',
        provider: 'Scrum Alliance',
        description: 'أساسيات منهجية سكرم'
      },
      {
        id: 'prince2-foundation',
        nameAr: 'PRINCE2 Foundation',
        nameEn: 'PRINCE2 Foundation',
        level: 'beginner',
        provider: 'AXELOS',
        description: 'أساسيات منهجية برنس 2'
      },
      {
        id: 'agile-essentials',
        nameAr: 'Agile Essentials',
        nameEn: 'Agile Essentials',
        level: 'beginner',
        provider: 'Agile Alliance',
        description: 'أساسيات المنهجية الرشيقة'
      },
      {
        id: 'google-project-management',
        nameAr: 'Google Project Management Certificate',
        nameEn: 'Google Project Management Certificate',
        level: 'beginner',
        provider: 'Google',
        description: 'شهادة جوجل في إدارة المشاريع'
      }
    ]
  },
  otherFields: {
    id: 'other-fields',
    titleKey: 'otherFields',
    descriptionKey: 'otherFieldsDesc',
    icon: '🌟',
    color: 'bg-pink-500',
    certifications: [
      {
        id: 'google-digital-garage',
        nameAr: 'Digital Marketing: Google Digital Garage',
        nameEn: 'Digital Marketing: Google Digital Garage',
        level: 'beginner',
        provider: 'Google',
        description: 'التسويق الرقمي من جوجل'
      },
      {
        id: 'ecba',
        nameAr: 'Business Analysis: ECBA – IIBA',
        nameEn: 'Business Analysis: ECBA – IIBA',
        level: 'beginner',
        provider: 'IIBA',
        description: 'تحليل الأعمال للمبتدئين'
      },
      {
        id: 'elements-of-ai',
        nameAr: 'AI Basics: Elements of AI',
        nameEn: 'AI Basics: Elements of AI',
        level: 'beginner',
        provider: 'University of Helsinki',
        description: 'أساسيات الذكاء الاصطناعي'
      },
      {
        id: 'ms-office-specialist',
        nameAr: 'Excel/Data Entry: Microsoft Office Specialist',
        nameEn: 'Excel/Data Entry: Microsoft Office Specialist',
        level: 'beginner',
        provider: 'Microsoft',
        description: 'أخصائي مايكروسوفت أوفيس'
      },
      {
        id: 'itil-foundation',
        nameAr: 'ITIL 4 Foundation – IT Service Management',
        nameEn: 'ITIL 4 Foundation – IT Service Management',
        level: 'beginner',
        provider: 'AXELOS',
        description: 'أساسيات إدارة خدمات تقنية المعلومات'
      }
    ]
  }
};

export const certifications: Certification[] = [
  // DevOps & CI/CD
  {
    id: 'aws-devops',
    title: 'AWS Certified DevOps Engineer',
    provider: 'Amazon Web Services',
    difficulty: 'intermediate',
    description: 'شهادة احترافية تركز على أتمتة عمليات النشر والإدارة على منصة AWS. تغطي مواضيع CI/CD، المراقبة، والأمان.',
    features: [
      'إدارة البنية التحتية كرمز (IaC)',
      'أتمتة خطوط أنابيب CI/CD',
      'مراقبة التطبيقات والنظم',
      'إدارة الحاويات والمايكروسيرفس'
    ],
    price: '$300',
    category: 'devops'
  },
  {
    id: 'azure-devops',
    title: 'Azure DevOps Engineer Expert',
    provider: 'Microsoft',
    difficulty: 'intermediate',
    description: 'تخصص في تطوير استراتيجيات DevOps باستخدام منصة Microsoft Azure وأدوات Azure DevOps.',
    features: [
      'تصميم استراتيجية DevOps',
      'إدارة التحكم في المصدر',
      'تنفيذ CI/CD',
      'إدارة البنية التحتية والتكوين'
    ],
    price: '$330',
    category: 'devops'
  },
  {
    id: 'docker-certified',
    title: 'Docker Certified Associate',
    provider: 'Docker Inc.',
    difficulty: 'beginner',
    description: 'شهادة أساسية في تقنية الحاويات وإدارة Docker. مثالية للمبتدئين في عالم DevOps.',
    features: [
      'أساسيات تقنية الحاويات',
      'إنشاء وإدارة Docker Images',
      'شبكات Docker',
      'أمان الحاويات'
    ],
    price: '$195',
    category: 'devops'
  },
  {
    id: 'kubernetes-admin',
    title: 'Certified Kubernetes Administrator',
    provider: 'Cloud Native Computing Foundation',
    difficulty: 'advanced',
    description: 'شهادة متقدمة في إدارة وتشغيل مجموعات Kubernetes. تتطلب خبرة عملية قوية.',
    features: [
      'تثبيت وتكوين Kubernetes',
      'إدارة أعباء العمل والخدمات',
      'استكشاف الأخطاء وإصلاحها',
      'أمان الكلستر'
    ],
    price: '$375',
    category: 'devops'
  },
  {
    id: 'jenkins-engineer',
    title: 'Jenkins Engineer Certification',
    provider: 'CloudBees',
    difficulty: 'intermediate',
    description: 'تخصص في أتمتة عمليات التطوير والنشر باستخدام Jenkins، أداة CI/CD الأكثر شعبية.',
    features: [
      'إعداد وتكوين Jenkins',
      'إنشاء خطوط أنابيب متقدمة',
      'دمج الأدوات الخارجية',
      'إدارة الأمان والصلاحيات'
    ],
    price: '$250',
    category: 'devops'
  },
  {
    id: 'terraform-associate',
    title: 'Terraform Associate',
    provider: 'HashiCorp',
    difficulty: 'beginner',
    description: 'تعلم إدارة البنية التحتية كرمز باستخدام Terraform. شهادة مثالية للبداية في IaC.',
    features: [
      'أساسيات Infrastructure as Code',
      'إنشاء وإدارة الموارد',
      'إدارة الحالة (State Management)',
      'أفضل الممارسات الأمنية'
    ],
    price: '$70',
    category: 'devops'
  },

  // IT Infrastructure & Networking
  {
    id: 'ccna-routing-switching',
    title: 'CCNA Routing and Switching',
    provider: 'Cisco',
    difficulty: 'intermediate',
    description: 'شهادة أساسية في شبكات الحاسوب تغطي التوجيه والتبديل. تعتبر نقطة انطلاق ممتازة في مجال الشبكات.',
    features: [
      'أساسيات الشبكات والبروتوكولات',
      'تكوين أجهزة التوجيه والتبديل',
      'تشخيص مشاكل الشبكات',
      'أمان الشبكات الأساسي'
    ],
    price: '$300',
    category: 'infrastructure'
  },
  {
    id: 'comptia-network',
    title: 'CompTIA Network+',
    provider: 'CompTIA',
    difficulty: 'beginner',
    description: 'شهادة معتمدة دولياً تغطي أساسيات إدارة وتشغيل الشبكات. مثالية للمبتدئين في مجال IT.',
    features: [
      'تصميم وتنفيذ الشبكات',
      'استكشاف الأخطاء وإصلاحها',
      'أمان الشبكات',
      'إدارة الشبكات السحابية'
    ],
    price: '$370',
    category: 'infrastructure'
  },
  {
    id: 'vmware-vcp',
    title: 'VMware Certified Professional',
    provider: 'VMware',
    difficulty: 'intermediate',
    description: 'شهادة في المحاكاة الافتراضية وإدارة البنية التحتية السحابية باستخدام منتجات VMware.',
    features: [
      'إدارة vSphere وvCenter',
      'تصميم البنية التحتية الافتراضية',
      'مراقبة الأداء والتحسين',
      'النسخ الاحتياطي والاستعادة'
    ],
    price: '$450',
    category: 'infrastructure'
  },

  // Cloud Computing
  {
    id: 'aws-solutions-architect',
    title: 'AWS Solutions Architect Associate',
    provider: 'Amazon Web Services',
    difficulty: 'intermediate',
    description: 'شهادة معمارية الحلول السحابية الأكثر طلباً في السوق. تركز على تصميم الحلول المقاومة والآمنة.',
    features: [
      'تصميم الحلول السحابية',
      'إدارة التكلفة والأداء',
      'أمان وامتثال AWS',
      'تقنيات التوسع والتوافر العالي'
    ],
    price: '$150',
    category: 'cloud'
  },
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Azure Fundamentals',
    provider: 'Microsoft',
    description: 'شهادة أساسية في Microsoft Azure تغطي المفاهيم الأساسية للحوسبة السحابية.',
    difficulty: 'beginner',
    features: [
      'مفاهيم الحوسبة السحابية',
      'خدمات Azure الأساسية',
      'أمان وامتثال Azure',
      'إدارة التكلفة والدعم'
    ],
    price: '$99',
    category: 'cloud'
  },
  {
    id: 'google-cloud-associate',
    title: 'Google Cloud Associate',
    provider: 'Google Cloud',
    difficulty: 'intermediate',
    description: 'شهادة في Google Cloud Platform تركز على نشر التطبيقات وإدارة البنية التحتية.',
    features: [
      'نشر وإدارة التطبيقات',
      'إدارة موارد GCP',
      'مراقبة العمليات',
      'أمان وامتثال GCP'
    ],
    price: '$200',
    category: 'cloud'
  },

  // Cybersecurity
  {
    id: 'cissp',
    title: 'Certified Information Systems Security Professional',
    provider: 'ISC2',
    difficulty: 'advanced',
    description: 'الشهادة الذهبية في أمان المعلومات. تتطلب خبرة عملية 5 سنوات وتغطي 8 مجالات أمنية.',
    features: [
      'إدارة الأمان والمخاطر',
      'أمان الأصول',
      'هندسة الأمان',
      'أمان الشبكات والاتصالات'
    ],
    price: '$749',
    category: 'security'
  },
  {
    id: 'comptia-security',
    title: 'CompTIA Security+',
    provider: 'CompTIA',
    difficulty: 'beginner',
    description: 'شهادة أساسية في أمان المعلومات معتمدة حكومياً. نقطة انطلاق ممتازة في مجال الأمان السيبراني.',
    features: [
      'أساسيات الأمان السيبراني',
      'إدارة المخاطر',
      'أمان الشبكات',
      'تحليل التهديدات'
    ],
    price: '$370',
    category: 'security'
  },
  {
    id: 'ceh',
    title: 'Certified Ethical Hacker',
    provider: 'EC-Council',
    difficulty: 'intermediate',
    description: 'شهادة في الاختراق الأخلاقي تعلم كيفية اكتشاف نقاط الضعف الأمنية وإصلاحها.',
    features: [
      'تقنيات الاختراق الأخلاقي',
      'اختبار الاختراق',
      'تحليل نقاط الضعف',
      'تقارير الأمان'
    ],
    price: '$1199',
    category: 'security'
  },

  // Business Analysis & Project Management
  {
    id: 'pmp',
    title: 'Project Management Professional',
    provider: 'PMI',
    difficulty: 'advanced',
    description: 'الشهادة الأكثر اعترافاً في إدارة المشاريع عالمياً. تتطلب خبرة عملية وتدريب متخصص.',
    features: [
      'منهجيات إدارة المشاريع',
      'إدارة المخاطر والجودة',
      'إدارة الفرق والاتصالات',
      'إدارة التكلفة والوقت'
    ],
    price: '$555',
    category: 'business'
  },
  {
    id: 'cbap',
    title: 'Certified Business Analysis Professional',
    provider: 'IIBA',
    difficulty: 'advanced',
    description: 'شهادة تحليل الأعمال الأكثر تقديراً. تركز على تحليل احتياجات العمل وتصميم الحلول.',
    features: [
      'جمع وتحليل المتطلبات',
      'تصميم الحلول',
      'إدارة التغيير',
      'التحليل الاستراتيجي'
    ],
    price: '$325',
    category: 'business'
  },
  {
    id: 'agile-csm',
    title: 'Certified Scrum Master',
    provider: 'Scrum Alliance',
    difficulty: 'beginner',
    description: 'شهادة في منهجية Agile وإطار عمل Scrum. مثالية للانتقال إلى إدارة المشاريع التقنية.',
    features: [
      'أساسيات منهجية Agile',
      'إطار عمل Scrum',
      'إدارة فرق التطوير',
      'التحسين المستمر'
    ],
    price: '$995',
    category: 'business'
  },

  // Data & Analytics
  {
    id: 'tableau-desktop',
    title: 'Tableau Desktop Specialist',
    provider: 'Tableau',
    difficulty: 'beginner',
    description: 'شهادة في تحليل البيانات وإنشاء التقارير التفاعلية باستخدام Tableau.',
    features: [
      'تحليل البيانات المرئي',
      'إنشاء لوحات المعلومات',
      'ربط مصادر البيانات',
      'التقارير التفاعلية'
    ],
    price: '$100',
    category: 'data'
  },
  {
    id: 'power-bi',
    title: 'Microsoft Power BI Data Analyst',
    provider: 'Microsoft',
    difficulty: 'intermediate',
    description: 'شهادة في تحليل البيانات وإنشاء التقارير باستخدام Power BI من Microsoft.',
    features: [
      'تحليل البيانات المتقدم',
      'نمذجة البيانات',
      'تطوير التقارير',
      'إدارة مساحات العمل'
    ],
    price: '$165',
    category: 'data'
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics Individual Qualification',
    provider: 'Google',
    difficulty: 'beginner',
    description: 'شهادة مجانية في تحليل الويب وفهم سلوك المستخدمين باستخدام Google Analytics.',
    features: [
      'تحليل حركة المرور',
      'قياس الأداء',
      'تتبع التحويلات',
      'إنشاء التقارير المخصصة'
    ],
    price: 'مجانية',
    category: 'data'
  },

  // Artificial Intelligence & Machine Learning
  {
    id: 'aws-ml-specialty',
    title: 'AWS Certified Machine Learning - Specialty',
    provider: 'Amazon Web Services',
    difficulty: 'advanced',
    description: 'شهادة متخصصة في تعلم الآلة على منصة AWS. تغطي بناء ونشر وتشغيل نماذج الذكاء الاصطناعي.',
    features: [
      'تصميم وبناء نماذج ML',
      'خدمات AWS للذكاء الاصطناعي',
      'معالجة البيانات والتدريب',
      'نشر النماذج والمراقبة'
    ],
    price: '$300',
    category: 'ai'
  },
  {
    id: 'azure-ai-engineer',
    title: 'Azure AI Engineer Associate',
    provider: 'Microsoft',
    difficulty: 'intermediate',
    description: 'شهادة في هندسة الذكاء الاصطناعي باستخدام خدمات Azure AI وCognitive Services.',
    features: [
      'خدمات Azure Cognitive Services',
      'بناء حلول الذكاء الاصطناعي',
      'معالجة اللغة الطبيعية',
      'الرؤية الحاسوبية'
    ],
    price: '$165',
    category: 'ai'
  },
  {
    id: 'google-ml-engineer',
    title: 'Google Cloud Professional ML Engineer',
    provider: 'Google Cloud',
    difficulty: 'advanced',
    description: 'شهادة احترافية في هندسة تعلم الآلة على Google Cloud Platform.',
    features: [
      'تصميم أنظمة ML قابلة للتوسع',
      'أدوات Google Cloud ML',
      'MLOps وإدارة النماذج',
      'TensorFlow وVertex AI'
    ],
    price: '$200',
    category: 'ai'
  },
  {
    id: 'tensorflow-developer',
    title: 'TensorFlow Developer Certificate',
    provider: 'Google',
    difficulty: 'intermediate',
    description: 'شهادة عملية في تطوير نماذج التعلم العميق باستخدام TensorFlow.',
    features: [
      'بناء النماذج العصبية',
      'معالجة الصور والنصوص',
      'التعلم العميق',
      'تطبيقات الذكاء الاصطناعي'
    ],
    price: '$100',
    category: 'ai'
  },
  {
    id: 'nvidia-fundamentals',
    title: 'NVIDIA AI Fundamentals',
    provider: 'NVIDIA',
    difficulty: 'beginner',
    description: 'شهادة أساسية في أساسيات الذكاء الاصطناعي والحوسبة المتسارعة.',
    features: [
      'أساسيات الذكاء الاصطناعي',
      'الحوسبة المتسارعة بـ GPU',
      'CUDA وتطوير التطبيقات',
      'تطبيقات عملية للـ AI'
    ],
    price: '$90',
    category: 'ai'
  },
  {
    id: 'ibm-data-science',
    title: 'IBM Data Science Professional',
    provider: 'IBM',
    difficulty: 'intermediate',
    description: 'شهادة شاملة في علوم البيانات تغطي Python وML والتحليل المتقدم.',
    features: [
      'برمجة Python لعلوم البيانات',
      'تحليل البيانات المتقدم',
      'تعلم الآلة والخوارزميات',
      'مشاريع عملية'
    ],
    price: '$39/شهر',
    category: 'ai'
  },
  {
    id: 'openai-certified',
    title: 'OpenAI API Specialist',
    provider: 'OpenAI',
    difficulty: 'intermediate',
    description: 'شهادة متخصصة في استخدام نماذج OpenAI وتطوير تطبيقات الذكاء الاصطناعي التوليدي.',
    features: [
      'استخدام GPT APIs',
      'تطوير تطبيقات ذكية',
      'معالجة اللغة الطبيعية',
      'الذكاء الاصطناعي التوليدي'
    ],
    price: '$200',
    category: 'ai'
  },
  {
    id: 'hugging-face',
    title: 'Hugging Face Transformers',
    provider: 'Hugging Face',
    difficulty: 'advanced',
    description: 'شهادة في استخدام مكتبة Transformers وتطوير نماذج NLP المتقدمة.',
    features: [
      'نماذج Transformer',
      'معالجة اللغة الطبيعية',
      'Fine-tuning النماذج',
      'نشر النماذج'
    ],
    price: '$150',
    category: 'ai'
  },
  {
    id: 'pytorch-certified',
    title: 'PyTorch Professional',
    provider: 'PyTorch Foundation',
    difficulty: 'advanced',
    description: 'شهادة احترافية في تطوير نماذج التعلم العميق باستخدام PyTorch.',
    features: [
      'بناء الشبكات العصبية',
      'التدريب المتقدم',
      'تحسين الأداء',
      'نشر النماذج'
    ],
    price: '$175',
    category: 'ai'
  },
  {
    id: 'databricks-ml',
    title: 'Databricks Machine Learning Associate',
    provider: 'Databricks',
    difficulty: 'intermediate',
    description: 'شهادة في منصة Databricks لتطوير ونشر نماذج تعلم الآلة على نطاق واسع.',
    features: [
      'MLflow وإدارة النماذج',
      'Apache Spark ML',
      'تطوير الخطوط الأنبوبية',
      'التعاون في فرق البيانات'
    ],
    price: '$200',
    category: 'ai'
  },
  {
    id: 'snowflake-ml',
    title: 'Snowflake ML Engineer',
    provider: 'Snowflake',
    difficulty: 'intermediate',
    description: 'شهادة في استخدام Snowflake لمشاريع تعلم الآلة وتحليل البيانات الضخمة.',
    features: [
      'Snowflake ML Functions',
      'معالجة البيانات الضخمة',
      'تطوير النماذج التنبؤية',
      'تكامل مع أدوات ML'
    ],
    price: '$175',
    category: 'ai'
  },
  {
    id: 'coursera-ml',
    title: 'Machine Learning Specialization',
    provider: 'Stanford/Coursera',
    difficulty: 'beginner',
    description: 'تخصص شامل في تعلم الآلة من جامعة ستانفورد، يغطي الأساسيات والتطبيقات العملية.',
    features: [
      'أساسيات تعلم الآلة',
      'الخوارزميات الكلاسيكية',
      'التعلم العميق',
      'مشاريع عملية'
    ],
    price: '$49/شهر',
    category: 'ai'
  }
];
