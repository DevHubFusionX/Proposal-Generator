import { Building2, Mail, Phone } from 'lucide-react';
import FormField from './FormField';

const CompanySection = ({ proposal, updateProposal, errors, touched, handleBlur }) => {
  return (
    <div className="card-dark rounded-2xl shadow-professional p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl accent-amber flex items-center justify-center">
          <Building2 className="w-6 h-6 text-gray-900" />
        </div>
        <h2 className="text-2xl font-bold text-gray-100">Company Information</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Company Name"
          icon={Building2}
          type="text"
          value={proposal.companyName}
          onChange={(value) => updateProposal('companyName', value)}
          onBlur={() => handleBlur('companyName')}
          placeholder="Your Company Ltd."
          error={touched.companyName && errors.companyName}
        />
        
        <FormField
          label="Company Email"
          icon={Mail}
          type="email"
          value={proposal.companyEmail}
          onChange={(value) => updateProposal('companyEmail', value)}
          onBlur={() => handleBlur('companyEmail')}
          placeholder="hello@company.com"
          error={touched.companyEmail && errors.companyEmail}
        />
        
        <FormField
          label="Company Phone"
          icon={Phone}
          type="tel"
          value={proposal.companyPhone}
          onChange={(value) => updateProposal('companyPhone', value)}
          onBlur={() => handleBlur('companyPhone')}
          placeholder="+234 xxx xxx xxxx"
          error={touched.companyPhone && errors.companyPhone}
        />
      </div>
    </div>
  );
};

export default CompanySection;