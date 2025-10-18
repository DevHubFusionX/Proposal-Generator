import { X, Lightbulb, Globe, Smartphone, ShoppingCart, Briefcase, Wrench } from 'lucide-react';
import { getTemplateList } from '../utils/templates';

const TemplateModal = ({ isOpen, onClose, onSelectTemplate }) => {
  if (!isOpen) return null;

  const templates = getTemplateList();

  const handleTemplateSelect = (template) => {
    onSelectTemplate(template);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Choose a Template</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-70px)] sm:max-h-[calc(90vh-80px)]">
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Start with a pre-built template tailored for your project type
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {templates.map((template) => (
              <button
                key={template.key}
                onClick={() => handleTemplateSelect(template)}
                className="p-4 sm:p-6 bg-gray-800 hover:bg-gray-700 rounded-lg sm:rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-200 text-left group"
              >
                <div className="mb-2 sm:mb-3">
                  {template.icon === 'Globe' && <Globe className="w-8 h-8 text-blue-400" />}
                  {template.icon === 'Smartphone' && <Smartphone className="w-8 h-8 text-purple-400" />}
                  {template.icon === 'ShoppingCart' && <ShoppingCart className="w-8 h-8 text-green-400" />}
                  {template.icon === 'Briefcase' && <Briefcase className="w-8 h-8 text-amber-400" />}
                  {template.icon === 'Lightbulb' && <Lightbulb className="w-8 h-8 text-yellow-400" />}
                  {template.icon === 'Wrench' && <Wrench className="w-8 h-8 text-gray-400" />}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-amber-400">
                  {template.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {template.description}
                </p>
                
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{template.data.items.length} items</span>
                    <span className="text-amber-400 font-semibold">
                      ₦{template.data.items.reduce((sum, item) => sum + (item.cost * item.quantity), 0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
              <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <p>
                <strong className="text-gray-300">Tip:</strong> Templates are starting points - you can customize all fields, prices, and terms after selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateModal;