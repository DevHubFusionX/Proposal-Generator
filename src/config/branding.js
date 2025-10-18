// Branding configuration - customize this for your own use
export const brandingConfig = {
  // Company Information
  company: {
    name: 'Franklin Digital Solutions',
    phone: '09127391830',
    email: 'anyanwufranklin.dev@gmail.com'
  },
  
  // App Branding
  app: {
    name: 'Propulse',
    tagline: 'Rocket-Powered Proposals',
    logo: 'P', // Can be text or component
    footerText: 'Launch Your Success with Propulse'
  },
  
  // Default Proposal Settings
  defaults: {
    currency: '₦',
    terms: 'Payment terms: 50% upfront, 50% on completion. Project timeline: 4-6 weeks.',
    items: [
      { name: 'Platform Development', description: 'Full-stack web application development', cost: 0, quantity: 1 },
      { name: 'UI/UX Design', description: 'User interface and experience design', cost: 0, quantity: 1 },
      { name: 'Hosting & Domain', description: 'Annual hosting and domain registration', cost: 0, quantity: 1 }
    ]
  }
};

// Currency options for dropdown
export const currencyOptions = [
  { value: '$', label: 'USD ($)', name: 'US Dollar' },
  { value: '€', label: 'EUR (€)', name: 'Euro' },
  { value: '£', label: 'GBP (£)', name: 'British Pound' },
  { value: '₦', label: 'NGN (₦)', name: 'Nigerian Naira' },
  { value: '¥', label: 'JPY (¥)', name: 'Japanese Yen' },
  { value: '₹', label: 'INR (₹)', name: 'Indian Rupee' },
  { value: 'C$', label: 'CAD (C$)', name: 'Canadian Dollar' },
  { value: 'A$', label: 'AUD (A$)', name: 'Australian Dollar' },
  { value: '₽', label: 'RUB (₽)', name: 'Russian Ruble' },
  { value: '¥', label: 'CNY (¥)', name: 'Chinese Yuan' },
  { value: 'R', label: 'ZAR (R)', name: 'South African Rand' },
  { value: 'kr', label: 'SEK (kr)', name: 'Swedish Krona' },
  { value: 'Fr', label: 'CHF (Fr)', name: 'Swiss Franc' },
  { value: '₩', label: 'KRW (₩)', name: 'South Korean Won' },
  { value: 'R$', label: 'BRL (R$)', name: 'Brazilian Real' }
];