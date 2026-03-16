import React from 'react';
import {
  MapPin, CreditCard, Smartphone, Award, Shield, Users,
  Star, CheckCircle, ChevronRight, ChevronDown, Mail, Phone, Globe, Menu, X, Brain, BookOpen, Monitor, Layers, Video, Package, ClipboardList
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
    image: '/banners/slide-lms.png',
    tag: 'Learning Management System',
    title: 'Thinkwise LMS',
    tagline: 'Smart learning, delivered end-to-end.',
    subtitle: 'Assessments, live classes, homework, and parent communication — one seamless platform for every school.',
    cta: 'Explore LMS',
    ctaHref: '#products',
    accentColor: '#2463eb',
    tabLabel: 'Thinkwise LMS',
  },
  {
    image: '/banners/slide-content.png',
    tag: 'Digital Content Library',
    title: 'Smartclass Content',
    tagline: 'Curriculum that captivates.',
    subtitle: 'Curriculum-aligned 3D animations, virtual labs and multimedia lessons for Grades K–12, across all major Indian education boards.',
    cta: 'Explore Content',
    ctaHref: '#content',
    accentColor: '#059669',
    tabLabel: 'Digital Content',
  },
  {
    image: '/banners/slide-chalkmate.png',
    tag: 'Interactive Flat Panel',
    title: 'ChalkMate IFP',
    tagline: 'The future of the classroom.',
    subtitle: '4K UHD touch display with AI writing board and Android 14. Every lesson becomes an immersive, interactive experience.',
    cta: 'Explore ChalkMate',
    ctaHref: '#products',
    accentColor: '#7c3aed',
    tabLabel: 'ChalkMate IFP',
  },
  {
    image: '/banners/slide-display.png',
    tag: 'AV Hardware & Accessories',
    title: 'Smart Visual Technologies',
    tagline: 'Display excellence, everywhere.',
    subtitle: 'Digital Podiums, Active LED Walls, PTZ Cameras and premium AV accessories — a complete ecosystem for the smart campus.',
    cta: 'Explore Products',
    ctaHref: '#products',
    accentColor: '#d97706',
    tabLabel: 'Smart Visual Technologies',
  },
];


