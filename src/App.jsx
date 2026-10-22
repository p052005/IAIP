import React from "react";
import { ArrowDown, ArrowUpRight, Code2, Github, Linkedin, Mail, MapPin, Menu, Phone, X, ExternalLink, GraduationCap, BriefcaseBusiness, Download } from "lucide-react";
import { useState } from "react";

const skills = {
  "Languages": ["JavaScript", "TypeScript", "Python", "C", "C++", "Java", "HTML5", "CSS3"],
  "Frontend": ["React.js", "Responsive UI", "Component Design"],
  "Backend & Data": ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  "Tools & Deployment": ["Git & GitHub", "Postman", "VS Code", "Vercel", "Netlify", "Render", "Docker"]
};

const projects = [
  {
    number: "01",
    name: "Astra Global Consulting",
    type: "Freelance · Completed",
    description: "A professional IT and cybersecurity consulting website with service-focused pages and a clear information structure.",
    details: ["Reusable React UI sections", "Responsive desktop and mobile layouts", "IT consulting, cybersecurity, compliance, cloud and DevOps service pages"],
    tech: ["React.js", "TypeScript", "HTML", "CSS"],
    link: "https://astraglobalconsulting.com/"
  },
  {
    number: "02",
    name: "Warriors Pulse Gym",
    type: "Freelance · Completed",
    description: "A fitness-focused website that helps visitors explore gym facilities, training programs, trainers and membership information.",
    details: ["Clear navigation and structured content", "Responsive layouts for different screens", "Service and contact information made easy to find"],
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    link: ""
  },
  {
    number: "03",
    name: "Prem Automobiles",
    type: "Freelance · In progress",
    description: "A website for an automobile workshop presenting servicing, repairs, denting and painting, washing and other workshop services.",
    details: ["Service-focused page structure", "Customer contact sections", "Responsive, user-friendly interface"],
    tech: ["React.js", "Node.js", "MongoDB", "HTML", "CSS"],
    link: ""
  }
];

const certifications = [
  "Full Stack Web Development — Udemy",
  "API Validation with Postman — Coursera",
  "AWS Basics — Coursera"
];

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Priyanshu Sharma home">PS<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"]].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO WEB DEVELOPMENT OPPORTUNITIES</div>
            <p className="hero-intro">Hello, I'm <span>Priyanshu Sharma</span></p>
            <h1>I build useful<br /><span>digital experiences.</span></h1>
            <p className="hero-description">Full-Stack Web Developer focused on creating clean, responsive websites and practical web applications with React, Node.js and MongoDB.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Get in touch <Mail size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/p052005" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/priyanshu-sharma-048446253/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="mailto:priyanshu6523@gmail.com"><Mail size={17} /> Email</a>
            </div>
          </div>
          <div className="hero-card-wrap">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-card-top"><span className="mini-dot" /><span>DEVELOPER PROFILE</span><Code2 size={18} /></div>
              <div className="monogram">P<span>S</span><i>.</i></div>
              <p className="profile-name">Priyanshu Sharma</p>
              <p className="profile-role">Full-Stack Web Developer</p>
              <div className="profile-divider" />
              <div className="profile-facts"><span><MapPin size={15} /> Gurgaon, India</span><span><GraduationCap size={15} /> B.Tech · CSIT</span></div>
              <div className="code-pills"><span>React.js</span><span>Node.js</span><span>MongoDB</span></div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-symbol">{"</>"}</span> Clean code</div>
            <div className="floating-chip chip-bottom"><span className="chip-symbol">✳</span> Responsive by design</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap content-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Turning ideas into websites." />
          <div className="about-grid">
            <p className="about-lead">I enjoy building websites that look clear, feel intuitive and work across devices.</p>
            <div className="about-body">
              <p>I'm a full-stack web developer with hands-on experience creating responsive, client-focused web projects. My work includes reusable UI components, service pages, API integration and authentication-focused application flows.</p>
              <p>Through freelance projects for consulting, fitness and automobile-service businesses, I've focused on practical user experiences, maintainable code and clear navigation.</p>
              <div className="about-highlights">
                <div><span className="highlight-icon"><Code2 size={18} /></span><div><strong>Frontend + Backend</strong><small>From responsive UI to APIs</small></div></div>
                <div><span className="highlight-icon"><BriefcaseBusiness size={18} /></span><div><strong>Client-focused projects</strong><small>Built around real business needs</small></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap content-section">
            <SectionHeading eyebrow="WHAT I WORK WITH" title="My technical toolkit." description="The languages, frameworks and tools I use to build and ship web projects." />
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items], i) => <article className="skill-card" key={group}>
                <div className="skill-card-number">0{i + 1}</div>
                <h3>{group}</h3>
                <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects I've worked on." description="A few websites I've built for businesses, with a focus on clarity, responsiveness and useful content." />
          <div className="projects-list">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-meta">{project.type}</div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
                <div className="project-tech">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
              </div>
              <div className="project-link-wrap">
                {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ExternalLink size={19} /></a> : <span className="project-in-progress">{project.number === "03" ? "In progress" : "Link to be added"}</span>}
              </div>
            </article>)}
          </div>
        </section>

        <section className="education-section" id="education">
          <div className="section-wrap content-section">
            <SectionHeading eyebrow="LEARNING & GROWTH" title="Education and milestones." />
            <div className="education-grid">
              <article className="education-card">
                <div className="timeline-icon"><GraduationCap size={20} /></div>
                <p className="eyebrow">2022 — 2026</p>
                <h3>Bachelor of Technology</h3>
                <p>Computer Science & Information Technology</p>
                <span className="muted">Dronacharya College of Engineering</span>
              </article>
              <article className="education-card">
                <div className="timeline-icon"><BriefcaseBusiness size={20} /></div>
                <p className="eyebrow">HACKATHONS</p>
                <h3>Code Cubicle 3.0</h3>
                <p>Microsoft Office</p>
                <div className="milestone-divider" />
                <h3>Matrix 2.0</h3>
                <p>IITM, Janakpuri</p>
              </article>
            </div>
            <div className="certifications">
              <h3>Certifications</h3>
              <div className="cert-list">{certifications.map(item => <div className="cert-item" key={item}><span className="cert-check">✓</span>{item}</div>)}</div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2>Let's build something<br /><span>useful together.</span></h2>
              <p className="contact-copy">I'm open to web development opportunities, freelance projects and connecting with people who build great things.</p>
              <a className="button button-primary" href="mailto:priyanshu6523@gmail.com">Send me an email <ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-details">
              <a href="mailto:priyanshu6523@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>Email</small><strong>priyanshu6523@gmail.com</strong></span><ArrowUpRight size={16} /></a>
              <a href="tel:8882114137"><span className="contact-icon"><Phone size={18} /></span><span><small>Phone</small><strong>+91 88821 14137</strong></span><ArrowUpRight size={16} /></a>
              <a href="https://www.linkedin.com/in/priyanshu-sharma-048446253/" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18} /></span><span><small>LinkedIn</small><strong>Connect with me</strong></span><ArrowUpRight size={16} /></a>
              <a href="https://github.com/p052005" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18} /></span><span><small>GitHub</small><strong>View my repositories</strong></span><ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">PS<span>.</span></a>
        <p>Designed & built by Priyanshu Sharma</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}