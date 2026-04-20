import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Mail, ExternalLink } from "lucide-react";

const BASE_FACULTY_IMG = "/images/faculty/";

const faculty = [
  { id: "turkoglu", name: "Doç. Dr. Muammer Türkoğlu", title: "Bölüm Başkanı", specialization: "Görüntü İşleme, Yapay Zeka, Makine Öğrenmesi, Derin Öğrenme", email: "muammer.turkoglu@samsun.edu.tr", profileUrl: "https://profil.samsun.edu.tr/Academic/About/muammer.turkoglu", img: BASE_FACULTY_IMG + "muammer.turkoglu.png" },
  { id: "demir", name: "Prof. Dr. Hüseyin Demir", title: "Öğretim Üyesi / Fakülte Dekanı", specialization: "Uygulamalı Matematik, Hesaplamalı Akışkanlar Dinamiği, Sayısal Analiz", email: "huseyindemir@samsun.edu.tr", profileUrl: "https://profil.samsun.edu.tr/Academic/About/huseyin.demir", img: BASE_FACULTY_IMG + "huseyin.demir.png" },
  { id: "comert", name: "Prof. Dr. Zafer Cömert", title: "Öğretim Üyesi", specialization: "Karar Destek Sistemleri, Yapay Zeka, Bilgisayar Yazılımı", email: "zafer.comert@samsun.edu.tr", profileUrl: "https://profil.samsun.edu.tr/Academic/About/zcomert", img: BASE_FACULTY_IMG + "zafer.comert.png" },
  { id: "karaci", name: "Doç. Dr. Abdulkadir Karacı", title: "Öğretim Üyesi", specialization: "Yapay Zeka, Derin Öğrenme, Makine Öğrenmesi, Bilgisayar Yazılımı", email: "abdulkadir.karaci@samsun.edu.tr", profileUrl: "https://profil.samsun.edu.tr/Academic/About/abdulkadir.karaci", img: BASE_FACULTY_IMG + "abdulkadir.karaci.png" },
  { id: "cakmak", name: "Doç. Dr. Selçuk Çakmak", title: "Öğretim Üyesi", specialization: "Kuantum Hesaplama, Kuantum Mantık Devre Tasarımı, Gömülü Sistemler", email: "selcuk.cakmak@samsun.edu.tr", profileUrl: "https://profil.samsun.edu.tr/Academic/About/selcuk.cakmak", img: BASE_FACULTY_IMG + "selcuk.cakmak.png" },
  { id: "senyer", name: "Dr. Öğr. Üyesi Nurettin Şenyer", title: "Öğretim Üyesi", specialization: "Görüntü İşleme, Yapay Öğrenme, Algoritmalar ve Hesaplama Kuramı", email: "nurettin.senyer@samsun.edu.tr", profileUrl: "https://profil.samsun.edu.tr/Academic/About/nurettin.senyer", img: BASE_FACULTY_IMG + "nurettin.senyer.png" },
  { id: "karadeniz", name: "Dr. Öğr. Üyesi Alper Talha Karadeniz", title: "Öğretim Üyesi", specialization: "Yapay Zeka, Derin Öğrenme, Tıbbi Görüntü İşleme", email: "alpertalha.karadeniz@samsun.edu.tr", profileUrl: "https://profil.samsun.edu.tr/Academic/About/alper.karadeniz", img: BASE_FACULTY_IMG + "alper.karadeniz.png" },
  { id: "soylu", name: "Dr. Öğr. Üyesi Emel Soylu", title: "Öğretim Üyesi / Bölüm Başkan Yardımcısı", specialization: "Yapay Zeka, Robotik, Gömülü Sistemler, Derin Öğrenme, Batarya Durum İzleme", email: "emel.soylu@samsun.edu.tr", profileUrl: "https://profil.samsun.edu.tr/Academic/About/emel.soylu", img: BASE_FACULTY_IMG + "emel.soylu.png" },
  { id: "tonkal", name: "Dr. Öğr. Üyesi Özgür Tonkal", title: "Öğretim Üyesi / Bölüm Başkan Yardımcısı / Erasmus Koordinatörü", specialization: "Bilgisayar Ağları, Yapay Zeka, Bilgi Güvenliği, Kriptoloji", email: "ozgur.tonkal@samsun.edu.tr", profileUrl: "https://profil.samsun.edu.tr/Academic/About/ozgur.tonkal", img: BASE_FACULTY_IMG + "ozgur.tonkal.png" },
];

const researchAssistants = [
  { name: "Ferhat Arat", img: BASE_FACULTY_IMG + "ferhat.arat.png" },
  { name: "İlker Gür", img: BASE_FACULTY_IMG + "ilker.gür.png" },
  { name: "Sarp Çoban", img: BASE_FACULTY_IMG + "sarp.coban.png" },
  { name: "Furkancan Demircan", img: BASE_FACULTY_IMG + "furkancan.demircan.png" },
  { name: "Ömer Durmuş", img: BASE_FACULTY_IMG + "omer.durmus.png" },
  { name: "Deniz Bora Küçük", img: BASE_FACULTY_IMG + "deniz.kucuk.png" },
];

function FallbackImg({ src, name, className }: { src: string; name: string; className?: string }) {
  const initials = name.replace(/Prof\. Dr\.|Doç\. Dr\.|Dr\. Öğr\. Üyesi|Arş\. Gör\./g, "").trim().split(" ").map((n: string) => n[0]).slice(0, 2).join("");
  return (
    <img
      src={src}
      alt={name}
      className={className}
      onError={(e) => {
        const el = e.target as HTMLImageElement;
        el.onerror = null;
        el.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=166534&color=fff&size=400&bold=true`;
      }}
    />
  );
}

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
                <div className="h-64 overflow-hidden bg-secondary">
                  <FallbackImg src={m.img} name={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-base text-foreground mb-1 leading-snug">{m.name}</h3>
                  <p className="text-xs text-primary font-medium mb-4 uppercase tracking-wider">{m.title}</p>
                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed min-h-[3rem]">{m.specialization}</p>
                  <div className="flex flex-col gap-2.5 text-xs">
                    <a href={`mailto:${m.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors truncate group/link">
                      <Mail className="w-4 h-4 text-primary shrink-0 group-hover/link:scale-110 transition-transform" />{m.email}
                    </a>
                    <a href={m.profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-medium hover:underline group/link">
                      <ExternalLink className="w-4 h-4 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />Üniversite Profili
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Araştırma Görevlileri</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {researchAssistants.map((ra) => (
                <div key={ra.name} className="group text-center">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-secondary mb-3 border border-border group-hover:border-primary/40 transition-all">
                    <FallbackImg 
                      src={ra.img} 
                      name={ra.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{ra.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Arş. Gör.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
