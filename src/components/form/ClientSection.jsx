import { User, Mail, Phone } from 'lucide-react';
import FormField from './FormField';

const ClientSection = ({ proposal, updateProposal, errors, touched, handleBlur }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <FormField
          label="Client Name"
          icon={User}
          type="text"
          value={proposal.clientName}
          onChange={(value) => updateProposal('clientName', value)}
          onBlur={() => handleBlur('clientName')}
          placeholder="John Doe / ABC Company"
          error={touched.clientName && errors.clientName}
        />
        
        <FormField
          label="Client Email"
          icon={Mail}
          type="email"
          value={proposal.clientEmail}
          onChange={(value) => updateProposal('clientEmail', value)}
          onBlur={() => handleBlur('clientEmail')}
          placeholder="client@email.com"
          error={touched.clientEmail && errors.clientEmail}
        />
        
        <FormField
          label="Client Phone"
          icon={Phone}
          type="tel"
          value={proposal.clientPhone}
          onChange={(value) => updateProposal('clientPhone', value)}
          onBlur={() => handleBlur('clientPhone')}
          placeholder="+234 xxx xxx xxxx"
          error={touched.clientPhone && errors.clientPhone}
        />
      </div>
    </div>
  );
};

export default ClientSection;