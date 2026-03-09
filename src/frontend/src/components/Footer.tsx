import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Zap } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/", ocid: "footer.home_link" },
  { label: "About Us", path: "/about", ocid: "footer.about_link" },
  { label: "Services", path: "/services", ocid: "footer.services_link" },
  { label: "Industries", path: "/industries", ocid: "footer.industries_link" },
  {
    label: "Job Seekers",
    path: "/job-seekers",
    ocid: "footer.job_seekers_link",
  },
  { label: "Employers", path: "/employers", ocid: "footer.employers_link" },
  { label: "Contact Us", path: "/contact", ocid: "footer.contact_link" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15">
                <Zap className="h-4 w-4 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                FastTrack Services
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Connecting Talent with Opportunity — bridging the gap between
              skilled professionals and the businesses that need them.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="h-px w-8 bg-white/25" />
              <span className="text-white/40 text-xs uppercase tracking-widest font-medium">
                Manpower Solutions
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-ocid={link.ocid}
                    className="text-white/65 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="h-px w-3 bg-white/30 group-hover:w-4 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5 uppercase tracking-wider text-sm">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand-sky mt-0.5 shrink-0" />
                <a
                  href="tel:+919042014764"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  +91 9042014764
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand-sky mt-0.5 shrink-0" />
                <a
                  href="mailto:info@fasttrackservices.com"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  info@fasttrackservices.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-sky mt-0.5 shrink-0" />
                <address className="text-white/70 text-sm not-italic leading-relaxed">
                  252 Velachery Main Road
                  <br />
                  Landmark: Lavish Furniture
                  <br />
                  Tamil Nadu 600042
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {currentYear} FastTrack Services. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/70 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
