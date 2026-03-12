import React from 'react';
import {
  Brain, MapPin, CreditCard, Smartphone, Award, Shield, Users,
  Star, CheckCircle, ChevronRight, Mail, Phone, Globe, Menu, X
} from 'lucide-react';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
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
    <div className="min-h-screen bg-[#0A0F1E] text-slate-200 font-sans selection:bg-blue-500/30" style={{ scrollBehavior: 'smooth' }}>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/10 shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-500" />
            Think<span className="text-blue-500">Wise</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0F1E]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#0f172a] to-[#0A0F1E]"
      >
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none"></div>
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-emerald-400 font-medium mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-emerald-400" />
              India's Leading EdTech Solutions Provider
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400">
                Empowering Education
              </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {' '}Through Technology
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Catalyzing the competence and competitiveness of educational institutions with world-class, tailor-made digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2"
              >
                Explore Products
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all backdrop-blur-sm flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                <div className="aspect-video bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Users className="w-16 h-16 text-slate-500 group-hover:text-white/80 transition-colors" />
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

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0d1425]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose ThinkWise?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We don't just provide software; we partner with you to transform your educational ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Technology',
                desc: 'Robust, scalable platforms battle-tested by hundreds of institutions.',
                icon: <Award className="w-10 h-10 text-blue-400" />,
              },
              {
                title: 'Dedicated Support',
                desc: '24/7 personalized technical support to ensure uninterrupted operations.',
                icon: <Shield className="w-10 h-10 text-emerald-400" />,
              },
              {
                title: 'Custom Solutions',
                desc: 'Highly tailored systems that adapt to your specific workflow and needs.',
                icon: <Brain className="w-10 h-10 text-purple-400" />,
              },
            ].map((feature, i) => (
              <div key={i} className="bg-[#131c31] border border-white/5 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto bg-[#0A0F1E] rounded-full flex items-center justify-center border border-white/5 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0A0F1E] relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="bg-[#131c31] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

            {/* Contact Info */}
            <div className="lg:w-2/5 p-12 bg-gradient-to-br from-blue-900/40 to-[#131c31] border-r border-white/5 relative overflow-hidden">
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
                    <a href="mailto:contact@thinkwise.pro" className="text-white font-medium hover:text-blue-400 transition-colors">
                      contact@thinkwise.pro
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Call Us</div>
                    <a href="tel:+911234567890" className="text-white font-medium hover:text-emerald-400 transition-colors">
                      +91 (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Location</div>
                    <div className="text-white font-medium">Tech Park, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-12">
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
            <a href="#home" className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold tracking-tighter text-white">
                Think<span className="text-blue-500">Wise</span>
              </span>
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
