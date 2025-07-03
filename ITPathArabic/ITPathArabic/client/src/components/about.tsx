const features = [
  {
    icon: 'fas fa-star',
    title: 'جودة المحتوى',
    description: 'محتوى مُحدّث باستمرار ومراجع من خبراء في المجال لضمان الدقة والجودة.'
  },
  {
    icon: 'fas fa-users',
    title: 'مجتمع داعم',
    description: 'انضم إلى مجتمع من المتخصصين والخبراء للحصول على الدعم والمشورة.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'مسار مهني واضح',
    description: 'خريطة طريق واضحة لتطوير مهاراتك والتقدم في حياتك المهنية.'
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            لماذا نحن؟
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            نقدم لك دليلاً شاملاً ومُحدّثاً لأفضل الشهادات المهنية في مجال تقنية المعلومات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cert-card text-center">
              <div className="text-5xl text-blue-600 mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
