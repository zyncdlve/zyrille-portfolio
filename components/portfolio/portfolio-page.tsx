"use client";

import { ArrowUpRight, Copy, Download, Mail, MoveUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { experience, projects, stacks } from "@/lib/portfolio-data";
import { ThemeToggle } from "./theme-toggle";

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="site-nav">
      <a className="wordmark" href="#top">
        ZYNCDLVE<span>.</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#stack">Stack</a>
        <a className="nav-contact" href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </nav>
      <ThemeToggle />
    </header>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="project-card project-card-button"
        onClick={() => setOpen(true)}
        aria-label={`View details for ${project.title}`}
      >
        <div className="project-art">
          <img src={project.image} alt="" />
          <span className="project-index">{project.year}</span>
        </div>
        <div className="project-meta">
          <div>
            <p className="eyebrow">{project.type}</p>
            <h3>{project.title}</h3>
          </div>
          <ArrowUpRight className="project-arrow" size={20} />
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </button>
      {open && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-${project.title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close project details"
            >
              Close ×
            </button>
            <img src={project.image} alt={`${project.title} project`} />
            <div className="modal-copy">
              <p className="eyebrow">
                {project.type} · {project.year}
              </p>
              <h2 id={`modal-${project.title}`}>{project.title}</h2>
              <p className="modal-role">{project.role}</p>
              <div className="modal-columns">
                <div>
                  <p className="eyebrow">The challenge</p>
                  <p>{project.challenge}</p>
                </div>
                <div>
                  <p className="eyebrow">The outcome</p>
                  <p>{project.outcome}</p>
                </div>
              </div>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {project.websiteUrl && (
                <a
                  className="modal-visit"
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live project <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function PortfolioPage() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard?.writeText("zyrillenicholequilit@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <main id="top">
      <Nav />
      <section className="hero page-grid">
        <div className="hero-kicker">
          <span className="status-dot" /> Software Developer · Open to
          opportunities · 2026
        </div>

        <div className="hero-copy">
          <p className="eyebrow"> Backend-focused · Full-stack capable </p>
          <h1>
            I build software that <br /> <em>solves real problems.</em>
          </h1>

          <p className="hero-intro">
            I&apos;m Zyrille Nichole Quilit, a Software Developer with
            experience building backend APIs, authentication features,
            databases, and full-stack applications. I enjoy turning complex
            requirements into reliable and maintainable software.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View my work <ArrowUpRight size={17} />
            </a>

            <a className="text-link" href="#about">
              More about me <MoveUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="hero-note">
          Scroll to explore <span>↓</span>
        </div>
      </section>
      <section id="about" className="about page-grid section">
        <SectionLabel number="01">About</SectionLabel>
        <div className="about-content">
          <h2>
            I enjoy turning <span>complex problems</span> into practical
            software.
          </h2>
          <div className="about-columns">
            <p>
              My experience is primarily in backend development, working with
              technologies such as C# .NET, Microsoft SQL Server, Node.js, and
              TypeScript. I&apos;ve developed and maintained APIs, worked with
              database objects, and built authentication-related features for
              production applications.
            </p>

            <p>
              I also enjoy working across the stack and continuously learning
              new technologies. I have experience with React, Next.js, AWS,
              Docker, MongoDB, and PostgreSQL, and I&apos;m interested in
              building software that is reliable, scalable, and genuinely
              useful.
            </p>
          </div>
        </div>
      </section>
      <section id="work" className="section work-section">
        <div className="page-grid">
          <SectionLabel number="02">Projects</SectionLabel>

          <div className="work-heading">
            <h2>
              Things I&apos;ve built <br /> <span>and worked on.</span>
            </h2>

            <p>
              A collection of applications, backend systems, and projects where
              I&apos;ve applied my development experience.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section className="section experience-section page-grid">
        <SectionLabel number="03">Experience</SectionLabel>
        <div className="experience-list">
          {experience.map((item, index) => (
            <div className="experience-item" key={item.company}>
              <span className="experience-number">0{index + 1}</span>
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <p className="experience-detail">{item.detail}</p>
              <span className="experience-period">{item.period}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="stack" className="section stack-section page-grid">
        <SectionLabel number="04">Tech stack</SectionLabel>

        <div className="stack-content">
          <div className="stack-heading">
            <h2>
              The right tools for <span> solving the problem.</span>
            </h2>
            <p>
              My toolkit covers backend development, frontend technologies,
              databases, cloud services, and the tools I use to build and
              maintain software.
            </p>
          </div>

          <div className="stack-grid">
            {stacks.map((stack, i) => (
              <div className="stack-item" key={stack.name}>
                <span className="stack-count">0{i + 1}</span>
                <div>
                  <h3>{stack.name}</h3>
                  <p>
                    {stack.category} · {stack.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section page-grid">
        <SectionLabel number="05">Contact</SectionLabel>
        <div className="contact-content">
          <p className="eyebrow">Have an opportunity in mind?</p>

          <h2>
            Let&apos;s build something <br /> <span>great together.</span>
          </h2>

          <a
            className="button button-primary"
            href="mailto:zyrillenicholequilit@gmail.com"
          >
            Start a conversation <Mail size={17} />
          </a>
          <div className="contact-links">
            <button onClick={copyEmail} aria-label="Copy email address">
              <span>
                {copied
                  ? "Copied to clipboard"
                  : "zyrillenicholequilit@gmail.com"}
              </span>
              <Copy size={15} />
            </button>
            <a
              href="https://www.linkedin.com/in/zyrille-nichole-quilit-5427a2338/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>
            <a
              href="https://github.com/zyncdlve"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Zyrille Nichole Quilit</span>
        <span>Built with curiosity and continuous learning.</span>
        <a href="#top">↑</a>
      </footer>
    </main>
  );
}
