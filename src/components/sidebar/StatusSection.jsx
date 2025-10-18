import { Save } from 'lucide-react';

const StatusSection = ({ autoSaveStatus, lastSaved }) => {
  if (!autoSaveStatus && !lastSaved) return null;

  return (
    <div className="px-6 py-4 border-b border-gray-700">
      <div className="space-y-2">
        {autoSaveStatus && (
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <Save size={14} />
            <span>{autoSaveStatus}</span>
          </div>
        )}
        {lastSaved && (
          <div className="text-xs text-gray-400">
            Last saved: {new Date(lastSaved).toLocaleTimeString()}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusSection;