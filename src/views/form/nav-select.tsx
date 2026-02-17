import { useCallback, useMemo, useState } from 'react';

import { OverflowList, OverflowListItemProps, OverflowMenuTriggerProps, clsx } from '@axelor/ui';

import styles from './nav-select.module.scss';

type SelectItem = any;
type ItemProps = OverflowListItemProps<SelectItem> & {
  readonly?: boolean;
};
interface Selection {
  value?: string;
  title?: string;
  icon?: string;
  color?: string;
  order?: number;
  hidden?: boolean;
  data?: any;
}

function Item(props: ItemProps) {
  const { item, active, readonly } = props;
  const { selection } = item;
  return (
    <div
      className={clsx(styles.item, [
        {
          [styles.active]: active,
          [styles.readonly]: readonly,
        },
      ])}
    >
      <div className={styles.text}>{selection.title}</div>
    </div>
  );
}

function MenuTrigger({ count, open }: OverflowMenuTriggerProps) {
  return (
    <div className={clsx(styles.item, [{ [styles.open]: open }])}>
      <div className={styles.text}>+{count}</div>
    </div>
  );
}

function MenuItem({ item }: ItemProps) {
  const { selection } = item;
  return <>{selection.title}</>;
}

function isSelected(selection: Selection, value: any) {
  const selected = selection.value;
  const val = typeof value === 'object' && value ? value.id : value;
  return selected === val || String(selected) === String(val);
}

export function NavSelect({
  value,
  onChange,
  options,
}: {
  value: any;
  onChange: (value: any) => void;
  options: SelectItem[];
}) {
  const handleChange = useCallback(
    (item: SelectItem) => {
      onChange(item?.selection?.value);
    },
    [onChange]
  );

  const items: SelectItem[] = useMemo(() => {
    return options.map((selection, i) => {
      return {
        id: String(selection.title ?? i),
        selection,
        priority: isSelected(selection, value) ? 1 : 0,
      };
    });
  }, [options, value]);

  const isItemActive = useCallback(
    ({ selection }: SelectItem) => isSelected(selection, value),
    [value]
  );

  return (
    <OverflowList
      className={styles.container}
      items={items}
      isItemActive={isItemActive}
      onItemClick={handleChange}
      renderItem={Item}
      renderMenuTrigger={MenuTrigger}
      renderMenuItem={MenuItem}
    />
  );
}
