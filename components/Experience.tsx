import { profile } from "@/content/profile";
import { Icon } from "./Icon";
import { Rise } from "./Rise";

export function Experience() {
  const { experience } = profile;

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Rise className="section__head">
          <div>
            <p className="eyebrow">{experience.eyebrow}</p>
            <h2 className="section__title">
              <Icon name="clipboard" />
              {experience.title}
            </h2>
          </div>
        </Rise>

        <div className="timeline">
          {experience.roles.map((role, index) => (
            <Rise
              className={role.live ? "tl tl--live" : "tl"}
              key={role.role}
              delay={index * 80}
            >
              <p className="tl__when">{role.when}</p>
              <article className="tl__card">
                <div className="tl__top">
                  <div>
                    <h3 className="tl__role">{role.role}</h3>
                    <p className="tl__where">{role.where}</p>
                  </div>
                  <span className="tl__mark" aria-hidden="true">
                    {role.mark}
                  </span>
                </div>
                <ul className="tl__points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}
