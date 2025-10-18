import { AlertCircle } from 'lucide-react';

const FormField = ({ 
  label, 
  icon: Icon, 
  type = 'text', 
  value, 
  onChange, 
  onBlur, 
  placeholder, 
  error,
  className = '',
  ...props 
}) => {
  return (
    <div className={className}>
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
        <Icon className="w-4 h-4 text-amber-400" />
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full px-4 py-3 input-dark rounded-xl focus:outline-none transition-all duration-200 font-medium ${
          error ? 'border-red-500 focus:border-red-500' : ''
        }`}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <div className="flex items-center gap-1 mt-1 text-red-400 text-xs">
          <AlertCircle className="w-3 h-3" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default FormField;