import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileQuestion, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center py-24 bg-background px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-secondary rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary shadow-inner">
            <FileQuestion className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-display font-bold text-primary mb-4">Sayfa Bulunamadı</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Aradığınız sayfa taşınmış, silinmiş veya geçici olarak ulaşılamıyor olabilir.
          </p>
          <Link href="/">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-lg">
              <Home className="w-5 h-5 mr-2" /> Ana Sayfaya Dön
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
