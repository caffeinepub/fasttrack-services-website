interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="hero-gradient py-16 md:py-20 relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      {/* Right glow */}
      <div
        className="absolute right-0 inset-y-0 w-2/5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 50%, oklch(0.59 0.13 237 / 0.20) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {breadcrumb && (
          <p className="flex items-center gap-2 text-white/50 text-xs font-semibold uppercase tracking-[0.14em] mb-4">
            <span className="h-px w-4 bg-white/30 inline-block" />
            {breadcrumb}
          </p>
        )}
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/72 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6">
          <div className="h-[3px] w-14 rounded-full bg-brand-sky" />
        </div>
      </div>
    </section>
  );
}
