import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-primary" /> by {personalInfo.name}
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: personalInfo.socials.github },
            { icon: Linkedin, href: personalInfo.socials.linkedin },
            { icon: Twitter, href: personalInfo.socials.twitter },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
