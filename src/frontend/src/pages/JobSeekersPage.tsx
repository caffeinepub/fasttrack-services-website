import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Compass,
  DollarSign,
  FileText,
  Loader2,
  Search,
  ThumbsUp,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import PageHeader from "../components/PageHeader";
import { useSubmitJobApplication } from "../hooks/useQueries";

const steps = [
  {
    step: "01",
    icon: <FileText className="h-7 w-7" />,
    title: "Submit Your CV",
    description:
      "Send us your resume and tell us about your skills, experience, and career goals. Our team reviews every application personally.",
  },
  {
    step: "02",
    icon: <Search className="h-7 w-7" />,
    title: "Get Screened",
    description:
      "Our experienced recruiters review your profile, assess your qualifications, and match you with suitable opportunities that fit your skills and aspirations.",
  },
  {
    step: "03",
    icon: <ThumbsUp className="h-7 w-7" />,
    title: "Get Placed",
    description:
      "Once matched, we'll guide you through the interview and hiring process, support your negotiations, and ensure a smooth transition to your new role.",
  },
];

const benefits = [
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Free Registration",
    description:
      "No fees or hidden costs — our service to job seekers is completely free.",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Access to Multiple Employers",
    description:
      "One application opens doors to opportunities across our wide network of partner companies.",
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Expert Career Guidance",
    description:
      "Benefit from personalized advice on interview preparation, resume improvement, and career direction.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Placement Process",
    description:
      "Our streamlined matching process means faster placements — get into your new role sooner.",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Competitive Opportunities",
    description:
      "We only present positions from reputable employers offering fair compensation packages.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Ongoing Support",
    description:
      "Our team stays with you through the entire process, from first contact to successful placement.",
  },
];

interface ApplicationForm {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}

export default function JobSeekersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ApplicationForm>({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const submitJobApplication = useSubmitJobApplication();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.position) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await submitJobApplication.mutateAsync(form);
      setSubmitted(true);
      toast.success("Application submitted! We'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", position: "", message: "" });
    }, 300);
  };

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Find Your Next Opportunity"
        subtitle="Your next career move starts here. Let AllWay Services connect you with the right employer."
        breadcrumb="For Job Seekers"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
            Start Here
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            We Find Jobs That Fit You
          </h2>
          <p className="text-brand-text-mid text-lg leading-relaxed">
            Looking for work? AllWay Services connects skilled and motivated
            individuals with employers who value their talent. Whether you're
            entering the workforce, changing careers, or seeking better
            opportunities, we're here to make it happen.
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-brand-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
              Simple Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">
              How to Apply
            </h2>
            <p className="mt-4 text-brand-text-mid max-w-xl mx-auto">
              Three straightforward steps stand between you and your next job
              opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto relative">
            {/* Connector line (desktop) */}
            <div
              className="absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-brand-navy via-brand-sky to-brand-navy hidden md:block opacity-20"
              aria-hidden="true"
            />
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-card relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-brand-navy flex items-center justify-center text-white mb-4 shadow-lg">
                  {step.icon}
                </div>
                <div className="text-brand-sky font-bold text-xs uppercase tracking-widest mb-2">
                  Step {step.step}
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
              Why Register With Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">
              Benefits for Job Seekers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-brand-section border border-gray-100"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-light-blue flex items-center justify-center text-brand-navy shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-navy text-base mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-text-mid text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Submit your application today and let our team connect you with
            opportunities that match your skills and ambitions.
          </p>
          <Button
            size="lg"
            data-ocid="job_seekers.apply_button"
            onClick={() => setModalOpen(true)}
            className="bg-white text-brand-navy hover:bg-brand-light-blue font-bold rounded-full px-10 py-6 text-base shadow-lg transition-all duration-200"
          >
            Submit Your Application
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={modalOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-brand-navy">
              Submit Your Application
            </DialogTitle>
            <DialogDescription className="text-brand-text-mid text-sm">
              Fill in your details below and our team will be in touch within
              1–2 business days.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div
              data-ocid="job_seekers.success_state"
              className="py-8 flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy">
                Application Received!
              </h3>
              <p className="text-brand-text-mid text-sm max-w-xs">
                Thank you, {form.name}! We've received your application and will
                reach out to you at <strong>{form.email}</strong> soon.
              </p>
              <Button
                onClick={handleClose}
                className="bg-brand-navy hover:bg-brand-mid-blue text-white rounded-full px-8 mt-2 transition-all duration-200"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="js-name"
                    className="text-brand-navy font-semibold text-sm"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="js-name"
                    name="name"
                    data-ocid="job_seekers.name_input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-gray-200 focus:border-brand-mid-blue"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="js-email"
                    className="text-brand-navy font-semibold text-sm"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="js-email"
                    name="email"
                    type="email"
                    data-ocid="job_seekers.email_input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-gray-200 focus:border-brand-mid-blue"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="js-phone"
                    className="text-brand-navy font-semibold text-sm"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="js-phone"
                    name="phone"
                    type="tel"
                    data-ocid="job_seekers.phone_input"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-brand-mid-blue"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="js-position"
                    className="text-brand-navy font-semibold text-sm"
                  >
                    Position / Role <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="js-position"
                    name="position"
                    data-ocid="job_seekers.position_input"
                    placeholder="e.g. Warehouse Supervisor"
                    value={form.position}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-gray-200 focus:border-brand-mid-blue"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="js-message"
                  className="text-brand-navy font-semibold text-sm"
                >
                  Tell Us About Yourself
                </Label>
                <Textarea
                  id="js-message"
                  name="message"
                  data-ocid="job_seekers.message_textarea"
                  placeholder="Brief overview of your experience, skills, and what you're looking for..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="rounded-lg border-gray-200 focus:border-brand-mid-blue resize-none"
                />
              </div>
              <div className="flex gap-3 justify-end pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="rounded-full border-gray-200 text-brand-text-mid hover:text-brand-navy"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  data-ocid="job_seekers.submit_button"
                  disabled={submitJobApplication.isPending}
                  className="bg-brand-navy hover:bg-brand-mid-blue text-white rounded-full px-6 font-semibold transition-all duration-200"
                >
                  {submitJobApplication.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
