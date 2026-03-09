import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Notes", href: "/explore" },
  { label: "Upload", href: "/profile" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const isDark =
    currentPath === "/" ||
    currentPath === "/login" ||
    currentPath === "/register";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: setIsMenuOpen is stable
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isDark
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-xs"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shadow-brand">
            <GraduationCap className="w-4.5 h-4.5 text-white" size={18} />
          </div>
          <span
            className={`font-display font-bold text-lg tracking-tight transition-colors ${
              isScrolled || !isDark ? "text-indigo-600" : "text-white"
            }`}
          >
            Knowledge<span className="text-violet-500">Loop</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPath === link.href
                    ? isDark && !isScrolled
                      ? "bg-white/15 text-white"
                      : "bg-indigo-50 text-indigo-600"
                    : isDark && !isScrolled
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/login">
            <Button
              variant="ghost"
              size="sm"
              className={`font-medium transition-all ${
                isDark && !isScrolled
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : ""
              }`}
              data-ocid="nav.login_button"
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              size="sm"
              className="gradient-brand text-white font-medium shadow-brand hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] transition-all border-0"
              data-ocid="nav.signup_button"
            >
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isDark && !isScrolled
              ? "text-white hover:bg-white/10"
              : "text-foreground hover:bg-muted"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    currentPath === link.href
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2 border-t border-border">
                <Link to="/login" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full"
                    data-ocid="nav.login_button"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="flex-1">
                  <Button
                    className="w-full gradient-brand text-white border-0"
                    data-ocid="nav.signup_button"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
