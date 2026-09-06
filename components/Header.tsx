import { signature } from "@/content/profile";
import { Icon } from "./Icon";
import { ThemeSwitch } from "./ThemeSwitch";

const sections = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a className="brand" href="#top">
          <Icon name="cross" />
          {signature}
        </a>
        <nav className="nav" aria-label="Sections">
          {sections.map((section) => (
            <a key={section.href} href={section.href}>
              {section.label}
            </a>
          ))}
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
}
