import { ReactNode, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";

type DropdownItem = { name: string; href: string; desc?: string };
type NavItem = { name: string; href?: string; items?: DropdownItem[] };

const navItems: NavItem[] = [
  { name: "Ana Sayfa", href: "/" },
  {
    name: "Kurumsal",
    items: [
      { name: "Hakkımızda", href: "/about", desc: "Tarihimiz ve değerlerimiz" },
      { name: "Rektörlük", href: "/about", desc: "Yönetim kadromuz" },
      { name: "Fakülteler", href: "/faculties", desc: "Akademik birimlerimiz" },
      { name: "Duyurular", href: "/announcements", desc: "Güncel duyurular" },
    ],
  },
  {
    name: "Akademik",
    items: [
      { name: "Programlar", href: "/programs", desc: "Lisans ve lisansüstü" },
      { name: "Araştırma", href: "/research", desc: "Projeler ve yayınlar" },
      { name: "Kütüphane", href: "/library", desc: "Kaynaklar ve e-dergiler" },
      { name: "Uluslararası", href: "/international", desc: "Erasmus ve değişim" },
    ],
  },
  {
    name: "Öğrenci",
    items: [
      { name: "Öğrenci Hayatı", href: "/student-life", desc: "Kulüpler ve etkinlikler" },
      { name: "Kariyer", href: "/career", desc: "Mezun ve staj fırsatları" },
    ],
  },
  { name: "Haberler", href: "/news" },
  { name: "İletişim", href: "/contact" },
];

function DropdownMenu({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-60 bg-card border border-border rounded-xl shadow-2xl shadow-black/30 overflow-hidden z-50 py-1.5">
      {items.map((item) => (
        <Link
          key={item.href + item.name}
          href={item.href}
          onClick={onClose}
          className="flex flex-col px-4 py-3 hover:bg-secondary transition-colors group"
        >
          <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </span>
          {item.desc && (
            <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>
          )}
        </Link>
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
          <a href="#" className="hover:text-foreground transition-colors">Öğrenci Portalı</a>
          <a href="#" className="hover:text-foreground transition-colors">Akademik Personel</a>
          <a href="#" className="hover:text-foreground transition-colors">E-Posta</a>
          <a href="#" className="hover:text-foreground transition-colors">Mezunlar</a>
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
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-display font-bold text-base leading-tight text-foreground">
                Samsun Üniversitesi
              </div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium">
                Geleceği Şekillendiriyoruz
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
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
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive || isOpen
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && item.items && (
                    <DropdownMenu items={item.items} onClose={() => setOpenDropdown(null)} />
                  )}
                </div>
              );
            })}

            <div className="w-px h-5 bg-border mx-2" />

            <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Search className="w-4.5 h-4.5" />
            </button>

            <Link
              href="/programs"
              className="ml-1 px-5 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              Başvur
            </Link>
          </nav>

          {/* Mobile toggle */}
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
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
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
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isExpanded && item.items && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-4 mb-2">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href + sub.name}
                          href={sub.href}
                          className="py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-primary" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4">
              <Link
                href="/programs"
                className="block text-center px-5 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
              >
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
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
                  <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-display font-bold text-base text-foreground">Samsun Üniversitesi</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                Yenilikçi ve araştırmacı vizyonuyla uluslararası standartlarda eğitim veren bir devlet üniversitesi.
              </p>
              <div className="flex gap-3">
                {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    title={s}
                  >
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold text-sm text-foreground mb-5 uppercase tracking-wider">Kurumsal</h4>
              <ul className="space-y-3">
                {[
                  { name: "Hakkımızda", href: "/about" },
                  { name: "Fakülteler", href: "/faculties" },
                  { name: "Duyurular", href: "/announcements" },
                  { name: "İletişim", href: "/contact" },
                ].map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-sm text-foreground mb-5 uppercase tracking-wider">Akademik</h4>
              <ul className="space-y-3">
                {[
                  { name: "Programlar", href: "/programs" },
                  { name: "Araştırma", href: "/research" },
                  { name: "Kütüphane", href: "/library" },
                  { name: "Uluslararası", href: "/international" },
                ].map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-sm text-foreground mb-5 uppercase tracking-wider">İletişim</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="leading-relaxed">Merkez Kampüs, 55000<br />İlkadım / Samsun</li>
                <li>+90 (362) 123 45 67</li>
                <li>iletisim@samsun.edu.tr</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Samsun Üniversitesi. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-5 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Gizlilik</a>
              <a href="#" className="hover:text-foreground transition-colors">Kullanım Koşulları</a>
              <a href="#" className="hover:text-foreground transition-colors">KVKK</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
