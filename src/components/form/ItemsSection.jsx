import { Plus, Trash2, DollarSign, Percent } from 'lucide-react';

const ItemsSection = ({ proposal, updateProposal, updateItem, addItem, removeItem }) => {
  const subtotal = proposal.items.reduce((sum, item) => sum + (parseFloat(item.cost) * parseFloat(item.quantity) || 0), 0);
  const discount = subtotal * (parseFloat(proposal.discountRate) / 100 || 0);
  const afterDiscount = subtotal - discount;
  const tax = afterDiscount * (parseFloat(proposal.taxRate) / 100 || 0);
  const total = afterDiscount + tax;

  return (
    <div className="card-dark rounded-2xl shadow-professional p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl accent-amber flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-gray-900" />
        </div>
        <h2 className="text-2xl font-bold text-gray-100">Project Breakdown</h2>
        <button
          onClick={addItem}
          className="ml-auto flex items-center gap-2 px-4 py-2 btn-primary rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus size={18} />
          Add Item
        </button>
      </div>
      
      <div className="space-y-4 mb-6">
        {proposal.items.map((item, index) => (
          <div key={index} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-4">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(index, 'name', e.target.value)}
                  className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium text-sm"
                  placeholder="Service name"
                />
              </div>
              <div className="md:col-span-4">
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium text-sm"
                  placeholder="Description"
                />
              </div>
              <div className="md:col-span-1">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseFloat(e.target.value) || 1)}
                  className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium text-sm"
                  placeholder="Qty"
                  min="1"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="number"
                  value={item.cost}
                  onChange={(e) => updateItem(index, 'cost', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-bold text-sm"
                  placeholder="Unit Price"
                />
              </div>
              <div className="md:col-span-1 flex items-center justify-center">
                {proposal.items.length > 1 && (
                  <button
                    onClick={() => removeItem(index)}
                    className="p-2 text-red-400 hover:bg-red-900/30 rounded-lg transition-all duration-200"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pricing Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-700">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
            <Percent className="w-4 h-4 text-amber-400" />
            Discount Rate (%)
          </label>
          <input
            type="number"
            value={proposal.discountRate}
            onChange={(e) => updateProposal('discountRate', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium"
            placeholder="0"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
            <Percent className="w-4 h-4 text-amber-400" />
            Tax Rate (%)
          </label>
          <input
            type="number"
            value={proposal.taxRate}
            onChange={(e) => updateProposal('taxRate', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium"
            placeholder="0"
            min="0"
            max="100"
          />
        </div>
        <div className="flex items-end">
          <div className="text-right">
            <div className="text-sm text-gray-400">Total Amount</div>
            <div className="text-2xl font-bold text-amber-400">
              {proposal.currency}{total.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;