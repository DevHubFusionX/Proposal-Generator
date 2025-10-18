import { useState, useEffect } from 'react';
import { saveProposal, loadProposal, clearProposal, getLastSaved, saveToHistory, duplicateProposal } from '../utils/storage';
import { brandingConfig } from '../config/branding';

export const useProposal = (branding, toast) => {
  const [proposal, setProposal] = useState(() => ({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    projectTitle: '',
    projectDescription: '',
    companyName: branding?.company?.name || brandingConfig.company.name,
    companyPhone: branding?.company?.phone || brandingConfig.company.phone,
    companyEmail: branding?.company?.email || brandingConfig.company.email,
    proposalNumber: `PROP-${Date.now().toString().slice(-6)}`,
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    year: new Date().getFullYear(),
    currency: branding?.defaults?.currency || brandingConfig.defaults.currency,
    taxRate: 0,
    discountRate: 0,
    items: branding?.defaults?.items ? [...branding.defaults.items] : [...brandingConfig.defaults.items],
    terms: branding?.defaults?.terms || brandingConfig.defaults.terms
  }));

  const [lastSaved, setLastSaved] = useState(null);
  const [autoSaveStatus, setAutoSaveStatus] = useState('');

  useEffect(() => {
    const savedProposal = loadProposal();
    if (savedProposal) {
      setProposal(savedProposal);
      setLastSaved(getLastSaved());
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (saveProposal(proposal)) {
        setLastSaved(new Date().toISOString());
        setAutoSaveStatus('Saved');
        setTimeout(() => setAutoSaveStatus(''), 2000);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [proposal]);

  // Update proposal when branding changes
  useEffect(() => {
    if (branding) {
      setProposal(prev => ({
        ...prev,
        companyName: branding.company?.name || prev.companyName,
        companyPhone: branding.company?.phone || prev.companyPhone,
        companyEmail: branding.company?.email || prev.companyEmail,
        currency: branding.defaults?.currency || prev.currency,
        terms: branding.defaults?.terms || prev.terms
      }));
    }
  }, [branding]);

  const getDefaultProposal = () => ({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    projectTitle: '',
    projectDescription: '',
    companyName: branding?.company?.name || brandingConfig.company.name,
    companyPhone: branding?.company?.phone || brandingConfig.company.phone,
    companyEmail: branding?.company?.email || brandingConfig.company.email,
    proposalNumber: `PROP-${Date.now().toString().slice(-6)}`,
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    year: new Date().getFullYear(),
    currency: branding?.defaults?.currency || brandingConfig.defaults.currency,
    taxRate: 0,
    discountRate: 0,
    items: branding?.defaults?.items ? [...branding.defaults.items] : [...brandingConfig.defaults.items],
    terms: branding?.defaults?.terms || brandingConfig.defaults.terms
  });

  const updateProposal = (field, value) => {
    setProposal(prev => ({ ...prev, [field]: value }));
    setAutoSaveStatus('Saving...');
  };

  const addItem = () => {
    setProposal(prev => ({
      ...prev,
      items: [...prev.items, { name: '', description: '', cost: 0, quantity: 1 }]
    }));
  };

  const removeItem = (index) => {
    setProposal(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  const updateItem = (index, field, value) => {
    setProposal(prev => ({
      ...prev,
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleNewProposal = () => {
    setProposal(getDefaultProposal());
    clearProposal();
    setLastSaved(null);
    toast?.info?.('New proposal created!');
  };

  const handleSaveToHistory = () => {
    const id = saveToHistory(proposal);
    if (id) {
      setAutoSaveStatus('Saved to history');
      setTimeout(() => setAutoSaveStatus(''), 2000);
      toast?.success?.('Proposal saved to history!');
    } else {
      toast?.error?.('Failed to save proposal to history');
    }
  };

  const handleLoadFromHistory = (historicalProposal) => {
    const { id, savedAt, ...proposalData } = historicalProposal;
    setProposal(proposalData);
    setAutoSaveStatus('Loaded from history');
    setTimeout(() => setAutoSaveStatus(''), 2000);
    toast?.success?.('Proposal loaded from history!');
  };

  const handleDuplicateProposal = (originalProposal) => {
    const { id, savedAt, ...proposalData } = originalProposal;
    const duplicate = duplicateProposal(proposalData);
    setProposal(duplicate);
    setAutoSaveStatus('Proposal duplicated');
    setTimeout(() => setAutoSaveStatus(''), 2000);
    toast?.success?.('Proposal duplicated successfully!');
  };

  const handleTemplateSelect = (template) => {
    const newProposal = {
      ...getDefaultProposal(),
      ...template.data,
      proposalNumber: `PROP-${Date.now().toString().slice(-6)}`,
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
    setProposal(newProposal);
    setAutoSaveStatus('Template loaded');
    setTimeout(() => setAutoSaveStatus(''), 2000);
    toast?.success?.(`${template.name} template loaded!`);
  };

  return {
    proposal,
    lastSaved,
    autoSaveStatus,
    updateProposal,
    addItem,
    removeItem,
    updateItem,
    handleNewProposal,
    handleSaveToHistory,
    handleLoadFromHistory,
    handleDuplicateProposal,
    handleTemplateSelect
  };
};