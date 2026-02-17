import { ReactNode, useEffect, useRef } from 'react';

import {
  Box,
  Button,
  Dialog as AxDialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogProps,
  Portal,
  Fade,
  ButtonProps,
} from '@axelor/ui';

import styles from './dialog.module.scss';

export type DialogButton = {
  title: string;
  variant?: ButtonProps['variant'];
  onClick?: () => void;
};

export function Dialog({
  open,
  title,
  children,
  okTitle = 'Ok',
  closeTitle = 'Close',
  buttons,
  onOk,
  onClose,
  ...dialogProps
}: DialogProps & {
  open: boolean;
  title: string;
  children: ReactNode;
  buttons?: DialogButton[];
  okTitle?: string | null;
  closeTitle?: string | null;
  onOk?: () => void;
  onClose: () => void;
}) {
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Focus management: store and restore focus
  useEffect(() => {
    if (open) {
      // Store the currently focused element
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
    } else if (previouslyFocusedElement.current) {
      // Return focus when dialog closes
      previouslyFocusedElement.current.focus();
      previouslyFocusedElement.current = null;
    }
  }, [open]);

  function handleOk() {
    onClose();
    onOk?.();
  }

  return (
    <Portal>
      <Fade in={open} unmountOnExit mountOnEnter>
        <Box className={styles.backdrop} role="presentation"></Box>
      </Fade>
      <AxDialog
        open={open}
        onHide={onClose}
        scrollable
        size={'md'}
        className={styles.root}
        data-dialog="true"
        aria-modal="true"
        {...dialogProps}
      >
        <DialogHeader onCloseClick={onClose} className={styles.header}>
          <DialogTitle className={styles.title} id="dialog-title">
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogContent tabIndex={-1} aria-labelledby="dialog-title">
          <Box p={2}>{children}</Box>
        </DialogContent>
        <DialogFooter className={styles.footer}>
          {buttons?.map((button, ind) => (
            <Button
              key={ind}
              type="button"
              variant={button.variant ?? 'primary'}
              onClick={button.onClick}
            >
              {button.title}
            </Button>
          ))}
          {closeTitle && (
            <Button type="button" variant={'light'} onClick={onClose}>
              {closeTitle}
            </Button>
          )}
          {okTitle && (
            <Button autoFocus={true} type="button" variant={'primary'} onClick={handleOk}>
              {okTitle}
            </Button>
          )}
        </DialogFooter>
      </AxDialog>
    </Portal>
  );
}
