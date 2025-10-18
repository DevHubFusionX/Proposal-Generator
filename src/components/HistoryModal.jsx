import { useState } from 'react';
import { X, Clock, Trash2, Copy, FileText } from 'lucide-react';
import { getProposalHistory, deleteFromHistory } from '../utils/storage';

const HistoryModal = ({ isOpen, onClose, onLoadProposal, onDuplicateProposal }) => {
  const [history, setHistory] = useState(getProposalHistory());

  const handleDelete = (id) => {
    if (deleteFromHistory(id)) {
      setHistory(getProposalHistory());
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const calculateTotal = (items, taxRate = 0, discountRate = 0) => {
    const subtotal = items.reduce((sum, item) => sum + (item.cost * item.quantity), 0);
    const discount = subtotal * (discountRate / 100);
    const tax = (subtotal - discount) * (taxRate / 100);
    return subtotal - discount + tax;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Proposal History</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {history.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No saved proposals yet</p>
              <p className="text-gray-500 text-sm mt-2">Your proposal history will appear here</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {history.map((proposal) => (
                <div key={proposal.id} className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {proposal.projectTitle || 'Untitled Proposal'}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        Client: {proposal.clientName || 'No client specified'}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {formatDate(proposal.savedAt)}
                        </div>
                        <div>
                          {proposal.currency}{calculateTotal(proposal.items, proposal.taxRate, proposal.discountRate).toLocaleString()}
                        </div>
                        <div>
                          {proposal.items.length} items
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => {
                          onLoadProposal(proposal);
                          onClose();
                        }}
                        className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm transition-colors"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => {
                          onDuplicateProposal(proposal);
                          onClose();
                        }}
                        className="p-2 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors"
                        title="Duplicate"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(proposal.id)}
                        className="p-2 hover:bg-red-600 text-gray-400 hover:text-white rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;