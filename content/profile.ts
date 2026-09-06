/**
 * ============================================================
 *  ALL CONTENT LIVES HERE. Nothing else needs editing.
 *
 *  Taken from Deepa Shrestha's CV. The phone number is
 *  deliberately not on the site — enquiries come by email.
 * ============================================================
 */

import type { IconName } from "@/components/Icon";

export const profile = {
  firstName: "Deepa",
  lastName: "Shrestha",
  credential: "RN",
  title: "Registered Nurse",
  location: "Tokha Municipality–1, Kathmandu",
  email: "shresthadeepa688@gmail.com",
  employer: "Grande International Hospital",
  updated: "September 2026",
  cvHref: "/deepa-shrestha-cv.pdf",

  status: "Open to opportunities",

  tagline: ["Compassionate care.", "Sound judgement.", "Dignity first."],

  intro:
    "Registered nurse in the emergency department and intensive care unit at Grande " +
    "International Hospital. I provide individualised nursing care built around a patient's " +
    "comfort, safety, autonomy and dignity — not around the ward routine.",

  /** Photographs live in public/photos/ under exactly these names. */
  photos: {
    /** Hero figure. Swap to the transparent cutout once it exists. */
    hero: {
      src: "/photos/hero-bust.png",
      alt: "Deepa Shrestha in scrubs by Phewa Lake, Pokhara",
    },
    /** The convocation portrait, shown beside the education section. */
    portrait: {
      src: "/photos/portrait.jpg",
      alt: "Deepa Shrestha at her nursing convocation, holding her Purbanchal University folder",
    },
    /** On the job, shown beside the about section. */
    about: {
      src: "/photos/air-ambulance-1.jpg",
      alt: "Deepa Shrestha in scrubs beside an Annapurna Helicopters air ambulance",
    },
    gallery: [
      {
        src: "/photos/air-ambulance-1.jpg",
        alt: "Deepa Shrestha in scrubs, sitting on the skid of an Annapurna Helicopters air ambulance",
        caption: "Between transfers, Kathmandu",
        ratio: "4 / 3",
      },
      {
        src: "/photos/air-ambulance-2.jpg",
        alt: "Deepa Shrestha with the transfer crew in front of the aircraft",
        caption: "With the transfer crew",
        ratio: "3 / 4",
      },
      {
        src: "/photos/portrait.jpg",
        alt: "Deepa Shrestha in cap and gown at her nursing convocation",
        caption: "Convocation, Purbanchal University",
        ratio: "3 / 4",
      },
    ],
  },

  /** The floating bar under the hero. */
  stats: [
    { icon: "calendar", value: "3+", label: "Years in practice" },
    { icon: "pulse", value: "2", label: "Units: ED & ICU" },
    { icon: "badge", value: "2023", label: "Nursing Council registration" },
    { icon: "cap", value: "BSc", label: "Nursing, Purbanchal University" },
  ] as { icon: IconName; value: string; label: string }[],

  about: {
    eyebrow: "About me",
    headline: "Nursing is more than a profession,",
    headlineAccent: "it is the whole job.",
    body: [
      "Every patient deserves dignity, respect and the best care the unit can give. I combine " +
        "clinical knowledge with steady, compassionate support to help people recover and to make " +
        "the time in hospital less frightening than it would otherwise be.",
      "I trained at Purbanchal University and did my placements on the medical surgical unit at " +
        "Bir Hospital and the burn unit at Kanti Children's Hospital. Since registering in 2023 I " +
        "have worked across emergency and intensive care at Grande International Hospital.",
    ],
    badge: { title: "Patient first", note: "Comfort, safety, autonomy, dignity" },
    values: [
      { icon: "heart", label: "Empathetic care" },
      { icon: "stethoscope", label: "Clinical judgement" },
      { icon: "shield", label: "Patient safety" },
      { icon: "book", label: "Continuous learning" },
    ] as { icon: IconName; label: string }[],
  },

  expertise: {
    eyebrow: "Skills",
    title: "Clinical expertise",
    note: "Built on a nursing degree, two teaching-hospital placements, and three years across emergency and intensive care.",
    cards: [
      {
        icon: "monitor",
        title: "Patient assessment & monitoring",
        note: "Vital signs, GCS, recognising deterioration early",
      },
      {
        icon: "syringe",
        title: "Medication administration",
        note: "Intravenous, intramuscular, oral, subcutaneous",
      },
      {
        icon: "bandage",
        title: "Wound care & dressing",
        note: "Strict aseptic technique, positioning, pressure care",
      },
      {
        icon: "drip",
        title: "Fluids & nutrition",
        note: "Burn fluid calculation, total parenteral nutrition",
      },
      {
        icon: "pulse",
        title: "Emergency & critical care",
        note: "Rapid assessment, escalation, transfer and admission",
      },
      {
        icon: "chat",
        title: "Teaching & counselling",
        note: "Health teaching, discharge advice, therapeutic communication",
      },
      {
        icon: "shield",
        title: "Infection prevention",
        note: "Hand hygiene, isolation, aseptic practice",
      },
      {
        icon: "clipboard",
        title: "Records & reporting",
        note: "Charting, handover, documentation and computer skills",
      },
    ] as { icon: IconName; title: string; note: string }[],
  },

  experience: {
    eyebrow: "Experience",
    title: "Professional experience",
    roles: [
      {
        mark: "GIH",
        live: true,
        when: "2023 – Present",
        role: "Registered Nurse — Emergency Department & ICU",
        where: "Grande International Hospital, Kathmandu",
        points: [
          "Assess and monitor patients across the emergency department and intensive care unit",
          "Administer medication by intravenous, intramuscular, oral and subcutaneous routes",
          "Carry out nursing care plans and escalate to the medical team on deterioration",
          "Keep observation and medication records accurate, and hand over clearly at shift change",
        ],
      },
      {
        mark: "BH",
        when: "Sept – Oct 2021",
        role: "Student Nurse — Medical Surgical Unit",
        where: "Bir Hospital, Kathmandu",
        points: [
          "Prepared and carried out nursing care plans under the supervision of registered nurses",
          "Gave medication by all four routes, dressed wounds and positioned patients",
          "Took observations including vital signs and GCS, and recorded and reported them",
          "Supported activities of daily living and gave health teaching and counselling",
        ],
      },
      {
        mark: "KCH",
        when: "January 2021",
        role: "Student Nurse — Burn Unit",
        where: "Kanti Children's Hospital, Kathmandu",
        points: [
          "Gave burn care under strict aseptic technique, supervised by the unit's nurses",
          "Calculated burn fluid requirements and total parenteral nutrition",
          "Monitored height, weight and BMI alongside vital signs and GCS",
          "Helped parents choose play a child of that age could manage",
        ],
      },
    ],
  },

  quote: {
    line: "Care planned around the person.",
    note: "Comfort, safety, autonomy and dignity — every patient, every shift.",
    pillars: [
      { icon: "heart", label: "Compassion" },
      { icon: "shield", label: "Commitment" },
      { icon: "stethoscope", label: "Competence" },
    ] as { icon: IconName; label: string }[],
  },

  education: {
    eyebrow: "Education",
    title: "Education & licensure",
    items: [
      {
        icon: "cap",
        what: "Bachelor of Science in Nursing",
        who: "Purbanchal University · Gothgaun, Morang",
        when: "2022",
      },
      {
        icon: "clipboard",
        what: "Clinical placements",
        who: "Bir Hospital · Kanti Children's Hospital",
        when: "2021",
      },
      {
        icon: "badge",
        what: "Registered Nurse licence",
        who: "Nepal Nursing Council",
        when: "Since 2023",
      },
    ] as { icon: IconName; what: string; who: string; when: string }[],
    licence: {
      council: "Nepal Nursing Council",
      holder: "Registered Nurse",
      rows: [
        { label: "Registration number", value: "Available on request" },
        { label: "Registered since", value: "2023" },
        { label: "Status", value: "Active" },
      ],
    },
  },

  gallery: {
    eyebrow: "Gallery",
    title: "On the job",
    note: "Helicopter transfers into Kathmandu with the crew who fly them, and the day the degree was conferred.",
  },

  contact: {
    eyebrow: "Contact",
    title: ["Let us work together", "for better care."],
    note: "Open to registered nurse posts in emergency, intensive care and general wards. Happy to talk through a unit's ratios, roster and orientation first.",
    rows: [
      { icon: "mail", label: "Email", value: "shresthadeepa688@gmail.com", href: "mailto:shresthadeepa688@gmail.com" },
      { icon: "pin", label: "Based in", value: "Tokha Municipality–1, Kathmandu" },
      { icon: "hospital", label: "Currently", value: "Grande International Hospital" },
    ] as { icon: IconName; label: string; value: string; href?: string }[],
    references: "References available on request.",
  },
};

export const fullName = `${profile.firstName} ${profile.lastName}`;
export const signature = `${fullName}, ${profile.credential}`;
