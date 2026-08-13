/**
 * Content.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * ALL CONTENT IN THIS FILE IS FICTIONAL DEMO CONTENT.
 *
 * "Meridian Health" is an invented brand. Every clinician name, credential,
 * biography, patient story, testimonial, rating, statistic, price and partner
 * name below is fabricated for the purpose of demonstrating this layout.
 *
 * None of these people exist. No quote attributed to a "patient" here was
 * said by a real patient. The photographs are stock models who are not
 * affiliated with any hospital and are not the individuals named alongside
 * them.
 *
 * Before this page goes near production, every value here must be replaced
 * with verified content, and the medical claims in particular must be
 * reviewed by qualified clinical and legal staff. Statistics and outcome
 * claims on a healthcare site are regulated speech in most jurisdictions.
 * ─────────────────────────────────────────────────────────────────────────
 */

import {
  Ambulance,
  Baby,
  Bloom,
  Bone,
  Brain,
  Building,
  Clock,
  Heart,
  Microscope,
  ShieldCheck,
  Sparkle,
  Stethoscope,
  UserHeart,
  Wallet,
} from '../components/ui/Icons.jsx';

export const BRAND = {
  name: 'Meridian Health',
  tagline: 'Compassionate care, always',
  since: 1995,
  emergencyPhone: '1-800-627-4357',
  emergencyPhoneHref: 'tel:+18006274357',
  phone: '(415) 555-0142',
  phoneHref: 'tel:+14155550142',
  email: 'care@meridianhealth.example',
  website: 'meridianhealth.example',
  address: ['2400 Bayfront Parkway', 'San Mateo, CA 94402'],
};

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#specialists' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

/* --- Hero ---------------------------------------------------------------- */

export const HERO_VALUES = [
  { label: 'Expert doctors', icon: Stethoscope },
  { label: 'Advanced technology', icon: Microscope },
  { label: 'Personalized care', icon: UserHeart },
];

export const HERO_STATS = [
  { value: '30+', label: 'Years of care' },
  { value: '120+', label: 'Expert doctors' },
  { value: '50K+', label: 'Patients a year' },
  { value: '24/7', label: 'Emergency care' },
];

/* --- Appointment --------------------------------------------------------- */

export const DEPARTMENTS = [
  'Select department',
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Obstetrics & gynecology',
  'Emergency care',
];

export const DOCTORS_BY_DEPARTMENT = {
  '': ['Select doctor', 'First available'],
  Cardiology: ['Select doctor', 'First available', 'Dr. Amara Osei', 'Dr. Peter Lindqvist'],
  Neurology: ['Select doctor', 'First available', 'Dr. Rafael Duarte', 'Dr. Hana Sato'],
  Orthopedics: ['Select doctor', 'First available', 'Dr. Marcus Bell', 'Dr. Ingrid Halvorsen'],
  Pediatrics: ['Select doctor', 'First available', 'Dr. Yusuf Karim', 'Dr. Clara Whitfield'],
  'Obstetrics & gynecology': ['Select doctor', 'First available', 'Dr. Leila Haddad', 'Dr. Nia Bankole'],
  'Emergency care': ['Select doctor', 'First available — walk in any time'],
};

export const TIME_SLOTS = [
  'Select time',
  'Morning (8:00 – 12:00)',
  'Afternoon (12:00 – 17:00)',
  'Evening (17:00 – 20:00)',
];

/* --- Services ------------------------------------------------------------ */

export const SERVICES = [
  {
    icon: Heart,
    name: 'Cardiology',
    blurb: 'Diagnostics, intervention and rehabilitation for the heart and vascular system.',
  },
  {
    icon: Brain,
    name: 'Neurology',
    blurb: 'Assessment and treatment for the brain, spine and nervous system.',
  },
  {
    icon: Bone,
    name: 'Orthopedics',
    blurb: 'Joint replacement, sports injury and musculoskeletal recovery.',
  },
  {
    icon: Baby,
    name: 'Pediatrics',
    blurb: 'Gentle, attentive care for infants, children and adolescents.',
  },
  {
    icon: Bloom,
    name: 'Gynecology',
    blurb: "Women's health, maternity and long-term wellbeing.",
  },
  {
    icon: Ambulance,
    name: 'Emergency care',
    blurb: 'Consultant-led emergency medicine, open every hour of the year.',
  },
];

/* --- About --------------------------------------------------------------- */

export const TRUST_POINTS = [
  { icon: UserHeart, label: 'Patient-centered approach' },
  { icon: Building, label: 'State-of-the-art facilities' },
  { icon: Stethoscope, label: 'Experienced, caring team' },
  { icon: Microscope, label: 'Advanced medical technology' },
];

/* --- Specialists --------------------------------------------------------- */
/* Fictional clinicians. Photographs are stock models, not these people.     */

export const SPECIALISTS = [
  { image: 'drCardiology', name: 'Dr. Amara Osei', specialty: 'Interventional cardiology', rating: 4.9 },
  { image: 'drNeurology', name: 'Dr. Rafael Duarte', specialty: 'Neurology', rating: 4.8 },
  { image: 'drOrthopedics', name: 'Dr. Marcus Bell', specialty: 'Orthopedic surgery', rating: 4.9 },
  { image: 'drObgyn', name: 'Dr. Leila Haddad', specialty: 'Obstetrics & gynecology', rating: 5.0 },
];

/* --- Statistics ---------------------------------------------------------- */

export const STATISTICS = [
  { value: '125K+', label: 'Patients treated' },
  { value: '30+', label: 'Years of service' },
  { value: '120+', label: 'Expert doctors' },
  { value: '15+', label: 'Clinical awards' },
];

/* --- App ----------------------------------------------------------------- */

export const APP_FEATURES = [
  'Book and reschedule appointments',
  'Message your care team',
  'Access records and results',
  'Medication reminders',
];

/* --- Testimonials -------------------------------------------------------- */
/* Demo testimonials. Not real patients; not real statements.                */

export const TESTIMONIALS = [
  {
    quote:
      'The cardiology team explained every option in plain language and never once made me feel rushed. I left understanding my own treatment.',
    name: 'Rashid Alam',
    role: 'Cardiology patient',
    rating: 5,
    avatar: 'avatarMale',
  },
  {
    quote:
      'My daughter is terrified of hospitals. The pediatric nurses spent twenty minutes just getting her comfortable before anyone examined her.',
    name: 'Sarah Nadeem',
    role: 'Parent',
    rating: 5,
    avatar: 'avatarFemale',
  },
  {
    quote:
      'I came into emergency at 2am and was seen in under ten minutes. The follow-up call two days later is what I keep telling people about.',
    name: 'Tariq Hassan',
    role: 'Emergency care patient',
    rating: 5,
    avatar: 'avatarYoung',
  },
];

/* --- Why choose us ------------------------------------------------------- */

export const BENEFITS = [
  {
    icon: Stethoscope,
    title: 'Expert doctors',
    blurb: 'Board-certified consultants across every major specialty.',
  },
  {
    icon: Building,
    title: 'Modern facilities',
    blurb: 'Diagnostic imaging and theatres rebuilt within the last five years.',
  },
  {
    icon: Clock,
    title: '24/7 support',
    blurb: 'Emergency medicine and an advice line that answers at any hour.',
  },
  {
    icon: Wallet,
    title: 'Affordable care',
    blurb: 'Published pricing, major insurers accepted, no surprise billing.',
  },
];

/* --- Pricing ------------------------------------------------------------- */
/* Illustrative plan pricing for layout purposes only.                       */

export const PLANS = [
  {
    name: 'Essential',
    price: 49,
    summary: 'For individuals who want reliable primary care.',
    features: ['Annual health check', 'General consultations', 'Lab work included', 'Email support'],
    cta: 'Choose Essential',
  },
  {
    name: 'Family',
    price: 99,
    summary: 'Cover for a household, with faster access.',
    features: [
      'Everything in Essential',
      'Up to 4 family members',
      'Priority appointments',
      'Specialist referrals',
      '24/7 phone support',
    ],
    cta: 'Choose Family',
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Complete',
    price: 149,
    summary: 'Comprehensive cover with ongoing monitoring.',
    features: [
      'Everything in Family',
      'Specialist consultations',
      'Advanced diagnostics',
      'Remote health monitoring',
      'Dedicated care coordinator',
    ],
    cta: 'Choose Complete',
  },
];

/* --- Patient stories ----------------------------------------------------- */
/* Demo stories. Fictional people; stock photography.                        */

export const STORIES = [
  {
    image: 'storyCardiac',
    name: 'David Mensah',
    type: 'Cardiac rehabilitation',
    quote: 'Six months after my bypass I walked my daughter down the aisle.',
    duration: '2:14',
  },
  {
    image: 'storyOrtho',
    name: 'Saida Iqbal',
    type: 'Knee replacement',
    quote: 'I was back on the trails a season sooner than I expected.',
    duration: '3:02',
  },
  {
    image: 'storyOncology',
    name: 'Olivia D’Costa',
    type: 'Oncology',
    quote: 'The same three people called me every week for a year.',
    duration: '4:27',
  },
];

/* --- Blog ---------------------------------------------------------------- */

export const ARTICLES = [
  {
    image: 'articleHeart',
    category: 'Cardiology',
    title: '10 everyday habits that protect your heart',
    date: '2026-07-28',
    dateLabel: 'Jul 28, 2026',
    readingTime: '6 min read',
  },
  {
    image: 'articleNutrition',
    category: 'Nutrition',
    title: 'How to support your immune system naturally',
    date: '2026-07-14',
    dateLabel: 'Jul 14, 2026',
    readingTime: '4 min read',
  },
  {
    image: 'articleStress',
    category: 'Mental health',
    title: 'Managing stress when your days are full',
    date: '2026-06-30',
    dateLabel: 'Jun 30, 2026',
    readingTime: '5 min read',
  },
];

/* --- Insurance partners -------------------------------------------------- */
/* Fictional insurers — invented names, no real company is referenced.       */

export const INSURERS = [
  { name: 'Northbridge', mark: 'N' },
  { name: 'Vantage Health', mark: 'V' },
  { name: 'Alder Mutual', mark: 'A' },
  { name: 'Crestline', mark: 'C' },
  { name: 'Beacon Care', mark: 'B' },
  { name: 'Everwell', mark: 'E' },
];

/* --- Footer -------------------------------------------------------------- */

export const FOOTER_LINKS = {
  'Quick links': [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#specialists' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
  'Our services': [
    { label: 'Cardiology', href: '#services' },
    { label: 'Neurology', href: '#services' },
    { label: 'Orthopedics', href: '#services' },
    { label: 'Pediatrics', href: '#services' },
    { label: 'Gynecology', href: '#services' },
    { label: 'Emergency care', href: '#services' },
  ],
};

export const APP_BADGES = [
  { store: 'App Store', prefix: 'Download on the' },
  { store: 'Google Play', prefix: 'Get it on' },
];

export { Sparkle, ShieldCheck };
