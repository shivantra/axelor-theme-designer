import { ReactNode, useCallback, useMemo, useState } from 'react';

import {
  AdornedInput,
  Box,
  Button,
  clsx,
  CommandBar,
  Input,
  Panel,
  SelectIcon,
  Switch,
} from '@axelor/ui';
import { NavSelect } from './nav-select';

import { Select } from '../../components/select';
import { MaterialIcon } from '@axelor/ui/icons/material-icon';
import { fetchCurrencies, fetchCustomers } from './data';
import { PanelTabs } from './panel-tabs';
import { useShowEditorPopup } from '@/scope';
import { elements } from '@/components/theme-builder/theme-elements';
import styles from './form.module.scss';
import { i18n } from '@/services/i18n';

const STATUES = [
  { title: i18n.get('Draft'), value: 'DRAFT' },
  { title: i18n.get('Open'), value: 'OPEN' },
  { title: i18n.get('Closed'), value: 'CLOSED' },
  { title: i18n.get('Canceled'), value: 'CANCELED' },
];

export function FormView() {
  const showPopup = useShowEditorPopup();
  const [record, setRecord] = useState<any>({
    id: 1,
    name: 'SO00001',
    status: 'DRAFT',
    confirmed: true,
    orderDate: '01/01/2025',
    confirmDate: '',
    invoiced: true,
    notes: '',
    customer: {
      fullName: 'Miss Disney Leonard',
      id: 11,
      version: 0,
    },
    currency: {
      name: 'US Dollar',
      id: 2,
      version: 0,
    },
  });

  const handleChange = useCallback((key: string, value: any) => {
    setRecord((record: any) => ({ ...record, [key]: value }));
  }, []);

  const handleShowInputSettings = useCallback(
    (e: any) => {
      showPopup?.(e.target, elements.find((e) => e.name === 'Input')!);
    },
    [showPopup]
  );

  return (
    <Box>
      <Box d="flex" className={clsx(styles.toolbar, styles.commandBar)} borderTop>
        <CommandBar
          iconOnly
          items={[
            {
              key: 'new',
              text: 'New',

              iconProps: {
                icon: 'add',
              },
            },
            {
              key: 'edit',
              text: 'Edit',

              iconProps: {
                icon: 'edit',
              },
            },
            {
              key: 'save',
              text: 'Save',
              iconProps: {
                icon: 'save',
              },
            },
            {
              key: 'cancel',
              text: 'Cancel',
              iconProps: {
                icon: 'refresh',
              },
            },
            {
              key: 'back',
              text: 'Back',
              iconProps: {
                icon: 'arrow_back',
              },
            },
            {
              key: 'more',
              iconOnly: true,
              iconProps: {
                icon: 'arrow_drop_down',
              },
              items: [
                {
                  key: 'refresh',
                  text: i18n.get('Refresh'),
                },
                {
                  key: 'delete',
                  text: i18n.get('Delete'),
                  iconProps: {
                    icon: 'delete',
                  },
                },
                {
                  key: 'copy',
                  text: i18n.get('Duplicate'),
                },
                {
                  key: 's1',
                  divider: true,
                },
                {
                  key: 'archive',
                  text: i18n.get('Archive'),
                },
                {
                  key: 's3',
                  divider: true,
                },
                {
                  key: 'audit',
                  text: i18n.get('Last modified...'),
                },
              ],
            },
          ]}
        />
        <CommandBar
          className={styles.pageActions}
          items={[
            {
              key: 'prev',
              iconProps: {
                icon: 'chevron_backward',
              },
            },
            {
              key: 'next',
              iconSide: 'end',
              iconProps: {
                icon: 'chevron_forward',
              },
            },
            {
              key: 'list',
              iconSide: 'end',
              iconProps: {
                icon: 'list',
              },
            },
            {
              key: 'article',
              iconSide: 'end',
              iconProps: {
                icon: 'article',
              },
            },
            {
              key: 'settings',
              iconSide: 'end',
              iconProps: {
                icon: 'settings',
              },
            },
          ]}
        />
      </Box>
      <Box className={styles.content}>
        <Grid>
          <GridItem start={1} end={6}>
            <FormControl label={i18n.get('Name')}>
              <Input
                name="name"
                value={record.name}
                onChange={(e) => handleChange('name', e.target.value)}
                readOnly={record.confirmed}
              />
            </FormControl>
          </GridItem>
          <GridItem start={7} end={12}>
            <FormControl label={i18n.get('Status')}>
              <NavSelect
                value={record.status}
                onChange={(value) => handleChange('status', value)}
                options={STATUES}
              />
            </FormControl>
          </GridItem>
          <GridItem start={1} end={6}>
            <FormControl label={i18n.get('Customer')}>
              <ManyToOne
                labelKey="fullName"
                fetchData={fetchCustomers}
                value={record.customer}
                onChange={(value) => handleChange('customer', value)}
              />
            </FormControl>
          </GridItem>
          <GridItem start={7} end={12}>
            <FormControl label={i18n.get('Confirmed')}>
              <Switch
                checked={record.confirmed}
                onChange={(e: any) => handleChange('confirmed', e.target.checked)}
              />
            </FormControl>
          </GridItem>
          <GridItem start={1} end={6}>
            <FormControl label={i18n.get('Order dates')}>
              <AdornedInput
                name="orderDate"
                placeholder="DD/MM/YYYY"
                value={record.orderDate}
                onChange={(e) => handleChange('orderDate', e.target.value)}
                endAdornment={
                  <Box>
                    <MaterialIcon icon="calendar_today" variant="outlined" />
                  </Box>
                }
              />
            </FormControl>
          </GridItem>
          <GridItem start={7} end={12}>
            <FormControl label={i18n.get('Confirm date')}>
              <AdornedInput
                name="confirmDate"
                placeholder="DD/MM/YYYY"
                value={record.confirmDate}
                onChange={(e) => handleChange('confirmDate', e.target.value)}
                endAdornment={
                  <Box>
                    <MaterialIcon icon="calendar_today" variant="outlined" />
                  </Box>
                }
              />
            </FormControl>
          </GridItem>
          <GridItem start={1} end={6}>
            <FormControl label={i18n.get('Currency')}>
              <ManyToOne
                labelKey="name"
                fetchData={fetchCurrencies}
                value={record.currency}
                onChange={(value) => handleChange('currency', value)}
                isSuggestBox
              />
            </FormControl>
          </GridItem>
          <GridItem start={7} end={12}>
            <FormControl label={i18n.get('Invoice')}>
              <Input
                type="checkbox"
                checked={record.invoiced}
                onChange={(e) => handleChange('invoiced', e.target.checked)}
              />
            </FormControl>
          </GridItem>
          <GridItem start={1} end={12}>
            <PanelTabs
              items={[
                {
                  id: 1,
                  title: i18n.get('Items'),
                  content: (
                    <Box m={2} style={{ height: 150 }}>
                      {i18n.get('Items content')}
                    </Box>
                  ),
                },
                {
                  id: 2,
                  title: i18n.get('Notes'),
                  content: (
                    <Box m={2} style={{ height: 150 }}>
                      <Input
                        as="textarea"
                        name="notes"
                        value={record.notes}
                        placeholder={i18n.get('Write a note')}
                        onChange={(e: any) => handleChange('notes', e.target.value)}
                      />
                    </Box>
                  ),
                },
              ]}
            />
          </GridItem>
          <GridItem start={1} end={12}>
            <Panel>
              <Grid>
                <GridItem start={1} end={4}>
                  <Box d="flex" flexDirection={'column'} gap={8}>
                    <Button variant="primary" className={styles.infoButton} w={100}>
                      <MaterialIcon icon={'bar_chart'} className={styles.icon} />
                      <Box className={styles.data}>
                        <div className={styles.value}>10,000.00</div>
                        <div className={styles.title}>{i18n.get('Total amount')}</div>
                      </Box>
                    </Button>
                    <Button variant="primary">{i18n.get('Export')}</Button>
                  </Box>
                </GridItem>
                <GridItem start={5} end={12}>
                  <dl className={styles.template}>
                    <dt>{i18n.get('Amount')}</dt>
                    <dd>9,000.00 $</dd>
                    <dt>{i18n.get('Tax amount')}</dt>
                    <dd>1,000.00 $</dd>
                    <Box
                      as="dt"
                      x-translate="true"
                      fontWeight="bold"
                      fontSize={5}
                      style={{ borderTop: '1px solid var(--bs-border-color)' }}
                    >
                      {i18n.get('Total amount')}
                    </Box>
                    <Box
                      as="dd"
                      fontWeight="bold"
                      fontSize={5}
                      style={{ borderTop: '1px solid var(--bs-border-color)' }}
                    >
                      10,000.00 $
                    </Box>
                  </dl>
                </GridItem>
              </Grid>
            </Panel>
          </GridItem>
        </Grid>
        {showPopup && (
          <Box
            className={styles.customize}
            title="Input settings"
            onClick={handleShowInputSettings}
          >
            <MaterialIcon icon="palette" />
          </Box>
        )}
      </Box>
    </Box>
  );
}

