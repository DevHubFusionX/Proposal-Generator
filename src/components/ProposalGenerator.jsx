import { useState, useRef, useCallback } from 'react';
import ProposalPreview from './ProposalPreview';
import FormModal from './FormModal';
import TemplateModal from './TemplateModal';
import HistoryModal from './HistoryModal';
import SettingsModal from './SettingsModal';
import Sidebar from './Sidebar';
import Toast from './Toast';
import { useProposal } from '../hooks/useProposal';
import { useExport } from '../hooks/useExport';
import { useBranding } from '../hooks/useBranding';
import { useToast } from '../hooks/useToast';

const ProposalGenerator = () => {
  const {
    branding,
    updateBranding,
    resetBranding
  } = useBranding();

  const { toast, success, error, hideToast, info } = useToast();

  const {
    proposal,
    lastSaved,
    autoSaveStatus,
    updateProposal,
    addItem,
    removeItem,
    updateItem,
    handleNewProposal,
    handleSaveToHistory,
    handleLoadFromHistory,
    handleDuplicateProposal,
    handleTemplateSelect
  } = useProposal(branding, { success, error, info });

  const {
    isExporting,
    exportProgress,
    generateImage,
    generatePDFExport,
    shareProposal
  } = useExport();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const proposalRef = useRef();

  const handleExportPDF = useCallback(() => {
    generatePDFExport(proposalRef.current, proposal.projectTitle);
  }, [generatePDFExport, proposal.projectTitle]);

  const handleExportPNG = useCallback(() => {
    generateImage(proposalRef.current, proposal.projectTitle);
  }, [generateImage, proposal.projectTitle]);

  const handleShare = useCallback(() => {
    shareProposal(proposalRef.current, proposal.projectTitle);
  }, [shareProposal, proposal.projectTitle]);

  const handleToggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleOpenTemplateModal = useCallback(() => {
    setIsTemplateModalOpen(true);
  }, []);

  const handleCloseTemplateModal = useCallback(() => {
    setIsTemplateModalOpen(false);
  }, []);

  const handleOpenHistoryModal = useCallback(() => {
    setIsHistoryModalOpen(true);
  }, []);

  const handleCloseHistoryModal = useCallback(() => {
    setIsHistoryModalOpen(false);
  }, []);

  const handleOpenSettingsModal = useCallback(() => {
    setIsSettingsModalOpen(true);
  }, []);

  const handleCloseSettingsModal = useCallback(() => {
    setIsSettingsModalOpen(false);
  }, []);

  const handleSaveSettings = useCallback((newBranding) => {
    updateBranding(newBranding);
    success('Settings saved successfully!');
    setIsSettingsModalOpen(false);
  }, [updateBranding, success]);

  const handleResetSettings = useCallback(() => {
    resetBranding();
    success('Settings reset to default!');
  }, [resetBranding, success]);


  return (
    <div className="min-h-screen dark-bg flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={handleToggleSidebar}
        onEditProposal={handleOpenModal}
        onNewProposal={handleNewProposal}
        onTemplates={handleOpenTemplateModal}
        onHistory={handleOpenHistoryModal}
        onSettings={handleOpenSettingsModal}
        onSaveToHistory={handleSaveToHistory}
        onExportPDF={handleExportPDF}
        onExportPNG={handleExportPNG}
        onShare={handleShare}
        autoSaveStatus={autoSaveStatus}
        lastSaved={lastSaved}
        isExporting={isExporting}
        exportProgress={exportProgress}
      />

      {/* Main Content */}
      <div className="flex-1 lg:mr-72">
        <div className="max-w-5xl mx-auto p-4 lg:p-6">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <ProposalPreview
                ref={proposalRef}
                proposal={proposal}
                branding={branding}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        proposal={proposal}
        updateProposal={updateProposal}
        updateItem={updateItem}
        addItem={addItem}
        removeItem={removeItem}
      />

      {/* Template Modal */}
      <TemplateModal
        isOpen={isTemplateModalOpen}
        onClose={handleCloseTemplateModal}
        onSelectTemplate={handleTemplateSelect}
      />

      {/* History Modal */}
      <HistoryModal
        isOpen={isHistoryModalOpen}
        onClose={handleCloseHistoryModal}
        onLoadProposal={handleLoadFromHistory}
        onDuplicateProposal={handleDuplicateProposal}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={handleCloseSettingsModal}
        branding={branding}
        onUpdateBranding={handleSaveSettings}
        onResetBranding={handleResetSettings}
      />

      {/* Toast Notifications */}
      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
};

export default ProposalGenerator;