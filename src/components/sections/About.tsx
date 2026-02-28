import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import { MapPin, Mail, Code2 } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-8">
            Turning ideas into <span className="text-gradient">digital reality</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  {personalInfo.location}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  {personalInfo.email}
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-40 h-40 rounded-2xl bg-gradient-primary flex items-center justify-center glow-md">
                <Code2 className="w-16 h-16 text-primary-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-3 w-full text-center">
                {[
                  { label: "Years Exp", value: "4+" },
                  { label: "Projects", value: "15+" },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg bg-card border border-border">
                    <p className="text-xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
