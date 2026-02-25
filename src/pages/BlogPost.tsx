import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/lib/data";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Post not found</h1>
          <Link to="/" className="text-primary hover:underline">← Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/#blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>

            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl font-display font-bold mb-4">{post.title}</h1>

            <div className="flex gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-muted text-accent font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">{post.content}</p>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}
