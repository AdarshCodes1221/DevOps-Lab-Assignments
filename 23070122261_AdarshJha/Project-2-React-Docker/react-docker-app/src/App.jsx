import './App.css'

const skills = [
  'React',
  'JavaScript',
  'Python',
  'Docker',
  'Jenkins',
  'Git',
  'GitHub',
  'AWS',
  'Linux',
  'MySQL',
]

const projects = [
  {
    title: 'Flask Docker App',
    description:
      'Built a containerized Flask application with a clean deployment flow and reproducible local setup.',
    tags: ['Python', 'Flask', 'Docker'],
  },
  {
    title: 'DevOps Jenkins Pipeline',
    description:
      'Designed a Jenkins pipeline to automate build, test, and delivery steps for faster release cycles.',
    tags: ['Jenkins', 'CI/CD', 'Automation'],
  },
  {
    title: 'React Docker Deployment',
    description:
      'Packaged a React frontend into Docker for consistent builds and deployment across environments.',
    tags: ['React', 'Docker', 'Deployment'],
  },
  {
    title: 'Financial Fraud Detection',
    description:
      'Explored data-driven patterns for identifying suspicious activity with a focus on reliable predictions.',
    tags: ['Python', 'Data Analysis', 'ML'],
  },
  {
    title: 'Portfolio Website',
    description:
      'Created a responsive personal portfolio to showcase projects, skills, education, and contact details.',
    tags: ['React', 'UI Design', 'Responsive'],
  },
]

const education = [
  {
    institution: 'Symbiosis Institute of Technology',
    degree: 'B.Tech Computer Science Engineering',
    detail: 'Focused on software engineering, cloud concepts, and practical systems development.',
  },
]

const contactLinks = [
  {
    label: 'Email',
    value: 'adarsh.jha@example.com',
    href: 'mailto:adarsh.jha@example.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/adarshjha',
    href: 'https://github.com/adarshjha',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/adarshjha',
    href: 'https://www.linkedin.com/in/adarshjha',
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="portfolio-shell">
      <div className="background-orb background-orb-left" aria-hidden="true" />
      <div className="background-orb background-orb-right" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home">
          Adarsh Jha
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Portfolio</span>
            <h1>Adarsh Jha</h1>
            <h2>Computer Science Engineering Student</h2>
            <p className="hero-subtitle">
              Aspiring DevOps Engineer | Cloud | AWS | Docker | Jenkins
            </p>
            <p className="hero-description">
              I build practical, polished web experiences and enjoy turning technical
              workflows into reliable systems. My focus is on modern development, automation,
              and deployment practices that make software easier to ship and maintain.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-stats" aria-label="Highlights">
              <div>
                <strong>5+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>10</strong>
                <span>Core Skills</span>
              </div>
              <div>
                <strong>DevOps</strong>
                <span>Primary Focus</span>
              </div>
            </div>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="profile-card">
              <div className="profile-glow" />
              <div className="profile-badge">Available for opportunities</div>
              <div className="profile-code">
                <span>build()</span>
                <span>deploy()</span>
                <span>iterate()</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="about">
          <SectionHeading
            eyebrow="About"
            title="Professional introduction"
            description="A focused developer building a strong foundation in software engineering, cloud tooling, and automation."
          />
          <div className="about-card">
            <p>
              I am a Computer Science Engineering student with a strong interest in DevOps,
              cloud platforms, and full-stack development. I enjoy working on projects that
              combine code, infrastructure, and automation to create dependable user-facing
              products. My goal is to grow as a developer who can build, ship, and support
              production-ready systems with confidence.
            </p>
          </div>
        </section>

        <section className="content-section" id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Tools and technologies"
            description="A selection of the technologies I work with while building and deploying modern applications."
          />
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill}>
                <span className="skill-chip">{skill}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Projects that highlight deployment, automation, and frontend craftsmanship."
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="tag-row" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="education">
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            description="The academic foundation supporting my work in software development and DevOps."
          />
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.institution}>
                <span className="timeline-dot" aria-hidden="true" />
                <h3>{item.institution}</h3>
                <p className="education-degree">{item.degree}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect"
            description="Open to conversations about internships, collaboration, and technical projects."
          />
          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a className="contact-card" href={link.href} key={link.label}>
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
