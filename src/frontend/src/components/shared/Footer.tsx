import { Link } from "@tanstack/react-router";
import { GraduationCap, Instagram, Linkedin, Twitter } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-indigo-900 text-white/80">
      {/* Top wave divider */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 48"
          className="w-full text-background fill-current"
          preserveAspectRatio="none"
          style={{ height: "48px" }}
          role="presentation"
        >
          <path d="M0,48 L1440,0 L1440,48 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
                <GraduationCap size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Knowledge<span className="text-violet-400">Loop</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              The student knowledge marketplace where brilliant minds share
              notes, guides, and lectures — and earn from their expertise.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                className="text-white/50 hover:text-violet-400 transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white/50 hover:text-violet-400 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white/50 hover:text-violet-400 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://github.com"
                className="text-white/50 hover:text-violet-400 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-grotesk font-semibold text-white uppercase text-xs tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Explore Notes", href: "/explore" },
                { label: "Upload Resources", href: "/profile" },
                { label: "Create Account", href: "/register" },
                { label: "Login", href: "/login" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-violet-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-grotesk font-semibold text-white uppercase text-xs tracking-widest">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <button
                  type="button"
                  className="hover:text-violet-300 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-violet-300 transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-violet-300 transition-colors"
                >
                  For Educators
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-violet-300 transition-colors"
                >
                  Seller Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-violet-300 transition-colors"
                >
                  Help Center
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            © {year}. Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              className="text-violet-400 hover:text-violet-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="hover:text-white/70 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
