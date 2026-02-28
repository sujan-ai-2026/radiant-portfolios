import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative p-2 rounded-full bg-background border border-border hover:bg-accent hover:text-accent-foreground transition-colors overflow-hidden"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    y: isDark ? 24 : 0,
                    opacity: isDark ? 0 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <Sun className="w-5 h-5 text-yellow-500" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    y: isDark ? 0 : -24,
                    opacity: isDark ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center"
            >
                <Moon className="w-5 h-5 text-blue-400" />
            </motion.div>
        </button>
    );
}
