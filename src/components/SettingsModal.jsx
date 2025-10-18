import { useState } from 'react';
import { X, Building2, Palette, Settings, RotateCcw, DollarSign } from 'lucide-react';
import FormField from './form/FormField';
import { currencyOptions } from '../config/branding';

const SettingsModal = ({ isOpen, onClose, branding, onUpdateBranding, onResetBranding }) => {
  const [formData, setFormData] = useState(branding);

  const handleSave = () => {
    onUpdateBranding(formData);
    onClose();
  };

  const handleReset = () => {
    onResetBranding();
    setFormData(branding);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-gray-900 rounded-xl sm:rounded-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-white">App Settings</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(90vh-160px)] space-y-4 sm:space-y-6 scrollbar-slim">
          {/* Company Information */}
          <div className="card-dark rounded-xl p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <h3 className="text-base sm:text-lg font-semibold text-white">Company Information</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FormField
                label="Company Name"
                icon={Building2}
                value={formData.company?.name || ''}
                onChange={(value) => setFormData(prev => ({
                  ...prev,
                  company: { ...prev.company, name: value }
                }))}
                placeholder="Your Company Name"
              />
              <FormField
                label="Phone"
                icon={Building2}
                value={formData.company?.phone || ''}
                onChange={(value) => setFormData(prev => ({
                  ...prev,
                  company: { ...prev.company, phone: value }
                }))}
                placeholder="+1 234 567 8900"
              />
              <div className="sm:col-span-2">
                <FormField
                  label="Email"
                  icon={Building2}
                  type="email"
                  value={formData.company?.email || ''}
                  onChange={(value) => setFormData(prev => ({
                    ...prev,
                    company: { ...prev.company, email: value }
                  }))}
                  placeholder="hello@company.com"
                />
              </div>
            </div>
          </div>

          {/* App Branding */}
          <div className="card-dark rounded-xl p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <h3 className="text-base sm:text-lg font-semibold text-white">App Branding</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FormField
                label="App Name"
                icon={Palette}
                value={formData.app?.name || ''}
                onChange={(value) => setFormData(prev => ({
                  ...prev,
                  app: { ...prev.app, name: value }
                }))}
                placeholder="ProposalCraft"
              />
              <FormField
                label="Tagline"
                icon={Palette}
                value={formData.app?.tagline || ''}
                onChange={(value) => setFormData(prev => ({
                  ...prev,
                  app: { ...prev.app, tagline: value }
                }))}
                placeholder="Professional Generator"
              />
              <FormField
                label="Logo Text"
                icon={Palette}
                value={formData.app?.logo || ''}
                onChange={(value) => setFormData(prev => ({
                  ...prev,
                  app: { ...prev.app, logo: value }
                }))}
                placeholder="AF"
              />
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-400" />
                    Currency
                  </div>
                </label>
                <select
                  value={formData.defaults?.currency || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    defaults: { ...prev.defaults, currency: e.target.value }
                  }))}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 input-dark rounded-xl focus:outline-none transition-all duration-200 font-medium text-sm sm:text-base"
                >
                  {currencyOptions.map((option, index) => (
                    <option key={`${option.value}-${index}`} value={option.value}>
                      {option.label} - {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <FormField
                  label="Footer Text"
                  icon={Palette}
                  value={formData.app?.footerText || ''}
                  onChange={(value) => setFormData(prev => ({
                    ...prev,
                    app: { ...prev.app, footerText: value }
                  }))}
                  placeholder="Professional Proposals Made Easy"
                />
              </div>
            </div>
          </div>

          {/* Default Terms */}
          <div className="card-dark rounded-xl p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <h3 className="text-base sm:text-lg font-semibold text-white">Default Terms</h3>
            </div>
            <textarea
              value={formData.defaults?.terms || ''}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                defaults: { ...prev.defaults, terms: e.target.value }
              }))}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 input-dark rounded-xl focus:outline-none transition-all duration-200 font-medium h-20 sm:h-24 resize-none text-sm sm:text-base"
              placeholder="Enter default payment terms and conditions..."
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 border-t border-gray-700 gap-3 sm:gap-0">
          <button
            onClick={handleReset}
            className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors text-sm sm:text-base"
          >
            <RotateCcw size={14} className="sm:w-4 sm:h-4" />
            Reset to Default
          </button>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 btn-primary rounded-lg transition-all duration-200 text-sm sm:text-base"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;