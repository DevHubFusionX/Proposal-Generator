import { forwardRef } from 'react';
import { Calendar, User, Building2, Mail, Phone, Hash } from 'lucide-react';
import Logo from './Logo';
import { useBranding } from '../hooks/useBranding';

const ProposalPreview = forwardRef(({ proposal, branding: brandingProp }, ref) => {
  const { branding: hookBranding } = useBranding();
  const branding = brandingProp || hookBranding;
  
  const subtotal = proposal.items.reduce((sum, item) => sum + (parseFloat(item.cost) * parseFloat(item.quantity) || 0), 0);
  const discount = subtotal * (parseFloat(proposal.discountRate) / 100 || 0);
  const afterDiscount = subtotal - discount;
  const tax = afterDiscount * (parseFloat(proposal.taxRate) / 100 || 0);
  const total = afterDiscount + tax;

  return (
    <div className="card-dark rounded-xl sm:rounded-2xl shadow-professional p-4 sm:p-8">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl accent-amber flex items-center justify-center">
          <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-100">Document Preview</h2>
      </div>
      
      <div 
        ref={ref}
        className="preview-card p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg"
        style={{ minHeight: '500px' }}
      >
        {/* Header */}
        <div className="relative mb-8 sm:mb-10">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl opacity-30"></div>
          
          <div className="relative p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
              {/* Company Info */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0">
                  <Logo size="lg" className="shadow-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
                    {proposal.companyName || branding?.company?.name || 'Franklin Digital Solutions'}
                  </h1>
                  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mb-3"></div>
                  <div className="space-y-1.5 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="break-all">{proposal.companyEmail || branding?.company?.email || 'anyanwufranklin.dev@gmail.com'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{proposal.companyPhone || branding?.company?.phone || '09127391830'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Proposal Info */}
              <div className="lg:text-right bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 lg:min-w-[280px]">
                <div className="flex items-center gap-2 mb-3 lg:justify-end">
                  <Hash className="w-5 h-5 text-amber-500" />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">PROJECT PROPOSAL</h2>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between lg:justify-end lg:gap-3">
                    <span className="text-gray-600">Proposal #:</span>
                    <span className="font-semibold text-gray-900">#{proposal.proposalNumber}</span>
                  </div>
                  <div className="flex justify-between lg:justify-end lg:gap-3">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium text-gray-900">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between lg:justify-end lg:gap-3">
                    <span className="text-gray-600">Valid Until:</span>
                    <span className="font-medium text-amber-600">{new Date(proposal.validUntil).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client & Project Info Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Bill To */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 sm:p-6 border border-blue-100">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide">Bill To</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                {proposal.clientName || 'Client Name'}
              </h4>
              <div className="text-sm text-gray-600 space-y-1.5">
                {proposal.clientEmail && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>{proposal.clientEmail}</span>
                  </div>
                )}
                {proposal.clientPhone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>{proposal.clientPhone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Project Overview */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 sm:p-6 border border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-green-600" />
              <h3 className="text-sm font-bold text-green-900 uppercase tracking-wide">Project Overview</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                {proposal.projectTitle || 'Project Title'}
              </h4>
              {proposal.projectDescription && (
                <p className="text-sm text-gray-700 leading-relaxed">
                  {proposal.projectDescription}
                </p>
              )}
            </div>
          </div>
        </div>



        {/* Investment Breakdown */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-sm font-bold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">Investment Breakdown</h3>
          
          {/* Table Header */}
          <div className="bg-gray-900 text-white p-2 sm:p-3 rounded-t-lg">
            <div className="grid grid-cols-12 gap-1 sm:gap-3 font-semibold text-xs">
              <div className="col-span-6">DESCRIPTION</div>
              <div className="col-span-1 text-center">QTY</div>
              <div className="col-span-2 text-right">UNIT PRICE</div>
              <div className="col-span-3 text-right">TOTAL</div>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="bg-white border-x border-gray-200">
            {proposal.items.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-1 sm:gap-3 p-2 sm:p-3 border-b border-gray-200 hover:bg-gray-50">
                <div className="col-span-6">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm">
                    {item.name || `Item ${index + 1}`}
                  </div>
                  {item.description && (
                    <div className="text-xs text-gray-600 hidden sm:block">
                      {item.description}
                    </div>
                  )}
                </div>
                <div className="col-span-1 text-center text-gray-700 text-xs sm:text-sm">
                  {item.quantity || 1}
                </div>
                <div className="col-span-2 text-right font-semibold text-gray-900 text-xs sm:text-sm">
                  {proposal.currency || branding?.defaults?.currency || '₦'}{parseFloat(item.cost || 0).toLocaleString()}
                </div>
                <div className="col-span-3 text-right font-bold text-gray-900 text-xs sm:text-sm">
                  {proposal.currency || branding?.defaults?.currency || '₦'}{(parseFloat(item.cost || 0) * parseFloat(item.quantity || 1)).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          
          {/* Totals */}
          <div className="bg-white border-x border-b border-gray-200 rounded-b-lg">
            <div className="p-2 sm:p-3 space-y-1 text-xs sm:text-sm">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span className="font-semibold">{proposal.currency || branding?.defaults?.currency || '₦'}{subtotal.toLocaleString()}</span>
              </div>
              
              {proposal.discountRate > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({proposal.discountRate}%):</span>
                  <span className="font-semibold">-{proposal.currency || branding?.defaults?.currency || '₦'}{discount.toLocaleString()}</span>
                </div>
              )}
              
              {proposal.taxRate > 0 && (
                <div className="flex justify-between text-gray-700">
                  <span>Tax ({proposal.taxRate}%):</span>
                  <span className="font-semibold">{proposal.currency || branding?.defaults?.currency || '₦'}{tax.toLocaleString()}</span>
                </div>
              )}
              
              <div className="border-t border-gray-300 pt-2 mt-2">
                <div className="flex justify-between text-base sm:text-lg font-bold text-gray-900">
                  <span>TOTAL AMOUNT:</span>
                  <span className="text-amber-500">{proposal.currency || branding?.defaults?.currency || '₦'}{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        {proposal.terms && (
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Terms & Conditions</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                {proposal.terms}
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 mb-1">
            Thank you for considering our proposal. We look forward to working with you.
          </p>
          <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            <span>
              Generated on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

ProposalPreview.displayName = 'ProposalPreview';

export default ProposalPreview;