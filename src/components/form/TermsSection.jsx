import { FileText } from 'lucide-react';

const TermsSection = ({ proposal, updateProposal }) => {
  return (
    <div className="card-dark rounded-2xl shadow-professional p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl accent-amber flex items-center justify-center">
          <FileText className="w-6 h-6 text-gray-900" />
        </div>
        <h2 className="text-2xl font-bold text-gray-100">Terms & Conditions</h2>
      </div>
      
      <textarea
        value={proposal.terms}
        onChange={(e) => updateProposal('terms', e.target.value)}
        className="w-full px-4 py-3 input-dark rounded-xl focus:outline-none transition-all duration-200 font-medium h-32 resize-none"
        placeholder="Enter payment terms, project timeline, and other conditions..."
      />
    </div>
  );
};

export default TermsSection;