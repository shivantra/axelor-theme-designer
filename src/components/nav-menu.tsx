import { useCallback, useMemo, useRef, useState } from 'react';

import { NavMenu, useTheme } from '@axelor/ui';
import { MaterialIcon } from '@axelor/ui/icons/material-icon';

import { useShowEditorPopup } from '@/scope';
import { elements } from './theme-builder/theme-elements';

import AxelorLogo from '../images/logo-light.png';
import AxelorDarkLogo from '../images/logo-dark.png';
import AxelorSmallLogo from '../images/icon.png';
import styles from './nav-menu.module.scss';
import { i18n } from '@/services/i18n';

const items = [
  {
    id: '1',
    title: i18n.get('Messaging'),
    icon: () => <MaterialIcon icon="chat" />,
    iconColor: 'violet',
    items: [
      { id: '101', title: i18n.get('Inbox') },
      { id: '102', title: i18n.get('Important') },
      { id: '103', title: i18n.get('Archived') },
      {
        id: '104',
        title: i18n.get('Mailing lists'),
        items: [
          { id: '1041', title: i18n.get('My Mailing lists') },
          { id: '1042', title: i18n.get('All Mailing lists') },
        ],
      },
    ],
  },
  {
    id: '2',
    title: i18n.get('Teamwork'),
    icon: () => <MaterialIcon icon="person" />,
    iconColor: 'green',
    items: [
      {
        id: '201',
        title: i18n.get('Tasks'),
        icon: () => <MaterialIcon icon="list" />,
        items: [
          { id: '2011', title: i18n.get('My tasks') },
          { id: '2012', title: i18n.get('All tasks') },
        ],
      },
      {
        id: '202',
        title: i18n.get('Teams'),
        icon: () => <MaterialIcon icon="list" />,
        items: [
          { id: '2021', title: i18n.get('My teams') },
          { id: '2022', title: i18n.get('All teams') },
        ],
      },
      { id: '203', title: i18n.get('General') },
    ],
  },
  {
    id: '3',
    title: i18n.get('Documents'),
    icon: () => <MaterialIcon icon="folder" />,
    iconColor: 'blue',
    items: [
      { id: '301', title: i18n.get('All Documents') },
      { id: '302', title: i18n.get('My Documents') },
      {
        id: '303',
        title: i18n.get('Configuration'),
        items: [{ id: '3031', title: i18n.get('Tags') }],
      },
    ],
  },
  {
    id: '4',
    title: i18n.get('Marketing'),
    icon: () => <MaterialIcon icon="call" />,
    iconColor: 'orange',
    items: [
      { id: '401', title: i18n.get('Targets') },
      { id: '402', title: i18n.get('Campaigns') },
      {
        id: '403',
        title: i18n.get('Configuration'),
        items: [
          { id: '4031', title: i18n.get('Campaign Types') },
          { id: '4032', title: i18n.get('Template') },
        ],
      },
    ],
  },
  {
    id: '5',
    title: i18n.get('Purchases'),
    icon: () => <MaterialIcon icon="shopping_bag" />,
    iconColor: 'hotpink',
    items: [
      { id: '501', title: i18n.get('Customers') },
      { id: '502', title: i18n.get('Contacts') },
      { id: '503', title: i18n.get('Products & services') },
      {
        id: '505',
        title: i18n.get('Internal purchase requests'),
        icon: () => <MaterialIcon icon="request_quote" />,
        iconColor: 'hotpink',
      },
      { id: '506', title: i18n.get('Purchase quotations') },
      { id: '507', title: i18n.get('Purchase orders') },
      { id: '508', title: i18n.get('ABC Analysis') },
      {
        id: '509',
        title: i18n.get('Reportings'),
        items: [
          { id: '5091', title: i18n.get('Purchase Buyer') },
          { id: '5092', title: i18n.get('Purchase Manager') },
          {
            id: '5093',
            title: i18n.get('Maps'),
            items: [{ id: '50931', title: i18n.get('Suppliers') }],
          },
        ],
      },
    ],
  },
  {
    id: '6',
    title: i18n.get('CRM'),
    icon: () => <MaterialIcon icon="support_agent" />,
    iconColor: 'purple',
    items: [
      { id: '601', title: i18n.get('Leads') },
      { id: '602', title: i18n.get('Customers') },
      { id: '603', title: i18n.get('Contacts') },
      { id: '604', title: i18n.get('Catalogs') },
      { id: '605', title: i18n.get('Events') },
      { id: '606', title: i18n.get('Opportunities') },
      { id: '607', title: i18n.get('Sale quotations') },
      { id: '608', title: i18n.get('Objectives') },
    ],
  },
  {
    id: '7',
    title: i18n.get('Invoicing'),
    icon: () => <MaterialIcon icon="receipt_long" />,
    iconColor: 'teal',
    items: [
      { id: '701', title: i18n.get('Cust. Invoices') },
      { id: '702', title: i18n.get('Cust. Refunds') },
      { id: '703', title: i18n.get('Suppl. Invoices') },
      { id: '704', title: i18n.get('My awaiting PFP') },
      { id: '705', title: i18n.get('Suppl. Refunds') },
    ],
  },
];

