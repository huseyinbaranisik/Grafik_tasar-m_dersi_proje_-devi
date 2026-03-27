import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Calendar, GraduationCap, Users, Library, Activity, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useNews, useEvents } from "@/hooks/use-university-data";
import { Skeleton } from "@/components/ui/skeleton";

function QuickLinkCard({ icon: Icon, title, href, delay }: { icon: any, title: string, href: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Link href={href} className="group block h-full">
        <Card className="h-full border-0 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />
          <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">{title}</h3>
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
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Samsun University Campus" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              2024-2025 Akademik Yılı Başvuruları Başladı
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Geleceği Birlikte <br/>
              <span className="text-accent">Şekillendiriyoruz</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl drop-shadow">
              Bilimin ışığında, yenilikçi ve araştırmacı vizyonumuzla uluslararası standartlarda eğitim veriyor, geleceğin liderlerini yetiştiriyoruz.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-14 text-base font-semibold shadow-xl shadow-accent/20">
                Aday Öğrenciler
              </Button>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white rounded-full px-8 h-14 text-base font-semibold backdrop-blur-sm">
                Akademik Programlar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links / Features Overlapping Hero */}
      <section className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <QuickLinkCard icon={GraduationCap} title="Öğrenci Portalı" href="/programs" delay={0.1} />
          <QuickLinkCard icon={BookOpen} title="Ders Programları" href="/programs" delay={0.2} />
          <QuickLinkCard icon={Library} title="Kütüphane" href="#" delay={0.3} />
          <QuickLinkCard icon={Activity} title="Kampüs Yaşamı" href="/about" delay={0.4} />
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Hakkımızda</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                20 Yıllık Akademik Mükemmellik Geleneği
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Modern kampüsümüz, güçlü akademik kadromuz ve yenilikçi eğitim anlayışımızla öğrencilerimizi sadece kariyerlerine değil, hayata hazırlıyoruz.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Uluslararası Akredite Programlar", 
                  "Güçlü Sanayi İşbirlikleri", 
                  "Modern Araştırma Laboratuvarları"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 className="text-accent w-6 h-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                  Daha Fazla Bilgi <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/campus-life.png`} 
                  alt="Kampüs Yaşamı" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-border/50">
                <div className="text-4xl font-display font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground font-medium">Başarılı Öğrenci ve Mezun Ağı</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Güncel</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary">Haberler ve Etkinlikler</h3>
            </div>
            <Link href="/news">
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
                Tümünü Gör <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* News Cards - Takes 2 cols on LG */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {newsLoading ? (
                Array(2).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-[400px] w-full rounded-2xl" />
                ))
              ) : (
                news?.slice(0, 2).map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link href={`/news/${item.id}`} className="group block h-full">
                      <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col rounded-2xl">
                        <div className="relative h-48 overflow-hidden">
                          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-4 left-4 z-20 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                            {item.category}
                          </div>
                        </div>
                        <CardContent className="p-6 flex flex-col flex-1">
                          <div className="text-sm text-muted-foreground mb-3 font-medium">{item.date}</div>
                          <h4 className="font-display font-bold text-xl text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground line-clamp-2 mb-6 mt-auto">
                            {item.excerpt}
                          </p>
                          <div className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Devamını Oku <ArrowRight className="w-4 h-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>

            {/* Events Sidebar */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-border/50">
              <h4 className="font-display font-bold text-2xl text-primary mb-6 flex items-center gap-3">
                <Calendar className="text-accent" /> Yaklaşan Etkinlikler
              </h4>
              
              <div className="space-y-6">
                {eventsLoading ? (
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="flex gap-4">
                      <Skeleton className="w-16 h-16 rounded-xl shrink-0" />
                      <div className="space-y-2 flex-1"><Skeleton className="h-4 w-full" /><Skeleton className="h-3 w-2/3" /></div>
                    </div>
                  ))
                ) : (
                  events?.map((event) => (
                    <div key={event.id} className="flex gap-5 group cursor-pointer">
                      <div className="w-16 h-16 rounded-xl bg-secondary flex flex-col items-center justify-center shrink-0 border border-border group-hover:bg-primary group-hover:border-primary transition-colors">
                        <span className="text-xs font-bold text-muted-foreground group-hover:text-primary-foreground/80">{event.date.split(' ')[1]}</span>
                        <span className="text-xl font-display font-bold text-primary group-hover:text-white">{event.date.split(' ')[0]}</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {event.title}
                        </h5>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          {event.time} • {event.location}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              <Button variant="ghost" className="w-full mt-8 rounded-xl border-dashed border-2 hover:border-primary hover:bg-secondary">
                Tüm Etkinlikler
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { num: "50+", label: "Akademik Program" },
              { num: "10K+", label: "Öğrenci" },
              { num: "500+", label: "Akademisyen" },
              { num: "20+", label: "Yıllık Tecrübe" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent mb-2"
                >
                  {stat.num}
                </motion.div>
                <div className="text-primary-foreground/80 font-medium md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
