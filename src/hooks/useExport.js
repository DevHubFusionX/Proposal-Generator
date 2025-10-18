import { useState } from 'react';
import html2canvas from 'html2canvas';
import { generatePDF } from '../utils/pdfExport';

export const useExport = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState('');

  const prepareElementForExport = (element) => {
    const originalStyles = [];
    const allElements = element.querySelectorAll('*');
    
    allElements.forEach((el, index) => {
      originalStyles[index] = {
        color: el.style.color,
        backgroundColor: el.style.backgroundColor,
        borderColor: el.style.borderColor
      };

      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.color.includes('oklch')) {
        el.style.color = '#111827';
      }
      if (computedStyle.backgroundColor.includes('oklch')) {
        el.style.backgroundColor = '#FFFFFF';
      }
      if (computedStyle.borderColor.includes('oklch')) {
        el.style.borderColor = '#E5E7EB';
      }
    });
    
    return { originalStyles, allElements };
  };

  const restoreElementStyles = (allElements, originalStyles) => {
    allElements.forEach((el, index) => {
      if (originalStyles[index]) {
        el.style.color = originalStyles[index].color;
        el.style.backgroundColor = originalStyles[index].backgroundColor;
        el.style.borderColor = originalStyles[index].borderColor;
      }
    });
  };

  const generateImage = async (element, filename) => {
    try {
      setIsExporting(true);
      setExportProgress('Preparing image...');
      
      if (!element) {
        alert('Preview not found. Please try again.');
        return;
      }

      const { originalStyles, allElements } = prepareElementForExport(element);
      setExportProgress('Generating image...');

      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: false,
        removeContainer: true,
        imageTimeout: 0,
        logging: false,
        proxy: false,
        x: 0,
        y: 0,
        width: element.offsetWidth,
        height: element.offsetHeight
      });

      restoreElementStyles(allElements, originalStyles);
      setExportProgress('Downloading...');

      const link = document.createElement('a');
      link.download = `${filename || 'proposal'}-budget.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setExportProgress('Export complete!');
      setTimeout(() => setExportProgress(''), 2000);
    } catch (error) {
      console.error('PNG export failed:', error);
      setExportProgress('Export failed');
      setTimeout(() => setExportProgress(''), 3000);
    } finally {
      setIsExporting(false);
    }
  };

  const generatePDFExport = async (element, filename) => {
    try {
      setIsExporting(true);
      setExportProgress('Preparing PDF...');
      
      if (!element) {
        alert('Preview not found. Please try again.');
        return;
      }

      const { originalStyles, allElements } = prepareElementForExport(element);
      setExportProgress('Generating PDF...');
      
      await generatePDF(element, `${filename || 'proposal'}-budget`);
      
      restoreElementStyles(allElements, originalStyles);
      setExportProgress('Export complete!');
      setTimeout(() => setExportProgress(''), 2000);
    } catch (error) {
      console.error('PDF export failed:', error);
      setExportProgress('Export failed');
      setTimeout(() => setExportProgress(''), 3000);
    } finally {
      setIsExporting(false);
    }
  };

  const shareProposal = async (element, filename) => {
    try {
      setIsExporting(true);
      setExportProgress('Preparing to share...');
      
      if (!element) {
        alert('Preview not found. Please try again.');
        return;
      }

      const { originalStyles, allElements } = prepareElementForExport(element);
      setExportProgress('Generating image...');

      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: false,
        removeContainer: true,
        imageTimeout: 0,
        logging: false,
        proxy: false,
        x: 0,
        y: 0,
        width: element.offsetWidth,
        height: element.offsetHeight
      });

      restoreElementStyles(allElements, originalStyles);

      canvas.toBlob(async (blob) => {
        if (!blob) {
          alert('Failed to generate image. Please try again.');
          return;
        }

        const file = new File([blob], 'proposal.png', { type: 'image/png' });

        if (navigator.share) {
          try {
            setExportProgress('Sharing...');
            await navigator.share({
              files: [file],
              title: 'Project Proposal'
            });
            setExportProgress('Shared successfully!');
          } catch (shareError) {
            console.log('Share cancelled:', shareError);
            setExportProgress('Share cancelled');
          }
        } else if (navigator.clipboard) {
          try {
            setExportProgress('Copying to clipboard...');
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            setExportProgress('Copied to clipboard!');
          } catch (clipboardError) {
            setExportProgress('Downloading...');
            const link = document.createElement('a');
            link.download = `${filename || 'proposal'}-budget.png`;
            link.href = URL.createObjectURL(blob);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setExportProgress('Downloaded - sharing not supported');
          }
        } else {
          setExportProgress('Downloading...');
          const link = document.createElement('a');
          link.download = `${filename || 'proposal'}-budget.png`;
          link.href = URL.createObjectURL(blob);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setExportProgress('Downloaded - sharing not supported');
        }
        setTimeout(() => setExportProgress(''), 3000);
      }, 'image/png');
    } catch (error) {
      console.error('Share failed:', error);
      setExportProgress('Share failed');
      setTimeout(() => setExportProgress(''), 3000);
    } finally {
      setIsExporting(false);
    }
  };

  return {
    isExporting,
    exportProgress,
    generateImage,
    generatePDFExport,
    shareProposal
  };
};