import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Link } from "wouter";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

const programs = [
  { level: "Lisans", name: "Yazılım Mühendisliği", duration: "4 Yıl", lang: "Türkçe", quota: 60 },
  { level: "Yüksek Lisans", name: "Yazılım Mühendisliği (Tezli)", duration: "2 Yıl", lang: "Türkçe/İngilizce", quota: 15 },
  { level: "Yüksek Lisans", name: "Yapay Zeka ve Veri Bilimi", duration: "2 Yıl", lang: "İngilizce", quota: 15 },
  { level: "Doktora", name: "Yazılım Mühendisliği", duration: "4 Yıl", lang: "Türkçe/İngilizce", quota: 8 },
];

export default function Programs() {
  return (
    <Layout>
      <PageHeader
        title="Programlar"
        subtitle="Lisans, yüksek lisans ve doktora düzeyinde sunulan eğitim programları."
        breadcrumbs={[{ name: "Akademik" }, { name: "Programlar" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {programs.map((p) => (
              <div key={p.name} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${p.level === "Lisans" ? "bg-primary/20 text-primary" : p.level === "Doktora" ? "bg-accent/20 text-accent" : "bg-green-500/20 text-green-400"}`}>{p.level}</span>
                  <span className="text-xs text-muted-foreground">{p.quota} Kontenjan</span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-4">{p.name}</h3>
                <div className="flex gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-primary" />{p.duration}</span>
                  <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-primary" />{p.lang}</span>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <Link href="/admission" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
                    Başvuru Bilgileri <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-card border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Ders programı için</h3>
            <p className="text-muted-foreground text-sm mb-5">Lisans ders planını ve seçmeli derslerin detaylarını inceleyin.</p>
            <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
              Ders Programına Git <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
