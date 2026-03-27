import { useState } from "react";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { useNews } from "@/hooks/use-university-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function News() {
  const { data: news, isLoading } = useNews();
  const [activeCategory, setActiveCategory] = useState<string>("Tümü");

  const categories = ["Tümü", "Haber", "Duyuru", "Araştırma"];

  const filteredNews = activeCategory === "Tümü" 
    ? news 
    : news?.filter(n => n.category === activeCategory);

  return (
    <Layout>
      <PageHeader 
        title="Haberler ve Duyurular" 
        description="Üniversitemizdeki son gelişmelerden, etkinliklerden ve duyurulardan haberdar olun."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={`rounded-full px-6 ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'border-border/60 text-muted-foreground hover:text-primary'}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(6).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-[450px] rounded-2xl" />
              ))
            ) : (
              filteredNews?.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 bg-card flex flex-col group rounded-2xl">
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 z-20 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                        {item.category}
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="text-sm text-accent mb-3 font-semibold tracking-wide uppercase">{item.date}</div>
                      <h4 className="font-display font-bold text-xl text-primary mb-4 group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground line-clamp-3 mb-6 mt-auto leading-relaxed">
                        {item.excerpt}
                      </p>
                      <Button variant="ghost" className="w-fit p-0 hover:bg-transparent text-primary font-bold group-hover:text-accent flex items-center gap-2">
                        Haberi Oku <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
          
          {!isLoading && filteredNews?.length === 0 && (
            <div className="text-center py-20 text-muted-foreground text-lg">
              Bu kategoride henüz içerik bulunmamaktadır.
            </div>
          )}

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-10 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold">
              Daha Fazla Yükle
            </Button>
          </div>

        </div>
      </section>
    </Layout>
  );
}
