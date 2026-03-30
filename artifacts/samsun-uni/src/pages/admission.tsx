import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Info, Calendar, BookOpen, Users } from "lucide-react";

const requirements = [
  "YKS (SAY) puanı ile başvuru",
  "Asgari TYT puanı: 280",
  "Asgari SAY puanı: 280",
  "Türk vatandaşlığı veya YÖK denklik belgesi",
  "Lise diploması veya mezuniyet belgesi",
];

const faqs = [
  { q: "Bölüme nasıl başvurabilirim?", a: "ÖSYM üzerinden YKS sonuçlarınıza göre tercih yaparak başvurabilirsiniz." },
  { q: "Eğitim dili nedir?", a: "Eğitim Türkçe olarak verilmektedir. Bazı seçmeli dersler İngilizce sunulmaktadır." },
  { q: "Çift anadal ve yandal imkânı var mı?", a: "Evet, üniversite genelindeki tüm bölümlerle çift anadal ve yandal yapabilirsiniz." },
  { q: "Burs ve barınma imkânları nelerdir?", a: "KYK yurtları, üniversite bursları ve özel burs olanakları hakkında Öğrenci İşleri'ne başvurabilirsiniz." },
];

export default function Admission() {
  return (
    <Layout>
      <PageHeader
        title="Başvuru ve Kabul"
        subtitle="Yazılım Mühendisliği programına nasıl başvuracağınızı öğrenin."
        breadcrumbs={[{ name: "Başvuru" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[{ icon: Users, title: "Kontenjan", value: "60 Öğrenci", sub: "Normal öğretim" }, { icon: Calendar, title: "Başvuru", value: "Ağustos 2025", sub: "ÖSYM takvimi" }, { icon: BookOpen, title: "Program", value: "4 Yıl", sub: "8 dönem" }].map(({ icon: Icon, title, value, sub }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-7 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Icon className="w-7 h-7" /></div>
                <div><div className="text-xs text-muted-foreground mb-1">{title}</div><div className="font-display text-2xl font-bold text-foreground">{value}</div><div className="text-xs text-muted-foreground mt-0.5">{sub}</div></div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Başvuru Koşulları</h2>
              <div className="flex flex-col gap-3">
                {requirements.map(r => (
                  <div key={r} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Sık Sorulan Sorular</h2>
              <div className="flex flex-col gap-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-start gap-2 mb-2"><Info className="w-4 h-4 text-primary shrink-0 mt-0.5" /><h3 className="font-semibold text-sm text-foreground">{q}</h3></div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-6">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-card border border-primary/30 rounded-3xl p-10 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Daha Fazla Bilgi</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Başvuru süreci veya bölümümüz hakkında sorularınız için bize ulaşabilirsiniz.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all group">
              İletişime Geç <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
