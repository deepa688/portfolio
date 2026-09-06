import { profile, signature } from "@/content/profile";
import { Icon } from "./Icon";

export function Contact() {
  const { contact } = profile;

  return (
    <>
      <section className="contact-band" id="contact">
        <div className="wrap contact">
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="contact__title">
              {contact.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="contact__note">{contact.note}</p>
            <div className="contact__actions">
              <a className="btn btn--solid" href={`mailto:${profile.email}`}>
                <Icon name="mail" />
                Email me
              </a>
              <a className="btn btn--ghost" href={profile.cvHref} download>
                <Icon name="download" />
                Download CV
              </a>
            </div>
          </div>

          <div>
            <dl className="contact__rows">
              {contact.rows.map((row) => (
                <div key={row.label}>
                  <dt>
                    <Icon name={row.icon} />
                  </dt>
                  <dd>{row.label}</dd>
                  <dd>
                    {row.href ? <a href={row.href}>{row.value}</a> : row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="contact__refs">{contact.references}</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span>© 2026 {signature}. All rights reserved.</span>
          <span>
            Updated {profile.updated}
            <Icon name="heart" />
          </span>
        </div>
      </footer>
    </>
  );
}
