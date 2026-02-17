import { i18n } from '@/services/i18n';
import { MaterialIcon } from '@axelor/ui/icons/material-icon';
import { useEffect, useRef, useState } from 'react';

type LanguageMenu = {
  key: string;
  description: string;
  items: {
    key: string;
    text: string;
    onClick: () => void;
  }[];
};

function LanguageDropdown({ menu }: { menu: LanguageMenu }) {
  // State to manage the visibility of the dropdown
  const [open, setOpen] = useState(false);
  // Ref to attach to the dropdown container/wrapper
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Keyboard navigation handler for menu items
  const handleMenuKeyDown = (event: React.KeyboardEvent, index: number) => {
    const items = menu.items;
    let nextIndex = index;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        nextIndex = Math.min(index + 1, items.length - 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        nextIndex = Math.max(index - 1, 0);
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        nextIndex = items.length - 1;
        break;
      case 'Escape':
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      default:
        return;
    }

    // Focus the next/previous item
    const buttons = menuRef.current?.querySelectorAll('button');
    if (buttons?.[nextIndex]) {
      (buttons[nextIndex] as HTMLButtonElement).focus();
    }
  };

  // Keyboard handler for the dropdown container
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      triggerRef.current?.focus();
    }
  };

  // Effect to add and remove event listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]); // Reruns if dropdownRef changes, which it won't

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      {/* Trigger button with ARIA attributes */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        aria-label={menu.description}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex"
      >
        <MaterialIcon icon="translate" aria-hidden="true" />
      </button>

      {/* Conditionally render the dropdown content */}
      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Language selection"
          className="menu-background"
          onKeyDown={handleKeyDown}
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            borderRadius: 8,
            padding: 4,
            boxShadow: '0 8px 24px rgba(0,0,0,.12)',
            zIndex: 100,
          }}
        >
          {menu.items.map((item, index) => (
            <button
              key={item.key}
              role="menuitem"
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              onKeyDown={(e) => handleMenuKeyDown(e, index)}
              style={{
                display: 'block',
                padding: '6px 12px',
                width: '100%',
                textAlign: 'left',
              }}
            >
              {i18n.get(item.text)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
