import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Initializing Propulse...',
    'Loading templates...',
    'Setting up workspace...',
    'Ready to launch! 🚀'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const stepIndex = Math.floor(progress / 25);
    setCurrentStep(Math.min(stepIndex, steps.length - 1));
  }, [progress, steps.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Clean Logo Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="cleanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#3B82F6'}} />
                  <stop offset="100%" style={{stopColor:'#1E40AF'}} />
                </linearGradient>
              </defs>
              <rect x="30" y="25" width="8" height="50" rx="4" fill="url(#cleanGrad)"/>
              <rect x="30" y="25" width="25" height="8" rx="4" fill="url(#cleanGrad)"/>
              <rect x="30" y="42" width="20" height="8" rx="4" fill="url(#cleanGrad)"/>
              <rect x="47" y="25" width="8" height="25" rx="4" fill="url(#cleanGrad)"/>
              <path d="M65 45 L75 50 L65 55 Z" fill="url(#cleanGrad)"/>
            </svg>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-6xl font-black text-white mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Propulse
        </h1>
        <p className="text-xl text-blue-300 mb-8 font-medium">Rocket-Powered Proposals</p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-right mt-2">
            <span className="text-blue-300 text-sm font-medium">{progress}%</span>
          </div>
        </div>

        {/* Loading Steps */}
        <p className="text-white text-lg font-medium animate-pulse">
          {steps[currentStep]}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;