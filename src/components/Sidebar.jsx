import { X, Menu } from 'lucide-react';
import SidebarHeader from './sidebar/SidebarHeader';
import StatusSection from './sidebar/StatusSection';
import ProposalActions from './sidebar/ProposalActions';
import ExportActions from './sidebar/ExportActions';
import SidebarFooter from './sidebar/SidebarFooter';

const Sidebar = ({ 
  isOpen, 
  onToggle, 
  onEditProposal, 
  onNewProposal, 
  onTemplates, 
  onHistory,
  onSaveToHistory,
  onSettings,
  onExportPDF, 
  onExportPNG, 
  onShare,
  autoSaveStatus,
  lastSaved,
  isExporting,
  exportProgress
}) => {

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 right-4 z-50 lg:hidden p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl shadow-lg transition-all duration-200"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full bg-gray-900 border-l border-gray-700 z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        w-80 lg:w-72
      `}>
        <div className="flex flex-col h-full">
          <SidebarHeader />
          
          <StatusSection 
            autoSaveStatus={autoSaveStatus}
            lastSaved={lastSaved}
          />

          <div className="flex-1 p-6 space-y-4 overflow-y-auto scrollbar-slim">
            <ProposalActions 
              onTemplates={onTemplates}
              onNewProposal={onNewProposal}
              onEditProposal={onEditProposal}
              onSaveToHistory={onSaveToHistory}
              onHistory={onHistory}
              onSettings={onSettings}
            />
            
            <ExportActions 
              onExportPDF={onExportPDF}
              onExportPNG={onExportPNG}
              onShare={onShare}
              isExporting={isExporting}
              exportProgress={exportProgress}
            />
          </div>

          <SidebarFooter />
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;