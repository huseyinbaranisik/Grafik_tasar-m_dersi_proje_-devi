import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Database, Wifi, Clock, Search, Monitor } from "lucide-react";

const databases = [
  { name: "Web of Science", desc: "Çok disiplinli atıf veritabanı", access: "Kampüs içi" },
  { name: "Scopus", desc: "Bilimsel literatür arama motoru", access: "Kampüs içi" },
  { name: "IEEE Xplore", desc: "Mühendislik ve teknoloji makaleleri", access: "Kampüs içi" },
  { name: "ScienceDirect", desc: "Elsevier bilimsel yayınları", access: "Kampüs içi" },
  { name: "JSTOR", desc: "Akademik dergi arşivleri", access: "Uzaktan" },
  { name: "ProQuest", desc: "Tez ve döküman veritabanı", access: "Uzaktan" },
];

const services = [
  { icon: Search, title: "Kaynak Tarama", desc: "Uzman kütüphanecilerden kaynak tarama ve araştırma desteği alın." },
  { icon: Monitor, title: "E-Dergiler", desc: "50,000+ elektronik dergi ve süreli yayına erişim imkânı." },
  { icon: Database, title: "Veritabanları", desc: "Uluslararası akademik veritabanlarına tam erişim hakkı." },
  { icon: Wifi, title: "Uzaktan Erişim", desc: "VPN ile kampüs dışından da tüm kaynaklara ulaşın." },
  { icon: BookOpen, title: "Ödünç Kitap", desc: "200,000+ fiziksel kitap ve dökümanın ödünç alma hizmeti." },
  { icon: Clock, title: "Çalışma Odaları", desc: "Bireysel ve grup çalışma odaları rezervasyonu yapın." },
];

export default function Library() {
  return (
    <Layout>
      <PageHeader
        title="Kütüphane"
        description="200.000+ fiziksel kaynak ve 50.000+ e-dergi ile araştırmalarınızı destekliyoruz."
        image={`${import.meta.env.BASE_URL}images/hero-bg.png`}
      />

      {/* Stats */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "200K+", label: "Fiziksel Kaynak" },
              { value: "50K+", label: "E-Dergi" },
              { value: "30+", label: "Veritabanı" },
              { value: "08:00–22:00", label: "Açık Saatler" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-7 rounded-2xl border border-border bg-card"
              >
                <div className="text-2xl font-display font-bold text-accent mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Hizmetler</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Kütüphane Hizmetleri</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Card className="h-full border border-border bg-card hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-7">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Databases */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Kaynaklar</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Erişilebilir Veritabanları</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {databases.map((db, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Database className="w-4.5 h-4.5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{db.name}</h4>
                  <p className="text-xs text-muted-foreground">{db.desc}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${db.access === "Uzaktan" ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground border border-border"}`}>
                  {db.access}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
