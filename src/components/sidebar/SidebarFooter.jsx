import { useBranding } from '../../hooks/useBranding';

const SidebarFooter = () => {
  const { branding } = useBranding();
  
  return (
    <div className="p-6 border-t border-gray-700">
      <div className="text-xs text-gray-500 text-center">
        <p>{branding?.company?.name || 'Franklin Digital Solutions'}</p>
        <p className="mt-1">{branding?.app?.footerText || 'Professional Proposals Made Easy'}</p>
      </div>
    </div>
  );
};

export default SidebarFooter;