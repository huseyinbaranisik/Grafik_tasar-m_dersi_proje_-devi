import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { useFacultyMembers } from "@/hooks/use-university-data";
import { Skeleton } from "@/components/ui/skeleton";
import { Mail, MapPin } from "lucide-react";

export default function Faculty() {
  const { data: members, isLoading } = useFacultyMembers();
  return (
    <Layout>
      <PageHeader
        title="Akademik Kadro"
        subtitle="Alanında uzman, araştırmacı ve yenilikçi öğretim üyelerimizle tanışın."
        breadcrumbs={[{ name: "Akademik", href: "/faculty" }, { name: "Akademik Kadro" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-64 rounded-2xl" />)
              : members?.map((m) => (
                  <div key={m.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                    <div className="h-48 overflow-hidden bg-secondary">
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-lg text-foreground mb-0.5">{m.name}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{m.title}</p>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{m.specialization}</p>
                      <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-primary" />{m.email}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" />Ofis: {m.office}</span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
