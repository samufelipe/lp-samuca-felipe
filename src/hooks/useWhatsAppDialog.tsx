import React, { createContext, useContext, useState, useCallback } from 'react';

interface WhatsAppDialogContextType {
  isOpen: boolean;
  openWhatsApp: () => void;
  closeWhatsApp: () => void;
}

const WhatsAppDialogContext = createContext<WhatsAppDialogContextType>({
  isOpen: false,
  openWhatsApp: () => {},
  closeWhatsApp: () => {},
});

export const WhatsAppDialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = useCallback(() => setIsOpen(true), []);
  const closeWhatsApp = useCallback(() => setIsOpen(false), []);

  return (
    <WhatsAppDialogContext.Provider value={{ isOpen, openWhatsApp, closeWhatsApp }}>
      {children}
    </WhatsAppDialogContext.Provider>
  );
};

export const useWhatsAppDialog = () => useContext(WhatsAppDialogContext);
