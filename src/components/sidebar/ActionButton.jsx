const ActionButton = ({ 
  onClick, 
  icon: Icon, 
  title, 
  description, 
  bgColor, 
  hoverColor,
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center gap-3 px-4 py-3 text-left text-white hover:bg-gray-800 rounded-xl transition-colors group ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center ${hoverColor} transition-colors`}>
        <Icon size={18} />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-gray-400">{description}</div>
      </div>
    </button>
  );
};

export default ActionButton;