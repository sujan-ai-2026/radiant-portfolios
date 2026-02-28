import { motion } from "framer-motion";

export function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            />

            {/* Large Glowing Orbs */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.2, 1],
                    x: [0, -60, 0],
                    y: [0, 40, 0]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]"
            />

            {/* Center Subtle Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%] bg-primary/10 blur-[120px]"
            />
        </div>
    );
}
