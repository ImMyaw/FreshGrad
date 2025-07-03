// Optimized Translations - Load only current language
const translations = {
    ar: {
        logo: "مساري | My Career", home: "الرئيسية", certifications: "الشهادات", about: "نبذة", contact: "تواصل",
        heroTitle: "دليلك الشامل للشهادات المهنية في تقنية المعلومات", heroSubtitle: "اكتشف أفضل الشهادات المطلوبة في السوق السعودي وابدأ مسارك المهني بثقة",
        startJourney: "ابدأ مسارك الآن", professionalCertifications: "شهادة مهنية", careerTracks: "مسارات مهنية", successfulProfessionals: "متخصص نجح",
        certificationTracks: "المسارات المهنية للشهادات", tracksDescription: "اختر المسار المناسب لمسيرتك المهنية واكتشف الشهادات المطلوبة في السوق السعودي",
        itInfrastructure: "البنية التحتية لتقنية المعلومات", itInfrastructureDesc: "إدارة وتصميم الشبكات والخوادم والبنية التحتية", cloudComputing: "الحوسبة السحابية", cloudComputingDesc: "تصميم وإدارة الحلول السحابية المتقدمة",
        cybersecurity: "الأمن السيبراني وإدارة الحوكمة", cybersecurityDesc: "حماية الأنظمة والبيانات من التهديدات السيبرانية", itSupport: "الدعم الفني", itSupportDesc: "دعم المستخدمين وحل المشاكل التقنية",
        engineering: "الهندسة والتصميم", engineeringDesc: "تصميم وتطوير الحلول الهندسية المتقدمة", dataAnalytics: "تحليل البيانات والبرمجة", dataAnalyticsDesc: "تحليل البيانات وتطوير الحلول البرمجية",
        projectManagement: "إدارة المشاريع والمهارات القيادية", projectManagementDesc: "قيادة وإدارة المشاريع التقنية والتجارية", otherFields: "مجالات أخرى", otherFieldsDesc: "تخصصات متنوعة في مجال الأعمال والتقنية",
        foundations: "أ. الأساسيات", penTesting: "ج. الاختبار والاختراق", governance: "د. الحوكمة والمخاطر والامتثال",
        infrastructureTip: "⚡ نصيحة مدرب: بعد CCNA جرّب مشروع Lab محاكاة BGP لتحصل على مقابلات أسرع.", cloudTip: "⚡ نصيحة مدرب: ابدأ بـ AWS Cloud Practitioner ثم انتقل لـ Solutions Architect للحصول على راتب أعلى.",
        cybersecurityTip: "⚡ نصيحة مدرب: ابدأ بـ CompTIA Security+ ثم توجه لـ NCA للسوق السعودي المحلي.", supportTip: "⚡ نصيحة مدرب: CompTIA A+ هو البوابة الأولى لدخول مجال تقنية المعلومات.",
        engineeringTip: "⚡ نصيحة مدرب: AutoCAD أساسي لجميع مجالات الهندسة في السوق السعودي.", dataTip: "⚡ نصيحة مدرب: Power BI مطلوب جداً في الشركات السعودية للتحليل والتقارير.",
        projectTip: "⚡ نصيحة مدرب: CAPM نقطة البداية الممتازة لدخول مجال إدارة المشاريع.", otherTip: "⚡ نصيحة مدرب: Excel المتقدم مطلوب في جميع القطاعات والشركات.",
        // Certificate descriptions
        ccnaDesc: "شهادة أساسية في الشبكات تغطي التوجيه والتبديل وأساسيات البروتوكولات. مطلوبة في معظم وظائف الشبكات في السوق السعودي.",
        networkPlusDesc: "شهادة محايدة في أساسيات الشبكات تعطي فهماً شاملاً لتقنيات الشبكات المختلفة. نقطة بداية ممتازة لمن يريد دخول مجال الشبكات.",
        windowsServerDesc: "إدارة بيئات Windows Server في البيئات المختلطة (السحابية والمحلية). مهارة مطلوبة جداً في الشركات التي تستخدم نظم مايكروسوفت.",
        fortinetDesc: "تخصص في حلول الأمان وجدران الحماية من فورتينت. مطلوبة في الشركات التي تعتمد على حلول الأمان المتقدمة.",
        awsSaaDesc: "تصميم وبناء أنظمة موزعة على منصة AWS. هذه الشهادة مطلوبة جداً في السوق السعودي وتفتح أبواب وظائف عالية الراتب في الحوسبة السحابية.",
        awsCpDesc: "المدخل الأساسي لمنصة AWS يغطي المفاهيم الأساسية للحوسبة السحابية. نقطة بداية مثالية لمن يريد دخول مجال AWS.",
        azureAdminDesc: "إدارة الموارد السحابية على منصة Microsoft Azure. مطلوبة في الشركات التي تستخدم نظم مايكروسوفت والبيئات المختلطة.",
        terraformDesc: "أتمتة إدارة البنية التحتية كرمز (Infrastructure as Code). مهارة حديثة ومطلوبة في DevOps والحوسبة السحابية.",
        isc2ccDesc: "شهادة أساسية في الأمن السيبراني من ISC2 تغطي المفاهيم الأساسية للأمان. مجانية ومناسبة لبداية مسيرة الأمن السيبراني.",
        securityPlusDesc: "شهادة معتمدة دولياً في أساسيات الأمن السيبراني. مطلوبة في معظم الوظائف الحكومية والخاصة في مجال الأمان.",
        ejptDesc: "اختبار اختراق عملي للمبتدئين يحاكي بيئة حقيقية. يعطي خبرة عملية في اختبار الاختراق وهو مطلوب في الشركات المتخصصة في الأمان.",
        oscpDesc: "الشهادة الذهبية في اختبار الاختراق الأخلاقي. صعبة جداً ولكنها معترف بها عالمياً وتفتح أبواب وظائف عالية الراتب في الأمن السيبراني.",
        aPlusDesc: "الشهادة الأساسية في دعم الحاسوب وإصلاح الأعطال. البوابة الأولى لدخول مجال تقنية المعلومات ومطلوبة في معظم وظائف الدعم الفني.",
        itilDesc: "إطار عمل لإدارة خدمات تقنية المعلومات يركز على تحسين العمليات. مطلوبة في الشركات الكبيرة التي تهتم بجودة الخدمات التقنية.",
        googleItDesc: "برنامج شامل من جوجل يغطي أساسيات الدعم الفني وإدارة الأنظمة. معترف به دولياً ويساعد في الحصول على وظائف دعم فني.",
        autocadDesc: "الشهادة المهنية في برنامج أوتوكاد للرسم الهندسي والتصميم. أساسية لجميع مجالات الهندسة والعمارة في السوق السعودي.",
        solidworksDesc: "شهادات في التصميم ثلاثي الأبعاد والنمذجة الهندسية. مطلوبة في الهندسة الميكانيكية وتصميم المنتجات.",
        labviewDesc: "برمجة أنظمة القياس والتحكم الآلي. مطلوبة في الهندسة الكهربائية والأتمتة الصناعية.",
        powerBiDesc: "تحليل البيانات وإنشاء التقارير والرؤى التجارية باستخدام Power BI. مطلوبة جداً في الشركات السعودية لاتخاذ القرارات المبنية على البيانات.",
        googleDataDesc: "برنامج شامل من جوجل في تحليل البيانات باستخدام أدوات مختلفة. نقطة بداية ممتازة لمن يريد دخول مجال تحليل البيانات.",
        awsDevDesc: "تطوير ونشر التطبيقات على منصة AWS. مطلوبة للمطورين الذين يعملون مع الحوسبة السحابية والتطبيقات الحديثة.",
        aboutTitle: "نبذة عن المدرب", aboutDescription: "مرحباً، أنا عبدالرحمن شحار، مدرب معتمد في مجال تقنية المعلومات مع خبرة واسعة في السوق السعودي. أساعد المحترفين والخريجين الجدد على اختيار أفضل الشهادات المهنية التي تناسب احتياجات السوق المحلي.",
        phone: "الهاتف", email: "البريد الإلكتروني", contactTitle: "تواصل معنا", nameLabel: "الاسم", emailLabel: "البريد الإلكتروني", messageLabel: "الرسالة", sendMessage: "إرسال الرسالة",
        footerDescription: "دليلك الشامل للشهادات المهنية في تقنية المعلومات", quickLinks: "روابط سريعة", contactInfo: "معلومات التواصل", rightsReserved: "كل الحقوق محفوظة"
    },
    en: {
        logo: "My Career | مساري", home: "Home", certifications: "Certifications", about: "About", contact: "Contact",
        heroTitle: "Your Complete Guide to IT Professional Certifications", heroSubtitle: "Discover the best certifications demanded in the Saudi market and start your professional journey with confidence",
        startJourney: "Start Your Journey Now", professionalCertifications: "Professional Certifications", careerTracks: "Career Tracks", successfulProfessionals: "Successful Professionals",
        certificationTracks: "Professional Certification Tracks", tracksDescription: "Choose the right path for your career and discover the certifications required in the Saudi market",
        itInfrastructure: "IT Infrastructure", itInfrastructureDesc: "Network, server, and infrastructure management and design", cloudComputing: "Cloud Computing", cloudComputingDesc: "Advanced cloud solutions design and management",
        cybersecurity: "Cybersecurity & GRC", cybersecurityDesc: "Protecting systems and data from cyber threats", itSupport: "IT Support", itSupportDesc: "User support and technical problem solving",
        engineering: "Engineering & Design", engineeringDesc: "Advanced engineering solutions design and development", dataAnalytics: "Data Analytics & Programming", dataAnalyticsDesc: "Data analysis and software solutions development",
        projectManagement: "Project Management & Leadership", projectManagementDesc: "Leading and managing technical and business projects", otherFields: "Other Fields", otherFieldsDesc: "Various specializations in business and technology",
        foundations: "A. Foundations", penTesting: "C. Penetration Testing", governance: "D. Governance, Risk & Compliance",
        infrastructureTip: "⚡ Trainer Tip: After CCNA, try a BGP simulation Lab project to get interviews faster.", cloudTip: "⚡ Trainer Tip: Start with AWS Cloud Practitioner then move to Solutions Architect for higher salary.",
        cybersecurityTip: "⚡ Trainer Tip: Start with CompTIA Security+ then focus on NCA for the local Saudi market.", supportTip: "⚡ Trainer Tip: CompTIA A+ is the first gateway to enter the IT field.",
        engineeringTip: "⚡ Trainer Tip: AutoCAD is essential for all engineering fields in the Saudi market.", dataTip: "⚡ Trainer Tip: Power BI is highly demanded in Saudi companies for analysis and reporting.",
        projectTip: "⚡ Trainer Tip: CAPM is an excellent starting point for entering project management.", otherTip: "⚡ Trainer Tip: Advanced Excel is required in all sectors and companies.",
        // Certificate descriptions
        ccnaDesc: "Essential networking certification covering routing, switching, and protocol fundamentals. Required for most networking positions in the Saudi market.",
        networkPlusDesc: "Vendor-neutral networking fundamentals certification providing comprehensive understanding of various networking technologies. Excellent starting point for networking careers.",
        windowsServerDesc: "Windows Server administration in hybrid environments (cloud and on-premises). Highly demanded skill in companies using Microsoft systems.",
        fortinetDesc: "Specialization in Fortinet security solutions and firewalls. Required in companies using advanced security solutions.",
        awsSaaDesc: "Design and build distributed systems on AWS platform. Highly demanded in Saudi market and opens doors to high-paying cloud computing jobs.",
        awsCpDesc: "Basic entry point to AWS covering fundamental cloud computing concepts. Perfect starting point for AWS career path.",
        azureAdminDesc: "Azure cloud resource administration. Required in companies using Microsoft systems and hybrid environments.",
        terraformDesc: "Infrastructure as Code automation. Modern skill required in DevOps and cloud computing.",
        isc2ccDesc: "Basic cybersecurity certification from ISC2 covering fundamental security concepts. Free and suitable for starting cybersecurity career.",
        securityPlusDesc: "Internationally recognized cybersecurity fundamentals certification. Required in most government and private security positions.",
        ejptDesc: "Practical penetration testing for beginners simulating real environments. Provides hands-on penetration testing experience.",
        oscpDesc: "The golden certification in ethical penetration testing. Very challenging but globally recognized, opens doors to high-paying cybersecurity jobs.",
        aPlusDesc: "Basic computer support and troubleshooting certification. The first gateway to enter IT field and required in most technical support positions.",
        itilDesc: "IT service management framework focusing on process improvement. Required in large companies focused on technical service quality.",
        googleItDesc: "Comprehensive Google program covering technical support and systems administration basics. Internationally recognized and helps secure technical support jobs.",
        autocadDesc: "Professional certification in AutoCAD for engineering drawing and design. Essential for all engineering and architecture fields in the Saudi market.",
        solidworksDesc: "3D design and engineering modeling certifications. Required in mechanical engineering and product design.",
        labviewDesc: "Programming measurement and automation systems. Required in electrical engineering and industrial automation.",
        powerBiDesc: "Data analysis and business intelligence reporting using Power BI. Highly demanded in Saudi companies for data-driven decision making.",
        googleDataDesc: "Comprehensive Google program in data analytics using various tools. Excellent starting point for data analytics career.",
        awsDevDesc: "Developing and deploying applications on AWS platform. Required for developers working with cloud computing and modern applications.",
        aboutTitle: "About the Trainer", aboutDescription: "Hello, I'm Abdulrahman Shahar, a certified trainer in information technology with extensive experience in the Saudi market. I help professionals and fresh graduates choose the best professional certifications that suit the local market needs.",
        phone: "Phone", email: "Email", contactTitle: "Contact Us", nameLabel: "Name", emailLabel: "Email", messageLabel: "Message", sendMessage: "Send Message",
        footerDescription: "Your complete guide to IT professional certifications", quickLinks: "Quick Links", contactInfo: "Contact Information", rightsReserved: "All Rights Reserved"
    }
};