export default function HomePage() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [activeAssessment, setActiveAssessment] = React.useState(0);
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
    { name: 'Vision', href: '#about' },
    {
      name: 'Products', href: '#products', subLinks: [
        { name: 'LMS', href: '#assessment' },
        { name: 'Content', href: '#content' },
        { name: 'IFP', href: '#chalkmate' },
        { name: 'Visual', href: '#visual-tech' },
      ]
    },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/917825838383?text=${encodeURIComponent("Hello ThinkWise Technologies! Interested in your EdTech solutions. Please connect.")}`;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@thinkwise.pro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `New Enquiry from ${formData.name} — ThinkWise Website`,
          Name: formData.name,
          Email: formData.email,
          Institution: formData.institution,
          Message: formData.message,
          _captcha: 'false',
        }),
      });
      if (res.ok) {
        setFormStatus('sent');
        setFormData({ name: '', email: '', institution: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-500/30 overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
          <a href="#home" className="flex flex-col gap-0.5">
            <span className="text-[29px] sm:text-2xl lg:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, filter: isScrolled ? 'none' : 'drop-shadow(0 1px 4px rgba(0,0,0,0.4))' }}>
              <span style={{ color: isScrolled ? '#2463eb' : '#fff' }}>Think</span><span className={isScrolled ? 'text-slate-900' : 'text-white'}>Wise</span><sup className={`text-[11px] sm:text-[13px] lg:text-[24px] font-semibold ${isScrolled ? 'text-[#2463eb]' : 'text-white'}`} style={{ verticalAlign: '0.2em' }}>™</sup>
            </span>
            <span className={`text-[8.9px] sm:text-xs lg:text-[15px] font-medium tracking-[0.2em] uppercase pl-1 transition-colors duration-500 ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>Make the difference</span>
          </a>

          {/* Desktop Nav — only on large screens */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className={`text-lg font-semibold transition-all duration-200 hover:scale-[1.05] inline-flex items-center gap-1 ${
                      isScrolled ? 'text-slate-600 hover:text-[#2463eb]' : 'text-white/90 hover:text-white'
                    }`}
                    style={!isScrolled ? { textShadow: '0 1px 4px rgba(0,0,0,0.4)' } : {}}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </a>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 py-2 min-w-[140px] overflow-hidden">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className={`block px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/10 ${isScrolled ? 'text-slate-700 hover:text-[#2463eb]' : 'text-white hover:text-white/80'}`}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-semibold transition-all duration-200 hover:scale-[1.2] active:scale-95 inline-block ${
                    isScrolled ? 'text-slate-600 hover:text-[#2463eb]' : 'text-white/90 hover:text-white'
                  }`}
                  style={!isScrolled ? { textShadow: '0 1px 4px rgba(0,0,0,0.4)' } : {}}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
                isScrolled
                  ? 'text-white bg-[#2463eb] hover:bg-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'
                  : 'text-white bg-white/20 hover:bg-white/30 border border-white/40 backdrop-blur-sm'
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Hamburger — mobile & tablet */}
          <button
            className={`lg:hidden p-1 transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white hover:text-white/80'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile / Tablet Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 px-6 py-6 flex flex-col space-y-5 shadow-lg">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="text-xl font-semibold text-slate-700 hover:text-[#2463eb] transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  <div className="mt-2 ml-4 flex flex-col space-y-3 border-l-2 border-blue-100 pl-4">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="text-base font-semibold text-slate-500 hover:text-[#2463eb] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-semibold text-slate-700 hover:text-[#2463eb] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-3 text-base font-semibold text-white bg-[#2463eb] hover:bg-blue-500 rounded-full transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* Hero Slider Section — Apple-style full-bleed */}
      <section
        id="home"
        className="relative overflow-hidden bg-black"
        style={{ height: '100dvh', minHeight: 600 }}
      >
        {/* Slide background images — crossfade */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: activeSlide === i ? 1 : 0, zIndex: 0 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              style={{ transform: activeSlide === i ? 'scale(1.03)' : 'scale(1)', transition: 'transform 6s ease-out' }}
            />
          </div>
        ))}

        {/* Subtle gradient overlay — preserves photo clarity */}
        <div className="absolute inset-0 z-10" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 40%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0.52) 100%)',
        }} />

        {/* Content — centered layout */}
        <div className="absolute inset-0 z-20 flex flex-col" style={{ height: '100dvh' }}>

          {/* Spacer for navbar */}
          <div className="flex-none" style={{ height: 72 }} />

          {/* Main text — center stage */}
          <div className="flex-1 flex flex-col items-center justify-center text-white text-center px-6 -mt-8">
            {/* Category badge */}
            <div
              key={`tag-${activeSlide}`}
              className="font-aptos text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 opacity-90"
              style={{ animation: 'fadeSlideUp 0.5s ease both', letterSpacing: '0.15em', textShadow: '0 1px 8px rgba(0,0,0,0.9), 0 0 24px rgba(0,0,0,0.6)' }}
            >
              {slides[activeSlide].tag}
            </div>

            {/* Product name — huge, bold */}
            <h1
              key={`title-${activeSlide}`}
              className="font-aptos text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4"
              style={{ animation: 'fadeSlideUp 0.5s ease 0.08s both', textShadow: '0 2px 16px rgba(0,0,0,0.85), 0 4px 40px rgba(0,0,0,0.5)' }}
            >
              {slides[activeSlide].title}
            </h1>

            {/* Punchy tagline */}
            <p
              key={`tagline-${activeSlide}`}
              className="font-aptos text-2xl sm:text-3xl md:text-4xl font-light text-white mb-8"
              style={{ animation: 'fadeSlideUp 0.5s ease 0.16s both', textShadow: '0 1px 10px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.6)' }}
            >
              {slides[activeSlide].tagline}
            </p>

            {/* CTA Buttons — Apple style */}
            <div
              key={`cta-${activeSlide}`}
              className="flex flex-col sm:flex-row items-center gap-3"
              style={{ animation: 'fadeSlideUp 0.5s ease 0.3s both' }}
            >
              <a
                href={slides[activeSlide].ctaHref}
                className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 flex items-center gap-2"
                style={{
                  background: slides[activeSlide].accentColor,
                  boxShadow: `0 0 32px ${slides[activeSlide].accentColor}70`,
                  color: '#fff',
                }}
              >
                {slides[activeSlide].cta}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom bar — dots + counter + progress line */}
          <div className="flex-none pb-8 flex flex-col items-center gap-4">
            {/* Thin progress bar */}
            <div className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${((activeSlide + 1) / slides.length) * 100}%`,
                  background: slides[activeSlide].accentColor,
                }}
              />
            </div>
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: activeSlide === i ? 24 : 6,
                    height: 6,
                    background: activeSlide === i ? '#fff' : 'rgba(255,255,255,0.35)',
                  }}
                />
              ))}
              <span className="ml-3 text-white/40 text-xs font-mono tabular-nums">
                {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Prev / Next arrows — slim, elegant */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
          aria-label="Previous slide"
        >
          <ChevronRight className="w-5 h-5 text-white rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </section>

      {/* Stats / Trust Bar */}
      <section className="py-12 border-y border-slate-200 bg-slate-50 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
            {[
              { label: 'Schools Worldwide', value: '500+' },
              { label: 'Active Students', value: '100K+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Client Satisfaction', value: '99%' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <div>
              <div className="text-[#2463eb] font-semibold tracking-wider uppercase text-sm mb-4">About ThinkWise</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2463eb] to-emerald-600">Innovation-Driven Professionals Delivering Excellence.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
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
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 to-emerald-200/40 rounded-3xl transform rotate-3 blur-xl"></div>
              <div className="relative flex flex-col flex-1 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl">
                <div className="flex-1 min-h-0 rounded-xl mb-6 overflow-hidden relative group" style={{ minHeight: '320px' }}>
                  <img
                    src="/about/global-impact.png"
                    alt="Global Impact"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-[#2463eb]" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg">Global Impact</h3>
                    <p className="text-slate-500 text-sm">Empowering institutions worldwide with seamless digital infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[#2463eb] font-semibold tracking-wider uppercase text-sm mb-4">Our Ecosystem</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight whitespace-nowrap"><span style={{ color: '#2463eb' }}>Think</span><span className="text-slate-900">Wise</span><sup className="text-[#2463eb] font-semibold text-[20px] md:text-[24px]" style={{ verticalAlign: '0.2em' }}>™</sup> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2463eb] to-emerald-600">Comprehensive EdTech Suite</span></h2>
            <p className="text-slate-600 text-lg">
              Integrated platforms designed to modernize campus operations, enhance student outcomes, and streamline administration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Thinkwise LMS',
                desc: 'A fully integrated Learning Management System that empowers schools to deliver, manage, and track education end-to-end — featuring online assessments, automated grading, homework management, live class scheduling, student progress dashboards, and parent communication tools, all on one seamless platform.',
                icon: <Brain className="w-8 h-8" />,
                color: 'from-blue-500 to-indigo-500',
              },
              {
                title: 'Digital Content',
                desc: 'Immersive Smartclass content that transforms every classroom into an interactive learning hub — featuring curriculum-aligned 3D animations, rich multimedia lessons, virtual labs, and real-time assessments mapped to all major Indian education boards for Grades K–12. Designed to inspire curiosity and deeper learning.',
                icon: <BookOpen className="w-8 h-8" />,
                color: 'from-emerald-500 to-teal-500',
              },
              {
                title: 'ChalkMate IFP',
                desc: 'ChalkMate is our flagship Interactive Flat Panel — a premium classroom hardware solution engineered for modern education. Featuring a 4K touch display, AI integrated writing board, Android 14 and seamless integration with ThinkWise digital content, ChalkMate turns any classroom into a future smart learning environment.',
                icon: (
                  <svg viewBox="0 0 40 26" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {/* Outer bezel — widescreen landscape */}
                    <rect x="1" y="1" width="38" height="24" rx="2.5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.8" />
                    {/* Inner screen */}
                    <rect x="4" y="4" width="32" height="18" rx="1" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.4" />
                    {/* Touch indicator dots */}
                    <circle cx="14" cy="13" r="1.2" fill="currentColor" opacity="0.7" />
                    <circle cx="20" cy="10" r="1.2" fill="currentColor" opacity="0.7" />
                    <circle cx="26" cy="13" r="1.2" fill="currentColor" opacity="0.7" />
                  </svg>
                ),
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Smart Visual Technologies',
                desc: 'A complete ecosystem of premium AV hardware for modern classrooms — including our Digital Podium for confident presenter-led teaching, Active LED Walls for stunning large-format visuals, PTZ Cameras for seamless hybrid and recorded sessions, and a full range of accessories to complete your smart campus setup.',
                icon: <Layers className="w-8 h-8" />,
                color: 'from-orange-500 to-red-500',
              },
            ].map((product, i) => (
              <div
                key={i}
                className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`}></div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} mb-6 inline-flex items-center justify-center shadow-lg text-white`}>
                  {product.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {product.desc}
                </p>

                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-[#2463eb] hover:text-blue-700 transition-colors group/link">
                  Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section id="assessment" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header — same design as Content section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <ClipboardList className="w-4 h-4" />
              Powered by Thinkwise LMS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              <span style={{ color: '#2463eb' }}>Think</span><span className="text-slate-900">Wise</span><sup className="text-[#2463eb] font-semibold text-[20px] md:text-[24px]" style={{ verticalAlign: '0.2em' }}>™</sup> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2463eb] to-violet-600">Assessment Suite</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              A complete end-to-end assessment ecosystem built into Thinkwise LMS — from question creation to automated grading, real-time analytics, and parent reporting.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '10+', label: 'Question Types' },
              { value: 'Auto', label: 'Instant Grading' },
              { value: '100%', label: 'Curriculum Mapped' },
              { value: 'Live', label: 'Real-time Reports' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2463eb] to-violet-600 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Interactive Feature Showcase */}
          {(() => {
            const features = [
              { icon: '📝', color: 'from-blue-500 to-blue-700', accentBg: 'bg-blue-500', title: 'Online Tests & Exams', subtitle: 'Flexible Digital Assessment', items: ['MCQ, True/False, Fill-in-the-blank & Subjective', 'Timed & Proctored Online Examinations', 'Chapter-wise & Cumulative Unit Tests', 'Board-pattern Mock Exam Simulators', 'Adaptive Difficulty Question Sequences', 'Offline Exam Sync with Auto Upload'] },
              { icon: '⚡', color: 'from-emerald-500 to-teal-700', accentBg: 'bg-emerald-500', title: 'Automated Grading', subtitle: 'Instant & Accurate Evaluation', items: ['One-click Auto-grade for Objective Questions', 'Rubric-based Subjective Answer Evaluation', 'Instant Score Display with Correct Answers', 'Negative Marking & Partial Credit Options', 'Bulk Paper Evaluation & Score Export', 'Teacher Override & Manual Review Tools'] },
              { icon: '📚', color: 'from-violet-500 to-purple-700', accentBg: 'bg-violet-500', title: 'Smart Question Bank', subtitle: 'Curriculum-Mapped Repository', items: ['50,000+ Curriculum-aligned Questions', 'Tagged by Chapter, Topic & Difficulty', 'CBSE, ICSE & State Board Coverage', 'Teacher-contributed Custom Question Pools', "Bloom's Taxonomy Level Classification", 'One-click Paper Generation from Bank'] },
              { icon: '📊', color: 'from-orange-500 to-amber-600', accentBg: 'bg-orange-500', title: 'Performance Analytics', subtitle: 'Data-Driven Learning Insights', items: ['Student-wise Score Trends & Progress Charts', 'Class & Section Comparative Reports', 'Weak Topic Identification & Remediation Alerts', 'Teacher Dashboard with Cohort Analysis', 'Subject & Chapter Mastery Heat Maps', 'Exportable PDF & Excel Report Packs'] },
              { icon: '📋', color: 'from-cyan-500 to-sky-700', accentBg: 'bg-cyan-500', title: 'Homework Management', subtitle: 'Assignment Tracking & Review', items: ['Digital Homework Assignment & Submission', 'Deadline Reminders & Late Submission Flags', 'Teacher Feedback & Annotation Tools', 'Photo Upload for Handwritten Work', 'Parent Visibility into Assignment Status', 'Auto-compile Pending Assignment Reports'] },
              { icon: '📩', color: 'from-pink-500 to-rose-700', accentBg: 'bg-pink-500', title: 'Reports & Communication', subtitle: 'Transparent Parent Engagement', items: ['Auto-generated Student Report Cards', 'WhatsApp & SMS Score Notifications', 'Parent App with Real-time Score Access', 'Attendance & Performance Combined Reports', 'Teacher-to-Parent Direct Messaging', 'Scheduled Term & Annual Progress Reports'] },
            ];
            const active = features[activeAssessment];
            return (
              <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden mb-16">
                {/* Mobile: horizontal scroll tabs */}
                <div className="flex overflow-x-auto lg:hidden border-b border-slate-200">
                  {features.map((f, i) => (
                    <button key={f.title} onClick={() => setActiveAssessment(i)}
                      className={`flex-shrink-0 flex flex-col items-center gap-1 px-5 py-3.5 text-xs font-semibold border-b-2 transition-all ${activeAssessment === i ? 'border-[#2463eb] text-[#2463eb] bg-blue-50/60' : 'border-transparent text-slate-400 hover:text-slate-700'}`}>
                      <span className="text-xl">{f.icon}</span>
                      <span className="whitespace-nowrap">{f.title.split(' ').slice(0, 2).join(' ')}</span>
                    </button>
                  ))}
                </div>

                <div className="flex flex-col lg:flex-row">
                  {/* Desktop sidebar */}
                  <div className="hidden lg:flex flex-col w-72 shrink-0 bg-slate-50 border-r border-slate-200">
                    {features.map((f, i) => (
                      <button key={f.title} onClick={() => setActiveAssessment(i)}
                        className={`relative w-full flex items-center gap-4 px-6 py-5 text-left border-b border-slate-100 transition-all duration-200 ${activeAssessment === i ? 'bg-white' : 'hover:bg-white/70'}`}>
                        {activeAssessment === i && <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-gradient-to-b ${f.color}`} />}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 transition-all ${activeAssessment === i ? `bg-gradient-to-br ${f.color} shadow-md` : 'bg-slate-200'}`}>
                          {f.icon}
                        </div>
                        <div className="min-w-0">
                          <div className={`font-semibold text-sm truncate transition-colors ${activeAssessment === i ? 'text-slate-900' : 'text-slate-500'}`}>{f.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5 truncate">{f.subtitle}</div>
                        </div>
                        {activeAssessment === i && <ChevronRight className="w-4 h-4 ml-auto shrink-0 text-[#2463eb]" />}
                      </button>
                    ))}
                  </div>

                  {/* Detail panel */}
                  <div className="flex-1 p-8 md:p-12 relative overflow-hidden min-h-[420px]">
                    <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${active.color} opacity-[0.06] blur-3xl pointer-events-none rounded-full`} />

                    {/* Header */}
                    <div className="flex items-center gap-5 mb-10 relative z-10">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center text-4xl shadow-xl shrink-0`}>
                        {active.icon}
                      </div>
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${active.color}`}>{active.title}</h3>
                        <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mt-1">{active.subtitle}</p>
                      </div>
                    </div>

                    {/* Feature items */}
                    <div className="grid sm:grid-cols-2 gap-3 relative z-10">
                      {active.items.map((item, j) => (
                        <div key={item} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-white transition-all">
                          <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${active.color} flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                            <span className="text-white text-xs font-bold">{j + 1}</span>
                          </div>
                          <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Content Library Section */}
      <section id="content" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              World-Class Digital Content
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              <span style={{ color: '#2463eb' }}>Think</span><span className="text-slate-900">Wise</span><sup className="text-[#2463eb] font-semibold text-[20px] md:text-[24px]" style={{ verticalAlign: '0.2em' }}>™</sup> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2463eb] to-emerald-600">Content Library</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
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
              <div key={stat.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2463eb] to-emerald-600 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
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
                className="relative bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                style={{ boxShadow: `0 0 40px ${cat.glow}` }}
              >
                {/* Card Image */}
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-4 text-2xl drop-shadow-lg">{cat.icon}</div>
                </div>
                {/* Card Content */}
                <div className="relative p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <h3 className={`relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${cat.color} mb-0.5`}>{cat.title}</h3>
                  <p className="relative text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">{cat.subtitle}</p>
                  <ul className="relative space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
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
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-slate-900 font-bold text-xl mb-6 text-center">Subjects Covered</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Environmental Studies', 'History', 'Geography', 'Civics', 'Commerce', 'Business Studies', 'Arts', 'English', 'Hindi'].map((sub) => (
                <span key={sub} className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ChalkMate IFP Section */}
      <section id="chalkmate" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header — same design as other sections */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium mb-6">
              <Monitor className="w-4 h-4" />
              Interactive Flat Panels
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              <span style={{ color: '#2463eb' }}>Chalk</span><span className="text-slate-900">Mate</span><sup className="text-[#2463eb] font-semibold text-[20px] md:text-[24px]" style={{ verticalAlign: '0.2em' }}>™</sup> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Interactive Flat Panels</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Transform the conventional "Chalk and Talk" method into a dynamic, digital experience — next-generation smart classroom technology engineered for Indian schools, colleges, and institutions.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '4K', label: 'Ultra HD Display' },
              { value: 'AI', label: 'Writing Board' },
              { value: '3-Year', label: 'Warranty' },
              { value: '7.5+', label: 'Years Expertise' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero image */}
          <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <img src="/chalkmate/hero.png" alt="ChalkMate IFP" className="w-full h-72 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent flex items-center">
              <div className="p-8 md:p-14 text-white max-w-xl">
                <p className="text-cyan-300 font-semibold tracking-widest uppercase text-sm mb-3">Next-Gen AI Integration</p>
                <h3 className="text-3xl md:text-4xl font-black leading-tight mb-4">AI Learning Integrated Writing Board</h3>
                <p className="text-white/80 text-base leading-relaxed">AI-powered handwriting recognition, shape correction, smart annotations, and one-tap lesson saving — bridging traditional teaching with digital education.</p>
              </div>
            </div>
          </div>

          {/* 6 Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '🧠',
                color: 'from-cyan-500 to-blue-600',
                glow: 'rgba(6,182,212,0.18)',
                image: '/chalkmate/ai-writing.png',
                title: 'AI Smart Writing Board',
                subtitle: 'Intelligent Lesson Delivery',
                items: [
                  'AI-Powered Handwriting Recognition',
                  'Auto Shape Correction & Smart Formatting',
                  'Annotate over PDFs, Videos & Web Pages',
                  'Build Multimedia Lessons with AI Suggestions',
                  'One-tap Lesson Save & QR Code Sharing',
                  'Cloud Upload to Google Drive & OneDrive',
                ],
              },
              {
                icon: '✋',
                color: 'from-blue-500 to-indigo-600',
                glow: 'rgba(59,130,246,0.18)',
                image: '/chalkmate/multitouch.png',
                title: 'Feather Touch',
                subtitle: 'Collaborative Classroom Interaction',
                items: [
                  'Ultra-responsive IR Touch Technology',
                  'Up to 40 Simultaneous Touch Points',
                  'Multi-user Real-time Collaboration',
                  'Zero Lag Touch Response',
                  'Palm Rejection for Natural Writing',
                  'Student Direct Participation on Screen',
                ],
              },
              {
                icon: '🖥️',
                color: 'from-violet-500 to-purple-600',
                glow: 'rgba(139,92,246,0.18)',
                image: '/chalkmate/display.png',
                title: '4K Ultra HD Display',
                subtitle: 'Visual Excellence at Every Angle',
                items: [
                  '4K Resolution: 3840 × 2160 Pixels',
                  '1.07 Billion Vivid Colors',
                  'Anti-Glare Optical Coating',
                  'Zero Bonding Technology',
                  'Wide Viewing Angle for Every Seat',
                  '9 MOHS Hardness Glass',
                ],
              },
              {
                icon: '⚡',
                color: 'from-emerald-500 to-teal-600',
                glow: 'rgba(16,185,129,0.18)',
                image: '/chalkmate/connectivity.png',
                title: 'Powerful Core & Connectivity',
                subtitle: 'Android 14 + Windows Ready',
                items: [
                  'Octa-Core Processor, 8GB RAM, 128GB Storage',
                  'Android 14 Built-in + OPS Windows Slot',
                  'Wireless Screen Sharing (Windows/Mac/iOS/Android)',
                  'HDMI, USB-C, USB 3.0 Ports',
                  'Built-in Stereo Speakers & Dual Microphone',
                  'Auto OTA Firmware & Software Updates',
                ],
              },
              {
                icon: '☁️',
                color: 'from-orange-500 to-amber-600',
                glow: 'rgba(249,115,22,0.18)',
                image: '/chalkmate/ai-writing.png',
                title: 'Cloud & Ecosystem Ready',
                subtitle: 'Seamless Integration',
                items: [
                  'Native Google Drive & OneDrive Integration',
                  'Multi-User Cloud Sync for Collaboration',
                  'Share via QR Code, Email & WhatsApp',
                  'Compatible with Thinkwise LMS & Content',
                  'Remote Device Management Dashboard',
                  'Centralized Content Push to All Panels',
                ],
              },
              {
                icon: '🛡️',
                color: 'from-rose-500 to-pink-600',
                glow: 'rgba(244,63,94,0.18)',
                image: '/chalkmate/support.png',
                title: 'Service & Support',
                subtitle: 'Trusted Partnership',
                items: [
                  'Comprehensive 3-Year Hardware Warranty',
                  'On-Site Prompt Technical Service',
                  '7.5+ Years in K-12 EdTech Segment',
                  'Tailored Solutions by Classroom Size',
                  'Teacher Training & Onboarding Programme',
                  'Dedicated Account Manager per Institution',
                ],
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="relative bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                style={{ boxShadow: `0 0 40px ${feat.glow}` }}
              >
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img src={feat.image} alt={feat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-4 text-2xl drop-shadow-lg">{feat.icon}</div>
                </div>
                <div className="relative p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <h3 className={`relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${feat.color} mb-0.5`}>{feat.title}</h3>
                  <p className="relative text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">{feat.subtitle}</p>
                  <ul className="relative space-y-2">
                    {feat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-cyan-500 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Smart Visual Technologies Section */}
      <section id="visual-tech" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #f8fafc 45%, #eef2ff 100%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-sm font-medium mb-6">
              <Layers className="w-4 h-4" />
              AV & Display Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              <span style={{ color: '#2463eb' }}>Think</span><span className="text-slate-900">Wise</span><sup className="text-[#2463eb] font-semibold text-[20px] md:text-[24px]" style={{ verticalAlign: '0.2em' }}>™</sup> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Smart Visual Technologies</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              End-to-end audiovisual solutions for modern educational institutions and corporate spaces — from digital podiums to fully equipped broadcast studios, designed to command every room.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '5+', label: 'Product Categories' },
              { value: '4K', label: 'Display Standard' },
              { value: '360°', label: 'Room Coverage' },
              { value: 'Turnkey', label: 'Installation & Support' },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Product Cards — 5 items, first two full-width row then 3 below */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              {
                image: '/visual-tech/digital-podium.png',
                icon: '🎙️',
                color: 'from-violet-500 to-purple-600',
                glow: 'rgba(139,92,246,0.15)',
                border: 'border-violet-200',
                title: 'Digital Podium',
                subtitle: 'Command the Stage with Confidence',
                desc: 'A fully integrated smart podium designed for educators, presenters, and keynote speakers. Combines a built-in touchscreen, HD camera, wireless mic, and HDMI connectivity into one sleek console — enabling seamless, professional presentations from any standing position.',
                items: [
                  'Built-in 15" or 21" Capacitive Touchscreen',
                  'Integrated HD Web Camera & Document Camera',
                  'Wireless Lapel & Gooseneck Microphone',
                  'HDMI, USB & Network Pass-through Ports',
                  'Height-Adjustable Motorised Desk Option',
                  'Compatible with ChalkMate & Projectors',
                ],
              },
              {
                image: '/visual-tech/led-wall.png',
                icon: '🖥️',
                color: 'from-indigo-500 to-blue-600',
                glow: 'rgba(99,102,241,0.15)',
                border: 'border-indigo-200',
                title: 'Active LED Wall',
                subtitle: 'Immersive Visuals at Any Scale',
                desc: 'Transform auditoriums, lecture theatres, and lobbies with strikingly vivid Active LED walls that deliver pixel-perfect clarity at any distance. Modular panel design means any size is achievable — creating unforgettable visual experiences for audiences of hundreds.',
                items: [
                  'Ultra-Fine Pixel Pitch (P1.2 – P4) Options',
                  'High Brightness: 800–5000 nits for Daylight',
                  'Seamless Modular Panel Construction',
                  'Wide Colour Gamut & HDR Support',
                  'Low Latency Signal Processing',
                  'Remote Monitoring & Diagnostics System',
                ],
              },
            ].map((prod) => (
              <div
                key={prod.title}
                className={`relative bg-white border ${prod.border} rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
                style={{ boxShadow: `0 0 40px ${prod.glow}` }}
              >
                <div className="relative h-52 overflow-hidden rounded-t-2xl">
                  <img src={prod.image} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-4 text-2xl drop-shadow-lg">{prod.icon}</div>
                </div>
                <div className="relative p-7">
                  <div className={`absolute inset-0 bg-gradient-to-br ${prod.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <h3 className={`relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${prod.color} mb-0.5`}>{prod.title}</h3>
                  <p className="relative text-slate-500 text-xs font-medium uppercase tracking-wider mb-3">{prod.subtitle}</p>
                  <p className="relative text-slate-600 text-sm leading-relaxed mb-5">{prod.desc}</p>
                  <ul className="relative space-y-2">
                    {prod.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-violet-500 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: '/visual-tech/conference-room.png',
                icon: '🤝',
                color: 'from-cyan-500 to-teal-600',
                glow: 'rgba(6,182,212,0.15)',
                border: 'border-cyan-200',
                title: 'Conference Room Setup',
                subtitle: 'Meeting Rooms Reimagined',
                desc: 'Turn any meeting room into a world-class collaboration hub with an integrated AV system — large-format display, ceiling microphone array, speaker system, and one-touch video conferencing.',
                items: [
                  'Large Format Display or LED Video Bar',
                  'Ceiling Mic Array & Echo Cancellation',
                  'One-Touch Zoom / Teams / Meet Calling',
                  'Wireless Content Sharing (Any Device)',
                  'Room Booking & Occupancy Sensors',
                  'Professional Cable Management System',
                ],
              },
              {
                image: '/visual-tech/ptz-camera.png',
                icon: '📷',
                color: 'from-emerald-500 to-green-600',
                glow: 'rgba(16,185,129,0.15)',
                border: 'border-emerald-200',
                title: 'PTZ Cameras',
                subtitle: 'Auto-Track Every Moment',
                desc: 'High-definition pan-tilt-zoom cameras engineered for lecture capture, live streaming, and hybrid classrooms. AI-powered auto-tracking keeps the speaker perfectly framed at all times.',
                items: [
                  '4K 60fps Ultra HD Video Output',
                  'AI Auto-Tracking (Face & Body)',
                  'Pan ±170° / Tilt ±90° / 30× Optical Zoom',
                  'NDI, HDMI & USB-C Output Options',
                  'PoE Power — Zero Extra Cabling',
                  'Remote Control via App or IP Interface',
                ],
              },
              {
                image: '/visual-tech/studio-setup.png',
                icon: '🎬',
                color: 'from-rose-500 to-orange-500',
                glow: 'rgba(244,63,94,0.15)',
                border: 'border-rose-200',
                title: 'Studio Setup',
                subtitle: 'Broadcast-Quality Content Creation',
                desc: 'Fully kitted recording and streaming studios for educational content creation, institutional branding, and live broadcasting — everything from LED panels to audio mixers, professionally installed.',
                items: [
                  'Professional LED Softbox & Ring Lighting Kit',
                  'Green Screen / Chromakey Backdrop System',
                  'Audio Mixer, Boom Arm & Condenser Mics',
                  'Multi-Camera Switcher & Live Stream Encoder',
                  'Teleprompter & Presenter Confidence Monitor',
                  'Full Acoustic Treatment & Soundproofing Kits',
                ],
              },
            ].map((prod) => (
              <div
                key={prod.title}
                className={`relative bg-white border ${prod.border} rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
                style={{ boxShadow: `0 0 40px ${prod.glow}` }}
              >
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img src={prod.image} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-4 text-2xl drop-shadow-lg">{prod.icon}</div>
                </div>
                <div className="relative p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${prod.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <h3 className={`relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${prod.color} mb-0.5`}>{prod.title}</h3>
                  <p className="relative text-slate-500 text-xs font-medium uppercase tracking-wider mb-3">{prod.subtitle}</p>
                  <p className="relative text-slate-600 text-sm leading-relaxed mb-4">{prod.desc}</p>
                  <ul className="relative space-y-2">
                    {prod.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-violet-500 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f8fafc 45%, #ecfdf5 100%)' }}>
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-200/40 rounded-full blur-[120px] pointer-events-none" />
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />
        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-[#2463eb]" />
              Our Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2463eb] to-emerald-600">Why Choose </span><span style={{ color: '#2463eb' }}>Think</span><span className="text-slate-900">Wise</span><sup className="text-[#2463eb] font-semibold text-[20px] md:text-[24px]" style={{ verticalAlign: '0.2em' }}>™</sup><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2463eb] to-emerald-600">?</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We don't just provide software — we partner with you to transform your entire educational ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Technology',
                desc: 'Robust, scalable platforms battle-tested by hundreds of institutions across India.',
                icon: <Award className="w-10 h-10 text-[#2463eb]" />,
                accent: 'from-blue-50 to-white',
                border: 'border-blue-200',
                glow: 'bg-blue-50',
                iconRing: 'text-[#2463eb]',
              },
              {
                title: 'Dedicated Support',
                desc: '24/7 personalized technical support to ensure uninterrupted operations at your institution.',
                icon: <Shield className="w-10 h-10 text-emerald-600" />,
                accent: 'from-emerald-50 to-white',
                border: 'border-emerald-200',
                glow: 'bg-emerald-50',
                iconRing: 'text-emerald-600',
              },
              {
                title: 'Custom Solutions',
                desc: 'Highly tailored systems that adapt to your specific curriculum, workflow, and needs.',
                icon: <Brain className="w-10 h-10 text-purple-600" />,
                accent: 'from-purple-50 to-white',
                border: 'border-purple-200',
                glow: 'bg-purple-50',
                iconRing: 'text-purple-600',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`relative bg-gradient-to-br ${feature.accent} border ${feature.border} rounded-2xl p-10 text-center hover:-translate-y-2 transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-md`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${feature.accent} rounded-2xl`} />
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto ${feature.glow} rounded-2xl flex items-center justify-center border ${feature.border} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #f8fafc 45%, #fef3c7 100%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-200/30 rounded-full blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              What Educators Say
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#FF9933]">Trusted by Educators Across India</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Hear from institutions that have transformed their classrooms with ThinkWise and ChalkMate technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'ChalkMate has completely transformed our classrooms. The AI writing board is a game-changer for our teachers.',
                name: 'Dr. Rajesh Kumar',
                role: 'Principal, Global International School',
                product: 'ChalkMate IFP',
                color: 'from-cyan-500 to-blue-600',
                bg: 'bg-cyan-50',
                border: 'border-cyan-200',
              },
              {
                quote: 'The visual clarity and touch responsiveness are unmatched. The best investment we have made for our students.',
                name: 'Mrs. Priya Sharma',
                role: 'Head of Dept, St. Xavier\'s College',
                product: 'ChalkMate IFP',
                color: 'from-blue-500 to-indigo-600',
                bg: 'bg-blue-50',
                border: 'border-blue-200',
              },
              {
                quote: 'Reliable, intuitive, and feature-rich. The wireless sharing makes collaboration so much easier during lectures.',
                name: 'Amit Patel',
                role: 'Director, Vidya Academy',
                product: 'ChalkMate IFP',
                color: 'from-violet-500 to-purple-600',
                bg: 'bg-violet-50',
                border: 'border-violet-200',
              },
            ].map((t) => (
              <div key={t.name} className={`bg-white border ${t.border} rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col`}>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-6 italic flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full ${t.bg} border ${t.border} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${t.color}">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                  <div className={`ml-auto px-3 py-1 rounded-full ${t.bg} border ${t.border} text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${t.color}`}>{t.product}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">

            {/* Contact Info */}
            <div className="lg:w-2/5 p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-white border-b lg:border-b-0 lg:border-r border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl"></div>

              <h2 className="text-3xl font-bold mb-6 relative z-10"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2463eb] to-blue-400">Get in Touch</span></h2>
              <p className="text-slate-600 mb-10 relative z-10">
                Ready to transform your institution? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-[#2463eb]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Email Us</div>
                    <a href="mailto:info@thinkwise.pro" className="text-slate-500 font-medium hover:text-[#2463eb] transition-colors">
                      info@thinkwise.pro
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 text-emerald-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Call Us</div>
                    <a href="tel:+917825838383" className="text-slate-500 font-medium hover:text-emerald-600 transition-colors">
                      +91 78258 38383
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0 text-purple-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Location</div>
                    <div className="text-slate-500 font-medium leading-relaxed">Thinkwise Technologies Private Limited.<br />#299, 1st Floor, 4th Main Road,<br />Perungudi, OMR, Chennai,<br />Tamil Nadu – 600096</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-6 sm:p-8 lg:p-12">
              {formStatus === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-3 text-sm font-semibold text-white bg-[#2463eb] hover:bg-blue-500 rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : formStatus === 'error' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <X className="w-10 h-10 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Something went wrong</h3>
                  <p className="text-slate-600 mb-8">We couldn't send your message. Please try again or email us directly at <a href="mailto:info@thinkwise.pro" className="text-[#2463eb] underline">info@thinkwise.pro</a>.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-3 text-sm font-semibold text-white bg-[#2463eb] hover:bg-blue-500 rounded-xl transition-all"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="institution" className="text-sm font-medium text-slate-700">Institution / School Name</label>
                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      required
                      placeholder="Global International School"
                      value={formData.institution}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-[#2463eb] hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
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
      <footer className="bg-slate-100 py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <a href="#home" className="flex flex-col gap-0.5">
              <span className="text-4xl font-bold tracking-tight leading-none" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
                <span style={{ color: '#2463eb' }}>Think</span><span className="text-slate-900">Wise</span><sup className="text-[#2463eb] text-[18px] font-semibold" style={{ verticalAlign: '0.2em' }}>™</sup>
              </span>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-500 pl-1">Make the difference</span>
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
