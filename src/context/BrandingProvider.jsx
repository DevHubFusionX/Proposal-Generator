import React, { useState } from 'react';
import { brandingConfig as defaultConfig } from '../config/branding';
import { BrandingContext } from './BrandingContext';

const BRANDING_STORAGE_KEY = 'proposalcraft_branding';

export const BrandingProvider = ({ children }) => {
    const [branding, setBranding] = useState(() => {
        try {
            const saved = localStorage.getItem(BRANDING_STORAGE_KEY);
            return saved ? { ...defaultConfig, ...JSON.parse(saved) } : defaultConfig;
        } catch {
            return defaultConfig;
        }
    });

    const updateBranding = (newBranding) => {
        setBranding(newBranding);
        try {
            localStorage.setItem(BRANDING_STORAGE_KEY, JSON.stringify(newBranding));
        } catch (error) {
            console.error('Failed to save branding:', error);
        }
    };

    const resetBranding = () => {
        setBranding(defaultConfig);
        localStorage.removeItem(BRANDING_STORAGE_KEY);
    };

    return (
        <BrandingContext.Provider value={{ branding, updateBranding, resetBranding }}>
            {children}
        </BrandingContext.Provider>
    );
};

export default BrandingProvider;
