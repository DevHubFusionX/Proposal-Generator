import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { validateProposal } from '../utils/validation';
import CompanySection from './form/CompanySection';
import ClientSection from './form/ClientSection';
import ProjectSection from './form/ProjectSection';
import ItemsSection from './form/ItemsSection';
import TermsSection from './form/TermsSection';
import { Building2, User, FolderOpen, Package, FileText } from 'lucide-react';

const ProposalForm = memo(({ proposal, updateProposal, updateItem, addItem, removeItem }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [activeSection, setActiveSection] = useState('company');

  // Memoize validation to prevent unnecessary recalculations
  const validation = useMemo(() => validateProposal(proposal), [proposal]);

  useEffect(() => {
    setErrors(validation.errors);
  }, [validation.errors]);

  const handleBlur = useCallback((field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  }, []);

  const sections = useMemo(() => [
    { id: 'company', label: 'Company', icon: Building2, hasErrors: errors.companyName || errors.companyEmail || errors.companyPhone },
    { id: 'client', label: 'Client', icon: User, hasErrors: errors.clientName },
    { id: 'project', label: 'Project', icon: FolderOpen, hasErrors: errors.projectTitle },
    { id: 'items', label: 'Items', icon: Package, hasErrors: errors.items },
    { id: 'terms', label: 'Terms', icon: FileText, hasErrors: false }
  ], [errors]);

  const renderSection = useCallback(() => {
    const commonProps = {
      proposal,
      updateProposal,
      errors,
      touched,
      handleBlur
    };

    switch (activeSection) {
      case 'company':
        return <CompanySection {...commonProps} />;
      case 'client':
        return <ClientSection {...commonProps} />;
      case 'project':
        return <ProjectSection {...commonProps} />;
      case 'items':
        return (
          <ItemsSection
            {...commonProps}
            updateItem={updateItem}
            addItem={addItem}
            removeItem={removeItem}
          />
        );
      case 'terms':
        return <TermsSection proposal={proposal} updateProposal={updateProposal} />;
      default:
        return <CompanySection {...commonProps} />;
    }
  }, [activeSection, proposal, updateProposal, updateItem, addItem, removeItem, errors, touched, handleBlur]);

  return (
    <div className="space-y-6">
      {/* Section Navigation */}
      <div className="bg-gray-800 rounded-xl p-4">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">Form Sections</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {sections.map(({ id, label, icon: Icon, hasErrors }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`
                relative flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-all duration-200
                ${activeSection === id 
                  ? 'bg-amber-500 text-gray-900' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
              {hasErrors && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active Section Content */}
      <div className="bg-gray-800 rounded-xl p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            {(() => {
              const currentSection = sections.find(s => s.id === activeSection);
              const IconComponent = currentSection?.icon;
              return IconComponent ? <IconComponent className="w-5 h-5 text-amber-400" /> : null;
            })()}
            {sections.find(s => s.id === activeSection)?.label} Details
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-400 mt-2 rounded-full"></div>
        </div>
        
        {renderSection()}
      </div>

      {/* Progress Indicator */}
      <div className="bg-gray-800 rounded-xl p-4">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>Form Progress</span>
          <span>{sections.findIndex(s => s.id === activeSection) + 1} of {sections.length}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-amber-500 to-yellow-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
});

ProposalForm.displayName = 'ProposalForm';

export default ProposalForm;