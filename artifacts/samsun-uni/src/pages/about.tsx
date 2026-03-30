import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Compass, Award, Users, Code2 } from "lucide-react";

const values = [
  { icon: Target, title: "Mükemmellik", desc: "Eğitim ve araştırmada en yüksek standartları hedefliyoruz." },
  { icon: Lightbulb, title: "Yenilikçilik", desc: "Teknolojinin sınırlarını zorlayan yaratıcı çözümler geliştiriyoruz." },
  { icon: Compass, title: "Etik Yazılım", desc: "Sorumlu ve etik yazılım geliştirme ilkelerini benimsiyoruz." },
  { icon: Award, title: "Başarı", desc: "Öğrenci ve akademik kadromuzun başarılarıyla gurur duyuyoruz." },
  { icon: Users, title: "Topluluk", desc: "Güçlü bir mezun ve öğrenci ağı oluşturarak dayanışmayı destekliyoruz." },
  { icon: Code2, title: "Pratik Odak", desc: "Teorik bilgiyi gerçek dünya projelerine dönüştürerek öğretiyoruz." },
];

const management = [
  { name: "Prof. Dr. Mehmet Kaya", role: "Bölüm Başkanı", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Doç. Dr. Ali Yıldız", role: "Bölüm Başkan Yardımcısı", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Dr. Öğr. Üyesi Selin Kurt", role: "ERASMUS Koordinatörü", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
];

export default function About() {
  return (
    <Layout>
      <PageHeader
        title="Bölüm Hakkında"
        subtitle="Samsun Üniversitesi Yazılım Mühendisliği Bölümü — misyonumuz, vizyonumuz ve değerlerimiz."
        breadcrumbs={[{ name: "Bölüm" }, { name: "Hakkında" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Tarihçemiz</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Yazılım Mühendisliği Bölümü, 2010 yılında Mühendislik Fakültesi bünyesinde kurulmuştur. İlk mezunlarını 2014 yılında veren bölümümüz, bugün 850'yi aşkın aktif öğrencisi ve 15 öğretim üyesiyle bölgenin önde gelen yazılım eğitim merkezlerinden biri haline gelmiştir.</p>
                <p>Kuruluşundan bu yana yapay zeka, siber güvenlik ve bulut bilişim alanlarında öncü araştırmalar yürüten bölümümüz, 40'tan fazla TÜBİTAK destekli projeye ev sahipliği yapmıştır.</p>
                <p>Mezunlarımız başta İstanbul, Ankara ve uluslararası teknoloji merkezleri olmak üzere dünyanın dört bir yanındaki önde gelen şirketlerde görev almaktadır.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: "2010", l: "Kuruluş Yılı" }, { v: "850+", l: "Öğrenci" }, { v: "500+", l: "Mezun" }, { v: "40+", l: "Proje" }].map(({ v, l }) => (
                <div key={l} className="bg-card border border-border rounded-2xl p-7 text-center">
                  <div className="font-display text-4xl font-bold text-accent mb-1">{v}</div>
                  <div className="text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="mission" className="grid lg:grid-cols-2 gap-8 mb-24">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Misyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Yazılım mühendisliği alanında güçlü teorik bilgi ve pratik beceriye sahip, etik değerlere bağlı, yenilikçi ve topluma fayda sağlayan mühendisler yetiştirmek; bu doğrultuda uluslararası standartta araştırma ve eğitim faaliyetleri yürütmek.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Vizyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Yazılım mühendisliği eğitimi ve araştırmalarında Türkiye'nin ve bölgenin referans aldığı, uluslararası işbirliğiyle küresel ölçekte tanınan, mezunlarıyla sektöre yön veren bir bölüm olmak.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-24">
            <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Değerlerimiz</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-card border border-border rounded-2xl p-7">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5"><Icon className="w-5 h-5" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="management">
            <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Yönetim</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {management.map((m) => (
                <div key={m.name} className="bg-card border border-border rounded-2xl overflow-hidden text-center">
                  <img src={m.img} alt={m.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-1">{m.name}</h3>
                    <p className="text-sm text-primary">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
