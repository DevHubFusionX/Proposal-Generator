import { Download, Share2, Zap } from 'lucide-react';

const ActionButtons = ({ onDownload, onShare, onError }) => {
  const runSafely = (fn) => {
    return async (e) => {
      try {
        if (typeof fn === 'function') {
          await fn(e);
        }
      } catch (err) {
        if (typeof onError === 'function') {
          try {
            onError(err);
          } catch (err2) {
            console.error('ActionButtons onError callback threw an error:', err2);
          }
        } else {
          console.error('ActionButtons handler error:', err);
        }
      }
    };
  };

  return (
    <div className="mt-8">
      <div className="flex gap-4">
        <button
          onClick={runSafely(onDownload)}
          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 btn-primary rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
        >
          <Download size={20} className="group-hover:scale-110 transition-transform" />
          Export Document
        </button>
        <button
          onClick={runSafely(onShare)}
          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-xl transition-all duration-200 font-bold shadow-lg hover:shadow-xl group border border-gray-600"
        >
          <Share2 size={20} className="group-hover:scale-110 transition-transform" />
          Share
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-amber-300">
            Professional proposals, instantly
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;