import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", path: "/", ocid: "nav.home_link" },
  { label: "About Us", path: "/about", ocid: "nav.about_link" },
  { label: "Services", path: "/services", ocid: "nav.services_link" },
  { label: "Industries", path: "/industries", ocid: "nav.industries_link" },
  { label: "Job Seekers", path: "/job-seekers", ocid: "nav.job_seekers_link" },
  { label: "Employers", path: "/employers", ocid: "nav.employers_link" },
  { label: "Contact Us", path: "/contact", ocid: "nav.contact_link" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional - close menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-[0_2px_24px_-4px_oklch(0.29_0.08_245_/_0.10)] border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <nav className="container mx-auto flex h-[62px] items-center justify-between px-4 lg:px-8">
        {/* Logo / Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display font-bold text-[1.1rem] text-brand-navy hover:opacity-80 transition-opacity"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-brand-navy shadow-sm">
            <Zap className="h-[15px] w-[15px] text-white" fill="white" />
          </div>
          <span className="tracking-tight">
            <span className="text-brand-navy">FastTrack</span>
            <span className="text-brand-sky"> Services</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  data-ocid={link.ocid}
                  className={`relative px-3.5 py-2 text-[0.825rem] font-medium rounded-lg transition-colors duration-150
                    ${
                      active
                        ? "text-brand-navy bg-brand-light-blue"
                        : "text-brand-text-mid hover:text-brand-navy hover:bg-gray-50"
                    }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-sky" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button
            asChild
            size="sm"
            data-ocid="nav.cta_button"
            className="bg-brand-navy hover:bg-brand-mid-blue text-white font-semibold rounded-full px-5 h-9 text-[0.825rem] shadow-sm transition-all duration-200"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          data-ocid="nav.mobile_toggle"
          className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-section transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-slide-down shadow-lg">
          <ul className="container mx-auto px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-ocid={link.ocid}
                    className={`block px-4 py-2.5 rounded-xl text-[0.875rem] font-medium transition-colors
                      ${
                        active
                          ? "bg-brand-light-blue text-brand-navy font-semibold"
                          : "text-brand-text-mid hover:bg-gray-50 hover:text-brand-navy"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2.5 pb-1">
              <Button
                asChild
                data-ocid="nav.cta_button"
                className="w-full bg-brand-navy hover:bg-brand-mid-blue text-white font-semibold rounded-full text-sm transition-all duration-200"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
