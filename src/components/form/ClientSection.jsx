import { User, Mail, Phone } from 'lucide-react';
import FormField from './FormField';

const ClientSection = ({ proposal, updateProposal, errors, touched, handleBlur }) => {
  return (
    <div className="card-dark rounded-2xl shadow-professional p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl accent-amber flex items-center justify-center">
          <User className="w-6 h-6 text-gray-900" />
        </div>
        <h2 className="text-2xl font-bold text-gray-100">Client Information</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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