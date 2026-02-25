import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Skills</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-12">
            My <span className="text-gradient">tech stack</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h4 className="text-lg font-display font-semibold mb-6 text-accent">{category.title}</h4>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: catIdx * 0.15 + skillIdx * 0.1 + 0.3,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
