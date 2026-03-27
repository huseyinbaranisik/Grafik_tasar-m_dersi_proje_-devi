// Mock Data hooks for the frontend-only University Prototype
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

export interface Program {
  id: string;
  name: string;
  faculty: string;
  level: "Lisans" | "Yüksek Lisans" | "Doktora";
  duration: string;
  language: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
}

// ---------------------------------------------------------
// MOCK DATA
// ---------------------------------------------------------
const MOCK_NEWS: NewsItem[] = [
  {
    id: "n1",
    title: "Yapay Zeka ve Veri Bilimi Merkezi Açıldı",
    excerpt: "Üniversitemiz bünyesinde kurulan yeni merkez, geleceğin teknolojilerine yön verecek projelere ev sahipliği yapacak.",
    date: "15 Ekim 2024",
    category: "Haber",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  },
  {
    id: "n2",
    title: "2024-2025 Akademik Yılı Güz Dönemi Ders Kayıtları",
    excerpt: "Yeni akademik yıl için ders kayıt süreci 20 Eylül tarihinde başlayacaktır. Tüm öğrencilerimizin dikkatine sunulur.",
    date: "10 Eyl 2024",
    category: "Duyuru",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
  },
  {
    id: "n3",
    title: "TÜBİTAK 2209-A Projelerinde Büyük Başarı",
    excerpt: "Mühendislik Fakültesi öğrencilerimizin sunduğu 45 projenin tamamı TÜBİTAK tarafından desteklenmeye hak kazandı.",
    date: "05 Eyl 2024",
    category: "Araştırma",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
  }
];

const MOCK_EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Uluslararası Havacılık ve Uzay Sempozyumu",
    date: "24 Ekim 2024",
    time: "09:30",
    location: "Merkez Kampüs Kongre Salonu"
  },
  {
    id: "e2",
    title: "Geleceğin Kariyer Fırsatları Zirvesi",
    date: "02 Kasım 2024",
    time: "10:00",
    location: "Öğrenci Yaşam Merkezi"
  },
  {
    id: "e3",
    title: "Sürdürülebilirlik ve Yeşil Kampüs Paneli",
    date: "15 Kasım 2024",
    time: "14:00",
    location: "Mühendislik Fakültesi Amfisi"
  }
];

const MOCK_PROGRAMS: Program[] = [
  { id: "p1", name: "Yazılım Mühendisliği", faculty: "Mühendislik Fakültesi", level: "Lisans", duration: "4 Yıl", language: "İngilizce" },
  { id: "p2", name: "Havacılık ve Uzay Mühendisliği", faculty: "Mühendislik Fakültesi", level: "Lisans", duration: "4 Yıl", language: "Türkçe" },
  { id: "p3", name: "Tıp", faculty: "Tıp Fakültesi", level: "Lisans", duration: "6 Yıl", language: "Türkçe" },
  { id: "p4", name: "İşletme", faculty: "İktisadi ve İdari Bilimler Fakültesi", level: "Lisans", duration: "4 Yıl", language: "İngilizce" },
  { id: "p5", name: "Veri Bilimi", faculty: "Mühendislik Fakültesi", level: "Yüksek Lisans", duration: "2 Yıl", language: "İngilizce" },
  { id: "p6", name: "Sağlık Yönetimi", faculty: "Sağlık Bilimleri Fakültesi", level: "Yüksek Lisans", duration: "2 Yıl", language: "Türkçe" },
  { id: "p7", name: "Biyomedikal Mühendisliği", faculty: "Mühendislik Fakültesi", level: "Doktora", duration: "4 Yıl", language: "İngilizce" },
];

const MOCK_LEADERSHIP: Leader[] = [
  { id: "l1", name: "Prof. Dr. Ahmet Yılmaz", role: "Rektör", image: "images/rector.png" },
  { id: "l2", name: "Prof. Dr. Ayşe Demir", role: "Rektör Yardımcısı", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" },
  { id: "l3", name: "Prof. Dr. Mehmet Kaya", role: "Mühendislik Fakültesi Dekanı", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80" },
  { id: "l4", name: "Prof. Dr. Zeynep Çelik", role: "Tıp Fakültesi Dekanı", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80" },
];

// ---------------------------------------------------------
// CUSTOM HOOKS
// ---------------------------------------------------------

// Simulate network delay for realism
function useSimulatedFetch<T>(data: T, delay = 600) {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(data);
      setIsLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [data, delay]);

  return { data: result, isLoading };
}

export function useNews() {
  return useSimulatedFetch(MOCK_NEWS);
}

export function useEvents() {
  return useSimulatedFetch(MOCK_EVENTS);
}

export function usePrograms() {
  return useSimulatedFetch(MOCK_PROGRAMS);
}

export function useLeadership() {
  return useSimulatedFetch(MOCK_LEADERSHIP);
}
