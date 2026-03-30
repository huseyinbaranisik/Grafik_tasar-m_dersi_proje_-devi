import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Link } from "wouter";
import { CheckCircle2, FileText, Building2, Clock, ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Staj Yerini Bul", desc: "Kariyer portalı veya bölümümüzün anlaşmalı firma listesinden staj yeri belirleyin." },
  { num: "02", title: "Başvuru Belgelerini Hazırla", desc: "Staj başvuru formu, sigorta evrakları ve transkriptinizi tamamlayın." },
  { num: "03", title: "Danışman Onayı Al", desc: "Akademik danışmanınızdan staj planını onaylatın." },
  { num: "04", title: "Stajı Tamamla", desc: "En az 30 iş günü süren stajınızı tamamlayın ve staj defteri tutun." },
  { num: "05", title: "Staj Raporunu Teslim Et", desc: "Staj bitiminde raporu bölüme teslim ederek değerlendirme sürecini başlatın." },
];

const companies = ["Microsoft", "Turkcell", "Arçelik", "Aselsan", "Havelsan", "Logo Yazılım", "İnnova", "Netaş"];

export default function Internship() {
  return (
    <Layout>
      <PageHeader
        title="Staj Rehberi"
        subtitle="Zorunlu staj süreciniz hakkında bilmeniz gereken her şey."
        breadcrumbs={[{ name: "Öğrenci", href: "/student-life" }, { name: "Staj Rehberi" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-4 mb-16">
            {[{ icon: Clock, label: "Süre", value: "30 İş Günü" }, { icon: Building2, label: "Zorunlu Staj", value: "2 Dönem" }, { icon: CheckCircle2, label: "Anlaşmalı Firma", value: "120+" }].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border border-border rounded-2xl p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Icon className="w-6 h-6" /></div>
                <div><div className="text-xs text-muted-foreground mb-1">{label}</div><div className="font-display text-2xl font-bold text-foreground">{value}</div></div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Staj Süreci</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="flex flex-col gap-6">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary text-white font-display font-bold flex items-center justify-center z-10">{s.num}</div>
                  <div className="bg-card border border-border rounded-2xl p-6 flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Anlaşmalı Firmalar</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {companies.map(c => (
                <span key={c} className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors cursor-default">{c}</span>
              ))}
            </div>
            <div className="bg-gradient-to-r from-accent/10 to-card border border-accent/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Staj Belgelerini İndir</h3>
                <p className="text-sm text-muted-foreground">Tüm staj formları ve rehber belgelerine ulaşın.</p>
              </div>
              <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">
                <FileText className="w-4 h-4" /> Belgeleri Gör
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
