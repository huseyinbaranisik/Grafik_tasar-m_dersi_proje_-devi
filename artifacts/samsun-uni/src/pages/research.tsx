import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, BookMarked, Globe, Award, ArrowUpRight } from "lucide-react";

const centers = [
  { title: "Yapay Zeka ve Veri Bilimi Merkezi", desc: "Makine öğrenimi, derin öğrenme ve büyük veri analizi alanında öncü araştırmalar." },
  { title: "Sürdürülebilir Enerji Araştırma Lab.", desc: "Yenilenebilir enerji kaynakları ve enerji verimliliği üzerine uygulamalı çalışmalar." },
  { title: "Biyomedikal Mühendislik Merkezi", desc: "Tıbbi cihaz geliştirme ve biyoteknoloji alanında disiplinlerarası araştırmalar." },
  { title: "Sosyal Bilimler Araştırma Enstitüsü", desc: "Toplumsal dönüşüm, ekonomi ve kalkınma üzerine akademik çalışmalar." },
  { title: "Deniz Bilimleri ve Teknolojileri Lab.", desc: "Karadeniz ekosistemi ve deniz kaynaklarının sürdürülebilir yönetimi." },
  { title: "Siber Güvenlik Araştırma Merkezi", desc: "Ağ güvenliği, kriptografi ve dijital altyapı güvenliği araştırmaları." },
];

const stats = [
  { icon: BookMarked, value: "1200+", label: "Yayın" },
  { icon: FlaskConical, value: "80+", label: "Proje" },
  { icon: Globe, value: "45+", label: "Uluslararası İşbirliği" },
  { icon: Award, value: "30+", label: "Ödül" },
];

export default function Research() {
  return (
    <Layout>
      <PageHeader
        title="Araştırma"
        description="Uluslararası düzeyde araştırma projeleri ve bilimsel yayınlarla geleceği şekillendiriyoruz."
        image={`${import.meta.env.BASE_URL}images/hero-bg.png`}
      />

      {/* Stats */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-border bg-card"
              >
                <s.icon className="w-7 h-7 text-accent mx-auto mb-4" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Merkezler</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Araştırma Merkezlerimiz</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centers.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Card className="h-full border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 group">
                  <CardContent className="p-7">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-3 group-hover:text-primary transition-colors">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Detaylar <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Yayınlar</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Son Akademik Yayınlar</h2>
          </div>
          <div className="space-y-4">
            {[
              { title: "Derin öğrenme tabanlı tıbbi görüntü analizi", authors: "Kaya A., Demir B., Şahin C.", journal: "IEEE Transactions on Medical Imaging", year: "2024" },
              { title: "Karadeniz'de iklim değişikliğinin deniz ekosistemi üzerindeki etkileri", authors: "Yıldız M., Arslan K.", journal: "Marine Ecology Progress Series", year: "2024" },
              { title: "Blockchain tabanlı tedarik zinciri yönetimi", authors: "Öztürk E., Çelik F.", journal: "Journal of Business Logistics", year: "2023" },
              { title: "Akıllı şehirlerde enerji tüketimi optimizasyonu", authors: "Erdoğan S., Kılıç H.", journal: "Energy and Buildings", year: "2023" },
            ].map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 font-display font-bold text-sm">
                  {pub.year.slice(2)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">{pub.title}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{pub.authors}</p>
                  <p className="text-xs text-accent font-medium">{pub.journal}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
