import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Award, 
  Users, 
  Calendar,
  Shield,
  Heart,
  Sparkles,
  CheckCircle,
  MessageCircle,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  ArrowUp,
  Smile,
  Zap,
  Target,
  Gift
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({ patients: 0, years: 0, procedures: 0, satisfaction: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2500;
      const targets = { patients: 2500, years: 15, procedures: 8000, satisfaction: 98 };
      
      Object.keys(targets).forEach(key => {
        let start = 0;
        const end = targets[key];
        const startTime = Date.now();
        
        const updateCounter = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const current = Math.floor(progress * end);
          
          setCounters(prev => ({ ...prev, [key]: current }));
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };
        
        updateCounter();
      });
    };

    if (isVisible.stats) {
      animateCounters();
    }
  }, [isVisible.stats]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const WhatsAppFloat = () => (
    <a
      href="https://wa.me/201153903786"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-pulse-slow group"
    >
      <MessageCircle size={24} className="group-hover:animate-bounce" />
      <div className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        تواصل معنا عبر واتساب
      </div>
    </a>
  );

  const ScrollToTop = () => (
    showScrollTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 animate-bounce-in"
      >
        <ArrowUp size={20} />
      </button>
    )
  );

  const services = [
    {
      title: "ابتسامة هوليود",
      description: "تصميم ابتسامة مثالية بأحدث التقنيات العالمية",
      icon: <Sparkles className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/6812552/pexels-photo-6812552.jpeg",
      features: ["فينير البورسلين", "تبييض فوري", "ضمان 10 سنوات"]
    },
    {
      title: "زراعة الأسنان",
      description: "زراعة فورية بدون ألم مع ضمان مدى الحياة",
      icon: <Award className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/6812564/pexels-photo-6812564.jpeg",
      features: ["زراعة فورية", "تقنية ثلاثية الأبعاد", "ضمان مدى الحياة"]
    },
    {
      title: "تقويم الأسنان",
      description: "تقويم شفاف ومعدني بأحدث التقنيات",
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/6812546/pexels-photo-6812546.jpeg",
      features: ["تقويم شفاف", "نتائج سريعة", "متابعة دورية"]
    },
    {
      title: "علاج الجذور",
      description: "علاج عصب الأسنان بدون ألم نهائياً",
      icon: <Heart className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/6812549/pexels-photo-6812549.jpeg",
      features: ["بدون ألم", "جلسة واحدة", "تقنية الليزر"]
    },
    {
      title: "تنظيف الأسنان",
      description: "تنظيف عميق وإزالة الجير بالموجات فوق الصوتية",
      icon: <Smile className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/6812548/pexels-photo-6812548.jpeg",
      features: ["تنظيف عميق", "إزالة البقع", "حماية اللثة"]
    },
    {
      title: "طب أسنان الأطفال",
      description: "رعاية خاصة للأطفال في بيئة مريحة وآمنة",
      icon: <Gift className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/6812550/pexels-photo-6812550.jpeg",
      features: ["بيئة صديقة للطفل", "علاج بدون خوف", "هدايا للأطفال"]
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      text: "تجربة رائعة، الدكتور محترف جداً والنتيجة فاقت توقعاتي",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "فاطمة علي",
      text: "أفضل عيادة أسنان، خدمة ممتازة وأسعار مناسبة",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      name: "محمد حسن",
      text: "زراعة الأسنان كانت بدون ألم والنتيجة طبيعية جداً",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 md:p-3 rounded-xl shadow-lg">
                <Smile className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  عيادة النور للأسنان
                </h1>
                <p className="text-xs md:text-sm text-gray-600 hidden md:block">ابتسامتك هي أولويتنا</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الرئيسية</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">من نحن</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">خدماتنا</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">آراء المرضى</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">تواصل معنا</a>
              <a
                href="tel:01153903786"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
              >
                احجز موعد
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="py-4 space-y-4 border-t border-gray-200">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">الرئيسية</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">من نحن</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">خدماتنا</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">آراء المرضى</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">تواصل معنا</a>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="tel:01153903786"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium"
                >
                  احجز موعد
                </a>
                <a
                  href="https://wa.me/201153903786"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium"
                >
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 md:pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden relative">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12">
            <div className={`space-y-6 md:space-y-8 ${isVisible.home ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium animate-bounce-in">
                  <Sparkles className="w-4 h-4 ml-2" />
                  أفضل عيادة أسنان في المنطقة
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  ابتسامتك الجميلة
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    تبدأ من هنا
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  خبرة تزيد عن 15 عاماً في طب الأسنان التجميلي والعلاجي
                  مع أحدث التقنيات العالمية وفريق طبي متخصص
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01153903786"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  <span>احجز موعدك الآن</span>
                </a>
                <a
                  href="https://wa.me/201153903786"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  <span>واتساب</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">تقييم 5 نجوم</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600 font-medium">+2500 مريض سعيد</span>
                </div>
              </div>
            </div>

            <div className={`relative ${isVisible.home ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6812547/pexels-photo-6812547.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="عيادة النور للأسنان"
                  className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-float">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 p-4 rounded-2xl shadow-xl animate-float-delayed">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-1/2 -left-6 bg-purple-500 p-3 rounded-xl shadow-lg animate-pulse">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 md:py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="text-white group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {counters.patients}+
              </div>
              <div className="text-lg md:text-xl opacity-90">مريض سعيد</div>
            </div>
            <div className="text-white group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {counters.years}+
              </div>
              <div className="text-lg md:text-xl opacity-90">سنة خبرة</div>
            </div>
            <div className="text-white group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {counters.procedures}+
              </div>
              <div className="text-lg md:text-xl opacity-90">عملية ناجحة</div>
            </div>
            <div className="text-white group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {counters.satisfaction}%
              </div>
              <div className="text-lg md:text-xl opacity-90">رضا المرضى</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`${isVisible.about ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6812545/pexels-photo-6812545.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="الدكتور المتخصص"
                  className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-800">دكتور معتمد</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`space-y-6 md:space-y-8 ${isVisible.about ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Heart className="w-4 h-4 ml-2" />
                  من نحن
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  الدكتور المتخصص في طب الأسنان
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  مع خبرة تزيد عن 15 عاماً في مجال طب الأسنان التجميلي والعلاجي، 
                  نقدم أحدث التقنيات العالمية لضمان حصولك على أفضل النتائج والخدمة المتميزة.
                  نؤمن بأن ابتسامتك هي انعكاس لثقتك بنفسك.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3 group">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">شهادات معتمدة</h4>
                    <p className="text-gray-600">من أفضل الجامعات العالمية</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="bg-green-100 p-3 rounded-xl flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">فريق متخصص</h4>
                    <p className="text-gray-600">طاقم طبي على أعلى مستوى</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">تقنيات حديثة</h4>
                    <p className="text-gray-600">أحدث الأجهزة الطبية</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-100 p-3 rounded-xl flex-shrink-0 group-hover:bg-red-200 transition-colors">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">رعاية شخصية</h4>
                    <p className="text-gray-600">اهتمام بكل التفاصيل</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold text-gray-900">رؤيتنا</h4>
                </div>
                <p className="text-gray-700">
                  أن نكون الخيار الأول لكل من يبحث عن ابتسامة مثالية وصحة فم ممتازة
                  من خلال تقديم أفضل الخدمات الطبية بأحدث التقنيات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 ml-2" />
              خدماتنا المتميزة
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              خدمات شاملة لصحة أسنانك
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات طب الأسنان باستخدام أحدث التقنيات العالمية
              مع ضمان أفضل النتائج وأعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                  isVisible.services ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      متميز
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="tel:01153903786"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4 ml-2" />
                    <span>احجز موعد</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 ml-2" />
              آراء مرضانا
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ماذا يقول مرضانا عنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفخر بثقة مرضانا وسعادتهم بالخدمات التي نقدمها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isVisible.testimonials ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ml-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Phone className="w-4 h-4 ml-2" />
              تواصل معنا
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              نحن هنا لخدمتك
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              تواصل معنا الآن واحجز موعدك للحصول على ابتسامة أحلامك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">اتصل بنا</h3>
              <a href="tel:01153903786" className="text-lg hover:text-blue-200 transition-colors block">
                01153903786
              </a>
              <p className="text-sm text-blue-100 mt-2">متاح 24/7</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">واتساب</h3>
              <a 
                href="https://wa.me/201153903786" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg hover:text-green-200 transition-colors block"
              >
                تواصل الآن
              </a>
              <p className="text-sm text-blue-100 mt-2">رد فوري</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
              <p className="text-lg">يومياً</p>
              <p className="text-sm text-blue-100">9 ص - 10 م</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">الموقع</h3>
              <p className="text-lg">وسط البلد</p>
              <p className="text-sm text-blue-100">موقع متميز</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">احجز موعدك الآن</h3>
              <p className="text-blue-100 mb-6">
                لا تتردد في التواصل معنا للحصول على استشارة مجانية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:01153903786"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  <span>اتصل الآن</span>
                </a>
                <a
                  href="https://wa.me/201153903786"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  <span>واتساب</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-xl">
                  <Smile className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">عيادة النور للأسنان</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                نقدم أفضل خدمات طب الأسنان بأحدث التقنيات العالمية
                لضمان ابتسامة مثالية وصحة فم ممتازة.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">ابتسامة هوليود</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">زراعة الأسنان</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">تقويم الأسنان</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">علاج الجذور</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">خدماتنا</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 ml-2" />
                  <a href="tel:01153903786" className="hover:text-white transition-colors">01153903786</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  <a href="https://wa.me/201153903786" className="hover:text-white transition-colors">واتساب</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 ml-2" />
                  <span>يومياً 9 ص - 10 م</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-right">
                &copy; 2024 عيادة النور للأسنان. جميع الحقوق محفوظة
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>تم تطوير الموقع بواسطة ادهم احمد</span>
                <span>•</span>
                <a 
                  href="https://wa.me/201153903786" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center space-x-1 bg-green-600/20 px-3 py-1 rounded-full hover:bg-green-600/30"
                >
                  <MessageCircle className="w-4 h-4 ml-1" />
                  <span>01153903786</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}

export default App;