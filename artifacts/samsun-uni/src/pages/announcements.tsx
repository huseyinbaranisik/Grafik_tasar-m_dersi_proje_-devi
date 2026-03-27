import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Bell, FileText, Calendar, AlertCircle, ChevronRight } from "lucide-react";
import { useState } from "react";

type Category = "Tümü" | "Akademik" | "İdari" | "Öğrenci" | "Etkinlik";

const categories: Category[] = ["Tümü", "Akademik", "İdari", "Öğrenci", "Etkinlik"];

const announcements = [
  { id: 1, title: "2024-2025 Güz Dönemi Final Sınav Programı Açıklandı", date: "25 Mart 2026", category: "Akademik", important: true, excerpt: "Güz dönemi final sınavları 15-26 Ocak 2025 tarihleri arasında yapılacaktır. Sınav programı öğrenci bilgi sisteminden kontrol edilebilir." },
  { id: 2, title: "Yurt Başvuruları Başladı — Son Başvuru 30 Nisan", date: "22 Mart 2026", category: "Öğrenci", important: false, excerpt: "2025-2026 akademik yılı için yurt başvuruları başlamıştır. Başvurular online olarak yapılacaktır." },
  { id: 3, title: "Erasmus+ Başvuru Takvimi Güncellendi", date: "20 Mart 2026", category: "Akademik", important: true, excerpt: "2025-2026 dönemi Erasmus+ öğrenci hareketliliği başvuruları 1 Nisan'da başlayacaktır." },
  { id: 4, title: "Rektörlük Ödülleri Töreni — 15 Nisan 2026", date: "18 Mart 2026", category: "Etkinlik", important: false, excerpt: "Üstün başarı gösteren öğrencilerimizin ödüllendirileceği tören 15 Nisan'da düzenlenecektir." },
  { id: 5, title: "İdari İzin Takvimi Güncellendi", date: "15 Mart 2026", category: "İdari", important: false, excerpt: "Kurumsal izin ve mesai düzenlemelerine ilişkin güncellenmiş takvim yayımlanmıştır." },
  { id: 6, title: "Sağlık Merkezi Hizmetleri Genişletildi", date: "12 Mart 2026", category: "Öğrenci", important: false, excerpt: "Kampüs sağlık merkezi yeni branşlarla hizmet kapsamını genişletmiştir." },
  { id: 7, title: "Bahar Şenliği Program Duyurusu", date: "10 Mart 2026", category: "Etkinlik", important: false, excerpt: "Geleneksel Bahar Şenliğimiz 20-22 Nisan tarihleri arasında düzenlenecektir." },
  { id: 8, title: "Mezuniyet Töreni Tarihi Belirlendi", date: "8 Mart 2026", category: "Akademik", important: true, excerpt: "2024-2025 akademik yılı mezuniyet töreni 30 Haziran 2025'te yapılacaktır." },
];

const catIcon: Record<string, typeof Bell> = {
  Akademik: FileText,
  İdari: AlertCircle,
  Öğrenci: Bell,
  Etkinlik: Calendar,
};

export default function Announcements() {
  const [selected, setSelected] = useState<Category>("Tümü");

  const filtered = selected === "Tümü" ? announcements : announcements.filter((a) => a.category === selected);

  return (
    <Layout>
      <PageHeader
        title="Duyurular"
        description="Güncel akademik, idari ve öğrenci duyurularını takip edin."
        image={`${import.meta.env.BASE_URL}images/hero-bg.png`}
      />

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  selected === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Announcements List */}
          <div className="space-y-3">
            {filtered.map((ann, i) => {
              const Icon = catIcon[ann.category] ?? Bell;
              return (
                <motion.div
                  key={ann.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${ann.important ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${ann.important ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"}`}>
                        {ann.category}
                      </span>
                      {ann.important && (
                        <span className="text-xs font-semibold text-red-400 bg-red-400/10 px-2.5 py-0.5 rounded-full">Önemli</span>
                      )}
                      <span className="text-xs text-muted-foreground ml-auto">{ann.date}</span>
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors mb-1.5 leading-snug">
                      {ann.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{ann.excerpt}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
