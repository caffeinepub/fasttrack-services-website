import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building,
  CheckCircle2,
  ChevronRight,
  Clock,
  Globe,
  HeartHandshake,
  Settings,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const services = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Recruitment & Staffing",
    description:
      "End-to-end recruitment solutions from sourcing to onboarding, ensuring you get the right candidates efficiently.",
    link: "/services" as const,
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Manpower Supply",
    description:
      "Reliable workforce across varying skill levels — from technical specialists to general labor.",
    link: "/services" as const,
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Customized Hiring Solutions",
    description:
      "Tailored workforce strategies designed for your specific industry, culture, and long-term goals.",
    link: "/services" as const,
  },
];

const differentiators = [
  {
    icon: <Award className="h-5 w-5" />,
    title: "Industry Expertise",
    description:
      "Deep domain knowledge across sectors allows us to source the most relevant candidates for your field.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Fast Turnaround",
    description:
      "Our streamlined process and broad talent network deliver qualified candidates in record time.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Reliable Candidates",
    description:
      "Every candidate is thoroughly screened and verified before being presented to you.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Personalized Service",
    description:
      "We tailor our approach to your unique culture, requirements, and workforce goals.",
  },
];

const stats = [
  {
    value: "500+",
    label: "Placements Made",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    value: "50+",
    label: "Partner Companies",
    icon: <Building className="h-5 w-5" />,
  },
  {
    value: "8",
    label: "Industries Served",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: <Star className="h-5 w-5" />,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient relative min-h-[90vh] flex items-center">
          {/* Photo overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{
              backgroundImage:
                "url('/assets/generated/hero-recruitment.dim_1400x700.jpg')",
            }}
            aria-hidden="true"
          />
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />
          {/* Right-side radial glow */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 80% 40%, oklch(0.59 0.13 237 / 0.18) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left: Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white/85 text-xs font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-8 border border-white/15 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-current text-brand-sky" />
                  Trusted Manpower Solutions Provider
                </div>

                <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.08] mb-6 tracking-tight">
                  Connecting Talent <br className="hidden sm:block" />
                  <span
                    className="relative inline-block"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.75 0.15 230), oklch(0.65 0.18 200))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    with Opportunity
                  </span>
                </h1>

                <p className="text-white/72 text-lg leading-relaxed max-w-xl mb-10">
                  AllWay Services bridges the gap between skilled talent and
                  businesses that need workforce support — making hiring faster,
                  smarter, and more reliable.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    data-ocid="home.find_talent_button"
                    className="bg-white text-brand-navy hover:bg-brand-light-blue font-bold rounded-full px-8 h-13 text-[0.95rem] shadow-xl shadow-black/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Link to="/employers">
                      Find Talent
                      <ChevronRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    data-ocid="home.find_job_button"
                    className="bg-transparent border-2 border-white/40 hover:border-white text-white font-bold rounded-full px-8 h-13 text-[0.95rem] transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
                  >
                    <Link to="/job-seekers">
                      Find a Job
                      <ChevronRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right: Stats panel */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl p-7 shadow-2xl shadow-black/30">
                  <p className="text-white/50 text-xs uppercase tracking-[0.14em] font-semibold mb-5">
                    Our Track Record
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/8 rounded-2xl p-4 border border-white/10"
                      >
                        <div className="text-brand-sky mb-2">{stat.icon}</div>
                        <p className="font-display text-2xl font-bold text-white leading-none mb-1">
                          {stat.value}
                        </p>
                        <p className="text-white/50 text-[11px] font-medium uppercase tracking-wide leading-tight">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["EN", "JT", "MR", "AL"].map((init) => (
                        <div
                          key={init}
                          className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-sky to-brand-mid-blue border-2 border-white/20 flex items-center justify-center text-white text-[9px] font-bold"
                        >
                          {init}
                        </div>
                      ))}
                    </div>
                    <p className="text-white/55 text-xs leading-tight">
                      Trusted by{" "}
                      <span className="text-white/80 font-semibold">50+</span>{" "}
                      partner companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg
              viewBox="0 0 1440 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              className="w-full"
            >
              <path
                d="M0 56V28C240 0 480 0 720 28C960 56 1200 56 1440 28V56H0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── Company Intro ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-4">
                <span className="h-px w-5 bg-brand-sky inline-block" />
                Who We Are
              </p>
              <h2 className="font-display text-3xl md:text-[2.4rem] font-bold text-brand-navy mb-3 leading-tight">
                About AllWay Services
              </h2>
              <div className="h-[3px] w-12 rounded-full bg-brand-sky mb-7" />
              <p className="text-brand-text-mid leading-[1.8] mb-4">
                AllWay Services is a newly established manpower solutions
                provider committed to bridging the gap between skilled talent
                and the businesses that need workforce support. We combine
                industry expertise with a personalized approach to deliver
                exceptional staffing outcomes.
              </p>
              <p className="text-brand-text-mid leading-[1.8] mb-9">
                Whether you're a growing enterprise needing reliable staff or a
                skilled professional seeking your next opportunity, we're your
                partner in making it happen — fast, professionally, and with
                care.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full px-7 h-11 font-semibold transition-all duration-200 group"
              >
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Feature tiles */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  label: "Recruitment & Staffing",
                  sub: "End-to-end talent acquisition",
                  icon: <Users className="h-5 w-5" />,
                  accent: "border-l-brand-mid-blue",
                },
                {
                  label: "Manpower Supply",
                  sub: "All skill levels covered",
                  icon: <Briefcase className="h-5 w-5" />,
                  accent: "border-l-brand-sky",
                },
                {
                  label: "Industry Coverage",
                  sub: "8 key sectors served",
                  icon: <Globe className="h-5 w-5" />,
                  accent: "border-l-brand-mid-blue",
                },
                {
                  label: "Tailored Solutions",
                  sub: "Built for your business",
                  icon: <Settings className="h-5 w-5" />,
                  accent: "border-l-brand-sky",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`bg-brand-section rounded-2xl p-5 flex flex-col gap-2.5 border border-gray-100 border-l-[3px] ${item.accent}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-brand-navy shadow-xs border border-gray-100">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm leading-tight">
                      {item.label}
                    </p>
                    <p className="text-brand-text-light text-xs mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Highlights ─── */}
      <section className="py-20 bg-brand-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
                <span className="h-px w-5 bg-brand-sky inline-block" />
                What We Offer
              </p>
              <h2 className="font-display text-3xl md:text-[2.4rem] font-bold text-brand-navy leading-tight">
                Our Services
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full px-6 h-10 text-sm font-semibold transition-all duration-200 shrink-0"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Card
                key={service.title}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_oklch(0.29_0.08_245_/_0.18)]"
              >
                <CardContent className="p-7 flex flex-col h-full">
                  {/* Number + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-light-blue flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <span className="font-display text-5xl font-bold text-gray-100 group-hover:text-brand-light-blue transition-colors duration-300 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-brand-text-mid text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1.5 text-brand-mid-blue font-semibold text-sm hover:text-brand-navy transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose AllWay ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
              <span className="h-px w-5 bg-brand-sky inline-block" />
              Our Advantage
            </p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-bold text-brand-navy leading-tight">
              Why Choose AllWay Services
            </h2>
            <p className="mt-4 text-brand-text-mid leading-relaxed">
              Speed, accuracy, and genuine care — the combination that
              consistently delivers staffing outcomes beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className="group relative p-7 rounded-2xl border border-gray-100 bg-white overflow-hidden transition-all duration-300 hover:border-brand-navy hover:shadow-[0_12px_36px_-8px_oklch(0.29_0.08_245_/_0.16)]"
              >
                {/* Hover fill */}
                <div className="absolute inset-0 bg-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-light-blue group-hover:bg-white/15 flex items-center justify-center text-brand-navy group-hover:text-white transition-colors duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-display text-3xl font-bold text-gray-100 group-hover:text-white/20 transition-colors duration-300 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-[0.95rem] font-bold text-brand-navy group-hover:text-white mb-2.5 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-mid group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient py-24">
          {/* Subtle geometry */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(45deg, white 1px, transparent 1px), linear-gradient(-45deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />
          {/* Accent blob */}
          <div
            className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.59 0.13 237 / 0.25) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <p className="text-brand-sky text-xs font-semibold uppercase tracking-[0.14em] mb-3">
              Ready to Get Started?
            </p>
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-white mb-5 leading-tight">
              Ready to Find the Right People?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Whether hiring top talent or finding your next career opportunity,
              we make it happen — fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                data-ocid="home.request_manpower_button"
                className="bg-white text-brand-navy hover:bg-brand-light-blue font-bold rounded-full px-9 h-13 text-[0.95rem] shadow-xl shadow-black/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link to="/employers">
                  Request Manpower
                  <ChevronRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                data-ocid="home.submit_cv_button"
                className="bg-transparent border-2 border-white/40 hover:border-white text-white font-bold rounded-full px-9 h-13 text-[0.95rem] transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
              >
                <Link to="/job-seekers">
                  Submit Your CV
                  <ChevronRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
