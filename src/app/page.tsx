import { MesaSketch } from "@/components/MesaSketch";
import { Reveal } from "@/components/Reveal";
import { RumiSketch } from "@/components/RumiSketch";
import { experience, principles, profile, projects, stack, type Project } from "@/data/site";

const sketches: Partial<Record<Project["id"], React.ReactNode>> = {
  mesa: <MesaSketch />,
  rumi: <RumiSketch />,
};

export default function Home() {
  const contactLinks = [
    profile.email && { label: "Email me", href: `mailto:${profile.email}` },
    profile.linkedin && { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <div className="aura" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <a className="skip" href="#work">
        Skip to work
      </a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#top" className="brand">
            Vicente Viel
          </a>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="wrap hero">
          <h1 className="hero-name">
            <span>Vicente</span>
            <span>Viel</span>
          </h1>
          <div className="hero-body">
            <p className="hero-lead">
              Full-stack developer with {profile.yearsOfExperience} years of experience building web and mobile
              products. I turn messy, shared workflows like a busy restaurant floor or a household&apos;s bills
              into software that&apos;s clear to use.
            </p>
            <p className="hero-status">
              <span className="dot" aria-hidden="true" />
              Based in {profile.location}. Open to remote roles, in English or Spanish.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#work">
                See my work
              </a>
              <a className="btn" href={contactLinks[0].href}>
                {contactLinks[0].label}
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="wrap section" aria-labelledby="work-title">
          <h2 id="work-title" className="section-title">
            Selected work
          </h2>

          {projects.map((p) => {
            const sketch = sketches[p.id];
            return (
              <article key={p.id} className={`project ${sketch ? "" : "project-compact"}`}>
                <div className="project-text">
                  <h3>{p.name}</h3>
                  <p className="project-kind">{p.kind}</p>
                  <p className="project-summary">{p.summary}</p>
                  <p className="project-role">{p.role}</p>
                  {p.highlights.length > 0 && (
                    <ul className="project-highlights">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                  <p className="project-stack">
                    <span className="visually-hidden">Built with: </span>
                    {p.stack.join(", ")}
                  </p>
                  {p.note && <p className="project-note">{p.note}</p>}
                  {p.links.map((l) => (
                    <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
                {sketch && <Reveal className="project-visual">{sketch}</Reveal>}
              </article>
            );
          })}
        </section>

        <section id="experience" className="wrap section" aria-labelledby="experience-title">
          <div className="split">
            <div>
              <h2 id="experience-title" className="section-title">
                {profile.yearsOfExperience} years of shipping software
              </h2>
              <ol className="timeline">
                {experience.map((e) => (
                  <li key={e.title}>
                    <span className="timeline-period">{e.period}</span>
                    <div>
                      <h3>
                        {e.title}, <span>{e.place}</span>
                      </h3>
                      <p>{e.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="principles" aria-labelledby="principles-title">
              <h3 id="principles-title">How I work</h3>
              <ul>
                {principles.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="wrap section" aria-labelledby="stack-title">
          <h2 id="stack-title" className="section-title">
            Tools I use
          </h2>
          <dl className="stack">
            {stack.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="wrap section contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Hiring for a remote team?</h2>
          <p>
            I&apos;m looking for full-time remote roles as a full-stack, frontend or React Native developer. I&apos;m
            happy to talk about a role, a project or my work on Mesa and Rumi.
          </p>
          <div className="actions">
            {contactLinks.map((l, i) => (
              <a
                key={l.href}
                className={`btn ${i === 0 ? "btn-primary" : ""}`}
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="wrap site-footer">
        <p>© 2026 Vicente Viel. Built with Next.js and TypeScript.</p>
      </footer>
    </>
  );
}
