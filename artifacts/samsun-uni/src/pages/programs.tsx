import { useState } from "react";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { usePrograms } from "@/hooks/use-university-data";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Clock, Globe2, BookOpen } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function Programs() {
  const { data: programs, isLoading } = usePrograms();
  const [searchTerm, setSearchTerm] = useState("");
  
  const levels = ["Lisans", "Yüksek Lisans", "Doktora"] as const;

  const filteredPrograms = programs?.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.faculty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <PageHeader 
        title="Akademik Programlar" 
        description="Geleceğinizi şekillendirecek 50'den fazla lisans ve lisansüstü programımızı keşfedin."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              type="text"
              placeholder="Program veya Fakülte Ara..."
              className="pl-12 h-14 rounded-full text-lg shadow-sm border-border/60 focus-visible:ring-primary focus-visible:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Tabs defaultValue="Lisans" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-secondary p-1 rounded-full">
                {levels.map(level => (
                  <TabsTrigger 
                    key={level} 
                    value={level}
                    className="rounded-full px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {level}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {levels.map(level => (
              <TabsContent key={level} value={level} className="mt-0 outline-none">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {isLoading ? (
                    Array(6).fill(0).map((_, i) => (
                      <Skeleton key={i} className="h-48 rounded-2xl" />
                    ))
                  ) : (
                    filteredPrograms?.filter(p => p.level === level).length === 0 ? (
                      <div className="col-span-full text-center py-12 text-muted-foreground">
                        Bu kriterlere uygun program bulunamadı.
                      </div>
                    ) : (
                      filteredPrograms?.filter(p => p.level === level).map((program, idx) => (
                        <motion.div
                          key={program.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Card className="h-full border border-border/60 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                            <CardContent className="p-6 h-full flex flex-col">
                              <div className="mb-4">
                                <Badge variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 mb-3">
                                  {program.faculty}
                                </Badge>
                                <h3 className="font-display font-bold text-xl text-foreground">
                                  {program.name}
                                </h3>
                              </div>
                              
                              <div className="mt-auto pt-6 border-t border-border/50 flex gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-4 h-4 text-accent" /> {program.duration}
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Globe2 className="w-4 h-4 text-accent" /> {program.language}
                                </div>
                                <div className="flex items-center gap-1.5 ml-auto">
                                  <BookOpen className="w-4 h-4 text-primary" /> Detay
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))
                    )
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>

        </div>
      </section>
    </Layout>
  );
}
