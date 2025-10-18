import { useState, useContext } from "react";
import { brandingConfig as defaultConfig } from "../config/branding";
import { BrandingContext } from "../context/BrandingContext";

const BRANDING_STORAGE_KEY = "proposalcraft_branding";

export const useBranding = () => {
  const context = useContext(BrandingContext);

  // Fallback state (always created so hooks order is stable)
  const [brandingState, setBrandingState] = useState(() => {
    try {
      const saved = localStorage.getItem(BRANDING_STORAGE_KEY);
      return saved ? { ...defaultConfig, ...JSON.parse(saved) } : defaultConfig;
    } catch {
      return defaultConfig;
    }
  });

  // If used inside a BrandingProvider, return the context value
  if (context && context.branding !== undefined) {
    return context;
  }

  const updateBranding = (newBranding) => {
    setBrandingState(newBranding);
    try {
      localStorage.setItem(BRANDING_STORAGE_KEY, JSON.stringify(newBranding));
    } catch (error) {
      console.error("Failed to save branding:", error);
    }
  };

  const resetBranding = () => {
    setBrandingState(defaultConfig);
    localStorage.removeItem(BRANDING_STORAGE_KEY);
  };

  return {
    branding: brandingState,
    updateBranding,
    resetBranding,
  };
};
