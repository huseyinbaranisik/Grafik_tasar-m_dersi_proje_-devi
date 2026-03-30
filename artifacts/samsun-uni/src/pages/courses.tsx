import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { useCourses } from "@/hooks/use-university-data";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export default function Courses() {
  const { data: courses, isLoading } = useCourses();
  const [activeSem, setActiveSem] = useState<number | "all">("all");
  const semesters = [1, 2, 3, 4, 5, 6];
  const filtered = activeSem === "all" ? courses : courses?.filter(c => c.semester === activeSem);

  return (
    <Layout>
      <PageHeader
        title="Ders Programı"
        subtitle="Yazılım Mühendisliği lisans programının tüm zorunlu ve seçmeli dersleri."
        breadcrumbs={[{ name: "Akademik", href: "/faculty" }, { name: "Ders Programı" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            <button onClick={() => setActiveSem("all")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSem === "all" ? "bg-primary text-white" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"}`}>Tümü</button>
            {semesters.map(s => (
              <button key={s} onClick={() => setActiveSem(s)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSem === s ? "bg-primary text-white" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"}`}>{s}. Dönem</button>
            ))}
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-5 px-6 py-3 border-b border-border bg-secondary text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <span>Kod</span><span className="col-span-2">Ders Adı</span><span className="text-center">Kredi</span><span className="text-center">Tür</span>
            </div>
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="mx-6 my-3 h-10 rounded-lg" />)
              : filtered?.map((c, i) => (
                  <div key={c.id} className={`grid grid-cols-5 px-6 py-4 items-center text-sm ${i % 2 === 0 ? "" : "bg-secondary/40"} border-b border-border last:border-b-0 hover:bg-secondary/80 transition-colors`}>
                    <span className="font-mono text-primary font-semibold text-xs">{c.code}</span>
                    <span className="col-span-2 text-foreground font-medium">{c.name}</span>
                    <span className="text-center text-muted-foreground">{c.credits}</span>
                    <span className="text-center">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${c.type === "Zorunlu" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}>{c.type}</span>
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
