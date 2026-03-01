import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft, MessageSquare } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function CVRedirect() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full glass p-8 rounded-3xl text-center relative z-10 border border-primary/20 glow-md"
            >
                <motion.div
                    animate={{
                        rotate: [0, -10, 10, -10, 10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                    }}
                    className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                    <ShieldAlert className="w-10 h-10 text-primary" />
                </motion.div>

                <h1 className="text-3xl font-display font-bold mb-4 text-gradient">Access Denied!</h1>

                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                        Whoops! My CV is currently hidden in a <span className="text-primary font-semibold">high-security digital vault</span> protected by 256-bit sarcasm encryption.
                    </p>
                    <p>
                        To obtain the decryption key (and the PDF), please reach out to the <span className="italic">Grand Administrator of Pixels</span> directly.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                        <MessageSquare className="w-4 h-4" />
                        Contact Admin for CV
                    </a>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Safety
                    </Link>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-[10px] font-mono uppercase tracking-[0.2em] opacity-40"
                >
                    System Code: 403-RESUME-TREASURE
                </motion.p>
            </motion.div>
        </div>
    );
}
