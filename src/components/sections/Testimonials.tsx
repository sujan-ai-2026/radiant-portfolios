import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-surface">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Testimonials</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-12">
            What people <span className="text-gradient">say</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
