// Proposal templates for different project types
export const proposalTemplates = {
  webDevelopment: {
    name: 'Web Development',
    icon: 'Globe',
    description: 'Full-stack web application development',
    data: {
      projectTitle: 'Custom Web Application Development',
      projectDescription: 'Development of a modern, responsive web application with custom features tailored to your business needs. Includes frontend development, backend API, database design, and deployment.',
      items: [
        { name: 'Frontend Development', description: 'React/Vue.js responsive user interface', cost: 150000, quantity: 1 },
        { name: 'Backend Development', description: 'Node.js/Python API and server logic', cost: 200000, quantity: 1 },
        { name: 'Database Design', description: 'Database architecture and optimization', cost: 80000, quantity: 1 },
        { name: 'Authentication System', description: 'User login and security implementation', cost: 60000, quantity: 1 },
        { name: 'Deployment & Hosting', description: 'Cloud deployment and initial hosting setup', cost: 40000, quantity: 1 }
      ],
      terms: 'Payment: 40% upfront, 40% at milestone completion, 20% on delivery. Timeline: 6-8 weeks. Includes 30 days post-launch support.'
    }
  },

  mobileApp: {
    name: 'Mobile App Development',
    icon: 'Smartphone',
    description: 'Native or cross-platform mobile application',
    data: {
      projectTitle: 'Mobile Application Development',
      projectDescription: 'Development of a cross-platform mobile application for iOS and Android with modern UI/UX design, backend integration, and app store deployment.',
      items: [
        { name: 'UI/UX Design', description: 'Mobile app interface and user experience design', cost: 120000, quantity: 1 },
        { name: 'Cross-Platform Development', description: 'React Native/Flutter app development', cost: 300000, quantity: 1 },
        { name: 'Backend Integration', description: 'API integration and data synchronization', cost: 100000, quantity: 1 },
        { name: 'Testing & QA', description: 'Comprehensive testing on multiple devices', cost: 80000, quantity: 1 },
        { name: 'App Store Deployment', description: 'Publishing to iOS App Store and Google Play', cost: 50000, quantity: 1 }
      ],
      terms: 'Payment: 50% upfront, 30% at beta release, 20% on app store approval. Timeline: 8-12 weeks. Includes app store submission and 60 days support.'
    }
  },

  ecommerce: {
    name: 'E-commerce Platform',
    icon: 'ShoppingCart',
    description: 'Online store with payment integration',
    data: {
      projectTitle: 'E-commerce Website Development',
      projectDescription: 'Complete e-commerce solution with product catalog, shopping cart, payment processing, order management, and admin dashboard for online business operations.',
      items: [
        { name: 'E-commerce Platform Setup', description: 'Shopify/WooCommerce or custom platform', cost: 180000, quantity: 1 },
        { name: 'Product Catalog System', description: 'Product listings, categories, and search', cost: 100000, quantity: 1 },
        { name: 'Payment Gateway Integration', description: 'Paystack, Flutterwave, and card payments', cost: 80000, quantity: 1 },
        { name: 'Order Management System', description: 'Order tracking and inventory management', cost: 120000, quantity: 1 },
        { name: 'Admin Dashboard', description: 'Sales analytics and store management', cost: 90000, quantity: 1 },
        { name: 'Mobile Optimization', description: 'Responsive design for mobile shopping', cost: 60000, quantity: 1 }
      ],
      terms: 'Payment: 40% upfront, 40% at functional completion, 20% on launch. Timeline: 6-10 weeks. Includes payment gateway setup and 45 days support.'
    }
  },

  portfolio: {
    name: 'Portfolio Website',
    icon: 'Briefcase',
    description: 'Professional portfolio or business website',
    data: {
      projectTitle: 'Professional Portfolio Website',
      projectDescription: 'Modern, responsive portfolio website showcasing your work, skills, and services. Includes contact forms, blog functionality, and SEO optimization.',
      items: [
        { name: 'Custom Design', description: 'Unique visual design and branding', cost: 80000, quantity: 1 },
        { name: 'Responsive Development', description: 'Mobile-first responsive website', cost: 120000, quantity: 1 },
        { name: 'Portfolio Gallery', description: 'Interactive project showcase', cost: 60000, quantity: 1 },
        { name: 'Contact System', description: 'Contact forms and inquiry management', cost: 40000, quantity: 1 },
        { name: 'SEO Optimization', description: 'Search engine optimization setup', cost: 50000, quantity: 1 },
        { name: 'Content Management', description: 'Easy content update system', cost: 70000, quantity: 1 }
      ],
      terms: 'Payment: 50% upfront, 50% on completion. Timeline: 3-4 weeks. Includes domain setup and 30 days support.'
    }
  },

  consulting: {
    name: 'Consulting Services',
    icon: 'Lightbulb',
    description: 'Technical consulting and strategy',
    data: {
      projectTitle: 'Technical Consulting Services',
      projectDescription: 'Comprehensive technical consulting including system architecture review, technology recommendations, performance optimization, and strategic planning.',
      items: [
        { name: 'System Architecture Review', description: 'Current system analysis and recommendations', cost: 150000, quantity: 1 },
        { name: 'Technology Strategy', description: 'Technology roadmap and planning', cost: 120000, quantity: 1 },
        { name: 'Performance Audit', description: 'System performance analysis and optimization', cost: 100000, quantity: 1 },
        { name: 'Security Assessment', description: 'Security review and recommendations', cost: 130000, quantity: 1 },
        { name: 'Implementation Support', description: 'Ongoing support during implementation', cost: 80000, quantity: 1 }
      ],
      terms: 'Payment: 60% upfront, 40% on deliverable completion. Timeline: 4-6 weeks. Includes detailed reports and 30 days follow-up support.'
    }
  },

  maintenance: {
    name: 'Website Maintenance',
    icon: 'Wrench',
    description: 'Ongoing website support and updates',
    data: {
      projectTitle: 'Website Maintenance Package',
      projectDescription: 'Comprehensive website maintenance including security updates, performance monitoring, content updates, backup management, and technical support.',
      items: [
        { name: 'Security Updates', description: 'Monthly security patches and monitoring', cost: 25000, quantity: 12 },
        { name: 'Performance Monitoring', description: 'Site speed and uptime monitoring', cost: 15000, quantity: 12 },
        { name: 'Content Updates', description: 'Regular content and image updates', cost: 20000, quantity: 12 },
        { name: 'Backup Management', description: 'Automated backups and recovery', cost: 10000, quantity: 12 },
        { name: 'Technical Support', description: '24/7 technical support and bug fixes', cost: 30000, quantity: 12 }
      ],
      terms: 'Payment: Monthly billing or annual payment with 10% discount. Includes unlimited minor updates and priority support.'
    }
  }
};

export const getTemplate = (templateKey) => {
  return proposalTemplates[templateKey] || null;
};

export const getTemplateList = () => {
  return Object.keys(proposalTemplates).map(key => ({
    key,
    ...proposalTemplates[key]
  }));
};