import Image from "next/image";
import { profile } from "@/content/profile";
import { Icon } from "./Icon";
import { Rise } from "./Rise";

export function Education() {
  const { education, photos } = profile;

  return (
    <section className="section section--alt" id="education">
      <div className="wrap">
        <Rise className="section__head">
          <div>
            <p className="eyebrow">{education.eyebrow}</p>
            <h2 className="section__title">
              <Icon name="cap" />
              {education.title}
            </h2>
          </div>
        </Rise>

        <div className="education">
          <ul className="edu">
            {education.items.map((item, index) => (
              <Rise as="li" key={item.what} delay={index * 70}>
                <span className="chip">
                  <Icon name={item.icon} />
                </span>
                <h3 className="edu__what">{item.what}</h3>
                <span className="edu__when">{item.when}</span>
                <p className="edu__who">{item.who}</p>
              </Rise>
            ))}
          </ul>

          <div className="edu__side">
            <Rise className="edu__figure" delay={90}>
              <div className="edu__frame">
                <Image
                  src={photos.portrait.src}
                  alt={photos.portrait.alt}
                  fill
                  sizes="(min-width: 56rem) 38vw, 88vw"
                  className="edu__img"
                />
              </div>
              <p className="edu__caption">Convocation, Purbanchal University · 2022</p>
            </Rise>

            <Rise className="licence" delay={120}>
              <p className="licence__council">{education.licence.council}</p>
              <p className="licence__holder">{education.licence.holder}</p>
              <dl className="licence__rows">
                {education.licence.rows.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Rise>
          </div>
        </div>
      </div>
    </section>
  );
}
