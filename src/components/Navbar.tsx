import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { trackNavClick, trackCtaClick } from '@/lib/gtm';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = isHome
    ? [
        { label: 'Início', href: '#inicio' },
        { label: 'Método', href: '#metodologia' },
        { label: 'Cases', href: '#projetos' },
        { label: 'Aprender', href: '/aprender' },
        { label: 'Diagnóstico', href: '#contato' },
      ]
    : [
        { label: 'Início', href: '/' },
        { label: 'Aprender', href: '/aprender' },
        { label: 'Diagnóstico', href: '/#contato' },
      ];

  const handleNavClick = (link: { label: string; href: string }) => {
    trackNavClick(link.label);
    setIsMenuOpen(false);
  };

  const isRouteLink = (href: string) => href.startsWith('/') && !href.startsWith('/#');

  return (
    <>
      <div className="nav-progress" style={{ width: `${scrollProgress}%` }} />
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-black/40 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <div>
              <span className="text-white font-extrabold tracking-tighter text-sm md:text-lg leading-none">Samuel Felipe</span>
              <p className="text-[9px] text-yellow-500 uppercase tracking-[0.3em] font-black opacity-80">Estrategista de Mídia Paga</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              isRouteLink(link.href) ? (
                <Link key={link.label} to={link.href} onClick={() => handleNavClick(link)} className="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:translate-y-[-1px] transition-all">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} onClick={() => handleNavClick(link)} className="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:translate-y-[-1px] transition-all">
                  {link.label}
                </a>
              )
            )}
            <a href={isHome ? '#contato' : '/#contato'} onClick={() => trackCtaClick('agendar_call', 'navbar')} className="gold-bg text-black px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-[1.05] hover:shadow-yellow-500/20 shadow-xl transition-all">
              Agendar Call
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 glass-card rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 top-[76px] bg-black/98 z-40 lg:hidden backdrop-blur-3xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="flex flex-col p-8 gap-8 h-full justify-center">
            {navLinks.map((link, i) =>
              isRouteLink(link.href) ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-4xl font-black text-white transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-10'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-4xl font-black text-white transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-10'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={isHome ? '#contato' : '/#contato'}
              className="gold-bg text-black w-full py-5 rounded-2xl text-center font-black text-xl shadow-2xl mt-8"
              onClick={() => setIsMenuOpen(false)}
            >
              Começar Agora
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
