import { profile } from "@/content/profile";
import { Icon } from "./Icon";
import { Rise } from "./Rise";

/** The floating bar of figures that overlaps the foot of the hero. */
export function Stats() {
  return (
    <section className="stats-band" aria-label="At a glance">
      <div className="wrap">
        <Rise className="stats">
          {profile.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="chip">
                <Icon name={stat.icon} />
              </span>
              <span>
                <p className="stat__value">{stat.value}</p>
                <p className="stat__label">{stat.label}</p>
              </span>
            </div>
          ))}
        </Rise>
      </div>
    </section>
  );
}
