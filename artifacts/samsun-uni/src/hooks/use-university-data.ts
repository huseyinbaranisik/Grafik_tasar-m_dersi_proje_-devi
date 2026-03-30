import { useState, useEffect } from "react";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Duyuru" | "Haber" | "Araştırma";
  imageUrl: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  semester: number;
  type: "Zorunlu" | "Seçmeli";
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  specialization: string;
  email: string;
  image: string;
  office: string;
}

function useSimulatedFetch<T>(data: T, delay = 500) {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => { setResult(data); setIsLoading(false); }, delay);
    return () => clearTimeout(t);
  }, []);
  return { data: result, isLoading };
}

const MOCK_NEWS: NewsItem[] = [
  {
    id: "n1",
    title: "TÜBİTAK 1001 Projesi Yazılım Bölümümüze Onaylandı",
    excerpt: "Bölümümüz öğretim üyelerinin yürüttüğü makine öğrenmesi tabanlı siber güvenlik projesi TÜBİTAK tarafından desteklenmeye hak kazandı.",
    date: "20 Mart 2026",
    category: "Araştırma",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    id: "n2",
    title: "2025-2026 Güz Dönemi Ders Kayıtları Başlıyor",
    excerpt: "Yeni akademik yıl ders kayıtları 1 Eylül'de öğrenci bilgi sistemi üzerinden yapılacaktır. Danışman onayı zorunludur.",
    date: "15 Mart 2026",
    category: "Duyuru",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
  {
    id: "n3",
    title: "Yazılım Mühendisliği Kariyer Günleri — Nisan 2026",
    excerpt: "50'den fazla teknoloji firmasının katılacağı Kariyer Günleri etkinliğimize tüm öğrencilerimizi bekliyoruz.",
    date: "10 Mart 2026",
    category: "Haber",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  },
];

const MOCK_EVENTS: EventItem[] = [
  { id: "e1", title: "Hackathon 2026 — 48 Saatlik Yazılım Yarışması", date: "15 Nis", time: "09:00", location: "Yazılım Lab. A-101" },
  { id: "e2", title: "Yapay Zeka ve LLM Konferansı", date: "22 Nis", time: "10:00", location: "Mühendislik Fakültesi Amfi" },
  { id: "e3", title: "Mezun Buluşması 2026", date: "05 May", time: "14:00", location: "Öğrenci Merkezi" },
];

const MOCK_COURSES: Course[] = [
  { id: "c1", code: "YM101", name: "Programlamaya Giriş", credits: 4, semester: 1, type: "Zorunlu" },
  { id: "c2", code: "YM102", name: "Matematik I", credits: 4, semester: 1, type: "Zorunlu" },
  { id: "c3", code: "YM103", name: "Fizik I", credits: 3, semester: 1, type: "Zorunlu" },
  { id: "c4", code: "YM104", name: "Türk Dili I", credits: 2, semester: 1, type: "Zorunlu" },
  { id: "c5", code: "YM201", name: "Nesne Yönelimli Programlama", credits: 4, semester: 2, type: "Zorunlu" },
  { id: "c6", code: "YM202", name: "Veri Yapıları ve Algoritmalar", credits: 4, semester: 2, type: "Zorunlu" },
  { id: "c7", code: "YM203", name: "Matematik II", credits: 4, semester: 2, type: "Zorunlu" },
  { id: "c8", code: "YM301", name: "İşletim Sistemleri", credits: 4, semester: 3, type: "Zorunlu" },
  { id: "c9", code: "YM302", name: "Veritabanı Sistemleri", credits: 4, semester: 3, type: "Zorunlu" },
  { id: "c10", code: "YM303", name: "Yazılım Mühendisliği", credits: 3, semester: 3, type: "Zorunlu" },
  { id: "c11", code: "YM401", name: "Yapay Zeka", credits: 4, semester: 4, type: "Zorunlu" },
  { id: "c12", code: "YM402", name: "Bilgisayar Ağları", credits: 3, semester: 4, type: "Zorunlu" },
  { id: "c13", code: "YMS01", name: "Mobil Uygulama Geliştirme", credits: 3, semester: 5, type: "Seçmeli" },
  { id: "c14", code: "YMS02", name: "Bulut Bilişim", credits: 3, semester: 5, type: "Seçmeli" },
  { id: "c15", code: "YMS03", name: "Siber Güvenlik", credits: 3, semester: 6, type: "Seçmeli" },
];

const MOCK_FACULTY: FacultyMember[] = [
  { id: "f1", name: "Prof. Dr. Mehmet Kaya", title: "Bölüm Başkanı", specialization: "Yapay Zeka, Makine Öğrenmesi", email: "mkaya@samsun.edu.tr", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", office: "A-201" },
  { id: "f2", name: "Prof. Dr. Ayşe Demir", title: "Öğretim Üyesi", specialization: "Siber Güvenlik, Kriptografi", email: "ademir@samsun.edu.tr", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", office: "A-202" },
  { id: "f3", name: "Doç. Dr. Ali Yıldız", title: "Öğretim Üyesi", specialization: "Yazılım Mühendisliği, Agile", email: "ayildiz@samsun.edu.tr", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", office: "A-203" },
  { id: "f4", name: "Doç. Dr. Fatma Arslan", title: "Öğretim Üyesi", specialization: "Veri Bilimi, Büyük Veri", email: "farslan@samsun.edu.tr", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80", office: "A-204" },
  { id: "f5", name: "Dr. Öğr. Üyesi Emre Çelik", title: "Öğretim Üyesi", specialization: "Mobil Geliştirme, React Native", email: "ecelik@samsun.edu.tr", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", office: "B-101" },
  { id: "f6", name: "Dr. Öğr. Üyesi Selin Kurt", title: "Öğretim Üyesi", specialization: "Bulut Bilişim, DevOps", email: "skurt@samsun.edu.tr", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", office: "B-102" },
];

export function useNews() { return useSimulatedFetch(MOCK_NEWS); }
export function useEvents() { return useSimulatedFetch(MOCK_EVENTS); }
export function useCourses() { return useSimulatedFetch(MOCK_COURSES); }
export function useFacultyMembers() { return useSimulatedFetch(MOCK_FACULTY); }
