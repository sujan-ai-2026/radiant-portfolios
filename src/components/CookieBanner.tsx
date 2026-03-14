import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000); // Delay for a better UX
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50"
        >
          <div className="bg-card/80 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
            
            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary animate-pulse" />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-display font-semibold">Cookie Consent</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    We use cookies to enhance your browsing experience and provide a more personalized touch to our portfolio.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    onClick={handleAccept}
                    className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] glow-sm"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-5 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Reject
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setShow(false)}
                className="absolute -top-2 -right-2 p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
