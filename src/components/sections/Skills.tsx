import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories } from "@/lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, catIdx) => {
            const isExpanded = expandedCategories.includes(category.title);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.1, duration: 0.6 }}
                className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden ${isExpanded ? "glow-sm shadow-lg shadow-primary/5" : ""
                  }`}
              >
                <div
                  className="flex items-center justify-between gap-3 mb-6 cursor-pointer group"
                  onClick={() => toggleCategory(category.title)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 rounded-full bg-gradient-primary" />
                    <h4 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h4>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-all duration-300">
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </div>

                <div className="relative min-h-[100px] flex items-start pt-4">
                  <AnimatePresence mode="wait">
                    {!isExpanded ? (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-wrap gap-2 w-full"
                      >
                        {category.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-3 py-1 rounded-full bg-secondary/30 text-secondary-foreground text-[10px] font-medium border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 gap-x-4 gap-y-6 w-full py-2"
                      >
                        {category.skills.map((skill, skillIdx) => (
                          <div key={skill.name} className="flex flex-col items-center gap-2 group/skill">
                            <div className="relative w-14 h-14 flex items-center justify-center">
                              <svg className="w-full h-full -rotate-90">
                                <circle
                                  cx="28"
                                  cy="28"
                                  r="24"
                                  className="stroke-muted/30 fill-none"
                                  strokeWidth="3.5"
                                />
                                <motion.circle
                                  cx="28"
                                  cy="28"
                                  r="24"
                                  className="stroke-primary fill-none transition-all duration-1000"
                                  strokeWidth="3.5"
                                  strokeDasharray="150.8"
                                  initial={{ strokeDashoffset: 150.8 }}
                                  animate={isInView ? { strokeDashoffset: 150.8 - (150.8 * skill.level) / 100 } : {}}
                                  transition={{ delay: 0.1 + skillIdx * 0.05, duration: 1.5, ease: "easeOut" }}
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="absolute text-[10px] font-mono font-bold text-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <span className="text-[10px] font-medium text-muted-foreground text-center line-clamp-1 group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
