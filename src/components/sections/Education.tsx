import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { educations } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-background relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Education</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-12">
            Where I've <span className="text-gradient">studied</span>
          </h3>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {educations.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
              className={`relative pl-12 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}
            >
              {/* Dot */}
              <div className="absolute left-3 md:left-auto md:right-auto top-1.5 w-3 h-3 rounded-full bg-primary glow-sm
                md:left-1/2 md:-translate-x-1/2"
                style={{
                  left: undefined,
                  ...(idx % 2 === 0
                    ? { right: "-6px", left: "auto" }
                    : { left: "-6px" }),
                }}
              />
              {/* Mobile dot */}
              <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary glow-sm md:hidden" />

              <div className="p-5 rounded-xl bg-card border border-border">
                <span className="text-xs font-mono text-primary">{edu.period}</span>
                <h4 className="text-lg font-display font-semibold mt-1">{edu.degree}</h4>
                <p className="text-primary dark:text-accent text-[10px] mb-2">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mt-2">{edu.department}</p>
                <div className={`flex flex-wrap gap-1.5 mt-3 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary dark:text-accent font-mono">
                    Score: {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
