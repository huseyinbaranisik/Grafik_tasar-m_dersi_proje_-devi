import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Link } from "wouter";
import { Cpu, Database, Shield, Wifi, ArrowRight } from "lucide-react";

const labs = [
  { icon: Cpu, name: "Yapay Zeka Laboratuvarı", desc: "GPU destekli sunucular, TensorFlow/PyTorch ortamları ve büyük veri kümeleriyle makine öğrenmesi araştırmaları.", capacity: "30 kişi", hours: "Hft. 6 gün 08:00–22:00" },
  { icon: Database, name: "Veri Tabanı & Büyük Veri Lab.", desc: "Hadoop, Spark ve NoSQL sistemlerinin kurulu olduğu yüksek performanslı depolama altyapısı.", capacity: "25 kişi", hours: "Hft. 5 gün 09:00–21:00" },
  { icon: Shield, name: "Siber Güvenlik Laboratuvarı", desc: "İzole ağ ortamında sızma testi, kötü amaçlı yazılım analizi ve kriptografi çalışmaları.", capacity: "20 kişi", hours: "Randevu ile" },
  { icon: Wifi, name: "Yazılım Geliştirme Atölyesi", desc: "Çift monitörlü geliştirici istasyonları, Docker ortamları ve CI/CD altyapısıyla gerçek proje çalışmaları.", capacity: "40 kişi", hours: "Hft. 7 gün 07:00–23:00" },
];

export default function Labs() {
  return (
    <Layout>
      <PageHeader
        title="Laboratuvarlar"
        subtitle="Modern donanım ve yazılımla donatılmış araştırma ve uygulama laboratuvarlarımız."
        breadcrumbs={[{ name: "Akademik", href: "/faculty" }, { name: "Laboratuvarlar" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {labs.map(({ icon: Icon, name, desc, capacity, hours }) => (
              <div key={name} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">{name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
                <div className="flex gap-6 text-xs text-muted-foreground">
                  <span><span className="text-foreground font-medium">Kapasite:</span> {capacity}</span>
                  <span><span className="text-foreground font-medium">Saat:</span> {hours}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-card border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">Laboratuvar Rezervasyonu</h3>
              <p className="text-sm text-muted-foreground">Ders dışı saatlerde laboratuvar kullanmak için randevu alın.</p>
            </div>
            <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
              Randevu Al <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
