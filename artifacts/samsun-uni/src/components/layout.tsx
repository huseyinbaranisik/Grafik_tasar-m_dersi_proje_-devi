import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Akademik", href: "/programs" },
    { name: "Haberler", href: "/news" },
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top Bar - Very subtle, institutional feel */}
      <div className="hidden md:flex bg-primary text-primary-foreground/80 py-2 px-6 justify-between items-center text-xs font-medium">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Öğrenci Portalı</a>
          <a href="#" className="hover:text-white transition-colors">Akademik Personel</a>
          <a href="#" className="hover:text-white transition-colors">Mezunlar</a>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            <Globe className="w-3 h-3" /> TR / EN
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Samsun Üniversitesi Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-tight text-primary">Samsun Üniversitesi</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Geleceği Şekillendiriyoruz</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-border mx-2"></div>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Button className="bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 rounded-full px-6">
              Aday Öğrenci
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-40 lg:hidden overflow-y-auto">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-2xl font-display font-semibold border-b border-border pb-4 ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-primary text-white" size="lg">
              Aday Öğrenci
            </Button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center p-1">
                   <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo" className="w-full h-full object-contain invert brightness-0" />
                </div>
                <span className="font-display font-bold text-xl">Samsun Üni</span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                Geleceği şekillendiren, yenilikçi ve araştırmacı vizyonuyla uluslararası standartlarda eğitim veren bir devlet üniversitesi.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-accent">Hızlı Bağlantılar</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Üniversitemiz</Link></li>
                <li><Link href="/programs" className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Akademik Birimler</Link></li>
                <li><Link href="/news" className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Haberler ve Duyurular</Link></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Öğrenci İşleri</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-accent">Akademik</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Kütüphane</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Uzaktan Eğitim</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Akademik Takvim</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Erasmus & Değişim</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-accent">İletişim</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li>Merkez Kampüs, 55000<br/>İlkadım / Samsun</li>
                <li>+90 (362) 123 45 67</li>
                <li>iletisim@samsun.edu.tr</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Samsun Üniversitesi. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/50">
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
              <a href="#" className="hover:text-white transition-colors">KVKK</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
