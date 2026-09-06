import { profile } from "@/content/profile";
import { Icon } from "./Icon";
import { Rise } from "./Rise";

export function Expertise() {
  const { expertise } = profile;

  return (
    <section className="section section--alt" id="skills">
      <div className="wrap">
        <Rise className="section__head">
          <div>
            <p className="eyebrow">{expertise.eyebrow}</p>
            <h2 className="section__title">
              <Icon name="stethoscope" />
              {expertise.title}
            </h2>
          </div>
          <p className="section__note">{expertise.note}</p>
        </Rise>

        <div className="cards">
          {expertise.cards.map((card, index) => (
            <Rise className="card" key={card.title} delay={(index % 4) * 70}>
              <span className="chip">
                <Icon name={card.icon} />
              </span>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__note">{card.note}</p>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}
