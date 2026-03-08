import { FadeInSection } from "./FadeInSection";
import { ExternalLink, Github } from "lucide-react";

const skills = ["SQL", "HTML", "CSS", "JavaScript", "Python", "Java"];

const certificates = [
  { title: "Microsoft: Introduction to Computers and Operating Systems", url: "https://www.coursera.org/account/accomplishments/verify/XXXXXXXX" },
  { title: "Secure Software Design", url: "#" },
  { title: "Software Design as an Abstraction", url: "#" },
  { title: "Software Design Methods and Tools", url: "#" },
  { title: "Software Design as an Element of the Software Development Lifecycle", url: "#" },
  { title: "Software Design Threats and Mitigations", url: "#" },
];

const projects = [
  {
    title: "CarcinoScope",
    desc: "Real-time cancer risk prediction web app using Flask and TensorFlow. Designed for diagnostic support with secure data handling and intuitive UI.",
    github: "https://github.com/Nikhitha-2006/CarcinoScope",
  },
  {
    title: "ZoneVault",
    desc: "An offline-first emergency contact vault designed for secure, private access and rapid sharing during critical situations.",
    github: "https://github.com/Nikhitha-2006/ZoneVault",
  },
  {
    title: "Smart Retail Management System",
    desc: "A dynamic dashboard solution for tracking inventory and sales using SQL, designed to streamline operations for small businesses.",
    github: "https://github.com/Nikhitha-2006/Smart-Retail-Management-System",
  },
  {
    title: "IoT-Based Natural Disaster Alert System",
    desc: "Uses sensor networks and real-time data to detect disasters and trigger rapid alerts for community safety.",
    github: "https://github.com/Nikhitha-2006/IoT-Natural-Disaster-Alert",
  },
];

const PortfolioSections = () => {
  return (
    <>
      {/* About */}
      <section id="about" className="py-20">
        <FadeInSection className="section-container">
          <SectionHeading>About Me</SectionHeading>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <p className="text-foreground/80 leading-relaxed text-lg">
              I'm a 3rd-year B.Tech student exploring ethical, offline-first web applications that solve real-world problems. I enjoy blending AI, intuitive design, and scalable backend concepts to build meaningful solutions.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg mt-4">
              My interests include frontend-backend integration, machine learning workflows, and algorithmic problem-solving in Java. I also document my process with architecture diagrams and markdown guides to make tech more accessible.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-muted/40">
        <FadeInSection className="section-container">
          <SectionHeading>Education</SectionHeading>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-foreground">B.Tech — 3rd Year</h3>
            <p className="text-muted-foreground mt-1">Currently pursuing my degree with a focus on software development & cybersecurity.</p>
          </div>
        </FadeInSection>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <FadeInSection className="section-container">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <FadeInSection key={skill} delay={i * 0.08}>
                <div className="group bg-card rounded-xl p-6 border border-border text-center shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-20 bg-muted/40">
        <FadeInSection className="section-container">
          <SectionHeading>Certificates</SectionHeading>
          <p className="text-muted-foreground mb-8 text-lg">
            Certifications I've earned to strengthen my technical foundation and showcase my learning journey.
          </p>
          <div className="space-y-4">
            {certificates.map((cert, i) => (
              <FadeInSection key={i} delay={i * 0.06}>
                <div className="bg-card rounded-xl p-5 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-medium text-foreground">{cert.title}</span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity shrink-0"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <FadeInSection className="section-container">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex gap-3 mt-5">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                    >
                      <Github size={15} /> GitHub
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-muted/40">
        <FadeInSection className="section-container">
          <SectionHeading>Contact</SectionHeading>
          <p className="text-muted-foreground text-lg mb-8">
            Feel free to connect, collaborate, or just say hello through any of the platforms below:
          </p>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-4">
            <ContactLink label="Email" href="mailto:nikhitha.pyda@gmail.com" text="nikhitha.pyda@gmail.com" />
            <ContactLink label="GitHub" href="https://github.com/Nikhitha-2006" text="github.com/Nikhitha-2006" />
            <ContactLink label="LinkedIn" href="https://linkedin.com/in/nikhitha-pyda-467482291" text="linkedin.com/in/nikhitha-pyda-467482291" />
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        © 2025 Nikhitha Pyda. All rights reserved.
      </footer>
    </>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">{children}</h2>
);

const ContactLink = ({ label, href, text }: { label: string; href: string; text: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
    <span className="font-semibold text-foreground min-w-[80px]">{label}:</span>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline break-all"
    >
      {text}
    </a>
  </div>
);

export default PortfolioSections;
