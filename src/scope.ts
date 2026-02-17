import { createContext, createElement, ReactNode, useContext, useMemo } from 'react';
import { ThemeElement } from './components/theme-builder/theme-elements';

export interface EditorPopupHandler {
  enabled?: boolean;
  show: (target: HTMLElement, element: ThemeElement) => void;
}

const EditorPopupContext = createContext<EditorPopupHandler>({
  show: () => {},
});

export function EditorPopupProvider({
  children,
  enabled,
  showPopup,
}: {
  children: ReactNode;
  enabled?: boolean;
  showPopup: EditorPopupHandler['show'];
}) {
  const value = useMemo(() => ({ enabled, show: showPopup }), [enabled, showPopup]);

  return createElement(EditorPopupContext.Provider, {
    children,
    value,
  });
}

export function useEditorPopup() {
  return useContext(EditorPopupContext);
}

export function useShowEditorPopup() {
  const { enabled, show } = useEditorPopup();
  return enabled ? show : null;
}
