import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Trophy, Camera, Code, Book, Heart, Coffee, Palette } from "lucide-react";

const clubs = [
  { icon: Code, name: "Yazılım Geliştirme Kulübü", members: "320 üye", cat: "Teknoloji" },
  { icon: Music, name: "Müzik ve Sanat Topluluğu", members: "180 üye", cat: "Sanat" },
  { icon: Trophy, name: "Spor ve Oyunlar Kulübü", members: "450 üye", cat: "Spor" },
  { icon: Camera, name: "Fotoğrafçılık Kulübü", members: "210 üye", cat: "Sanat" },
  { icon: Book, name: "Okuma ve Edebiyat Kulübü", members: "150 üye", cat: "Kültür" },
  { icon: Heart, name: "Topluluk Hizmeti Kulübü", members: "280 üye", cat: "Gönüllülük" },
  { icon: Coffee, name: "Girişimcilik Kulübü", members: "190 üye", cat: "İş Dünyası" },
  { icon: Palette, name: "Tasarım ve UX Kulübü", members: "130 üye", cat: "Tasarım" },
];

const facilities = [
  { name: "Spor Kompleksi", desc: "Olimpik yüzme havuzu, kapalı spor salonu ve fitness merkezi", img: "🏊" },
  { name: "Öğrenci Merkezi", desc: "Kafe, dinlenme alanları, etkinlik salonları ve çalışma odaları", img: "🏛" },
  { name: "Kültür Merkezi", desc: "800 kişilik konser salonu, sergi alanları ve stüdyolar", img: "🎭" },
  { name: "Yurt & Konaklama", desc: "Modern donanımlı yurtlar ve kampüs içi konaklama imkânları", img: "🏠" },
];

export default function StudentLife() {
  return (
    <Layout>
      <PageHeader
        title="Öğrenci Hayatı"
        description="Kampüste sadece ders değil, unutulmaz anılar ve değerli deneyimler de sizi bekliyor."
        image={`${import.meta.env.BASE_URL}images/campus-life.png`}
      />

      {/* Clubs */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Topluluklar</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Öğrenci Kulüpleri</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubs.map((club, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Card className="h-full border border-border bg-card hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <club.icon className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-semibold text-accent mb-2">{club.cat}</div>
                    <h3 className="font-display font-semibold text-sm text-foreground mb-2 group-hover:text-primary transition-colors">{club.name}</h3>
                    <p className="text-xs text-muted-foreground">{club.members}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Tesisler</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Kampüs Olanakları</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-5">{f.img}</div>
                <h3 className="font-display font-semibold text-base text-foreground mb-3 group-hover:text-primary transition-colors">{f.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Wellbeing */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sağlık Merkezi", desc: "7/24 erişilebilir kampüs içi sağlık merkezi, genel pratisyen, diş ve psikolojik danışmanlık hizmetleri.", icon: "🏥" },
              { title: "Psikolojik Danışmanlık", desc: "Gizlilik esasına dayalı bireysel ve grup danışmanlık seansları, stres yönetimi atölyeleri.", icon: "🧠" },
              { title: "Kariyer Merkezi", desc: "CV yazımı, mülakat hazırlığı, staj ve iş ilanları ile kariyer etkinlikleri.", icon: "🎯" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
