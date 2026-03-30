import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import PageHeader from "../components/PageHeader";
import { useSubmitContactForm } from "../hooks/useQueries";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactDetails = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 9042014764",
    href: "tel:+919042014764",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "info@allwayservices.com",
    href: "mailto:info@allwayservices.com",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Address",
    value:
      "252 Velachery Main Road\nLandmark: Lavish Furniture\nTamil Nadu 600042",
    href: null,
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Office Hours",
    value: "Mon–Fri, 8:00 AM – 6:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const submitContactForm = useSubmitContactForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await submitContactForm.mutateAsync(form);
      setSubmitted(true);
      toast.success(
        "Message sent! We'll get back to you within 1 business day.",
      );
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for any enquiries or to get started."
        breadcrumb="Get in Touch"
      />

      {/* Contact Two-Column */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {/* Left: Contact Info */}
            <div>
              <p className="flex items-center gap-2 text-brand-sky font-semibold text-xs uppercase tracking-[0.14em] mb-3">
                Reach Us
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-navy mb-2 section-divider">
                Contact Information
              </h2>
              <p className="text-brand-text-mid leading-relaxed mt-6 mb-8">
                Our team is ready to assist you with any enquiries about our
                services, whether you're looking to hire or find employment. Get
                in touch and we'll respond promptly.
              </p>

              <ul className="space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-light-blue flex items-center justify-center text-brand-navy shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-brand-text-mid text-sm hover:text-brand-navy transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-brand-text-mid text-sm whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map Placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-gray-100 bg-brand-section h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-brand-mid-blue mx-auto mb-2" />
                  <p className="text-brand-text-mid text-sm font-medium">
                    252 Velachery Main Road
                  </p>
                  <p className="text-brand-text-light text-xs">
                    Landmark: Lavish Furniture, Tamil Nadu 600042
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 lg:p-10">
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center text-center gap-5 py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy">
                    Message Sent!
                  </h3>
                  <p className="text-brand-text-mid max-w-xs leading-relaxed">
                    Thank you, <strong>{form.name}</strong>! We've received your
                    message and will respond to <strong>{form.email}</strong>{" "}
                    within 1 business day.
                  </p>
                  <Button
                    onClick={handleReset}
                    className="bg-brand-navy hover:bg-brand-mid-blue text-white rounded-full px-8 mt-2 transition-all duration-200"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-bold text-brand-navy mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="c-name"
                          className="text-brand-navy font-semibold text-sm"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="c-name"
                          name="name"
                          data-ocid="contact.name_input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="rounded-lg border-gray-200 focus:border-brand-mid-blue"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="c-email"
                          className="text-brand-navy font-semibold text-sm"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="c-email"
                          name="email"
                          type="email"
                          data-ocid="contact.email_input"
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
                          htmlFor="c-phone"
                          className="text-brand-navy font-semibold text-sm"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="c-phone"
                          name="phone"
                          type="tel"
                          data-ocid="contact.phone_input"
                          placeholder="+91 (555) 000-0000"
                          value={form.phone}
                          onChange={handleChange}
                          className="rounded-lg border-gray-200 focus:border-brand-mid-blue"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="c-subject"
                          className="text-brand-navy font-semibold text-sm"
                        >
                          Subject <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="c-subject"
                          name="subject"
                          data-ocid="contact.subject_input"
                          placeholder="How can we help?"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          className="rounded-lg border-gray-200 focus:border-brand-mid-blue"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="c-message"
                        className="text-brand-navy font-semibold text-sm"
                      >
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="c-message"
                        name="message"
                        data-ocid="contact.message_textarea"
                        placeholder="Tell us more about your requirements or enquiry..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="rounded-lg border-gray-200 focus:border-brand-mid-blue resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      data-ocid="contact.submit_button"
                      disabled={submitContactForm.isPending}
                      className="w-full bg-brand-navy hover:bg-brand-mid-blue text-white rounded-full font-semibold py-6 text-base transition-all duration-200"
                    >
                      {submitContactForm.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Address Block */}
      <section className="py-16 bg-brand-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs">
                <MapPin className="h-6 w-6 text-brand-navy mx-auto mb-3" />
                <h3 className="font-display font-bold text-brand-navy text-sm mb-1">
                  Main Office
                </h3>
                <address className="text-brand-text-mid text-xs not-italic leading-relaxed">
                  252 Velachery Main Road
                  <br />
                  Landmark: Lavish Furniture
                  <br />
                  Tamil Nadu 600042
                </address>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs">
                <Clock className="h-6 w-6 text-brand-navy mx-auto mb-3" />
                <h3 className="font-display font-bold text-brand-navy text-sm mb-1">
                  Working Hours
                </h3>
                <p className="text-brand-text-mid text-xs leading-relaxed">
                  Monday – Friday
                  <br />
                  8:00 AM – 6:00 PM
                  <br />
                  <span className="text-brand-text-light">
                    Weekends by appointment
                  </span>
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs">
                <Phone className="h-6 w-6 text-brand-navy mx-auto mb-3" />
                <h3 className="font-display font-bold text-brand-navy text-sm mb-1">
                  Direct Line
                </h3>
                <p className="text-brand-text-mid text-xs leading-relaxed">
                  <a
                    href="tel:+919042014764"
                    className="hover:text-brand-navy transition-colors"
                  >
                    +91 9042014764
                  </a>
                  <br />
                  <a
                    href="mailto:info@allwayservices.com"
                    className="hover:text-brand-navy transition-colors"
                  >
                    info@allwayservices.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
