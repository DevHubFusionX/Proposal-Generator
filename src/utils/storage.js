// localStorage utility functions
const STORAGE_KEY = 'proposalcraft_data';
const HISTORY_KEY = 'proposalcraft_history';

export const saveProposal = (proposal) => {
  try {
    const data = {
      proposal,
      lastSaved: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Failed to save proposal:', error);
    return false;
  }
};

export const loadProposal = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      return parsed.proposal;
    }
    return null;
  } catch (error) {
    console.error('Failed to load proposal:', error);
    return null;
  }
};

export const clearProposal = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear proposal:', error);
    return false;
  }
};

export const getLastSaved = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      return parsed.lastSaved;
    }
    return null;
  } catch (error) {
    console.error('Failed to get last saved time:', error);
    return null;
  }
};

// Proposal History Management
export const saveToHistory = (proposal) => {
  try {
    const history = getProposalHistory();
    const newEntry = {
      id: Date.now().toString(),
      ...proposal,
      savedAt: new Date().toISOString()
    };
    
    const updatedHistory = [newEntry, ...history.slice(0, 19)]; // Keep last 20
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    return newEntry.id;
  } catch (error) {
    console.error('Failed to save to history:', error);
    return null;
  }
};

export const getProposalHistory = () => {
  try {
    const history = localStorage.getItem(HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Failed to load history:', error);
    return [];
  }
};

export const loadFromHistory = (id) => {
  try {
    const history = getProposalHistory();
    return history.find(p => p.id === id) || null;
  } catch (error) {
    console.error('Failed to load from history:', error);
    return null;
  }
};

export const deleteFromHistory = (id) => {
  try {
    const history = getProposalHistory();
    const filtered = history.filter(p => p.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Failed to delete from history:', error);
    return false;
  }
};

export const duplicateProposal = (proposal) => {
  const duplicate = {
    ...proposal,
    proposalNumber: `PROP-${Date.now().toString().slice(-6)}`,
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    projectTitle: `${proposal.projectTitle} (Copy)`
  };
  return duplicate;
};