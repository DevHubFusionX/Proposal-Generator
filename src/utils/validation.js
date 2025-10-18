// Validation utility functions
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0;
};

export const validateNumber = (value) => {
  return !isNaN(value) && parseFloat(value) >= 0;
};

export const validateProposal = (proposal) => {
  const errors = {};

  // Required fields
  if (!validateRequired(proposal.clientName)) {
    errors.clientName = 'Client name is required';
  }

  if (!validateRequired(proposal.projectTitle)) {
    errors.projectTitle = 'Project title is required';
  }

  if (!validateRequired(proposal.companyName)) {
    errors.companyName = 'Company name is required';
  }

  // Email validation
  if (proposal.clientEmail && !validateEmail(proposal.clientEmail)) {
    errors.clientEmail = 'Please enter a valid email address';
  }

  if (proposal.companyEmail && !validateEmail(proposal.companyEmail)) {
    errors.companyEmail = 'Please enter a valid email address';
  }

  // Phone validation
  if (proposal.clientPhone && !validatePhone(proposal.clientPhone)) {
    errors.clientPhone = 'Please enter a valid phone number';
  }

  if (proposal.companyPhone && !validatePhone(proposal.companyPhone)) {
    errors.companyPhone = 'Please enter a valid phone number';
  }

  // Items validation
  const itemErrors = [];
  proposal.items.forEach((item, index) => {
    const itemError = {};
    
    if (!validateRequired(item.name)) {
      itemError.name = 'Item name is required';
    }
    
    if (!validateNumber(item.cost)) {
      itemError.cost = 'Please enter a valid cost';
    }
    
    if (!validateNumber(item.quantity) || parseFloat(item.quantity) < 1) {
      itemError.quantity = 'Quantity must be at least 1';
    }
    
    if (Object.keys(itemError).length > 0) {
      itemErrors[index] = itemError;
    }
  });

  if (itemErrors.length > 0) {
    errors.items = itemErrors;
  }

  // Tax and discount validation
  if (proposal.taxRate && (!validateNumber(proposal.taxRate) || parseFloat(proposal.taxRate) < 0 || parseFloat(proposal.taxRate) > 100)) {
    errors.taxRate = 'Tax rate must be between 0 and 100';
  }

  if (proposal.discountRate && (!validateNumber(proposal.discountRate) || parseFloat(proposal.discountRate) < 0 || parseFloat(proposal.discountRate) > 100)) {
    errors.discountRate = 'Discount rate must be between 0 and 100';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};