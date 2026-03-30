import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Briefcase, MapPin, GraduationCap, Link as LinkIcon } from "lucide-react";

const alumni = [
  { name: "Ahmet Kara", grad: "2019", company: "Microsoft Türkiye", role: "Senior Software Engineer", city: "İstanbul", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { name: "Selin Yıldız", grad: "2020", company: "Google", role: "Backend Engineer", city: "Münih, Almanya", img: "https://images.unsplash.com/photo-1494790108755-2616b9e55b9e?w=300&q=80" },
  { name: "Emre Doğan", grad: "2021", company: "Trendyol", role: "Tech Lead", city: "İstanbul", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80" },
  { name: "Fatma Çelik", grad: "2018", company: "Aselsan", role: "Yazılım Uzmanı", city: "Ankara", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
  { name: "Murat Arslan", grad: "2022", company: "Getir", role: "Mobile Developer", city: "İstanbul", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&q=80" },
  { name: "Zeynep Kurt", grad: "2020", company: "Amazon Web Services", role: "Cloud Architect", city: "Berlin, Almanya", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80" },
];

export default function Alumni() {
  return (
    <Layout>
      <PageHeader
        title="Mezunlarımız"
        subtitle="Bölümümüzden mezun olan yazılım mühendisleri dünya genelinde önde gelen şirketlerde çalışıyor."
        breadcrumbs={[{ name: "Öğrenci", href: "/student-life" }, { name: "Mezunlar" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl">
            {[{ v: "500+", l: "Mezun" }, { v: "%92", l: "İstihdam" }, { v: "35+", l: "Ülke" }].map(({ v, l }) => (
              <div key={l} className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="font-display text-3xl font-bold text-accent mb-1">{v}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {alumni.map((a) => (
              <div key={a.name} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all group">
                <div className="flex items-center gap-4 mb-5">
                  <img src={a.img} alt={a.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-foreground">{a.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5"><GraduationCap className="w-3 h-3" />{a.grad} Mezunu</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground"><Briefcase className="w-3.5 h-3.5 text-primary shrink-0" /><span className="text-foreground font-medium">{a.role}</span></div>
                  <div className="flex items-center gap-2 text-muted-foreground"><LinkIcon className="w-3.5 h-3.5 text-primary shrink-0" />{a.company}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-3.5 h-3.5 text-primary shrink-0" />{a.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
