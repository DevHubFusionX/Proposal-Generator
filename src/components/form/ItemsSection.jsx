import { Plus, Trash2, DollarSign, Percent } from 'lucide-react';

const ItemsSection = ({ proposal, updateProposal, updateItem, addItem, removeItem }) => {
  const subtotal = proposal.items.reduce((sum, item) => sum + (parseFloat(item.cost) * parseFloat(item.quantity) || 0), 0);
  const discount = subtotal * (parseFloat(proposal.discountRate) / 100 || 0);
  const afterDiscount = subtotal - discount;
  const tax = afterDiscount * (parseFloat(proposal.taxRate) / 100 || 0);
  const total = afterDiscount + tax;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex justify-end">
        <button
          onClick={addItem}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 btn-primary rounded-lg sm:rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="hidden sm:inline">Add Item</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
      
      <div className="space-y-4 mb-6">
        {proposal.items.map((item, index) => (
          <div key={index} className="p-3 sm:p-4 bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3">
              <div className="sm:col-span-12">
                <label className="text-xs text-gray-400 mb-1 block">Service Name</label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(index, 'name', e.target.value)}
                  className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium text-sm"
                  placeholder="Service name"
                />
              </div>
              <div className="sm:col-span-12">
                <label className="text-xs text-gray-400 mb-1 block">Description</label>
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium text-sm"
                  placeholder="Description"
                />
              </div>
              <div className="sm:col-span-4">
                <label className="text-xs text-gray-400 mb-1 block">Quantity</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseFloat(e.target.value) || 1)}
                  className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium text-sm"
                  placeholder="Qty"
                  min="1"
                />
              </div>
              <div className="sm:col-span-6">
                <label className="text-xs text-gray-400 mb-1 block">Unit Price</label>
                <input
                  type="number"
                  value={item.cost}
                  onChange={(e) => updateItem(index, 'cost', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-bold text-sm"
                  placeholder="Unit Price"
                />
              </div>
              <div className="sm:col-span-2 flex items-end justify-center">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-700">
        <div>
          <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 mb-2">
            <Percent className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
            Discount Rate (%)
          </label>
          <input
            type="number"
            value={proposal.discountRate}
            onChange={(e) => updateProposal('discountRate', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium text-sm"
            placeholder="0"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 mb-2">
            <Percent className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
            Tax Rate (%)
          </label>
          <input
            type="number"
            value={proposal.taxRate}
            onChange={(e) => updateProposal('taxRate', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 input-dark rounded-lg transition-all duration-200 font-medium text-sm"
            placeholder="0"
            min="0"
            max="100"
          />
        </div>
        <div className="flex items-end sm:col-span-2 lg:col-span-1">
          <div className="text-right w-full">
            <div className="text-xs sm:text-sm text-gray-400">Total Amount</div>
            <div className="text-xl sm:text-2xl font-bold text-amber-400">
              {proposal.currency}{total.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;