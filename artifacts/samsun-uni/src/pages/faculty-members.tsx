import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Mail, ExternalLink } from "lucide-react";

const BASE = "https://i1.rgstatic.net/ii/profile.image/";

const faculty = [
  {
    id: "turkoglu",
    name: "Doç. Dr. Muammer Türkoğlu",
    title: "Bölüm Başkanı",
    specialization: "Görüntü İşleme, Yapay Zeka, Makine Öğrenmesi, Derin Öğrenme",
    email: "muammer.turkoglu@samsun.edu.tr",
    profileUrl: "https://www.researchgate.net/profile/Muammer-Tuerkoglu",
    img: BASE + "790201374875651-1565410097929_Q256/Muammer-Tuerkoglu.jpg",
  },
  {
    id: "demir",
    name: "Prof. Dr. Hüseyin Demir",
    title: "Öğretim Üyesi / Fakülte Dekanı",
    specialization: "Uygulamalı Matematik, Hesaplamalı Akışkanlar Dinamiği, Sayısal Analiz, Algoritma Geliştirme",
    email: "huseyindemir@samsun.edu.tr",
    profileUrl: "https://profil.samsun.edu.tr/Academic/About/huseyin.demir",
    img: "https://ui-avatars.com/api/?name=Hüseyin+Demir&background=166534&color=fff&size=400&bold=true&font-size=0.4",
  },
  {
    id: "comert",
    name: "Prof. Dr. Zafer Cömert",
    title: "Öğretim Üyesi",
    specialization: "Karar Destek Sistemleri, Yapay Zeka, Bilgisayar Yazılımı",
    email: "zafer.comert@samsun.edu.tr",
    profileUrl: "https://www.researchgate.net/profile/Zafer-Coemert-2",
    img: BASE + "845441528774658-1578580376637_Q256/Zafer-Coemert-2.jpg",
  },
  {
    id: "karaci",
    name: "Doç. Dr. Abdulkadir Karacı",
    title: "Öğretim Üyesi",
    specialization: "Yapay Zeka, Derin Öğrenme, Makine Öğrenmesi, Bilgisayar Yazılımı",
    email: "abdulkadir.karaci@samsun.edu.tr",
    profileUrl: "https://www.researchgate.net/profile/Abdulkadir-Karaci",
    img: BASE + "11431281254566742-1719222283195_Q256/Abdulkadir-Karaci.jpg",
  },
  {
    id: "cakmak",
    name: "Doç. Dr. Selçuk Çakmak",
    title: "Öğretim Üyesi",
    specialization: "Kuantum Hesaplama, Kuantum Mantık Devre Tasarımı, Kuantum Programlama, Gömülü Sistemler",
    email: "selcuk.cakmak@samsun.edu.tr",
    profileUrl: "https://www.researchgate.net/profile/Selcuk-Cakmak",
    img: BASE + "11431281176496047-1690189074823_Q256/Selcuk-Cakmak.jpg",
  },
  {
    id: "senyer",
    name: "Dr. Öğr. Üyesi Nurettin Şenyer",
    title: "Öğretim Üyesi",
    specialization: "Görüntü İşleme, Yapay Öğrenme, Algoritmalar ve Hesaplama Kuramı",
    email: "nurettin.senyer@samsun.edu.tr",
    profileUrl: "https://www.researchgate.net/profile/Nurettin-Senyer",
    img: BASE + "280164043902979-1443807721943_Q256/Nurettin-Senyer.jpg",
  },
  {
    id: "karadeniz",
    name: "Dr. Öğr. Üyesi Alper Talha Karadeniz",
    title: "Öğretim Üyesi",
    specialization: "Yapay Zeka, Derin Öğrenme, Tıbbi Görüntü İşleme",
    email: "alpertalha.karadeniz@samsun.edu.tr",
    profileUrl: "https://www.researchgate.net/profile/Alper-Karadeniz-3",
    img: BASE + "11431281359196426-1744067043673_Q256/Alper-Karadeniz-3.jpg",
  },
  {
    id: "soylu",
    name: "Dr. Öğr. Üyesi Emel Soylu",
    title: "Öğretim Üyesi / Bölüm Başkan Yardımcısı",
    specialization: "Yapay Zeka, Robotik, Gömülü Sistemler, Derin Öğrenme, Batarya Durum İzleme",
    email: "emel.soylu@samsun.edu.tr",
    profileUrl: "https://profil.samsun.edu.tr/Academic/About/emel.soylu",
    img: "https://ui-avatars.com/api/?name=Emel+Soylu&background=166534&color=fff&size=400&bold=true&font-size=0.4",
  },
  {
    id: "tonkal",
    name: "Dr. Öğr. Üyesi Özgür Tonkal",
    title: "Öğretim Üyesi / Bölüm Başkan Yardımcısı / Erasmus Koordinatörü",
    specialization: "Bilgisayar Ağları, Yapay Zeka, Bilgi Güvenliği, Kriptoloji",
    email: "ozgur.tonkal@samsun.edu.tr",
    profileUrl: "https://profil.samsun.edu.tr/Academic/About/ozgur.tonkal",
    img: "https://ui-avatars.com/api/?name=Özgür+Tonkal&background=166534&color=fff&size=400&bold=true&font-size=0.4",
  },
];

const researchAssistants = [
  "Ferhat Arat", "Furkancan Demircan", "İlker Gür", "Ömer Durmuş", "Sarp Çoban", "Deniz Bora Küçük"
];

export default function Faculty() {
  return (
    <Layout>
      <PageHeader
        title="Akademik Kadro"
        subtitle="Alanında uzman, araştırmacı ve yenilikçi öğretim üyelerimizle tanışın."
        breadcrumbs={[{ name: "Akademik", href: "/faculty" }, { name: "Akademik Kadro" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {faculty.map((m) => (
              <div key={m.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                <div className="h-52 overflow-hidden bg-secondary flex items-center justify-center">
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
                <div className="p-5">
                  <h3 className="font-display font-semibold text-sm text-foreground mb-0.5 leading-snug">{m.name}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{m.title}</p>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{m.specialization}</p>
                  <div className="flex flex-col gap-2 text-xs">
                    <a href={`mailto:${m.email}`} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors truncate">
                      <Mail className="w-3.5 h-3.5 text-primary shrink-0" />{m.email}
                    </a>
                    <a href={m.profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary hover:underline">
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />Akademik Profil
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="font-display text-xl font-bold text-foreground mb-6">Araştırma Görevlileri</h2>
            <div className="flex flex-wrap gap-3">
              {researchAssistants.map((name) => (
                <div key={name} className="flex items-center gap-2 bg-secondary border border-border rounded-xl px-4 py-2.5 text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Arş. Gör. {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
