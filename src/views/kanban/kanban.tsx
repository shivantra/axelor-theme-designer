import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, clsx, Panel, Popper } from '@axelor/ui';
import { BootstrapIcon } from '@axelor/ui/icons/bootstrap-icon';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { KanbanBoard } from './kanban-board';
import { KanbanColumn, KanbanRecord } from './types';
import { getInitialState } from './data';
import { getColumnRecords, getRecordIndex, reorderCards } from './utils';
import styles from './kanban.module.scss';

dayjs.extend(localizedFormat);

function KanbanCard({ record }: { record: any }) {
  const divRef = useRef<any>(null);
  const className = useMemo(() => {
    if (record.progress === 0) {
      return styles.danger;
    }
    if (record.progress === 100) {
      return styles.success;
    }
    if (record.progress >= 50) {
      return styles.info;
    }
    if (record.progress > 0) {
      return styles.warning;
    }
    return '';
  }, [record.progress]);

  const timer = useRef<any>();
  const [popover, setPopover] = useState(false);
  const [popoverData, setPopoverData] = useState<{ title: ''; body: '' }>({
    title: '',
    body: '',
  });

  function showPopover() {
    const div = divRef.current;
    const summary =
      div &&
      (div.querySelector('.card-summary.popover') || div.querySelector(`.card-summary.popover`));
    if (summary) {
      const text = (summary.textContent || '').trim();
      if (text) {
        timer.current = setTimeout(() => {
          setPopover(true);
          setPopoverData({
            title: summary.title,
            body: summary.innerHTML,
          });
        }, 500);
      }
    }
  }

  const hidePopover = useCallback(function hidePopover() {
    setPopover(false);
    clearTimeout(timer.current);
  }, []);

  const hasPopover = false;

  useEffect(() => {
    return () => hidePopover();
  }, [hidePopover]);

  return (
    <>
      <Box
        ref={divRef}
        {...(hasPopover
          ? {
              onMouseEnter: showPopover,
              onMouseLeave: hidePopover,
              onMouseDown: hidePopover,
            }
          : {})}
        className={clsx(styles['kanban-card'], className)}
      >
        <>
          <strong>{record.name}</strong>
          <Box>{record.notes}</Box>
          {record.startDate && (
            <Box d="flex" alignItems="end" justifyContent="space-between">
              <Box d="flex" mt={2} style={{ fontSize: '0.85rem', color: 'grey', gap: '0.25rem' }}>
                <BootstrapIcon icon="clock" fontSize="0.85rem" />{' '}
                {dayjs(record.startDate).format('LLL')}
              </Box>
            </Box>
          )}
        </>
      </Box>

      <Popper
        arrow
        bg={'white' as any}
        placement="end"
        open={popover}
        target={divRef.current}
        offset={[0, 4]}
      >
        <Box
          style={{
            maxWidth: 400,
            minWidth: 200,
          }}
        >
          <Panel header={popoverData.title} style={{ boxShadow: 'none' }}>
            <Box>
              {popoverData.body && (
                <div dangerouslySetInnerHTML={{ __html: popoverData.body } as any} />
              )}
            </Box>
          </Panel>
        </Box>
      </Popper>
    </>
  );
}

export function KanbanView() {
  const [columns, setColumns] = useState<KanbanColumn[]>(getInitialState);
  const small = useMediaQuery('(max-width: 768px)');

  const components = useMemo(
    () => ({
      Card: KanbanCard,
    }),
    []
  );

  const onMove = useCallback(
    async ({
      column,
      index,
      source,
      record,
    }: {
      column: KanbanColumn;
      index: number;
      source: KanbanColumn;
      record: KanbanRecord;
    }) => {
      const updatedColumns = reorderCards({
        columns,
        destinationColumn: column,
        destinationIndex: index,
        sourceColumn: source,
        sourceIndex: getRecordIndex(record.id, getColumnRecords(columns, source.name)),
      }).slice();

      setColumns(updatedColumns);
    },
    [columns, setColumns]
  );

  const onCollapse = useCallback(
    (column: KanbanColumn) => {
      setColumns((columns) => {
        return columns.map((col) =>
          col.name === column.name
            ? {
                ...col,
                collpased: !col.collapsed,
              }
            : col
        );
      });
    },
    [setColumns]
  );

  return (
    <Box className={styles.kanban}>
      <KanbanBoard
        responsive={small}
        columns={columns}
        components={components as any}
        onCollapse={onCollapse}
        onCardMove={onMove}
      />
    </Box>
  );
}

function useMediaQuery(query: string) {
  const media = useMemo(() => window.matchMedia(query), [query]);
  const [state, setState] = useState<boolean>(media.matches);
  const handleChange = useCallback(() => setState(media.matches), [media]);

  useEffect(() => {
    media.addEventListener('change', handleChange);
    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [handleChange, media]);

  return state;
}