function ManyToOne({
  value,
  labelKey = 'title',
  valueKey = 'id',
  isSuggestBox,
  fetchData,
  onChange,
}: {
  value: any;
  labelKey?: string;
  valueKey?: string;
  isSuggestBox?: boolean;
  fetchData: (text: string) => Promise<any[]>;
  onChange: (value: any) => void;
}) {
  const getOptionKey = useCallback((option: any) => option[valueKey]!, [valueKey]);
  const getOptionLabel = useCallback((option: any) => option[labelKey], [labelKey]);
  const getOptionEqual = useCallback((a: any, b: any) => a[valueKey] === b[valueKey], [valueKey]);
  const getOptionMatch = useCallback(() => true, []);

  const icons: SelectIcon[] = useMemo(() => {
    if (isSuggestBox) return [];
    const edit: SelectIcon = {
      icon: <MaterialIcon icon="edit" />,
      onClick: () => {},
    };
    const find: SelectIcon = {
      icon: <MaterialIcon icon="search" />,
      onClick: () => {},
    };
    return [edit, find];
  }, [isSuggestBox]);

  return (
    <Select
      canSelect
      autoComplete
      fetchOptions={fetchData}
      options={[] as any[]}
      optionKey={getOptionKey}
      optionLabel={getOptionLabel}
      optionEqual={getOptionEqual}
      optionMatch={getOptionMatch}
      value={value}
      onChange={onChange}
      canShowNoResultOption={true}
      icons={icons}
      toggleIcon={isSuggestBox ? undefined : false}
      clearIcon={false}
    />
  );
}

function Grid({ children }: { children: ReactNode }) {
  return <Box className={styles.grid}>{children}</Box>;
}

function GridItem({ start, end, children }: { start: number; end: number; children: ReactNode }) {
  return (
    <Box
      style={{
        gridColumn: `${start} / ${end + 1}`,
        alignSelf: 'start',
        ...(start !== 1 && {
          marginLeft: 'var(--g-row-gap)',
        }),
      }}
    >
      {children}
    </Box>
  );
}

function FormControl({ label, children }: any) {
  return (
    <Box className={styles.control}>
      <Box className={styles.label}>{label}</Box>
      <Box>{children}</Box>
    </Box>
  );
}
