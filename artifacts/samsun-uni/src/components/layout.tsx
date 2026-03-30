import { ReactNode, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";

type DropdownItem = { name: string; href: string; desc?: string; external?: boolean };
type NavItem = { name: string; href?: string; items?: DropdownItem[] };

const navItems: NavItem[] = [
  { name: "Ana Sayfa", href: "/" },
  {
    name: "Bölüm",
    items: [
      { name: "Hakkında", href: "/about", desc: "Bölümümüz ve tarihçemiz" },
      { name: "Misyon ve Vizyon", href: "/about#mission", desc: "Değerlerimiz ve hedeflerimiz" },
      { name: "Yönetim", href: "/about#management", desc: "Bölüm yönetimi" },
      { name: "Duyurular", href: "/announcements", desc: "Güncel duyurular" },
    ],
  },
  {
    name: "Akademik",
    items: [
      { name: "Ders Programı", href: "/courses", desc: "Müfredat ve dersler" },
      { name: "Akademik Kadro", href: "/faculty", desc: "Öğretim üyeleri" },
      { name: "Araştırma", href: "/research", desc: "Projeler ve yayınlar" },
      { name: "Laboratuvarlar", href: "/labs", desc: "Araştırma ve uygulama" },
    ],
  },
  {
    name: "Öğrenci",
    items: [
      { name: "Staj Rehberi", href: "/internship", desc: "Zorunlu staj bilgileri" },
      { name: "Mezunlar", href: "/alumni", desc: "Mezun ağımız" },
      { name: "Öğrenci Yaşamı", href: "/student-life", desc: "Kulüpler ve etkinlikler" },
      { name: "Kariyer", href: "/career", desc: "İş ve staj fırsatları" },
    ],
  },
  { name: "Haberler", href: "/news" },
  { name: "İletişim", href: "/contact" },
];

const socialLinks = [
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

function DropdownMenu({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-60 bg-card border border-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50 py-1.5">
      {items.map((item) => (
        item.external ? (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-start justify-between px-4 py-3 hover:bg-secondary transition-colors group"
          >
            <div>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">{item.name}</span>
              {item.desc && <span className="text-xs text-muted-foreground mt-0.5 block">{item.desc}</span>}
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
          </a>
        ) : (
          <Link
            key={item.name}
            href={item.href!}
            onClick={onClose}
            className="flex flex-col px-4 py-3 hover:bg-secondary transition-colors group"
          >
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</span>
            {item.desc && <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>}
          </Link>
        )
      ))}
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top utility bar */}
      <div className="hidden md:flex bg-secondary border-b border-border py-2 px-6 justify-between items-center text-xs text-muted-foreground">
        <div className="flex gap-6">
          <a href="https://obs.samsun.edu.tr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Öğrenci Bilgi Sistemi</a>
          <a href="https://samsun.edu.tr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">Üniversite Ana Sayfası <ExternalLink className="w-2.5 h-2.5" /></a>
          <a href="https://kutuphane.samsun.edu.tr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Kütüphane</a>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-foreground transition-colors font-medium tracking-wide">TR / EN</a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-border shadow-lg shadow-black/10"
            : "bg-background border-border/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}images/samsun-logo.png`}
                alt="Samsun Üniversitesi Logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div>
              <div className="font-display font-bold text-sm leading-tight text-foreground">
                Samsun Üniversitesi
              </div>
              <div className="text-[10px] text-accent font-semibold tracking-wide">
                Yazılım Mühendisliği
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {navItems.map((item) => {
              const isActive = item.href
                ? location === item.href
                : item.items?.some((i) => location === i.href);
              const isOpen = openDropdown === item.name;

              if (item.href && !item.items) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive || isOpen
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && item.items && (
                    <DropdownMenu items={item.items} onClose={() => setOpenDropdown(null)} />
                  )}
                </div>
              );
            })}

            <div className="w-px h-5 bg-border mx-2" />

            <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="/admission"
              className="ml-1 px-5 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              Başvur
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[calc(2.5rem+4rem)] bg-background z-40 lg:hidden overflow-y-auto border-t border-border">
          <nav className="flex flex-col px-4 py-6 gap-1">
            {navItems.map((item) => {
              const isExpanded = mobileExpanded === item.name;
              if (item.href && !item.items) {
                return (
                  <Link key={item.name} href={item.href} className="px-4 py-3 rounded-xl text-base font-semibold text-foreground hover:bg-secondary transition-colors">
                    {item.name}
                  </Link>
                );
              }
              return (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  {isExpanded && item.items && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-4 mb-2">
                      {item.items.map((sub) => (
                        <Link key={sub.name} href={sub.href!} className="py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-primary" /> {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4">
              <Link href="/admission" className="block text-center px-5 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">
                Başvuru Yap
              </Link>
            </div>
          </nav>
        </div>
      )}

      <main className="flex-1 flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
                  <img src={`${import.meta.env.BASE_URL}images/samsun-logo.png`} alt="Logo" className="w-full h-full object-contain p-0.5" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-foreground">Samsun Üniversitesi</div>
                  <div className="text-xs text-accent font-medium">Yazılım Mühendisliği Bölümü</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                Yazılım Mühendisliği Bölümü olarak geleceğin yazılım mühendislerini yetiştiriyor, yenilikçi araştırmalarla teknolojiye katkı sağlıyoruz.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold text-xs text-foreground mb-5 uppercase tracking-wider">Bölüm</h4>
              <ul className="space-y-3">
                {[
                  { name: "Hakkında", href: "/about" },
                  { name: "Akademik Kadro", href: "/faculty" },
                  { name: "Duyurular", href: "/announcements" },
                  { name: "İletişim", href: "/contact" },
                ].map((l) => (
                  <li key={l.name}><Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-xs text-foreground mb-5 uppercase tracking-wider">Akademik</h4>
              <ul className="space-y-3">
                {[
                  { name: "Ders Programı", href: "/courses" },
                  { name: "Araştırma", href: "/research" },
                  { name: "Laboratuvarlar", href: "/labs" },
                  { name: "Yayınlar", href: "/research#publications" },
                ].map((l) => (
                  <li key={l.name}><Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-xs text-foreground mb-5 uppercase tracking-wider">İletişim</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="leading-relaxed">Mühendislik Fakültesi<br />Samsun Üniversitesi<br />55420 İlkadım / Samsun</li>
                <li>+90 (362) 123 45 67</li>
                <li>yazilim@samsun.edu.tr</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Samsun Üniversitesi Yazılım Mühendisliği. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-5 text-xs text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">Hakkında</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">İletişim</Link>
              <a href="https://samsun.edu.tr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">Üniversite <ExternalLink className="w-2.5 h-2.5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