const getLogo = (mode: string) => localStorage.getItem(`theme.logo.${mode}`);
const setLogo = (mode: string, logo: string) => localStorage.setItem(`theme.logo.${mode}`, logo);

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  const [lightLogo, setLightLogo] = useState(() => getLogo('light') || AxelorLogo);
  const [darkLogo, setDarkLogo] = useState(() => getLogo('dark') || AxelorDarkLogo);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const showPopup = useShowEditorPopup();
  const isDefaultLightLogo = lightLogo === AxelorLogo;
  const isDefaultDarkLogo = darkLogo === AxelorDarkLogo;

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      // Convert to base64
      reader.onloadend = () => {
        const base64 = reader.result as string;
        let lightLogo = '';
        let darkLogo = '';

        if (mode === 'dark') {
          if (isDefaultLightLogo) {
            lightLogo = base64;
          }
          darkLogo = base64;
        } else {
          if (isDefaultDarkLogo) {
            darkLogo = base64;
          }
          lightLogo = base64;
        }

        if (lightLogo) {
          setLightLogo(lightLogo);
          setLogo('light', lightLogo);
        }
        if (darkLogo) {
          setDarkLogo(darkLogo);
          setLogo('dark', darkLogo);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleReset = useCallback(() => {
    setLightLogo(AxelorLogo);
    setDarkLogo(AxelorDarkLogo);
    setLogo('light', '');
    setLogo('dark', '');
  }, []);

  const handleNavMenuSettings = useCallback(
    (e: any) => {
      showPopup?.(e.target, elements.find((e) => e.name === 'NavMenu')!);
    },
    [showPopup]
  );

  const { mode } = useTheme();

  const logo = mode === 'dark' ? darkLogo : lightLogo;

  const header = useMemo(
    () => (
      <div className={styles.header}>
        <button
          className={styles.toggle}
          onClick={() => setSidebar((sidebar) => !sidebar)}
          aria-label={sidebar ? 'Collapse menu' : 'Expand menu'}
          aria-expanded={sidebar}
        >
          <MaterialIcon className={styles.toggleIcon} icon="menu" aria-hidden="true" />
        </button>
        <div className={styles.appLogo}>
          <button
            onClick={handleImageClick}
            aria-label="Click here to edit the logo"
            className={styles.logoButton}
          >
            <img src={logo} alt="Application logo" />
          </button>
        </div>
        {!isDefaultLightLogo || !isDefaultDarkLogo ? (
          <button
            className={styles.editIcon}
            onClick={handleReset}
            aria-label="Reset logo to default"
          >
            <MaterialIcon icon="reset_image" aria-hidden="true" />
          </button>
        ) : (
          <button
            className={styles.editIcon}
            onClick={handleImageClick}
            aria-label="Upload custom logo"
          >
            <MaterialIcon icon="upload" aria-hidden="true" />
          </button>
        )}
        {showPopup && (
          <button
            className={styles.editIcon}
            onClick={handleNavMenuSettings}
            aria-label="NavMenu settings"
          >
            <MaterialIcon icon="palette" aria-hidden="true" />
          </button>
        )}
      </div>
    ),
    [
      sidebar,
      showPopup,
      logo,
      isDefaultDarkLogo,
      isDefaultLightLogo,
      handleNavMenuSettings,
      handleReset,
      handleImageClick,
    ]
  );

  const headerSmall = useMemo(
    () => (
      <div className={styles.header}>
        <div className={styles.appIcon}>
          <img src={AxelorSmallLogo} />
        </div>
      </div>
    ),
    []
  );

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <NavMenu
        mode="accordion"
        show={sidebar ? 'inline' : 'icons'}
        items={items}
        header={header}
        headerSmall={headerSmall}
      />
    </>
  );
}
