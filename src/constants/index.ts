import { i18n } from '@/services/i18n';

export const NAV_LINKS = [
  { to: '/designer', label: i18n.get('Designer'), state: { fromApp: true } },
  { to: '/#features', label: i18n.get('Features') },
  { to: '/#shivantra', label: i18n.get('Shivantra') },
];

export const FEATURES = [
  {
    icon: 'palette',
    title: 'Preset Themes',
    description:
      'Choose from professionally designed preset themes or start fresh by creating your own from scratch, ideal for quick demos and client-specific branding.',
  },
  {
    icon: 'dark_mode',
    title: 'Dark Mode Support',
    description:
      'Built-in support for light and dark modes with seamless switching to ensure a modern, comfortable user experience across environments.',
  },
  {
    icon: 'bolt',
    title: 'Live Preview',
    description:
      'See every change instantly across the ERP UI as you adjust colors, styles, and components, no refresh, no guesswork.',
  },
  {
    icon: 'code',
    title: 'Direct Style Updates',
    description:
      'Update theme styles directly from the interface without touching code or configuration files. Fast, visual, and developer-friendly.',
  },
  {
    icon: 'file_export',
    title: 'Export & Deploy',
    description:
      'Export your theme as a JSON file and drop it into Axelor ERP to apply instantly. Simple, clean, and production-ready.',
  },
  {
    icon: 'layers',
    title: 'Component Customization',
    description:
      'Customize every UI element, buttons, inputs, tables, cards, widgets, and more; with fine-grained control in one unified view.',
  },
  {
    icon: 'upload_file',
    title: 'Theme Import & Rework',
    description:
      'Upload an existing theme back into the designer, refine it visually, and re-export, perfect for iterations and long-term maintenance.',
  },
  {
    icon: 'dashboard',
    title: 'Unified Control View',
    description:
      'All widgets and form controls are visible in one place, ensuring consistency and a cohesive look across the entire ERP system.',
  },
  {
    icon: 'rocket_launch',
    title: 'Built for POCs, Demos and Production',
    description:
      'Create polished, client-ready ERP themes in minutes, ideal for presales, proofs of concept, and partner demos.',
  },
];

export const STEPS = [
  {
    number: '01',
    title: 'Choose or Create',
    description:
      'Select from ready-to-use preset themes or start with a blank canvas to create a custom Axelor ERP theme from scratch.',
  },
  {
    number: '02',
    title: 'Customize Colors & Components',
    description:
      'Adjust primary, secondary, and accent colors, and fine-tune individual ERP components using an intuitive visual editor.',
  },
  {
    number: '03',
    title: 'Live Preview',
    description:
      'See your changes applied instantly across forms, widgets, and screens, ensuring a consistent, polished ERP interface.',
  },
  {
    number: '04',
    title: 'Export & Deploy',
    description:
      'Export the theme as a JSON file and add it to your Axelor ERP instance to apply it immediately. Re-upload anytime to refine further.',
  },
];

export const COMPANY_FEATURES = [
  {
    icon: 'rocket_launch',
    title: 'To make Axelor ERP demos more impactful',
  },
  {
    icon: 'schedule',
    title: 'To reduce time spent on repetitive UI customization',
  },
  {
    icon: 'visibility',
    title: 'To help partners and clients visualize ERP branding early',
  },
  {
    icon: 'volunteer_activism',
    title: 'To share a practical, free tool with the Axelor community',
  },
];

export const COMPANY_SERVICES = [
  {
    title: 'Axelor ERP consultation & solution architecture',
    description:
      'Designing scalable, maintainable ERP solutions aligned with business processes and long-term goals.',
  },
  {
    title: 'Custom Axelor module development',
    description:
      'Building tailored modules and extensions to meet specific operational requirements.',
  },
  {
    title: 'UI/UX customization & theming',
    description:
      'Improving usability, consistency, and adoption through thoughtful interface customization.',
  },
  {
    title: 'Integrations, extensions, & version upgrades',
    description:
      'Connecting Axelor ERP with external systems and managing upgrades in a controlled, reliable manner.',
  },
  {
    title: 'Task reinforcement & team support',
    description:
      'Acting as an extension of your existing development team when required — accelerating delivery and providing Axelor expertise without disrupting established workflows.',
  },
  {
    title: 'Long-term support & performance optimization',
    description:
      'Ensuring system stability, scalability, and continuous improvement in production environments.',
  },
];
