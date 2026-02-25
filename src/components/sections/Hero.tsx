import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { lazy, Suspense } from "react";

const ThreeScene = lazy(() => import("@/components/ThreeScene"));

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-[1]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-accent font-mono text-sm tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight"
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-primary font-mono text-lg"
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-sm"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center gap-5 pt-6"
          >
            {[
              { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: personalInfo.socials.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
