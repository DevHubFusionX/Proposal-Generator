import { memo, useCallback, useEffect } from 'react';
import { X, Edit3, Save, FileText } from 'lucide-react';
import ProposalForm from './ProposalForm';

const FormModal = memo(({ isOpen, onClose, proposal, updateProposal, updateItem, addItem, removeItem }) => {
  // Handle escape key
  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  // Handle backdrop click
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200 flex flex-col">
        {/* Enhanced Header */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10"></div>
          <div className="relative flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-gray-700">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                <Edit3 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white">Edit Proposal</h2>
                <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">Modify your proposal details</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Optimized Content Area */}
        <div className="flex-1 overflow-y-auto scrollbar-slim">
          <div className="p-4 sm:p-6">
            <ProposalForm
              proposal={proposal}
              updateProposal={updateProposal}
              updateItem={updateItem}
              addItem={addItem}
              removeItem={removeItem}
            />
          </div>
        </div>
        
        {/* Footer with Actions */}
        <div className="flex-shrink-0 border-t border-gray-700 p-3 sm:p-4 md:p-6 bg-gray-800/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Changes are auto-saved</span>
              <span className="sm:hidden">Auto-saved</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onClose}
                className="px-3 sm:px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Close
              </button>
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 text-sm"
              >
                <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

FormModal.displayName = 'FormModal';

export default FormModal;