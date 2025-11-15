import { useEffect } from 'react';

export const useKeyboardShortcuts = (shortcuts) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      shortcuts.forEach(({ key, ctrlKey, callback }) => {
        if (
          event.key === key &&
          (ctrlKey === undefined || event.ctrlKey === ctrlKey || event.metaKey === ctrlKey)
        ) {
          event.preventDefault();
          callback();
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};
