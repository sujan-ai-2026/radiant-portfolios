import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/lib/data";
import { Menu, X, Download } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display font-bold text-lg text-gradient">
          {personalInfo.name.split(" ")[0]}.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm transition-colors ${activeSection === link.href
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.label}
            </button>
          ))}
          {/* <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="w-3.5 h-3.5" />
            CV
          </a> */}
          <ThemeToggle />
        </div>

        {/* Mobile toggle & theme */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-sm py-1 ${activeSection === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/cv"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium w-fit"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
