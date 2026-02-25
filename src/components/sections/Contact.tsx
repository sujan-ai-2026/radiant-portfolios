import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Contact</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-12">
            Get in <span className="text-gradient">touch</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                {personalInfo.email}
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                {personalInfo.location}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 p-8 rounded-xl bg-card border border-border">
                <CheckCircle className="w-12 h-12 text-primary" />
                <p className="text-lg font-display font-semibold">Message sent!</p>
                <p className="text-muted-foreground text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary text-sm hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Your message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50 glow-sm"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
