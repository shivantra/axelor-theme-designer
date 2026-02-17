import { useCallback, useState } from 'react';
import { NavTabs } from '@axelor/ui/core';
import styles from './panel-tabs.module.scss';

function TabContent({ item, active }: { item: any; active: boolean }) {
  const display = active ? 'block' : 'none';
  return (
    <div className={styles.tabContent} style={{ display }}>
      {item.content}
    </div>
  );
}

export function PanelTabs({ items }: { items: any[] }) {
  const [activeTab, setActiveTab] = useState(items?.[0]?.id);

  const handleChange = useCallback((item: any) => setActiveTab(item.id), []);

  return (
    <div className={styles.tabs}>
      <NavTabs items={items} active={activeTab ?? undefined} onItemClick={handleChange} />
      {items.map((item) => {
        const active = activeTab === item.id;
        return <TabContent key={item.id} item={item} active={active} />;
      })}
    </div>
  );
}
