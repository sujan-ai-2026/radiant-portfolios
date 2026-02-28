import { useParams, Link } from "react-router-dom";
import { projects } from "@/lib/data";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">← Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/#projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>

            <div className="flex items-center gap-4 mb-4">
              {project.image && (
                <img
                  src={project.image}
                  alt=""
                  className="w-10 h-10 object-contain"
                />
              )}
              <h1 className="text-4xl font-display font-bold">{project.title}</h1>
            </div>
            <p className="text-primary dark:text-accent text-sm font-mono mb-4">{project.category}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:text-accent font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {project.longDescription}
            </p>

            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-foreground text-sm hover:bg-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
