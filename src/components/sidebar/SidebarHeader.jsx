import Logo from '../Logo';
import { useBranding } from '../../hooks/useBranding';

const SidebarHeader = () => {
  const { branding } = useBranding();
  
  return (
    <div className="p-6 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <Logo size="md" />
        <div>
          <h1 className="text-xl font-black text-gradient-amber tracking-tight">
            {branding?.app?.name || 'ProposalCraft'}
          </h1>
          <p className="text-sm text-gray-400">{branding?.app?.tagline || 'Professional Generator'}</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;