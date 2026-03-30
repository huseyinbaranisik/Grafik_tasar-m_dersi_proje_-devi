import { Link } from "wouter";
import { ArrowRight, Code2, Brain, Shield, Cloud, Cpu, BookOpen, Users, GraduationCap, Award, Calendar, ChevronRight, Zap } from "lucide-react";
import { Layout } from "@/components/layout";
import { useNews, useEvents } from "@/hooks/use-university-data";
import { Skeleton } from "@/components/ui/skeleton";

const stats = [
  { value: "850+", label: "Aktif Öğrenci", icon: Users },
  { value: "15", label: "Öğretim Üyesi", icon: GraduationCap },
  { value: "40+", label: "Araştırma Projesi", icon: Award },
  { value: "%92", label: "İstihdam Oranı", icon: Zap },
];

const researchAreas = [
  { icon: Brain, title: "Yapay Zeka & ML", desc: "Derin öğrenme, doğal dil işleme ve büyük dil modelleri.", href: "/research" },
  { icon: Shield, title: "Siber Güvenlik", desc: "Kriptografi, ağ güvenliği ve güvenli yazılım geliştirme.", href: "/research" },
  { icon: Cloud, title: "Bulut & DevOps", desc: "Konteyner teknolojileri, CI/CD ve cloud-native geliştirme.", href: "/labs" },
  { icon: Cpu, title: "Gömülü Sistemler", desc: "IoT, gerçek zamanlı sistemler ve düşük seviye programlama.", href: "/research" },
  { icon: Code2, title: "Yazılım Kalitesi", desc: "Test otomasyonu, yazılım mimarisi ve kod kalite araçları.", href: "/courses" },
  { icon: BookOpen, title: "Veri Bilimi", desc: "Büyük veri analizi, görselleştirme ve öngörü sistemleri.", href: "/research" },
];

export default function Home() {
  const { data: news, isLoading: newsLoading } = useNews();
  const { data: events, isLoading: eventsLoading } = useEvents();

  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80"
            alt="Yazilim"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              2025–2026 Akademik Yılı Başvuruları Açık
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-foreground">
              Yazılımın<br />
              <span className="text-accent">Geleceğini</span><br />
              Kodluyoruz
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Samsun Üniversitesi Yazılım Mühendisliği Bölümü — teorik temeller, pratik uygulamalar ve güçlü sektör bağlantılarıyla kariyer hazır mühendisler yetiştiriyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admission" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all group">
                Başvuru Yap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/courses" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-secondary hover:border-primary/40 transition-all">
                Ders Programı
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-display text-4xl font-bold text-accent mb-1">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">Araştırma Alanları</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Bölümümüzde yürütülen projelerin odaklandığı öncü teknoloji alanları.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map(({ icon: Icon, title, desc, href }) => (
              <Link key={title} href={href} className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Daha Fazla <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground">Son Haberler</h2>
                <Link href="/news" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">Tümü <ChevronRight className="w-4 h-4" /></Link>
              </div>
              <div className="flex flex-col gap-5">
                {newsLoading
                  ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)
                  : news?.map((item) => (
                      <Link key={item.id} href="/news" className="group flex gap-5 bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all">
                        <img src={item.imageUrl} alt={item.title} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${item.category === "Arastirma" ? "bg-primary/20 text-primary" : item.category === "Duyuru" ? "bg-accent/20 text-accent" : "bg-green-500/20 text-green-400"}`}>{item.category}</span>
                            <span className="text-xs text-muted-foreground">{item.date}</span>
                          </div>
                          <h3 className="font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1.5 line-clamp-1">{item.excerpt}</p>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground">Etkinlikler</h2>
                <Link href="/announcements" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">Tümü <ChevronRight className="w-4 h-4" /></Link>
              </div>
              <div className="flex flex-col gap-4">
                {eventsLoading
                  ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-24 rounded-xl" />)
                  : events?.map((ev) => (
                      <div key={ev.id} className="bg-card border border-border rounded-xl p-5 flex gap-4">
                        <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20">
                          <Calendar className="w-4 h-4 text-primary mb-0.5" />
                          <span className="text-xs font-bold text-primary leading-tight text-center">{ev.date}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">{ev.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{ev.time} — {ev.location}</p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-card border border-primary/30 rounded-3xl p-12 text-center">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">Bölümümüze Katılmak İster misiniz?</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">Geleceğin yazılım mühendisi olma yolculuğunuza Samsun Üniversitesi'nde başlayın.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/admission" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all group">
                  Başvuru Bilgileri <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-secondary transition-all">
                  Bize Ulaşın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
