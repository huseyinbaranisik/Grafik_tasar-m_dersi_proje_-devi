import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Ad soyad en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  subject: z.string().min(5, { message: "Konu en az 5 karakter olmalıdır." }),
  message: z.string().min(10, { message: "Mesajınız en az 10 karakter olmalıdır." }),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mesajınız Gönderildi",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });
    form.reset();
  }

  return (
    <Layout>
      <PageHeader 
        title="İletişim" 
        description="Soru, görüş ve önerileriniz için bizimle iletişime geçebilirsiniz."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <h3 className="font-display font-bold text-2xl text-primary mb-6">İletişim Bilgileri</h3>
                <p className="text-muted-foreground mb-8">
                  Üniversitemiz hakkında daha fazla bilgi almak veya sorularınızı iletmek için aşağıdaki kanalları kullanabilirsiniz.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Adres</h4>
                      <p className="text-muted-foreground text-sm mt-1">Samsun Üniversitesi Merkez Kampüsü,<br/>İlkadım, 55000 Samsun / Türkiye</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Telefon</h4>
                      <p className="text-muted-foreground text-sm mt-1">+90 (362) 123 45 67<br/>+90 (362) 123 45 68 (Faks)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">E-Posta</h4>
                      <p className="text-muted-foreground text-sm mt-1">iletisim@samsun.edu.tr<br/>ogrenci.isleri@samsun.edu.tr</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="border-0 shadow-2xl shadow-primary/5 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 md:p-12 bg-card">
                    <h3 className="font-display font-bold text-3xl text-primary mb-8">Bize Yazın</h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-semibold">Ad Soyad</FormLabel>
                                <FormControl>
                                  <Input placeholder="Adınız Soyadınız" className="bg-secondary/50 border-border/50 focus-visible:ring-primary h-12 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-semibold">E-Posta</FormLabel>
                                <FormControl>
                                  <Input placeholder="ornek@email.com" className="bg-secondary/50 border-border/50 focus-visible:ring-primary h-12 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Konu</FormLabel>
                              <FormControl>
                                <Input placeholder="Mesajınızın konusu" className="bg-secondary/50 border-border/50 focus-visible:ring-primary h-12 rounded-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Mesajınız</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Mesajınızı buraya yazabilirsiniz..." 
                                  className="min-h-[150px] bg-secondary/50 border-border/50 focus-visible:ring-primary rounded-xl resize-none" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" size="lg" className="w-full md:w-auto px-10 h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base shadow-lg shadow-primary/20">
                          <Send className="w-5 h-5 mr-2" /> Gönder
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="mt-24 rounded-3xl overflow-hidden shadow-lg h-[400px] bg-secondary relative flex items-center justify-center border border-border"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
            <div className="text-center z-10">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium text-muted-foreground">İnteraktif Harita Görünümü</p>
              <p className="text-sm text-muted-foreground/70 mt-2">API entegrasyonu gerektirir</p>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
