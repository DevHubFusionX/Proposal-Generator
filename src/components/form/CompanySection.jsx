import { Building2, Mail, Phone } from 'lucide-react';
import FormField from './FormField';

const CompanySection = ({ proposal, updateProposal, errors, touched, handleBlur }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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