// Branding configuration - customize this for your own use
export const brandingConfig = {
  // Company Information
  company: {
    name: 'Your Company Name',
    phone: '+1 234 567 8900',
    email: 'hello@yourcompany.com',
    website: 'https://yourcompany.com',
    logoUrl: ''
  },
  
  // App Branding
  app: {
    name: 'ProposalCraft',
    tagline: 'Professional Proposal Generator',
    logo: 'PC',
    footerText: 'Professional Proposals Made Easy'
  },
  
  // Default Proposal Settings
  defaults: {
    currency: '$',
    terms: 'Payment terms: 50% upfront, 50% on completion. Project timeline: 4-6 weeks.',
    items: [
      { name: 'Service Item 1', description: 'Description of service or deliverable', cost: 0, quantity: 1 },
      { name: 'Service Item 2', description: 'Description of service or deliverable', cost: 0, quantity: 1 },
      { name: 'Service Item 3', description: 'Description of service or deliverable', cost: 0, quantity: 1 }
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