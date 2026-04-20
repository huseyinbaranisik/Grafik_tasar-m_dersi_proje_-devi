import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Users, Award, ArrowRight, Building2 } from "lucide-react";
import { Link } from "wouter";

const services = [
  { icon: Briefcase, title: "İş İlanları", desc: "Yüzlerce firma ile iş ilanı veritabanımıza erişin, size uygun fırsatları keşfedin." },
  { icon: GraduationCap, title: "Staj Programları", desc: "Sektör deneyimi kazanmak için ücretli ve gönüllü staj pozisyonları." },
  { icon: Users, title: "Kariyer Mentörlüğü", desc: "Sektörden deneyimli profesyonellerle birebir kariyer rehberliği seansları." },
  { icon: Award, title: "CV & Mülakat Koçluğu", desc: "Uzman danışmanlardan özgeçmiş ve mülakat hazırlığı desteği alın." },
];

const companies = [
  "Türk Telekom", "Enerjisa", "Samsunspor", "Canik Belediyesi",
  "Ford Otosan", "THY", "Çimtaş", "TÜPRAŞ",
];

const jobs = [
  { title: "Yazılım Geliştirici", company: "Tech Solutions A.Ş.", type: "Tam Zamanlı", location: "Samsun", date: "2 gün önce" },
  { title: "Pazarlama Uzmanı", company: "Global Market Ltd.", type: "Tam Zamanlı", location: "İstanbul (Hibrit)", date: "3 gün önce" },
  { title: "Veri Analisti", company: "DataCore Türkiye", type: "Tam Zamanlı", location: "Uzak", date: "5 gün önce" },
  { title: "Yazılım Stajyeri", company: "StartupHub", type: "Staj", location: "Samsun", date: "1 hafta önce" },
];

export default function Career() {
  return (
    <Layout>
      <PageHeader
        title="Kariyer Merkezi"
        description="Geleceğinizi şekillendirmek için iş fırsatları, staj programları ve kariyer danışmanlığı hizmetlerimizden yararlanın."
        image={`${import.meta.env.BASE_URL}images/hero-bg.png`}
      />

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Hizmetler</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Kariyer Destek Hizmetleri</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border border-border bg-card hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-7">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-14">
            <div>
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Fırsatlar</p>
              <h2 className="text-3xl font-display font-bold text-foreground">Güncel İş İlanları</h2>
            </div>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 hover:bg-card transition-colors">
              Tümünü Gör
            </Link>
          </div>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-0.5">{job.title}</h4>
                  <p className="text-xs text-muted-foreground">{job.company} • {job.location}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-1 ${job.type === "Staj" ? "bg-accent/15 text-accent" : "bg-primary/10 text-primary"}`}>
                    {job.type}
                  </span>
                  <p className="text-xs text-muted-foreground">{job.date}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">İşverenler</p>
          <h2 className="text-3xl font-display font-bold text-foreground mb-5">İşveren Ortaklarımız</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">100'den fazla kurum ve kuruluşla işbirliği içinde öğrencilerimize kariyer kapıları açıyoruz.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {companies.map((c, i) => (
              <span key={i} className="px-5 py-3 rounded-xl border border-border bg-card text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                {c}
              </span>
            ))}
            <span className="px-5 py-3 rounded-xl border border-dashed border-border text-sm text-muted-foreground">+92 firma</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
