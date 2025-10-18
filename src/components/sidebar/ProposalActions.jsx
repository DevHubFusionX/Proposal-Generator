import { Edit3, RotateCcw, FileText, History, Archive, Settings } from 'lucide-react';
import ActionButton from './ActionButton';

const ProposalActions = ({ 
  onTemplates, 
  onNewProposal, 
  onEditProposal, 
  onSaveToHistory, 
  onHistory,
  onSettings
}) => {
  return (
    <div>
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Proposal Actions
      </h3>
      <div className="space-y-2">
        <ActionButton
          onClick={onTemplates}
          icon={FileText}
          title="Templates"
          description="Start with pre-built templates"
          bgColor="bg-purple-600"
          hoverColor="group-hover:bg-purple-700"
        />

        <ActionButton
          onClick={onNewProposal}
          icon={RotateCcw}
          title="New Proposal"
          description="Start from scratch"
          bgColor="bg-gray-600"
          hoverColor="group-hover:bg-gray-700"
        />

        <ActionButton
          onClick={onEditProposal}
          icon={Edit3}
          title="Edit Proposal"
          description="Modify current proposal"
          bgColor="bg-amber-500"
          hoverColor="group-hover:bg-amber-600"
        />

        <ActionButton
          onClick={onSaveToHistory}
          icon={Archive}
          title="Save to History"
          description="Keep a copy in history"
          bgColor="bg-indigo-600"
          hoverColor="group-hover:bg-indigo-700"
        />

        <ActionButton
          onClick={onHistory}
          icon={History}
          title="View History"
          description="Load saved proposals"
          bgColor="bg-teal-600"
          hoverColor="group-hover:bg-teal-700"
        />

        <ActionButton
          onClick={onSettings}
          icon={Settings}
          title="App Settings"
          description="Customize branding & defaults"
          bgColor="bg-slate-600"
          hoverColor="group-hover:bg-slate-700"
        />
      </div>
    </div>
  );
};

export default ProposalActions;