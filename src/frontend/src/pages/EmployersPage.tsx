import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Headphones,
  Layers,
  MessageSquare,
  Shield,
  UserSearch,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const steps = [
  {
    step: "01",
    icon: <MessageSquare className="h-7 w-7" />,
    title: "Tell Us Your Needs",
    description:
      "Share your workforce requirements — the roles you need to fill, the skills required, your timeline, headcount, and any specific qualifications or industry certifications needed.",
  },
  {
    step: "02",
    icon: <UserSearch className="h-7 w-7" />,
    title: "We Source Candidates",
    description:
      "Our experienced recruitment team leverages our talent network and proven screening processes to source, assess, and shortlist the best-fit candidates for your specific requirements.",
  },
  {
    step: "03",
    icon: <CheckCircle2 className="h-7 w-7" />,
    title: "You Hire",
    description:
      "Review our vetted shortlist, conduct interviews with confidence, make your selections, and we'll support the onboarding process to ensure a smooth transition for your new team members.",
  },
];

const benefits = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Pre-Screened Candidates",
    description:
      "Every candidate is thoroughly vetted, background-checked, and assessed before being presented to you — saving you time and reducing hiring risk.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Fast Turnaround Time",
    description:
      "Our established talent pipeline and efficient processes mean we can present qualified candidates faster than traditional recruiting methods.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Flexible Engagement Models",
    description:
      "Whether you need permanent placements, temporary contracts, project-based staffing, or volume hiring — we adapt to your business model.",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Dedicated Account Support",
    description:
      "You'll have a dedicated recruitment specialist who understands your business, culture, and workforce needs — providing personalized service at every step.",
  },
];

export default function EmployersPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Hire the Right People, Fast"
        subtitle="Partner with AllWay Services to build the reliable, skilled workforce your business needs to grow."
        breadcrumb="For Employers"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
                Workforce Solutions
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-2 section-divider">
                Your Trusted Hiring Partner
              </h2>
              <p className="text-brand-text-mid leading-relaxed mt-6 mb-5">
                Looking to grow your team? AllWay Services provides reliable,
                pre-screened candidates tailored to your specific workforce
                needs. We take the burden of recruitment off your shoulders so
                you can focus on running your business.
              </p>
              <p className="text-brand-text-mid leading-relaxed mb-8">
                Our team of experienced recruiters understands the challenges of
                building and maintaining a quality workforce. We work as an
                extension of your HR team, delivering not just candidates, but
                the right candidates — people who will contribute to your
                organization's success from day one.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Permanent Hiring", desc: "Full-time placements" },
                  { label: "Temporary Staff", desc: "Flexible short-term" },
                  { label: "Volume Recruitment", desc: "Large-scale hiring" },
                  { label: "Specialist Search", desc: "Expert & executive" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-brand-sky shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">
                        {item.label}
                      </p>
                      <p className="text-brand-text-light text-xs">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-brand-section p-8 border border-gray-100">
              <p className="text-brand-sky font-bold text-xs uppercase tracking-widest mb-6">
                Industries We Cover
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Construction",
                  "Manufacturing",
                  "Hospitality",
                  "Healthcare",
                  "Retail",
                  "Logistics",
                  "Facilities Mgmt",
                  "Food & Beverage",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-sky shrink-0" />
                    <span className="text-brand-navy text-sm font-medium">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-brand-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
              Our Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">
              How It Works
            </h2>
            <p className="mt-4 text-brand-text-mid max-w-xl mx-auto">
              A straightforward, three-step process designed to deliver results
              quickly and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.step}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-card"
              >
                <div className="absolute top-6 right-6 font-display text-5xl font-bold text-gray-100 select-none">
                  {step.step}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center text-white mb-5 relative z-10">
                  {step.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-text-mid text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
              Why Partner With Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">
              Benefits for Employers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-7 rounded-2xl bg-brand-section border border-gray-100 hover:bg-brand-navy transition-all duration-300 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-light-blue group-hover:bg-white/15 flex items-center justify-center text-brand-navy group-hover:text-white shrink-0 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-navy group-hover:text-white text-base mb-2 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-brand-text-mid group-hover:text-white/75 text-sm leading-relaxed transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Need Manpower Now?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Don't let unfilled positions slow your business down. Reach out and
            let us build your team — quickly, professionally, and reliably.
          </p>
          <Button
            asChild
            size="lg"
            data-ocid="employers.request_button"
            className="bg-white text-brand-navy hover:bg-brand-light-blue font-bold rounded-full px-10 py-6 text-base shadow-lg transition-all duration-200"
          >
            <Link to={"/contact" as string}>
              Request Manpower
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
