import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const faculties = [
  { name: "Mühendislik Fakültesi", departments: 8, programs: 12, icon: "⚙️", color: "text-blue-400", desc: "Bilgisayar, elektrik-elektronik, makine, inşaat ve daha fazlası." },
  { name: "Tıp Fakültesi", departments: 6, programs: 3, icon: "🩺", color: "text-red-400", desc: "Tıp eğitimi, araştırma hastanesi ve klinik uygulama imkânları." },
  { name: "İktisadi ve İdari Bilimler Fakültesi", departments: 5, programs: 8, icon: "📊", color: "text-green-400", desc: "İşletme, ekonomi, finans, uluslararası ticaret ve lojistik." },
  { name: "Fen-Edebiyat Fakültesi", departments: 9, programs: 14, icon: "🔬", color: "text-purple-400", desc: "Matematik, fizik, kimya, biyoloji, Türk dili ve edebiyatı." },
  { name: "Sağlık Bilimleri Fakültesi", departments: 4, programs: 6, icon: "🏥", color: "text-pink-400", desc: "Hemşirelik, fizyoterapi, beslenme ve diyetetik, ebelik." },
  { name: "Hukuk Fakültesi", departments: 3, programs: 2, icon: "⚖️", color: "text-yellow-400", desc: "Hukuk lisans programı ve yoğun staj-uygulama imkânları." },
  { name: "Güzel Sanatlar ve Tasarım Fakültesi", departments: 4, programs: 6, icon: "🎨", color: "text-orange-400", desc: "Grafik tasarım, mimarlık, iç mimarlık, müzik ve sahne sanatları." },
  { name: "Eğitim Fakültesi", departments: 6, programs: 10, icon: "📚", color: "text-cyan-400", desc: "Öğretmen yetiştirme programları, eğitim teknolojileri ve pedagoji." },
  { name: "Spor Bilimleri Fakültesi", departments: 3, programs: 4, icon: "🏋️", color: "text-lime-400", desc: "Antrenörlük, beden eğitimi, spor yöneticiliği ve rekreasyon." },
];

export default function Faculties() {
  return (
    <Layout>
      <PageHeader
        title="Fakülteler"
        description="9 fakülte ve 60'tan fazla lisans programıyla kapsamlı bir akademik yapı sunuyoruz."
        image={`${import.meta.env.BASE_URL}images/hero-bg.png`}
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Cards */}
          <div className="grid grid-cols-3 gap-4 mb-16">
            {[
              { label: "Fakülte", value: "9" },
              { label: "Bölüm", value: "48" },
              { label: "Program", value: "65+" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-border bg-card">
                <div className="text-3xl font-display font-bold text-accent mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculties.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
              >
                <Card className="h-full border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 group">
                  <CardContent className="p-7">
                    <div className="text-4xl mb-5">{f.icon}</div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {f.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{f.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                      <span><strong className="text-foreground">{f.departments}</strong> Bölüm</span>
                      <span><strong className="text-foreground">{f.programs}</strong> Program</span>
                    </div>
                    <Link
                      href="/programs"
                      className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Programları Gör <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
