# ProposalCraft Customization Guide

## How to Customize for Your Business

ProposalCraft is designed to be easily customizable for any business. Simply edit the branding configuration file to make it your own.

### 📁 Configuration File
Edit: `src/config/branding.js`

### 🏢 Company Information
```javascript
company: {
  name: 'Your Company Name',
  phone: '+1 234 567 8900',
  email: 'hello@yourcompany.com'
}
```

### 🎨 App Branding
```javascript
app: {
  name: 'YourAppName',
  tagline: 'Your Custom Tagline',
  logo: 'YC', // Your initials or custom component
  footerText: 'Your Custom Footer Message'
}
```

### ⚙️ Default Settings
```javascript
defaults: {
  currency: '$', // Your currency symbol
  terms: 'Your default payment terms and conditions...',
  items: [
    { name: 'Your Service 1', description: 'Description', cost: 0, quantity: 1 },
    { name: 'Your Service 2', description: 'Description', cost: 0, quantity: 1 },
    // Add more default services
  ]
}
```

### 🎨 Custom Logo
To use a custom logo instead of text:

1. Create your logo component in `src/components/CustomLogo.jsx`
2. Import and use it in `src/components/sidebar/SidebarHeader.jsx`

```javascript
// Replace the Logo import with your custom logo
import CustomLogo from '../CustomLogo';

// Use in the component
<CustomLogo size="md" />
```

### 🌈 Color Customization
Edit `src/index.css` to change the color scheme:

```css
/* Change the primary accent color */
.text-gradient-amber {
  background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%);
}

.accent-amber {
  background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%);
}
```

### 📝 Template Customization
Edit `src/utils/templates.js` to add your own proposal templates with your services and pricing.

## 🚀 Quick Setup Steps

1. **Edit branding config**: Update `src/config/branding.js` with your details
2. **Test the app**: Run `npm run dev` to see your changes
3. **Customize colors** (optional): Edit CSS variables in `src/index.css`
4. **Add templates** (optional): Update `src/utils/templates.js` with your services

That's it! Your ProposalCraft is now customized for your business. 🎉