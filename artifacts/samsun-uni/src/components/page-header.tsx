import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  name: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHeader({ title, subtitle, description, image, breadcrumbs }: PageHeaderProps) {
  const desc = subtitle || description;

  return (
    <div className="relative overflow-hidden bg-secondary border-b border-border py-20">
      {image && (
        <>
          <div className="absolute inset-0 z-0">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-secondary via-secondary/90 to-secondary/70" />
        </>
      )}

      {!image && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg className="absolute -bottom-4 left-0 right-0 w-full opacity-5" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0 120 C 360 0 1080 0 1440 120 Z" fill="currentColor" />
          </svg>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" /> Ana Sayfa
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-foreground transition-colors">{crumb.name}</Link>
                ) : (
                  <span className="text-foreground">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground">
          {title}
        </h1>
        {desc && (
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}
