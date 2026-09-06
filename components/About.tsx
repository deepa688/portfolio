import Image from "next/image";
import { fullName, profile } from "@/content/profile";
import { Icon } from "./Icon";
import { Rise } from "./Rise";
import { Trace } from "./Trace";

export function About() {
  const { about, photos } = profile;

  return (
    <section className="section" id="about">
      <div className="wrap about">
        <Rise className="about__figure">
          <span className="about__dots" aria-hidden="true" />
          <div className="about__frame">
            <Image
              src={photos.about.src}
              alt={photos.about.alt}
              fill
              sizes="(min-width: 60rem) 32vw, 88vw"
              className="about__img"
            />
          </div>
          <p className="about__badge">
            <span className="chip">
              <Icon name="heart" className="beat" />
            </span>
            <span>
              <strong>{about.badge.title}</strong>
              <span>{about.badge.note}</span>
            </span>
          </p>
        </Rise>

        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="about__title">
            {about.headline} <em>{about.headlineAccent}</em>
            <Trace cycles={2} className="trace--inline" />
          </h2>

          {about.body.map((paragraph) => (
            <p className="about__body" key={paragraph.slice(0, 24)}>
              {paragraph}
            </p>
          ))}

          <ul className="about__values">
            {about.values.map((value) => (
              <li key={value.label}>
                <Icon name={value.icon} />
                {value.label}
              </li>
            ))}
          </ul>

          <p className="about__sign">
            <b>{fullName}</b>
            <span>{profile.title}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
