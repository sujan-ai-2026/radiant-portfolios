import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { blogPosts } from "@/lib/data";
import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Blog</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-12">
            Latest <span className="text-gradient">articles</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className="font-mono">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h4 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors flex items-start gap-1">
                  {post.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>

                <div className="flex gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary dark:text-accent font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
