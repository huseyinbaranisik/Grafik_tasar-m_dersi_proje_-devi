import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { useLeadership } from "@/hooks/use-university-data";
import { Target, Lightbulb, Compass, Award, Users } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function About() {
  const { data: leaders, isLoading } = useLeadership();

  return (
    <Layout>
      <PageHeader 
        title="Hakkımızda" 
        description="Köklü geçmişimiz, vizyonumuz ve üniversitemizi geleceğe taşıyan liderlerimiz hakkında bilgi edinin."
        image={`${import.meta.env.BASE_URL}images/hero-bg.png`}
      />

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Köklü Bir Eğitim Kurumu
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Samsun Üniversitesi, bölgesinin ve ülkesinin gelişimine katkıda bulunmak amacıyla kurulmuş, yenilikçi ve girişimci vizyonuyla öne çıkan bir yükseköğretim kurumudur. Öğrencilerimize sadece teorik bilgi değil, pratik beceriler ve küresel bir perspektif kazandırmayı hedefliyoruz.
                </p>
                <p>
                  Sürekli gelişen altyapımız, donanımlı laboratuvarlarımız ve alanında uzman akademik kadromuz ile geleceğin bilim insanlarını, yöneticilerini ve liderlerini yetiştirmekte kararlıyız.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/campus-life.png`} 
                alt="Üniversite Kampüsü" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <Card className="border-0 shadow-lg bg-secondary overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target className="w-32 h-32" />
              </div>
              <CardContent className="p-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Misyonumuz</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evrensel değerler ışığında, bilim, teknoloji ve sanatta öncü araştırmalar yapmak; toplumsal gelişime katkı sağlayan, eleştirel düşünebilen, etik değerlere bağlı bireyler yetiştirmektir.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-primary text-primary-foreground overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Lightbulb className="w-32 h-32" />
              </div>
              <CardContent className="p-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Vizyonumuz</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Eğitim, araştırma ve toplumsal katkı alanlarında uluslararası düzeyde tanınan, bölgesel kalkınmaya liderlik eden ve yenilikçi çözümler üreten örnek bir üniversite olmak.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="mb-24">
            <h2 className="text-3xl font-display font-bold text-center text-primary mb-12">Değerlerimiz</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Compass, title: "Yenilikçilik" },
                { icon: Award, title: "Mükemmellik" },
                { icon: Users, title: "Katılımcılık" },
                { icon: Target, title: "Şeffaflık" }
              ].map((val, i) => (
                <div key={i} className="text-center p-6 rounded-2xl border border-border/50 hover:border-accent hover:shadow-lg transition-all duration-300">
                  <val.icon className="w-10 h-10 mx-auto text-accent mb-4" />
                  <h4 className="font-bold text-lg text-primary">{val.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h2 className="text-3xl font-display font-bold text-center text-primary mb-4">Yönetim ve Liderlik</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Üniversitemizi hedeflerine taşıyan deneyimli akademik ve idari yönetim kadromuz.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {isLoading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="w-full aspect-[3/4] rounded-2xl" />
                    <Skeleton className="h-6 w-3/4 mx-auto" />
                    <Skeleton className="h-4 w-1/2 mx-auto" />
                  </div>
                ))
              ) : (
                leaders?.map((leader, idx) => (
                  <motion.div 
                    key={leader.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group text-center"
                  >
                    <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[3/4] shadow-md border border-border">
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                      <img 
                        src={leader.image.startsWith('http') ? leader.image : `${import.meta.env.BASE_URL}${leader.image}`} 
                        alt={leader.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-display font-bold text-xl text-primary mb-1">{leader.name}</h4>
                    <p className="text-accent font-medium">{leader.role}</p>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
