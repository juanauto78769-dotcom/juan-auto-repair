export const SHOP = {
  name: 'Juan Auto Repair',
  phone: '(817) 677-2009',
  phoneHref: 'tel:+18176772009',
  addressLine1: '5210 East Highway 199',
  addressLine2: 'Springtown, TX 76082',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=5210+East+Highway+199%2C+Springtown%2C+TX+76082',
  hours: [
    { label: 'Mon–Fri', value: '8:00 AM–6:00 PM (closed 1–2 PM for lunch)' },
    { label: 'Sat & Sun', value: 'Closed' },
  ],
} as const;

export type Service = {
  id: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    id: 'oil-fluid',
    title: 'Oil & Fluid Service',
    description: 'Oil changes, filters, coolant, brake and transmission fluid.',
  },
  {
    id: 'diagnostics',
    title: 'Engine Diagnostics',
    description: 'Check-engine lights, rough idle, and hard-to-find electrical faults.',
  },
  {
    id: 'ac-repair',
    title: 'AC Repair & Recharge',
    description: 'Compressor, refrigerant leaks, and warm-air complaints — fixed cold.',
  },
  {
    id: 'brakes',
    title: 'Brake Service',
    description: 'Pads, rotors, calipers, and brake line work, front or rear.',
  },
  {
    id: 'battery',
    title: 'Battery & Charging',
    description: 'Battery testing, replacement, and alternator / charging checks.',
  },
  {
    id: 'tires',
    title: 'Tire Service',
    description: 'Rotation, balancing, patching, and new tire installation.',
  },
  {
    id: 'suspension',
    title: 'Suspension & Steering',
    description: 'Struts, shocks, and steering components for a smoother, safer ride.',
  },
  {
    id: 'scheduled-maintenance',
    title: 'Scheduled Maintenance',
    description: 'Manufacturer-recommended service intervals, tracked and done on time.',
  },
  {
    id: 'transmission',
    title: 'Transmission Service',
    description: 'Fluid changes and diagnostics for automatic and manual transmissions.',
  },
];

export type RepairExample = {
  id: string;
  vehicle: string;
  title: string;
  problem: string;
  fix: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export const RECENT_REPAIRS: RepairExample[] = [
  {
    id: 'honda-accord',
    vehicle: '2017 Honda Accord',
    title: 'Brake Pad & Rotor Replacement',
    problem: 'Grinding noise and a soft brake pedal on the way in.',
    fix: 'Worn front pads and warped rotors — replaced pads, resurfaced rotors, full stopping power restored same day.',
    image: '/images/repairs/repair-honda-accord.jpg',
    imageAlt: 'White 2017 Honda Accord sedan, front three-quarter view',
    imagePosition: 'center 62%',
  },
  {
    id: 'toyota-camry',
    vehicle: '2015 Toyota Camry',
    title: 'AC Compressor & Recharge',
    problem: 'AC blowing warm air in triple-digit heat.',
    fix: 'Failing compressor and a slow refrigerant leak — replaced the compressor, recharged the system, confirmed ice-cold air before pickup.',
    image: '/images/repairs/repair-toyota-camry.jpg',
    imageAlt: 'Silver 2015 Toyota Camry sedan, front three-quarter view',
    imagePosition: 'center 55%',
  },
  {
    id: 'ford-f150',
    vehicle: '2019 Ford F-150',
    title: 'Check Engine Light Diagnosis',
    problem: 'Check engine light on, rough idle at stops.',
    fix: 'Full scan traced it to a failed oxygen sensor and a vacuum leak — sensor replaced, intake resealed, codes cleared.',
    image: '/images/repairs/repair-ford-f150.jpg',
    imageAlt: 'Red 2019 Ford F-150 pickup truck, front three-quarter view',
    imagePosition: 'center 55%',
  },
  {
    id: 'nissan-altima',
    vehicle: '2014 Nissan Altima',
    title: 'Battery & Charging Check',
    problem: "Wouldn't start on a cold morning.",
    fix: 'Battery tested bad, alternator tested fine — new battery installed, charging system verified before it left the lot.',
    image: '/images/repairs/repair-nissan-altima.jpg',
    imageAlt: 'White 2014 Nissan Altima sedan, front three-quarter view',
    imagePosition: 'center 58%',
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const HOW_IT_WORKS: Step[] = [
  {
    number: '01',
    title: 'We diagnose it',
    description:
      'Bring it in or book ahead. Juan runs a full diagnostic to find the actual problem — not just the symptom.',
  },
  {
    number: '02',
    title: 'You approve the work',
    description:
      'You get a clear explanation and a price before anything is touched. Nothing starts without your OK.',
  },
  {
    number: '03',
    title: 'Pick up & pay',
    description:
      "We call when it's done. Come by, check it out, and pay when you're satisfied — no surprises on the bill.",
  },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export const FAQS: FaqItem[] = [
  {
    id: 'diagnostic-cost',
    question: 'How much does a diagnostic cost?',
    answer:
      "It depends on the situation — the diagnostic fee varies with the vehicle and what's going on with it. We'll always confirm the exact cost with you before we start, and it's applied toward the repair if you move forward with us.",
    defaultOpen: true,
  },
  {
    id: 'repair-cost',
    question: 'How much will my repair cost?',
    answer:
      "It depends on the vehicle and what's actually wrong, so we don't quote blind. We diagnose first, then give you a clear, itemized price before any work starts — no surprise charges when you pick up.",
  },
  {
    id: 'appointment',
    question: 'Do I need an appointment?',
    answer:
      'Walk-ins are always welcome, but booking ahead using the form below (or a quick call) usually means a shorter wait and lets us have the right parts on hand when you arrive.',
  },
  {
    id: 'imports',
    question: 'Do you work on imported vehicles too?',
    answer:
      'Yes — Juan Auto Repair services both domestic and imported makes and models, from routine maintenance to full diagnostics.',
  },
  {
    id: 'warranty',
    question: 'Is there a warranty on repairs?',
    answer:
      'Yes, repairs are backed by a warranty — ask us for the specific terms that apply to your repair when you book.',
  },
];

export const VEHICLE_MAKES = [
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet',
  'Nissan',
  'Jeep',
  'RAM',
  'GMC',
  'Hyundai',
  'Kia',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Volkswagen',
  'Subaru',
  'Mazda',
  'Lexus',
  'Dodge',
  'Chrysler',
  'Tesla',
];

export const SERVICE_OPTIONS = [
  'Oil Change',
  'Engine Diagnostics',
  'AC Repair',
  'Battery Replacement',
  'Tire Service',
  'Brake Service',
  'Suspension & Maintenance',
  'Not Sure',
];

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#recent-work', label: 'Recent Work' },
  { href: '#meet-juan', label: 'Meet Juan' },
  { href: '#faq', label: 'FAQ' },
  { href: '#visit', label: 'Visit Us' },
] as const;