// Application State
let currentLanguage = 'ar';
let currentTheme = 'light';

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    animateOnScroll();
});

function initializeApp() {
    // Load saved preferences
    loadPreferences();
    
    // Set initial language and theme
    updateLanguage();
    updateTheme();
    
    // Initialize track cards
    initializeTrackCards();
    
    // Animate stats on scroll
    observeStats();
}

function loadPreferences() {
    // Load language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Load theme preference
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        currentTheme = savedTheme;
    }
}

function setupEventListeners() {
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', toggleLanguage);
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactForm);
    
    // Track card expansion
    document.querySelectorAll('.track-card').forEach(card => {
        const header = card.querySelector('.track-header');
        header.addEventListener('click', () => toggleTrackCard(card));
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('preferred-language', currentLanguage);
    updateLanguage();
}

function updateLanguage() {
    const html = document.documentElement;
    const langToggle = document.getElementById('langToggle');
    
    if (currentLanguage === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langToggle.classList.add('active-ar');
        langToggle.classList.remove('active-en');
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langToggle.classList.add('active-en');
        langToggle.classList.remove('active-ar');
    }
    
    // Update all text elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('preferred-theme', currentTheme);
    updateTheme();
}

function updateTheme() {
    document.body.setAttribute('data-theme', currentTheme);
}

function initializeTrackCards() {
    // Add staggered animation delays to track cards
    const trackCards = document.querySelectorAll('.track-card');
    trackCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

function toggleTrackCard(card) {
    const isExpanded = card.classList.contains('expanded');
    
    if (isExpanded) {
        card.classList.remove('expanded');
    } else {
        // Close other expanded cards
        document.querySelectorAll('.track-card.expanded').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
        
        // Expand current card
        card.classList.add('expanded');
    }
}

function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        alert(currentLanguage === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(currentLanguage === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address');
        return;
    }
    
    // Show loading state
    const submitButton = e.target.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = currentLanguage === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (since this is frontend-only)
    setTimeout(() => {
        alert(currentLanguage === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
        
        // Reset form
        e.target.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

function observeStats() {
    const statsSection = document.querySelector('.stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    observer.observe(statsSection);
}

function animateStatNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((statNumber, index) => {
        const finalNumber = statNumber.textContent;
        const isPlus = finalNumber.includes('+');
        const isK = finalNumber.includes('K');
        const numericValue = parseInt(finalNumber.replace(/[^\d]/g, ''));
        
        let currentValue = 0;
        const increment = Math.ceil(numericValue / 30);
        
        const timer = setInterval(() => {
            currentValue += increment;
            
            if (currentValue >= numericValue) {
                currentValue = numericValue;
                clearInterval(timer);
            }
            
            let displayValue = currentValue.toString();
            if (isK) displayValue += 'K';
            if (isPlus) displayValue += '+';
            
            statNumber.textContent = displayValue;
        }, 50);
    });
}

function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe track cards
    document.querySelectorAll('.track-card').forEach(card => {
        observer.observe(card);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // ESC key to close expanded cards
    if (e.key === 'Escape') {
        document.querySelectorAll('.track-card.expanded').forEach(card => {
            card.classList.remove('expanded');
        });
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('track-header')) {
            e.preventDefault();
            const trackCards = Array.from(document.querySelectorAll('.track-header'));
            const currentIndex = trackCards.indexOf(focusedElement);
            
            let nextIndex;
            if (e.key === 'ArrowUp') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : trackCards.length - 1;
            } else {
                nextIndex = currentIndex < trackCards.length - 1 ? currentIndex + 1 : 0;
            }
            
            trackCards[nextIndex].focus();
        }
    }
});

// Make track headers focusable
document.querySelectorAll('.track-header').forEach(header => {
    header.setAttribute('tabindex', '0');
    header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// Performance optimization: Lazy load animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Error handling for failed operations
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // You could add user-friendly error messages here
});

// Prevent form submission on Enter key in single-line inputs
document.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Move to next input or submit form
            const form = this.closest('form');
            const inputs = Array.from(form.querySelectorAll('input, textarea'));
            const currentIndex = inputs.indexOf(this);
            
            if (currentIndex < inputs.length - 1) {
                inputs[currentIndex + 1].focus();
            } else {
                form.querySelector('button[type="submit"]').click();
            }
        }
    });
});

// Export functions for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translations,
        scrollToSection,
        toggleLanguage,
        toggleTheme,
        toggleTrackCard
    };
}