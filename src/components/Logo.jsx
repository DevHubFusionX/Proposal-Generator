import { useBranding } from '../hooks/useBranding';

const Logo = ({ size = "md", className = "" }) => {
  const { branding } = useBranding();
  
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <div className={`${sizes[size]} ${className} relative`}>
      <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center shadow-lg">
        <span className="text-amber-400 font-black text-lg">
          {branding?.app?.logo || 'AF'}
        </span>
      </div>
    </div>
  );
};

export default Logo;