import { profile } from "@/content/profile";
import { Icon } from "./Icon";

/** The fixed rail of shortcuts down the left edge, on wide screens only. */
export function SideRail() {
  return (
    <nav className="rail" aria-label="Shortcuts">
      <a href={`mailto:${profile.email}`} title="Email" aria-label="Email">
        <Icon name="mail" />
      </a>
      <a href={profile.cvHref} download title="Download CV" aria-label="Download CV">
        <Icon name="download" />
      </a>
      <a href="#gallery" title="Gallery" aria-label="Gallery">
        <Icon name="heart" />
      </a>
      <a href="#top" title="Back to top" aria-label="Back to top">
        <Icon name="arrow" />
      </a>
    </nav>
  );
}
