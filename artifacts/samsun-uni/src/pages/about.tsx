import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Compass, Award, Users, Code2 } from "lucide-react";
import { Link } from "wouter";
import { Mail, ExternalLink } from "lucide-react";

const values = [
  { icon: Target, title: "Mükemmellik", desc: "Eğitim ve araştırmada en yüksek standartları hedefliyoruz." },
  { icon: Lightbulb, title: "Yenilikçilik", desc: "Teknolojinin sınırlarını zorlayan yaratıcı çözümler geliştiriyoruz." },
  { icon: Compass, title: "Etik Yazılım", desc: "Sorumlu ve etik yazılım geliştirme ilkelerini benimsiyoruz." },
  { icon: Award, title: "Başarı", desc: "Öğrenci ve akademik kadromuzun başarılarıyla gurur duyuyoruz." },
  { icon: Users, title: "Topluluk", desc: "Güçlü bir mezun ve öğrenci ağı oluşturarak dayanışmayı destekliyoruz." },
  { icon: Code2, title: "Pratik Odak", desc: "Teorik bilgiyi gerçek dünya projelerine dönüştürerek öğretiyoruz." },
];

const BASE = "https://i1.rgstatic.net/ii/profile.image/";

const management = [
  {
    name: "Doç. Dr. Muammer Türkoğlu",
    role: "Bölüm Başkanı",
    specialization: "Görüntü İşleme, Yapay Zeka, Makine Öğrenmesi, Derin Öğrenme",
    email: "muammer.turkoglu@samsun.edu.tr",
    profileUrl: "https://www.researchgate.net/profile/Muammer-Tuerkoglu",
    img: BASE + "790201374875651-1565410097929_Q256/Muammer-Tuerkoglu.jpg",
  },
  {
    name: "Dr. Öğr. Üyesi Emel Soylu",
    role: "Bölüm Başkan Yardımcısı",
    specialization: "Yapay Zeka, Robotik, Gömülü Sistemler, Derin Öğrenme, Batarya İzleme",
    email: "emel.soylu@samsun.edu.tr",
    profileUrl: "https://profil.samsun.edu.tr/Academic/About/emel.soylu",
    img: "https://ui-avatars.com/api/?name=Emel+Soylu&background=166534&color=fff&size=400&bold=true&font-size=0.4",
  },
  {
    name: "Dr. Öğr. Üyesi Özgür Tonkal",
    role: "Bölüm Başkan Yardımcısı / Erasmus Koordinatörü",
    specialization: "Bilgisayar Ağları, Yapay Zeka, Bilgi Güvenliği, Kriptoloji",
    email: "ozgur.tonkal@samsun.edu.tr",
    profileUrl: "https://profil.samsun.edu.tr/Academic/About/ozgur.tonkal",
    img: "https://ui-avatars.com/api/?name=Özgür+Tonkal&background=166534&color=fff&size=400&bold=true&font-size=0.4",
  },
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
                <p>Yazılım Mühendisliği Bölümü, Mühendislik ve Doğa Bilimleri Fakültesi bünyesinde kurulmuş olup Samsun Üniversitesi'nin öncü bölümlerinden biridir. Yapay zeka, siber güvenlik, bulut bilişim ve kuantum hesaplama gibi ileri teknoloji alanlarında araştırmalar yürütmektedir.</p>
                <p>Bölümümüz, TÜBİTAK destekli çok sayıda araştırma projesine ev sahipliği yapmış; öğrencileri ve akademisyenleriyle teknoloji sektörüne önemli katkılar sağlamıştır.</p>
                <p>Mezunlarımız başta İstanbul ve Ankara olmak üzere Türkiye'nin önde gelen teknoloji şirketlerinde ve uluslararası kuruluşlarda kariyer yapmaktadır.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: "9", l: "Öğretim Üyesi" }, { v: "6", l: "Araştırma Görevlisi" }, { v: "40+", l: "TÜBİTAK Projesi" }, { v: "%92", l: "İstihdam Oranı" }].map(({ v, l }) => (
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
            <h2 className="font-display text-3xl font-bold text-foreground mb-3 text-center">Yönetim Kadrosu</h2>
            <p className="text-center text-muted-foreground mb-10">Bölümümüzün akademik yöneticileri</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {management.map((m) => (
                <div key={m.name} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                  <div className="h-56 overflow-hidden bg-secondary">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      
                      
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.onerror = null;
                        const nameParts = m.name.replace(/Prof\. Dr\.|Doç\. Dr\.|Dr\. Öğr\. Üyesi/g, "").trim();
                        el.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(nameParts)}&background=166534&color=fff&size=400&bold=true&font-size=0.4`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-1 text-sm leading-snug">{m.name}</h3>
                    <p className="text-xs text-primary font-medium mb-3">{m.role}</p>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{m.specialization}</p>
                    <div className="flex flex-col gap-2 text-xs">
                      <a href={`mailto:${m.email}`} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="w-3 h-3 text-primary shrink-0" />{m.email}
                      </a>
                      <a href={m.profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary hover:underline">
                        <ExternalLink className="w-3 h-3 shrink-0" />Akademik Profil
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/faculty" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors text-sm">
                Tüm Akademik Kadroyu Gör
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
