import { Button } from "@/components/ui/button";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Globe,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Printer,
  Settings,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Recruitment & Staffing",
    desc: "End-to-end talent acquisition from sourcing to onboarding",
  },
  {
    title: "Manpower Supply",
    desc: "Reliable workforce across all skill levels",
  },
  {
    title: "Contract Staffing",
    desc: "Flexible short-term and project-based staffing",
  },
  {
    title: "Customized Hiring Solutions",
    desc: "Tailored workforce strategies for your business",
  },
  {
    title: "Background Verification",
    desc: "Thorough screening and candidate verification",
  },
  { title: "HR Consulting", desc: "Strategic workforce planning and advisory" },
];

const industries = [
  "Manufacturing & Production",
  "IT & Technology",
  "Healthcare & Pharma",
  "Construction & Real Estate",
  "Retail & FMCG",
  "Hospitality & Tourism",
  "Logistics & Supply Chain",
  "Education & Training",
  "Cosmetology & Beauty Services",
];

const stats = [
  { value: "500+", label: "Placements Made", icon: TrendingUp },
  { value: "50+", label: "Partner Companies", icon: Building2 },
  { value: "9", label: "Industries Served", icon: Globe },
  { value: "98%", label: "Client Satisfaction", icon: Star },
];

export default function PresentationPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Print button - hidden during print */}
      <div className="print:hidden sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-700" fill="currentColor" />
          <span className="font-bold text-blue-900 text-sm">
            AllWay Services – Presentation
          </span>
        </div>
        <Button
          onClick={handlePrint}
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-5 h-9 text-sm font-semibold gap-2"
        >
          <Printer className="h-4 w-4" />
          Save as PDF
        </Button>
      </div>

      {/* Slides container */}
      <div className="max-w-[900px] mx-auto py-8 px-4 print:p-0 print:max-w-none space-y-6 print:space-y-0">
        {/* ── Slide 1: Title / Cover ── */}
        <div className="slide bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white rounded-2xl print:rounded-none overflow-hidden shadow-xl aspect-[16/9] flex flex-col justify-center items-center relative p-10">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(45deg, white 1px, transparent 1px), linear-gradient(-45deg, white 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="absolute top-6 left-8 flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-white/20 flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" fill="white" />
            </div>
            <span className="font-bold text-white/80 text-sm">
              AllWay Services
            </span>
          </div>
          <div className="relative z-10 text-center">
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Company Presentation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              AllWay Services
            </h1>
            <div className="h-[3px] w-16 bg-blue-400 mx-auto mb-5 rounded-full" />
            <p className="text-xl text-blue-200 font-medium mb-3">
              We Handle It All
            </p>
            <p className="text-white/65 text-base max-w-sm mx-auto leading-relaxed">
              Professional Manpower Recruitment & Staffing Solutions
            </p>
          </div>
          <div className="absolute bottom-6 right-8 text-white/30 text-xs">
            Slide 1
          </div>
        </div>

        {/* ── Slide 2: About Us ── */}
        <div className="slide bg-white rounded-2xl print:rounded-none overflow-hidden shadow-xl aspect-[16/9] flex flex-col justify-center relative p-10">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-700" />
          <div className="pl-6">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.15em] mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              About AllWay Services
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  AllWay Services is a professional manpower solutions provider
                  committed to bridging the gap between skilled talent and the
                  businesses that need workforce support.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We combine industry expertise with a personalized approach to
                  deliver exceptional staffing outcomes for employers and job
                  seekers alike.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Award, text: "Industry Expertise" },
                  { icon: HeartHandshake, text: "Personalized Service" },
                  { icon: CheckCircle2, text: "Verified Candidates" },
                  { icon: TrendingUp, text: "Fast Turnaround" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="h-3.5 w-3.5 text-blue-700" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 right-7 text-gray-300 text-xs">
            Slide 2
          </div>
        </div>

        {/* ── Slide 3: Key Stats ── */}
        <div className="slide bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl print:rounded-none overflow-hidden shadow-xl aspect-[16/9] flex flex-col justify-center relative p-10">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, white, transparent)",
            }}
          />
          <div className="text-center mb-8">
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.15em] mb-2">
              By the Numbers
            </p>
            <h2 className="text-3xl font-bold">Our Track Record</h2>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="text-center bg-white/10 rounded-2xl p-5 border border-white/15"
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-5 w-5 text-blue-200" />
                </div>
                <p className="text-3xl font-bold text-white mb-1">{value}</p>
                <p className="text-blue-200/80 text-xs uppercase tracking-wide leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute bottom-5 right-7 text-white/20 text-xs">
            Slide 3
          </div>
        </div>

        {/* ── Slide 4: Services ── */}
        <div className="slide bg-white rounded-2xl print:rounded-none overflow-hidden shadow-xl aspect-[16/9] flex flex-col justify-center relative p-10">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-700" />
          <div className="pl-6">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.15em] mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Our Services
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="bg-blue-50 rounded-xl p-4 border border-blue-100"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-700 font-bold text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-blue-200" />
                  </div>
                  <h3 className="font-bold text-blue-900 text-sm mb-1 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-5 right-7 text-gray-300 text-xs">
            Slide 4
          </div>
        </div>

        {/* ── Slide 5: Industries ── */}
        <div className="slide bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl print:rounded-none overflow-hidden shadow-xl aspect-[16/9] flex flex-col justify-center relative p-10">
          <div className="text-center mb-7">
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.15em] mb-2">
              Coverage
            </p>
            <h2 className="text-3xl font-bold">9 Key Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {industries.map((ind, i) => (
              <div
                key={ind}
                className="flex items-center gap-3 bg-white/8 rounded-xl px-4 py-3 border border-white/10"
              >
                <span className="text-blue-400 font-bold text-xs shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/85 text-sm font-medium leading-tight">
                  {ind}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-5 right-7 text-white/20 text-xs">
            Slide 5
          </div>
        </div>

        {/* ── Slide 6: For Job Seekers ── */}
        <div className="slide bg-white rounded-2xl print:rounded-none overflow-hidden shadow-xl aspect-[16/9] flex flex-col justify-center relative p-10">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-700" />
          <div className="pl-6 grid grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                For Candidates
              </p>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Job Seekers
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                We connect talented professionals with the right opportunities
                across industries. Our team works with you to understand your
                skills and career goals.
              </p>
              <div className="inline-flex items-center gap-2 bg-blue-700 text-white rounded-full px-5 py-2 text-sm font-semibold">
                <Users className="h-4 w-4" />
                Submit Your CV Today
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Free registration and career counseling",
                "Access to exclusive job openings",
                "Resume building and interview coaching",
                "Placement support across 9 industries",
                "Ongoing career growth assistance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-5 right-7 text-gray-300 text-xs">
            Slide 6
          </div>
        </div>

        {/* ── Slide 7: For Employers ── */}
        <div className="slide bg-blue-900 text-white rounded-2xl print:rounded-none overflow-hidden shadow-xl aspect-[16/9] flex flex-col justify-center relative p-10">
          <div className="absolute top-0 right-0 w-48 h-full bg-blue-800/50" />
          <div className="grid grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                For Businesses
              </p>
              <h2 className="text-3xl font-bold mb-4">Employers</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                We provide end-to-end recruitment and staffing solutions
                tailored to your business needs, culture, and timelines.
              </p>
              <div className="inline-flex items-center gap-2 bg-white text-blue-900 rounded-full px-5 py-2 text-sm font-semibold">
                <Briefcase className="h-4 w-4" />
                Request Manpower
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Dedicated account manager",
                "Pre-screened and verified candidates",
                "Flexible staffing models (temp/perm/contract)",
                "Fast 48-72 hour turnaround",
                "Post-placement follow-up support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-blue-300 mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-5 right-7 text-white/20 text-xs">
            Slide 7
          </div>
        </div>

        {/* ── Slide 8: Contact ── */}
        <div className="slide bg-white rounded-2xl print:rounded-none overflow-hidden shadow-xl aspect-[16/9] flex flex-col justify-center relative p-10">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-700" />
          <div className="pl-6">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.15em] mb-2">
              Get in Touch
            </p>
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-500 text-sm mb-7">
              We're ready to help you find the right people or the right
              opportunity.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-11 h-11 rounded-xl bg-blue-700 flex items-center justify-center mb-3">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <p className="text-blue-900 font-bold text-sm mb-1">Phone</p>
                <p className="text-gray-600 text-sm">+91 9042014764</p>
              </div>
              <div className="flex flex-col items-center text-center p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-11 h-11 rounded-xl bg-blue-700 flex items-center justify-center mb-3">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <p className="text-blue-900 font-bold text-sm mb-1">Email</p>
                <p className="text-gray-600 text-sm">info@allwayservices.com</p>
              </div>
              <div className="flex flex-col items-center text-center p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-11 h-11 rounded-xl bg-blue-700 flex items-center justify-center mb-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <p className="text-blue-900 font-bold text-sm mb-1">Address</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  252 Velachery Main Road, Landmark: Lavish Furniture, Tamil
                  Nadu 600042
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 right-7 flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-blue-700" fill="currentColor" />
              <span className="font-bold text-blue-900 text-xs">
                AllWay Services – We Handle It All
              </span>
            </div>
            <span className="text-gray-300 text-xs ml-2">Slide 8</span>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { size: A4 landscape; margin: 0; }
          body { background: white !important; }
          .slide {
            page-break-after: always;
            break-after: page;
            width: 100vw !important;
            height: 100vh !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            aspect-ratio: unset !important;
          }
        }
      `}</style>
    </div>
  );
}
