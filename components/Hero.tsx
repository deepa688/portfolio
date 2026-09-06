import Image from "next/image";
import { profile } from "@/content/profile";
import { Icon } from "./Icon";
import { Rise } from "./Rise";
import { Trace } from "./Trace";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div>
          <div className="hero__meta load load--1">
            <p className="hero__badge">
              <span>
                <Icon name="cross" className="beat" />
              </span>
              {profile.title}
            </p>
            <p className="status">{profile.status}</p>
          </div>

          <h1 className="hero__name load load--2">
            {profile.firstName}
            <span>
              {profile.lastName}, {profile.credential}
            </span>
          </h1>

          <p className="hero__tagline load load--3">
            {profile.tagline.map((line) => (
              <i key={line}>{line} </i>
            ))}
          </p>

          <p className="hero__intro load load--4">{profile.intro}</p>

          <div className="hero__actions load load--5">
            <a className="btn btn--solid" href="#experience">
              View my experience
              <Icon name="arrow" />
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <Rise className="hero__figure">
          <div className="hero__trace">
            <Trace cycles={5} />
          </div>
          <div className="hero__panel">
            <Image
              src={profile.photos.hero.src}
              alt={profile.photos.hero.alt}
              fill
              sizes="(min-width: 60rem) 42vw, 92vw"
              className="hero__img"
              priority
            />
          </div>
        </Rise>
      </div>
    </section>
  );
}
