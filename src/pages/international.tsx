import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, BookOpen, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const programs = [
  { name: "Erasmus+ Öğrenci Hareketliliği", desc: "Avrupa'daki 80+ ortak üniversitede bir veya iki dönem eğitim fırsatı.", icon: Globe, count: "200+ öğrenci/yıl" },
  { name: "Mevlana Değişim Programı", desc: "Türkiye'deki ve dünya genelindeki üniversitelerle ikili öğrenci değişimi.", icon: Users, count: "50+ öğrenci/yıl" },
  { name: "Farabi Değişim Programı", desc: "Türkiye'deki diğer yükseköğretim kurumlarıyla öğrenci ve öğretim üyesi değişimi.", icon: BookOpen, count: "100+ öğrenci/yıl" },
  { name: "İkili Anlaşmalar", desc: "40 farklı ülkedeki 120+ üniversiteyle imzalanan işbirliği protokolleri.", icon: MapPin, count: "120+ üniversite" },
];

const partners = [
  "Almanya", "Fransa", "İspanya", "İtalya", "Polonya", "Çek Cumhuriyeti",
  "Portekiz", "Hollanda", "Belçika", "Avusturya", "İsveç", "Finlandiya",
];

export default function International() {
  return (
    <Layout>
      <PageHeader
        title="Uluslararası İlişkiler"
        description="Dünya genelindeki 120+ ortak üniversiteyle öğrenci ve akademisyen değişim programları."
        image={`${import.meta.env.BASE_URL}images/hero-bg.png`}
      />

      {/* Programs */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Programlar</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Değişim Programları</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border border-border bg-card hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <p.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">{p.count}</div>
                        <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Countries */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Ortaklıklar</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Partner Ülkeler</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">40 farklı ülkedeki üniversitelerle aktif işbirliği protokollerimiz bulunmaktadır.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {partners.map((country, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-5 py-2.5 rounded-xl border border-border bg-card text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
              >
                {country}
              </motion.span>
            ))}
            <span className="px-5 py-2.5 rounded-xl border border-dashed border-border text-sm text-muted-foreground">
              +28 ülke daha
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-5">Yurt Dışında Eğitim Almak İster misiniz?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Erasmus+ ve diğer değişim programları hakkında daha fazla bilgi almak ve başvuru sürecinizi başlatmak için Uluslararası İlişkiler Ofisi'ne başvurun.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
          >
            Başvuru Yap <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
