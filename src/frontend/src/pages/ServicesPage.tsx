import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Settings,
  Users,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const services = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Recruitment & Staffing Services",
    tagline: "End-to-End Talent Acquisition",
    description:
      "We provide comprehensive recruitment solutions covering every stage of the hiring journey — from sourcing and screening to interviewing and onboarding. Our team leverages an extensive talent network and deep industry knowledge to identify candidates who not only have the right skills but also align with your company culture and values.",
    features: [
      "Job analysis and requirement profiling",
      "Multi-channel candidate sourcing",
      "Thorough screening and assessment",
      "Interview coordination and support",
      "Offer negotiation and onboarding assistance",
      "Post-placement follow-up",
    ],
    reverse: false,
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Skilled and Unskilled Manpower Supply",
    tagline: "Reliable Workforce at Every Level",
    description:
      "We supply dependable workforce solutions across a wide spectrum of skill levels — from highly trained technical specialists and certified professionals to general labor and support staff. Our rigorous vetting process ensures that every worker supplied meets your operational standards and is ready to contribute from day one.",
    features: [
      "Skilled technicians and specialists",
      "Semi-skilled and trade-qualified workers",
      "General labor and support staff",
      "Short-term and long-term placements",
      "Rapid deployment capabilities",
      "Ongoing workforce management support",
    ],
    reverse: true,
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Customized Hiring Solutions",
    tagline: "Tailored Workforce Strategies",
    description:
      "Every organization is unique, and so are its workforce challenges. We design bespoke hiring strategies specifically aligned with your industry requirements, company culture, team dynamics, and long-term business objectives. Whether you need a high-volume recruitment campaign, executive search, or a hybrid workforce model, we craft the solution that fits.",
    features: [
      "Workforce planning and consulting",
      "High-volume recruitment campaigns",
      "Executive and specialist search",
      "Hybrid and flexible workforce models",
      "Industry-specific talent pipelines",
      "Employer branding strategy support",
    ],
    reverse: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive manpower solutions tailored to your business needs."
        breadcrumb="What We Do"
      />

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  service.reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Visual Panel */}
                <div className={`${service.reverse ? "[direction:ltr]" : ""}`}>
                  <div className="rounded-3xl bg-gradient-to-br from-brand-navy to-brand-mid-blue p-10 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                      aria-hidden="true"
                    />
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-white mb-6">
                        {service.icon}
                      </div>
                      <p className="text-brand-sky font-semibold text-xs uppercase tracking-widest mb-2">
                        {service.tagline}
                      </p>
                      <h2 className="font-display text-2xl font-bold text-white leading-snug">
                        {service.title}
                      </h2>
                    </div>
                    <div className="relative z-10 mt-6">
                      <div className="h-px bg-white/15 mb-6" />
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.slice(0, 4).map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand-sky shrink-0" />
                            <span className="text-white/70 text-xs leading-tight">
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className={`${service.reverse ? "[direction:ltr]" : ""}`}>
                  <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
                    <span className="h-px w-5 bg-brand-sky inline-block" />
                    {service.tagline}
                  </p>
                  <h2 className="font-display text-[1.85rem] font-bold text-brand-navy mb-2 section-divider leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-brand-text-mid leading-[1.8] mt-6 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-sky shrink-0 mt-0.5" />
                        <span className="text-brand-text-mid text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="bg-brand-navy hover:bg-brand-mid-blue text-white rounded-full px-8 font-semibold transition-all duration-200"
                  >
                    <Link to={"/contact" as string}>
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div
          className="absolute right-0 inset-y-0 w-1/2 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, oklch(0.59 0.13 237 / 0.20) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <p className="text-brand-sky text-xs font-semibold uppercase tracking-[0.14em] mb-3">
            Let's Talk
          </p>
          <h2 className="font-display text-3xl md:text-[2.4rem] font-bold text-white mb-5 leading-tight">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/70 text-lg mb-9 max-w-xl mx-auto leading-relaxed">
            Our team is happy to discuss your requirements and recommend the
            right workforce solution for your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-navy hover:bg-brand-light-blue font-bold rounded-full px-10 h-13 text-[0.95rem] shadow-xl shadow-black/20 transition-all duration-200 hover:scale-[1.02]"
          >
            <Link to={"/contact" as string}>Talk to Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
