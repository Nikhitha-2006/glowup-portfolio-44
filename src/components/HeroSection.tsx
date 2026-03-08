import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import type { MouseEvent } from "react";

const HeroSection = () => {
  const resumeHref = `${import.meta.env.BASE_URL}Resume_Nikhitha_Pyda.pdf`;
  const isPreview = typeof window !== "undefined" && window.location.search.includes("__lovable_token");

  const handleResumeClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isPreview) return;

    e.preventDefault();

    try {
      const response = await fetch(resumeHref);
      if (!response.ok) throw new Error("Failed to fetch resume");

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Resume_Nikhitha_Pyda.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.location.href = resumeHref;
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="section-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-4"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-5xl md:text-7xl font-bold gradient-text mb-6"
        >
          Nikhitha Pyda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Passionate About Cyber Security
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href={resumeHref}
            download={isPreview ? undefined : "Resume_Nikhitha_Pyda.pdf"}
            target={isPreview ? "_blank" : undefined}
            rel={isPreview ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="mx-auto animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
