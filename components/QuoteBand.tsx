import { profile } from "@/content/profile";
import { Icon } from "./Icon";
import { Trace } from "./Trace";

export function QuoteBand() {
  const { quote } = profile;

  return (
    <section className="quote-band" aria-label="What I work to">
      <Trace cycles={9} className="quote__trace" />
      <div className="wrap quote">
        <div>
          <Icon name="quote" className="quote__mark" />
          <p className="quote__line">{quote.line}</p>
          <p className="quote__note">{quote.note}</p>
        </div>
        <ul className="pillars">
          {quote.pillars.map((pillar) => (
            <li key={pillar.label}>
              <Icon name={pillar.icon} className={pillar.icon === "heart" ? "beat" : undefined} />
              {pillar.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
