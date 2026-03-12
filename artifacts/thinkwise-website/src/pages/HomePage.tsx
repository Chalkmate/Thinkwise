import React from 'react';
import {
  MapPin, CreditCard, Smartphone, Award, Shield, Users,
  Star, CheckCircle, ChevronRight, Mail, Phone, Globe, Menu, X, Brain, BookOpen
} from 'lucide-react';

function BulbBrainIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer glow */}
      <circle cx="32" cy="28" r="20" fill="url(#bulbGlow)" opacity="0.15" />

      {/* Bulb body */}
      <path
        d="M32 10C22.06 10 14 18.06 14 28c0 5.8 2.76 10.96 7.04 14.28V46a2 2 0 0 0 2 2h17.92a2 2 0 0 0 2-2v-3.72C47.24 38.96 50 33.8 50 28c0-9.94-8.06-18-18-18z"
        fill="url(#bulbBody)"
        opacity="0.18"
      />
      <path
        d="M32 10C22.06 10 14 18.06 14 28c0 5.8 2.76 10.96 7.04 14.28V46a2 2 0 0 0 2 2h17.92a2 2 0 0 0 2-2v-3.72C47.24 38.96 50 33.8 50 28c0-9.94-8.06-18-18-18z"
        stroke="url(#bulbStroke)"
        strokeWidth="1.8"
        fill="none"
      />

      {/* Brain folds inside the bulb */}
      {/* Left hemisphere */}
      <path
        d="M22 26c0-2.2 1.4-4 3.2-4.6C25.6 19.4 27.4 18 29.5 18c1.6 0 3 .8 3.8 2"
        stroke="url(#brainColor)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M21 30c-.6-1-.8-2.2-.4-3.4"
        stroke="url(#brainColor)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22.5 34c-1.2-1-2-2.6-1.8-4.2"
        stroke="url(#brainColor)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M26 37.5c-1.6-.4-2.8-1.6-3.4-3"
        stroke="url(#brainColor)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right hemisphere */}
      <path
        d="M42 26c0-2.2-1.4-4-3.2-4.6C38.4 19.4 36.6 18 34.5 18c-1.6 0-3 .8-3.8 2"
        stroke="url(#brainColor)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M43 30c.6-1 .8-2.2.4-3.4"
        stroke="url(#brainColor)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M41.5 34c1.2-1 2-2.6 1.8-4.2"
        stroke="url(#brainColor)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 37.5c1.6-.4 2.8-1.6 3.4-3"
        stroke="url(#brainColor)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Center divider */}
      <line x1="32" y1="19" x2="32" y2="38" stroke="url(#brainColor)" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2" />

      {/* Filament / base connector */}
      <rect x="26" y="48" width="12" height="2.5" rx="1.25" fill="url(#brainColor)" opacity="0.7" />
      <rect x="27.5" y="51.5" width="9" height="2.5" rx="1.25" fill="url(#brainColor)" opacity="0.5" />
      <rect x="29" y="55" width="6" height="2.5" rx="1.25" fill="url(#brainColor)" opacity="0.3" />

      {/* Light rays */}
      <line x1="32" y1="4" x2="32" y2="8" stroke="url(#brainColor)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="44" y1="7" x2="42" y2="10" stroke="url(#brainColor)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="20" y1="7" x2="22" y2="10" stroke="url(#brainColor)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="50" y1="15" x2="47" y2="17" stroke="url(#brainColor)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="14" y1="15" x2="17" y2="17" stroke="url(#brainColor)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      <defs>
        <linearGradient id="bulbGlow" x1="14" y1="10" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="bulbBody" x1="14" y1="10" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="bulbStroke" x1="14" y1="10" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="brainColor" x1="20" y1="18" x2="44" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#93c5fd" />
          <stop offset="1" stopColor="#6ee7b7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const slides = [
  {
    image: '/banners/banner1-redesigned.png',
    tag: 'Smart Assessment Platform',
    title: 'ThinkWise Assessment',
    titleAccent: 'Smarter Learning',
    subtitle: 'Comprehensive online assessment system with deep analytics, automated grading, and real-time performance tracking for every student.',
    cta: 'Explore Assessment',
    ctaHref: '#products',
  },
  {
    image: '/banners/banner2-redesigned.png',
    tag: 'Complete Digital Solutions',
    title: 'Technology Support',
    titleAccent: 'for Schools',
    subtitle: 'Empowering institutions with brand building, professional video production, dynamic websites, and full digital marketing support.',
    cta: 'Digital Solutions',
    ctaHref: '#products',
  },
  {
    image: '/banners/banner3-redesigned.png',
    tag: 'Safety & Attendance',
    title: 'Bus Tracking &',
    titleAccent: 'RFID Attendance',
    subtitle: 'Real-time GPS school bus monitoring and smart RFID attendance systems — keeping students safe and administration seamless.',
    cta: 'Learn More',
    ctaHref: '#products',
  },
];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    institution: '',
    message: '',
  });
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = React.useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide(index);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const nextSlide = React.useCallback(() => {
    goToSlide((activeSlide + 1) % slides.length);
  }, [activeSlide, goToSlide]);

  const prevSlide = React.useCallback(() => {
    goToSlide((activeSlide - 1 + slides.length) % slides.length);
  }, [activeSlide, goToSlide]);

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Content', href: '#content' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', institution: '', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
          <a href="#home" className="flex items-center gap-0">
            <img
              src="/bulb-icon.png"
              alt="ThinkWise Logo"
              className="object-contain flex-shrink-0 w-12 h-12 lg:w-[92px] lg:h-[92px]"
              style={{
                filter: 'invert(1) drop-shadow(0 0 10px rgba(59,130,246,0.7))',
                mixBlendMode: 'screen',
              }}
            />
            <div className="flex flex-col gap-0.5 -ml-1.5 lg:-ml-[14px]">
              <span className="text-[28px] sm:text-2xl lg:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Think</span><span className="text-white">Wise</span><sup className="text-blue-400 text-[11px] sm:text-[13px] lg:text-[24px] font-semibold" style={{ verticalAlign: '0.2em' }}>™</sup>
              </span>
              <span className="text-[8.9px] sm:text-xs lg:text-[15px] font-medium tracking-[0.2em] uppercase text-slate-400 pl-1">Make the difference</span>
            </div>
          </a>

          {/* Desktop Nav — only on large screens */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-slate-300 hover:text-blue-400 transition-all duration-200 hover:scale-[1.2] active:scale-95 inline-block"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              Get Started
            </a>
          </div>

          {/* Hamburger — mobile & tablet */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile / Tablet Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0A0F1E]/97 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col space-y-5 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-semibold text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-block mt-2 px-6 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* Hero Slider Section */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{ minHeight: '100dvh', width: '100%', maxWidth: '100vw' }}
      >
        {/* Slide backgrounds */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="transition-opacity duration-700"
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              opacity: activeSlide === i && !isTransitioning ? 1 : 0,
              overflow: 'hidden',
            }}
          >
            {/* Desktop image — right-aligned to show dashboard UI */}
            <img
              src={slide.image}
              alt={slide.title}
              className="hidden sm:block"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
            {/* Mobile image — top-aligned to show key visuals */}
            <img
              src={slide.image}
              alt={slide.title}
              className="sm:hidden"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'right top',
              }}
            />
            {/* Strong top overlay — keeps navbar area solid dark */}
            <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0A0F1E] via-[#0A0F1E]/90 to-transparent" />
            {/* Heavy left overlay on mobile (full readability), lighter on desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/85 to-[#0A0F1E]/20 sm:from-[#0A0F1E]/95 sm:via-[#0A0F1E]/65 sm:to-[#0A0F1E]/20" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0F1E]/95 to-transparent" />
          </div>
        ))}

        {/* Slide content */}
        <div className="relative z-10 flex flex-col justify-center pt-20 sm:pt-28 pb-24 sm:pb-32" style={{ minHeight: '100dvh' }}>
          <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
            <div className="max-w-2xl">
              {/* Tag badge */}
              <div
                key={`tag-${activeSlide}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm text-emerald-400 font-medium mb-4 sm:mb-6 backdrop-blur-sm"
                style={{ animation: 'fadeSlideUp 0.5s ease forwards' }}
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-emerald-400" />
                {slides[activeSlide].tag}
              </div>

              {/* Headline */}
              <h1
                key={`title-${activeSlide}`}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-6"
                style={{ animation: 'fadeSlideUp 0.5s ease 0.1s both' }}
              >
                <span className="text-white">{slides[activeSlide].title}</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  {slides[activeSlide].titleAccent}
                </span>
              </h1>

              {/* Subtitle */}
              <p
                key={`sub-${activeSlide}`}
                className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-10 leading-relaxed max-w-xl"
                style={{ animation: 'fadeSlideUp 0.5s ease 0.2s both' }}
              >
                {slides[activeSlide].subtitle}
              </p>

              {/* CTAs */}
              <div
                key={`cta-${activeSlide}`}
                className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
                style={{ animation: 'fadeSlideUp 0.5s ease 0.3s both' }}
              >
                <a
                  href={slides[activeSlide].ctaHref}
                  className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] flex items-center gap-2"
                >
                  {slides[activeSlide].cta}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-full transition-all backdrop-blur-sm"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        {/* Prev / Next arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm flex items-center justify-center transition-all"
          aria-label="Previous slide"
        >
          <ChevronRight className="w-5 h-5 text-white rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm flex items-center justify-center transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeSlide === i
                  ? 'w-8 h-2.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]'
                  : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-10 right-8 z-20 text-slate-400 text-sm font-mono hidden md:block">
          {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-[#0a1020]/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: 'Schools Worldwide', value: '500+' },
              { label: 'Active Students', value: '100K+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Client Satisfaction', value: '99%' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0d1425] relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">About ThinkWise</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Progressive professionals delivering world-class solutions.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We are committed to catalyzing the competence and competitiveness of our clients through cutting-edge information technology. Our tech backbone for educational institutions enhances overall performance and operational efficiency.
              </p>

              <ul className="space-y-4">
                {[
                  'High standards of ethics and integrity',
                  'High quality services tailor-made to client needs',
                  'Highly competitive pricing and value',
                  'Highly skilled personnel and dedicated support',
                  'Worldwide reach with personalized service',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-500/20 rounded-3xl transform rotate-3 blur-xl"></div>
              <div className="relative bg-[#131c31] border border-white/10 p-8 rounded-3xl shadow-2xl">
                <div className="aspect-video rounded-xl mb-6 overflow-hidden relative group">
                  <img
                    src="/about/global-impact.png"
                    alt="Global Impact"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131c31]/60 via-transparent to-transparent" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Global Impact</h3>
                    <p className="text-slate-400 text-sm">Empowering institutions worldwide with seamless digital infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">Our Ecosystem</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive EdTech Suite</h2>
            <p className="text-slate-400 text-lg">
              Integrated platforms designed to modernize campus operations, enhance student outcomes, and streamline administration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Thinkwise Assessment',
                desc: 'Powerful online assessment platform for students featuring deep analytics, automated grading, and comprehensive performance tracking.',
                icon: <Brain className="w-8 h-8" />,
                color: 'from-blue-500 to-indigo-500',
              },
              {
                title: 'GPS School Bus Tracking',
                desc: 'Real-time GPS tracking ensuring student safety with driver behavior monitoring, optimized routing, and instant parent notifications.',
                icon: <MapPin className="w-8 h-8" />,
                color: 'from-emerald-500 to-teal-500',
              },
              {
                title: 'RFID Attendance System',
                desc: 'Smart card-based automated attendance tracking for schools, featuring precise time-in/out monitoring and seamless access control.',
                icon: <CreditCard className="w-8 h-8" />,
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Digital Products',
                desc: 'Holistic brand building, professional video shoots, dynamic campus websites, and secure school email infrastructures for staff.',
                icon: <Smartphone className="w-8 h-8" />,
                color: 'from-orange-500 to-red-500',
              },
            ].map((product, i) => (
              <div
                key={i}
                className="group relative bg-[#131c31]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-[#1a243d]/80 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}></div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} p-[1px] mb-6 inline-block shadow-lg`}>
                  <div className="w-full h-full bg-[#0A0F1E] rounded-2xl flex items-center justify-center text-white group-hover:bg-transparent transition-colors duration-300">
                    {product.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {product.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {product.desc}
                </p>

                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link">
                  Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Library Section */}
      <section id="content" className="py-24 bg-[#0d1425] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              World-Class Digital Content
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
              ThinkWise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Content Library</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A comprehensive repository of curriculum-aligned rich-media content for Grades K–12, mapped to 12+ education boards across India and available in 6 languages.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: 'K–12', label: 'All Grades' },
              { value: '12+', label: 'Education Boards' },
              { value: '6', label: 'Languages' },
              { value: '5000+', label: 'Learning Resources' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 6 Pedagogy Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '🎬',
                color: 'from-blue-500 to-blue-700',
                glow: 'rgba(59,130,246,0.18)',
                image: '/content/engage.png',
                title: 'Engage',
                subtitle: 'Visual & Interactive Learning',
                items: [
                  'Curriculum-Mapped Animated Video Lessons',
                  'Virtual & Real-Lab Experiment Demonstrations',
                  'Auto-guided Scientific Diagram Builder Tools',
                  'Layered Interactive Geography Explorer Maps',
                  'Physics, Chemistry & Biology Virtual Simulations',
                  'Chapter-ready Teacher Presentation Slide Decks',
                ],
              },
              {
                icon: '📝',
                color: 'from-violet-500 to-purple-700',
                glow: 'rgba(139,92,246,0.18)',
                image: '/content/practice.png',
                title: 'Practice',
                subtitle: 'Reinforcement & Application',
                items: [
                  'Chapter-wise Skill-Building Worksheets',
                  'Graded Interactive Problem Sets',
                  'Step-by-step Solved Textbook Walkthrough',
                  'Physics, Chemistry & Math Numerical Drills',
                  'Previous Year Board Exam Question Banks',
                  'Printable Homework & Assignment Sheets',
                ],
              },
              {
                icon: '📋',
                color: 'from-emerald-500 to-teal-700',
                glow: 'rgba(16,185,129,0.18)',
                image: '/content/summarize.png',
                title: 'Summarize',
                subtitle: 'Revision & Recall',
                items: [
                  'Concise Topic Synopses for Last-minute Revision',
                  'Visual Mind Maps & Concept Webs',
                  'Key Highlight & Takeaway Chapter Notes',
                  'Subject Glossaries with Definitions',
                ],
              },
              {
                icon: '✅',
                color: 'from-orange-500 to-amber-600',
                glow: 'rgba(249,115,22,0.18)',
                image: '/content/evaluate.png',
                title: 'Evaluate',
                subtitle: 'Assessment & Testing',
                items: [
                  'Auto-graded MCQ Tests with Instant Feedback',
                  'Subjective Chapter Tests with Model Answers',
                  'CCE & Competency-based Sample Papers',
                  'Formative & Summative Assessment Packs',
                  'Grade-wise Cumulative Exam Simulators',
                ],
              },
              {
                icon: '🔭',
                color: 'from-pink-500 to-rose-700',
                glow: 'rgba(236,72,153,0.18)',
                image: '/content/explore.png',
                title: 'Explore',
                subtitle: 'Extended & Deep Learning',
                items: [
                  'Curated Subject-specific Web Resource Links',
                  'Peer & Community Teacher Resource Vault',
                  'Real-world Concept Application Case Studies',
                  'Creative & Innovative Pedagogical Ideas',
                  'Collaborative Group Learning Activity Kits',
                ],
              },
              {
                icon: '🌐',
                color: 'from-cyan-500 to-sky-700',
                glow: 'rgba(6,182,212,0.18)',
                image: '/content/multilingual.png',
                title: 'Multi-Board & Multilingual',
                subtitle: 'Inclusive Education for Every Learner',
                items: [
                  'CBSE, ICSE & 10+ State Board Alignments',
                  'English & Hindi Medium Content Modules',
                  'Marathi, Gujarati, Tamil & Kannada Editions',
                  'Board-specific Curriculum-mapped Resources',
                  'Vernacular Language Regional Learning Packs',
                ],
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className="relative bg-white/5 border border-white/10 rounded-2xl hover:border-white/25 transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                style={{ boxShadow: `0 0 40px ${cat.glow}` }}
              >
                {/* Card Image */}
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d142466] to-transparent" />
                  <div className="absolute bottom-3 left-4 text-2xl drop-shadow-lg">{cat.icon}</div>
                </div>
                {/* Card Content */}
                <div className="relative p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <h3 className={`relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${cat.color} mb-0.5`}>{cat.title}</h3>
                  <p className="relative text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">{cat.subtitle}</p>
                  <ul className="relative space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Subjects covered */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6 text-center">Subjects Covered</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Environmental Studies', 'History', 'Geography', 'Civics', 'Commerce', 'Business Studies', 'Arts', 'English', 'Hindi'].map((sub) => (
                <span key={sub} className="px-4 py-2 rounded-full bg-blue-600/15 border border-blue-500/25 text-blue-300 text-sm font-medium">
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #0A0F1E 45%, #0d2318 100%)' }}>
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-blue-400" />
              Our Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                Why Choose ThinkWise?
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We don't just provide software — we partner with you to transform your entire educational ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Technology',
                desc: 'Robust, scalable platforms battle-tested by hundreds of institutions across India.',
                icon: <Award className="w-10 h-10 text-blue-400" />,
                accent: 'from-blue-500/20 to-blue-600/5',
                border: 'border-blue-500/20',
                glow: 'bg-blue-500/10',
                iconRing: 'text-blue-400',
              },
              {
                title: 'Dedicated Support',
                desc: '24/7 personalized technical support to ensure uninterrupted operations at your institution.',
                icon: <Shield className="w-10 h-10 text-emerald-400" />,
                accent: 'from-emerald-500/20 to-emerald-600/5',
                border: 'border-emerald-500/20',
                glow: 'bg-emerald-500/10',
                iconRing: 'text-emerald-400',
              },
              {
                title: 'Custom Solutions',
                desc: 'Highly tailored systems that adapt to your specific curriculum, workflow, and needs.',
                icon: <Brain className="w-10 h-10 text-purple-400" />,
                accent: 'from-purple-500/20 to-purple-600/5',
                border: 'border-purple-500/20',
                glow: 'bg-purple-500/10',
                iconRing: 'text-purple-400',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`relative bg-gradient-to-br ${feature.accent} border ${feature.border} rounded-2xl p-10 text-center hover:-translate-y-2 transition-all duration-300 group overflow-hidden`}
                style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(13,28,49,0.6)' }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${feature.accent} rounded-2xl`} />
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto ${feature.glow} rounded-2xl flex items-center justify-center border ${feature.border} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#06080f] relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="bg-[#131c31] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

            {/* Contact Info */}
            <div className="lg:w-2/5 p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-blue-900/40 to-[#131c31] border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

              <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Get in Touch</h2>
              <p className="text-slate-400 mb-10 relative z-10">
                Ready to transform your institution? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email Us</div>
                    <a href="mailto:info@thinkwise.pro" className="text-white font-medium hover:text-blue-400 transition-colors">
                      info@thinkwise.pro
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Call Us</div>
                    <a href="tel:+917825838383" className="text-white font-medium hover:text-emerald-400 transition-colors">
                      +91 78258 38383
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Location</div>
                    <div className="text-white font-medium leading-relaxed">#299, 1st Floor, 4th Main Road,<br />Perungudi, OMR, Chennai,<br />Tamil Nadu – 600096</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-6 sm:p-8 lg:p-12">
              {formStatus === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-slate-400 mb-8">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="institution" className="text-sm font-medium text-slate-300">Institution / School Name</label>
                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      required
                      placeholder="Global International School"
                      value={formData.institution}
                      onChange={handleFormChange}
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050812] py-12 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <a href="#home" className="flex items-center gap-0">
              <img
                src="/bulb-icon.png"
                alt="ThinkWise Logo"
                className="object-contain flex-shrink-0"
                style={{
                  width: '68px',
                  height: '68px',
                  filter: 'invert(1) drop-shadow(0 0 10px rgba(59,130,246,0.7))',
                  mixBlendMode: 'screen',
                }}
              />
              <div className="flex flex-col gap-0.5" style={{ marginLeft: '-9px' }}>
                <span className="text-4xl font-bold tracking-tight leading-none" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Think</span><span className="text-white">Wise</span><sup className="text-blue-400 text-[18px] font-semibold" style={{ verticalAlign: '0.2em' }}>™</sup>
                </span>
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-400 pl-1">Make the difference</span>
              </div>
            </a>
            <p className="text-slate-500 text-sm text-center md:text-left">
              Catalyzing competence through information technology.
            </p>
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} ThinkWise Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
