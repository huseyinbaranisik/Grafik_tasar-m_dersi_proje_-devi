import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  ArrowRight, BookOpen, Calendar, GraduationCap, Users,
  Library, Activity, ArrowUpRight, CheckCircle2, FlaskConical, Globe
} from "lucide-react";
import { useNews, useEvents } from "@/hooks/use-university-data";
import { Skeleton } from "@/components/ui/skeleton";

function QuickLinkCard({ icon: Icon, title, href, delay }: { icon: any; title: string; href: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Link href={href} className="group block h-full">
        <Card className="h-full border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors">{title}</h3>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const { data: news, isLoading: newsLoading } = useNews();
  const { data: events, isLoading: eventsLoading } = useEvents();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Samsun Üniversitesi Kampüsü"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/75 to-background/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-accent text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              2024–2025 Akademik Yılı Başvuruları Açık
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.05] mb-6">
              Geleceği Birlikte<br />
              <span className="text-accent">Şekillendiriyoruz</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Bilimin ışığında, yenilikçi ve araştırmacı vizyonumuzla uluslararası standartlarda eğitim veriyor, geleceğin liderlerini yetiştiriyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
              >
                Aday Öğrenciler <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Akademik Programlar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <QuickLinkCard icon={GraduationCap} title="Öğrenci Portalı" href="/student-life" delay={0.05} />
          <QuickLinkCard icon={BookOpen} title="Programlar" href="/programs" delay={0.1} />
          <QuickLinkCard icon={Library} title="Kütüphane" href="/library" delay={0.15} />
          <QuickLinkCard icon={FlaskConical} title="Araştırma" href="/research" delay={0.2} />
          <QuickLinkCard icon={Globe} title="Uluslararası" href="/international" delay={0.25} />
          <QuickLinkCard icon={Activity} title="Kampüs" href="/student-life" delay={0.3} />
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">Hakkımızda</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                20 Yıllık Akademik<br />Mükemmellik Geleneği
              </h2>
              <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                Modern kampüsümüz, güçlü akademik kadromuz ve yenilikçi eğitim anlayışımızla öğrencilerimizi sadece kariyerlerine değil, hayata hazırlıyoruz.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Uluslararası Akredite Programlar",
                  "Güçlü Sanayi İşbirlikleri",
                  "Modern Araştırma Laboratuvarları",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <CheckCircle2 className="text-accent w-5 h-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                Daha Fazla Bilgi <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/30">
                <img
                  src={`${import.meta.env.BASE_URL}images/campus-life.png`}
                  alt="Kampüs Yaşamı"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-display font-bold text-accent mb-1">10K+</div>
                <div className="text-sm text-muted-foreground font-medium">Başarılı Öğrenci ve Mezun</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div>
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Güncel</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Haberler ve Etkinlikler</h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-4 py-2 hover:bg-card"
            >
              Tümünü Gör <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {newsLoading
                ? Array(2)
                    .fill(0)
                    .map((_, i) => <Skeleton key={i} className="h-[380px] w-full rounded-2xl" />)
                : news?.slice(0, 2).map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link href={`/news/${item.id}`} className="group block h-full">
                        <Card className="h-full overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300 rounded-2xl">
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                              {item.category}
                            </div>
                          </div>
                          <CardContent className="p-6 flex flex-col flex-1">
                            <div className="text-xs text-muted-foreground mb-3 font-medium">{item.date}</div>
                            <h4 className="font-display font-semibold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{item.excerpt}</p>
                            <div className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                              Devamını Oku <ArrowRight className="w-4 h-4" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
            </div>

            {/* Events */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h4 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2.5">
                <Calendar className="text-accent w-5 h-5" /> Yaklaşan Etkinlikler
              </h4>
              <div className="space-y-6">
                {eventsLoading
                  ? Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="flex gap-4">
                          <Skeleton className="w-14 h-14 rounded-xl shrink-0" />
                          <div className="space-y-2 flex-1">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-3 w-2/3" />
                          </div>
                        </div>
                      ))
                  : events?.map((event) => (
                      <div key={event.id} className="flex gap-4 group cursor-pointer">
                        <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex flex-col items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                          <span className="text-[10px] font-semibold text-muted-foreground group-hover:text-white/80 uppercase">
                            {event.date.split(" ")[1]}
                          </span>
                          <span className="text-lg font-display font-bold text-foreground group-hover:text-white">
                            {event.date.split(" ")[0]}
                          </span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                            {event.title}
                          </h5>
                          <p className="text-xs text-muted-foreground">
                            {event.time} • {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
              </div>
              <Link
                href="/announcements"
                className="mt-8 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary transition-colors"
              >
                Tüm Etkinlikler <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "50+", label: "Akademik Program" },
              { num: "10K+", label: "Aktif Öğrenci" },
              { num: "500+", label: "Akademisyen" },
              { num: "20+", label: "Yıllık Tecrübe" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-border bg-card"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">{stat.num}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
