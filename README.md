# ProposalCraft - Professional Proposal Generator

A modern, feature-rich proposal generator built with React for freelancers, agencies, and businesses to create professional proposals in minutes.

## 🚀 Features

- **Complete Branding Customization** - Customize company info, logo, colors, and currency
- **Smart Template System** - 6 pre-built professional templates
- **Auto-Save & History** - Never lose your work
- **PDF & PNG Export** - Client-ready documents and social media images
- **Toast Notifications** - Professional user feedback
- **Responsive Design** - Works on all devices

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ⚙️ Configuration

Edit `src/config/branding.js` to set your default branding:

```javascript
export const brandingConfig = {
  company: {
    name: 'Your Company Name',
    phone: '+1 234 567 8900',
    email: 'hello@yourcompany.com',
    website: 'https://yourcompany.com',
    logoUrl: ''
  },
  app: {
    name: 'ProposalCraft',
    tagline: 'Professional Proposal Generator',
    logo: 'PC'
  },
  defaults: {
    currency: '$',
    terms: 'Your default payment terms'
  }
};
```

Users can also customize all settings through the Settings modal in the app.

## 🎯 Usage

1. **Edit Proposal** - Fill in company, client, and project details
2. **Use Templates** - Select from pre-built templates
3. **Export** - Generate PDF or PNG
4. **Save to History** - Keep track of all proposals

## 🛠️ Tech Stack

- React + Vite
- Tailwind CSS
- html2canvas + jsPDF
- Lucide React Icons

## 📄 License

MIT License - Feel free to use for personal or commercial projects.
