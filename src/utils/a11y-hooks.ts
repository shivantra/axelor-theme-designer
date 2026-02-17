import { useEffect, useRef } from 'react';

/**
 * Hook to trap focus within a container (for modals, dialogs, etc.)
 * Note: @axelor/ui provides FocusTrap component, but this is a lightweight alternative
 */
export function useFocusTrap(enabled: boolean = true) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    // Focus first element on mount
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);

  return containerRef;
}

/**
 * Hook to manage focus restoration when a modal/dialog closes
 */
export function useFocusReturn(isOpen: boolean) {
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
    } else if (previouslyFocusedElement.current) {
      previouslyFocusedElement.current.focus();
      previouslyFocusedElement.current = null;
    }
  }, [isOpen]);
}

/**
 * Hook to add keyboard event handler (commonly Escape to close)
 */
export function useKeyboardHandler(key: string, handler: () => void, enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        handler();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, handler, enabled]);
}

/**
 * Hook to announce messages to screen readers
 */
export function useScreenReaderAnnouncement() {
  const announcerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create live region if it doesn't exist
    if (!announcerRef.current) {
      const announcer = document.createElement('div');
      announcer.setAttribute('role', 'status');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.style.position = 'absolute';
      announcer.style.left = '-10000px';
      announcer.style.width = '1px';
      announcer.style.height = '1px';
      announcer.style.overflow = 'hidden';
      document.body.appendChild(announcer);
      announcerRef.current = announcer;
    }

    return () => {
      if (announcerRef.current) {
        document.body.removeChild(announcerRef.current);
        announcerRef.current = null;
      }
    };
  }, []);

  const announce = (message: string) => {
    if (announcerRef.current) {
      announcerRef.current.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = '';
        }
      }, 1000);
    }
  };

  return announce;
}

/**
 * Generate unique IDs for form controls
 */
let idCounter = 0;
export function useUniqueId(prefix: string = 'a11y'): string {
  const idRef = useRef<string>('');

  if (!idRef.current) {
    idRef.current = `${prefix}-${++idCounter}`;
  }

  return idRef.current;
}
