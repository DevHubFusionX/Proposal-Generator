import { FileText, Hash, Calendar } from 'lucide-react';
import FormField from './FormField';

const ProjectSection = ({ proposal, updateProposal, errors, touched, handleBlur }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <FormField
          label="Project Title"
          icon={FileText}
          type="text"
          value={proposal.projectTitle}
          onChange={(value) => updateProposal('projectTitle', value)}
          onBlur={() => handleBlur('projectTitle')}
          placeholder="E-commerce Website Development"
          error={touched.projectTitle && errors.projectTitle}
        />
        
        <FormField
          label="Proposal Number"
          icon={Hash}
          type="text"
          value={proposal.proposalNumber}
          onChange={(value) => updateProposal('proposalNumber', value)}
        />
        
        <FormField
          label="Valid Until"
          icon={Calendar}
          type="date"
          value={proposal.validUntil}
          onChange={(value) => updateProposal('validUntil', value)}
        />
      </div>
      
      <div>
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
          <FileText className="w-4 h-4 text-amber-400" />
          Project Description
        </label>
        <textarea
          value={proposal.projectDescription}
          onChange={(e) => updateProposal('projectDescription', e.target.value)}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 input-dark rounded-lg sm:rounded-xl focus:outline-none transition-all duration-200 font-medium h-24 resize-none text-sm sm:text-base"
          placeholder="Brief description of the project scope and objectives..."
        />
      </div>
    </div>
  );
};

export default ProjectSection;