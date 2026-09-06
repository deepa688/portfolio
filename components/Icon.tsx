const paths: Record<string, string> = {
  cross: "M12 4v16M4 12h16",
  calendar: "M7 3v3M17 3v3M3.5 9h17M5 6h14a1.5 1.5 0 0 1 1.5 1.5V19A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V7.5A1.5 1.5 0 0 1 5 6Z",
  pulse: "M2 12h4l2.5-7 3.5 14 3-7h7",
  badge: "M12 3.5 20 7v5c0 4.2-3.2 7.4-8 8.5-4.8-1.1-8-4.3-8-8.5V7l8-3.5ZM9 12l2 2 4-4",
  cap: "M2.5 8.5 12 4.5l9.5 4L12 12.5 2.5 8.5ZM6 10.7V15c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.3M21 9v5",
  heart: "M12 20s-7-4.3-7-9.4A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.6C19 15.7 12 20 12 20Z",
  stethoscope:
    "M6 3v5a4 4 0 0 0 8 0V3M10 15.5V13M10 15.5a4.5 4.5 0 0 0 9 0V11M19 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  shield: "M12 3.5 20 7v5c0 4.2-3.2 7.4-8 8.5-4.8-1.1-8-4.3-8-8.5V7l8-3.5Z",
  book: "M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H5.5A1.5 1.5 0 0 1 4 15.5v-10ZM20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h4.5a1.5 1.5 0 0 0 1.5-1.5v-10Z",
  monitor: "M3.5 5h17a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM9 20h6M12 16v4M6 11h2l1.5-3 2 6 1.5-3h3",
  syringe: "M14 3.5 20.5 10M18 6 8.5 15.5 5 16.5l-.5 3 3-.5 1-3.5L18 6ZM11 9l2 2M13.5 6.5l4 4M3 21l2-2",
  bandage:
    "M8.5 3.5h7A2 2 0 0 1 17.5 5.5v13a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2ZM12 9v6M9 12h6",
  drip: "M9 3h6M12 3v4M8 7h8l-1 7a3 3 0 0 1-3 2.6A3 3 0 0 1 9 14L8 7ZM12 17v4M10 21h4",
  chat: "M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v8A1.5 1.5 0 0 1 18.5 15H9l-5 4.5V5.5ZM8 8h8M8 11h5",
  clipboard:
    "M9 4.5h6M8.5 3h7a1 1 0 0 1 1 1v.5H19a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1h2.5V4a1 1 0 0 1 1-1ZM8 11h8M8 14.5h8M8 18h5",
  mail: "M3.5 6h17a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1ZM3 7l9 6 9-6",
  pin: "M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  hospital: "M4 21V6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V21M12 8v5M9.5 10.5h5M9 21v-4h6v4M2.5 21h19",
  download: "M12 3.5v11M7.5 10l4.5 4.5L16.5 10M4.5 20.5h15",
  arrow: "M12 20V5M6 11l6-6 6 6",
  user: "M12 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20.5a7.5 7.5 0 0 1 15 0",
  quote: "M9 6.5C6.2 8 5 10.2 5 13v4.5h5V12H7.6c.2-1.6 1-2.7 2.4-3.4l-1-2.1ZM19 6.5C16.2 8 15 10.2 15 13v4.5h5V12h-2.4c.2-1.6 1-2.7 2.4-3.4l-1-2.1Z",
};

export type IconName = keyof typeof paths;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
