import { useCallback, useState } from 'react';

import { Box, clsx, CommandBar, NavTabItem, NavTabs } from '@axelor/ui';
import { MaterialIcon } from '@axelor/ui/icons/material-icon';

import { useShowEditorPopup } from '@/scope';
import { elements } from './theme-builder/theme-elements';

import profileImg from '../images/profile.png';
import formStyles from '../views/form/form.module.scss';
import styles from './tabs.module.scss';
import { i18n } from '@/services/i18n';

const tabs: NavTabItem[] = [
  {
    id: '1',
    title: i18n.get('Messaging'),
    icon: () => <MaterialIcon icon="chat" />,
    iconColor: 'violet',
  },
  {
    id: '2',
    title: i18n.get('Teamwork'),
    icon: () => <MaterialIcon icon="person" />,
    iconColor: 'green',
  },
  {
    id: '3',
    title: i18n.get('Documents'),
    icon: () => <MaterialIcon icon="folder" />,
    iconColor: 'blue',
  },
  {
    id: '5',
    title: i18n.get('Purchases'),
    icon: () => <MaterialIcon icon="shopping_bag" />,
    iconColor: 'hotpink',
  },
];

export default function Tabs() {
  const [tab, setActiveTab] = useState('1');
  const showPopup = useShowEditorPopup();

  const handleSettings = useCallback(
    (e: any) => {
      showPopup?.(e.target, elements.find((e) => e.name === 'NavTabs')!);
    },
    [showPopup]
  );

  return (
    <Box d="flex" border>
      <Box d="flex" className={styles.tabs}>
        <NavTabs items={tabs} active={tab} onItemClick={(e) => setActiveTab(e.id)} />
        {showPopup && (
          <button
            className={styles.settings}
            onClick={handleSettings}
            aria-label="NavTabs settings"
          >
            <MaterialIcon icon="palette" aria-hidden="true" />
          </button>
        )}
      </Box>
      <Box>
        <CommandBar
          className={clsx(styles.quickItems, formStyles.commandBar)}
          items={[
            {
              key: '1',
              text: i18n.get('My Projects'),
              showDownArrow: true,
              items: [
                { key: '1', text: i18n.get('Next Gala') },
                { key: '2', text: i18n.get('Fast Ball') },
              ],
            },
            {
              key: '2',
              text: i18n.get('Access'),
              showDownArrow: true,
              items: [
                { key: '1', text: i18n.get('Contacts') },
                { key: '2', text: i18n.get('Sale orders') },
              ],
            },
            {
              key: 'fav',
              text: i18n.get('Favorite'),
              iconOnly: true,
              iconProps: {
                icon: 'star',
              },
            },
            {
              key: 'messages',
              text: i18n.get('Messages'),
              iconOnly: true,
              iconProps: {
                icon: 'notifications',
              },
            },
            {
              key: 'profile',
              text: i18n.get('Profile'),
              iconOnly: true,
              icon: () => <img src={profileImg} />,
            },
          ]}
        />
      </Box>
    </Box>
  );
}
