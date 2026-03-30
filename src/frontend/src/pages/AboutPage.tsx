import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Shield, Star, Users, Zap } from "lucide-react";
import PageHeader from "../components/PageHeader";

const coreValues = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Integrity",
    description:
      "We operate with transparency and honesty in all our interactions with clients and candidates.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Excellence",
    description:
      "We set high standards for ourselves in service delivery, candidate quality, and client satisfaction.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Reliability",
    description:
      "Clients and candidates can count on us to deliver on our commitments, on time and every time.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Partnership",
    description:
      "We build lasting relationships based on trust, mutual respect, and shared success.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Empowerment",
    description:
      "We believe in empowering individuals to achieve their career aspirations and organizations to thrive.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="About AllWay Services"
        subtitle="Our story, mission, and the values that drive everything we do."
        breadcrumb="Our Company"
      />

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="flex items-center justify-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
              <span className="h-px w-5 bg-brand-sky inline-block" />
              Our Story
              <span className="h-px w-5 bg-brand-sky inline-block" />
            </p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-bold text-brand-navy mb-5 leading-tight">
              Company Overview
            </h2>
            <div className="h-[3px] w-12 bg-brand-sky rounded-full mx-auto mb-8" />
            <p className="text-brand-text-mid leading-relaxed text-lg mb-5">
              AllWay Services is a newly established manpower solutions provider
              committed to bridging the gap between skilled talent and
              businesses that need workforce support. We specialize in
              connecting the right people to the right opportunities —
              efficiently, reliably, and with a personalized touch.
            </p>
            <p className="text-brand-text-mid leading-relaxed">
              Founded with a vision to transform the way businesses approach
              staffing and talent acquisition, AllWay Services combines
              cutting-edge recruitment practices with deep industry knowledge to
              deliver workforce solutions that genuinely make a difference. We
              understand that every placement represents not just a business
              need, but a life opportunity — and we take that seriously.
            </p>
          </div>

          {/* Overview key points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                value: "Newly Est.",
                label: "Dynamic & Agile",
                sub: "Modern approach to recruitment",
              },
              {
                value: "Multi-Industry",
                label: "Broad Reach",
                sub: "Serving 8+ key industries",
              },
              {
                value: "End-to-End",
                label: "Full Service",
                sub: "Sourcing through onboarding",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-8 rounded-2xl bg-brand-section border border-gray-100"
              >
                <p className="font-display text-2xl font-bold text-brand-navy mb-1">
                  {item.value}
                </p>
                <p className="font-semibold text-brand-mid-blue text-sm mb-1">
                  {item.label}
                </p>
                <p className="text-brand-text-light text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="flex items-center justify-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
              <span className="h-px w-5 bg-brand-sky inline-block" />
              Direction
              <span className="h-px w-5 bg-brand-sky inline-block" />
            </p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-bold text-brand-navy leading-tight">
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <Card className="bg-brand-navy border-0 rounded-2xl shadow-card overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
                aria-hidden="true"
              />
              <CardContent className="p-10 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To deliver value to organizations and empower individuals
                  seeking employment opportunities by providing the right talent
                  for the right job — building bridges that advance both
                  businesses and careers.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-white border border-gray-100 rounded-2xl shadow-card overflow-hidden relative">
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-mid-blue to-brand-sky"
                aria-hidden="true"
              />
              <CardContent className="p-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-light-blue flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-brand-navy" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-4">
                  Our Vision
                </h3>
                <p className="text-brand-text-mid leading-relaxed">
                  To become a trusted leader in manpower solutions across
                  industries — recognized for our commitment to quality,
                  integrity, and the positive impact we create in the lives of
                  the people and organizations we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="flex items-center justify-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
              <span className="h-px w-5 bg-brand-sky inline-block" />
              What We Stand For
              <span className="h-px w-5 bg-brand-sky inline-block" />
            </p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-bold text-brand-navy leading-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-brand-text-mid max-w-xl mx-auto leading-relaxed">
              Five principles that guide every decision and every relationship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white hover:bg-brand-navy transition-all duration-300 shadow-card card-hover"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-light-blue group-hover:bg-white/15 flex items-center justify-center text-brand-navy group-hover:text-white mb-4 transition-colors duration-300">
                  {value.icon}
                </div>
                <div className="text-xs text-brand-sky group-hover:text-white/60 font-bold uppercase tracking-widest mb-1 transition-colors duration-300">
                  0{index + 1}
                </div>
                <h3 className="font-display text-base font-bold text-brand-navy group-hover:text-white mb-2 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-brand-text-light group-hover:text-white/70 text-xs leading-relaxed transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
