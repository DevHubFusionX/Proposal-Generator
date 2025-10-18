import { FileText, Hash, Calendar } from 'lucide-react';
import FormField from './FormField';

const ProjectSection = ({ proposal, updateProposal, errors, touched, handleBlur }) => {
  return (
    <div className="card-dark rounded-2xl shadow-professional p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl accent-amber flex items-center justify-center">
          <FileText className="w-6 h-6 text-gray-900" />
        </div>
        <h2 className="text-2xl font-bold text-gray-100">Project Details</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
          className="w-full px-4 py-3 input-dark rounded-xl focus:outline-none transition-all duration-200 font-medium h-24 resize-none"
          placeholder="Brief description of the project scope and objectives..."
        />
      </div>
    </div>
  );
};

export default ProjectSection;