import { FileText } from 'lucide-react';

const TermsSection = ({ proposal, updateProposal }) => {
  return (
    <div className="space-y-4">
      <textarea
        value={proposal.terms}
        onChange={(e) => updateProposal('terms', e.target.value)}
        className="w-full px-3 sm:px-4 py-2 sm:py-3 input-dark rounded-lg sm:rounded-xl focus:outline-none transition-all duration-200 font-medium h-32 resize-none text-sm sm:text-base"
        placeholder="Enter payment terms, project timeline, and other conditions..."
      />
    </div>
  );
};

export default TermsSection;