/**
 * Applies the stored theme before first paint so the page never flashes the
 * wrong theme. Runs blocking and inline — it is three lines of work.
 */
export function ThemeScript() {
  const script = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'light' || t === 'dark') {
    document.documentElement.setAttribute('data-theme', t);
  }
} catch (e) {}
`.trim();

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
