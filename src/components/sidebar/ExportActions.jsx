import { useState } from 'react';
import { Download, Share2, FileDown, Image } from 'lucide-react';
import ActionButton from './ActionButton';

const ExportActions = ({ 
  onExportPDF, 
  onExportPNG, 
  onShare, 
  isExporting, 
  exportProgress 
}) => {
  const [isExportOpen, setIsExportOpen] = useState(false);

  return (
    <div>
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Export & Share
      </h3>
      <div className="space-y-2">
        <button
          onClick={() => setIsExportOpen(!isExportOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-left text-white hover:bg-gray-800 rounded-xl transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:bg-green-700 transition-colors">
              <Download size={18} />
            </div>
            <div>
              <div className="font-semibold">Export Document</div>
              <div className="text-xs text-gray-400">Download as PDF or PNG</div>
            </div>
          </div>
          <div className={`transform transition-transform ${isExportOpen ? 'rotate-180' : ''}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {isExportOpen && (
          <div className="ml-4 space-y-1">
            <button
              onClick={onExportPDF}
              disabled={isExporting}
              className="w-full flex items-center gap-3 px-4 py-2 text-left text-white hover:bg-gray-800 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileDown size={16} className="text-red-400" />
              <span>Export as PDF</span>
            </button>
            <button
              onClick={onExportPNG}
              disabled={isExporting}
              className="w-full flex items-center gap-3 px-4 py-2 text-left text-white hover:bg-gray-800 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Image size={16} className="text-blue-400" />
              <span>Export as PNG</span>
            </button>
          </div>
        )}

        <ActionButton
          onClick={onShare}
          icon={Share2}
          title="Share Proposal"
          description="Share via apps or clipboard"
          bgColor="bg-blue-600"
          hoverColor="group-hover:bg-blue-700"
          disabled={isExporting}
        />
        
        {/* Export Progress */}
        {(isExporting || exportProgress) && (
          <div className="px-4 py-3 bg-gray-800 rounded-xl">
            <div className="flex items-center gap-2">
              {isExporting && (
                <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
              )}
              <span className="text-sm text-gray-300">{exportProgress}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExportActions;