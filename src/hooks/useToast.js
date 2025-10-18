import { useState, useCallback } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState({
    isVisible: false,
    type: 'info',
    message: ''
  });

  const showToast = useCallback((type, message) => {
    setToast({
      isVisible: true,
      type,
      message
    });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, isVisible: false }));
  }, []);

  const success = useCallback((message) => showToast('success', message), [showToast]);
  const error = useCallback((message) => showToast('error', message), [showToast]);
  const warning = useCallback((message) => showToast('warning', message), [showToast]);
  const info = useCallback((message) => showToast('info', message), [showToast]);

  return {
    toast,
    showToast,
    hideToast,
    success,
    error,
    warning,
    info
  };
};