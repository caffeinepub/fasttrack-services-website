import { Link } from "@tanstack/react-router";
import {
  Building2,
  Factory,
  HardHat,
  Heart,
  Hotel,
  ShoppingBag,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const industries = [
  {
    icon: <HardHat className="h-7 w-7" />,
    title: "Construction",
    description:
      "From site laborers and equipment operators to project managers and safety officers, we staff construction projects of all scales.",
  },
  {
    icon: <Factory className="h-7 w-7" />,
    title: "Manufacturing",
    description:
      "Skilled technicians, assembly workers, machine operators, and quality control personnel for production facilities.",
  },
  {
    icon: <Hotel className="h-7 w-7" />,
    title: "Hospitality",
    description:
      "Front-of-house and back-of-house talent for hotels, resorts, event venues, and hospitality operations.",
  },
  {
    icon: <Heart className="h-7 w-7" />,
    title: "Healthcare",
    description:
      "Support staff and non-clinical personnel for clinics, hospitals, care facilities, and health organizations.",
  },
  {
    icon: <ShoppingBag className="h-7 w-7" />,
    title: "Retail",
    description:
      "Sales associates, floor supervisors, stockroom staff, and customer service representatives for retail environments.",
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: "Logistics & Warehousing",
    description:
      "Drivers, forklift operators, warehouse pickers, and logistics coordinators for your supply chain operations.",
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Facilities Management",
    description:
      "Maintenance technicians, cleaning crews, security staff, and facility coordinators for managed properties.",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Cosmetology & Beauty Services",
    description:
      "Skilled beauticians, hair stylists, makeup artists, spa therapists, and salon professionals for beauty and wellness establishments.",
  },
  {
    icon: <UtensilsCrossed className="h-7 w-7" />,
    title: "Food & Beverage",
    description:
      "Kitchen staff, line cooks, servers, F&B supervisors, and catering teams for restaurants and food service.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Industries We Serve"
        subtitle="Delivering specialized workforce solutions across diverse industry sectors."
        breadcrumb="Our Reach"
      />

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="flex items-center justify-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
              <span className="h-px w-5 bg-brand-sky inline-block" />
              Sector Expertise
              <span className="h-px w-5 bg-brand-sky inline-block" />
            </p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-bold text-brand-navy mb-4">
              9 Key Industries
            </h2>
            <p className="text-brand-text-mid max-w-2xl mx-auto leading-relaxed">
              Our diverse industry experience means we understand the specific
              workforce demands, compliance requirements, and talent profiles
              each sector requires.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy hover:shadow-[0_16px_40px_-10px_oklch(0.29_0.08_245_/_0.18)] cursor-default"
              >
                {/* Hover fill */}
                <div className="absolute inset-0 bg-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Left accent bar */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-brand-light-blue group-hover:bg-brand-sky transition-colors duration-300" />

                <div className="relative z-10 pl-2">
                  {/* Index + icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-section group-hover:bg-white/15 flex items-center justify-center text-brand-navy group-hover:text-white transition-colors duration-300">
                      {industry.icon}
                    </div>
                    <span className="font-display text-4xl font-bold text-gray-100 group-hover:text-white/15 transition-colors duration-300 leading-none select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-[1rem] font-bold text-brand-navy group-hover:text-white mb-2 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-brand-text-mid group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Banner */}
      <section className="py-20 bg-brand-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-brand-navy mb-5 leading-tight">
              Don't See Your Industry?
            </h2>
            <p className="text-brand-text-mid text-lg leading-relaxed mb-9">
              Our recruitment capabilities extend beyond these sectors. Reach
              out and we'll build a customized talent acquisition strategy that
              fits your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-navy hover:bg-brand-mid-blue text-white font-semibold rounded-full px-8 h-11 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us Today
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold rounded-full px-8 h-11 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
