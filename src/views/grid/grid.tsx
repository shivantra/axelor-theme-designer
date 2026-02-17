import { useCallback, useState } from 'react';
import { produce } from 'immer';

import { Badge, Box } from '@axelor/ui';
import { Grid, GridProvider } from '@axelor/ui/grid';
import * as TYPES from '@axelor/ui/grid/types';
import { relative } from 'path';
import { i18n } from '@/services/i18n';

function Status(props: any) {
  const { className, value, style, onClick } = props;
  function getVariant() {
    switch (value) {
      case 'DRAFT':
        return 'primary';
      case 'OPEN':
        return 'warning';
      case 'CLOSED':
        return 'success';
      case 'CANCELED':
        return 'danger';
      default:
        return 'primary';
    }
  }
  return (
    <Box d="flex" className={className} onClick={onClick} style={{ ...props?.style, ...style }}>
      <Badge variant={getVariant()}>{value}</Badge>
    </Box>
  );
}

const columns = [
  { name: 'name', title: i18n.get('Name'), type: 'string' },
  {
    name: 'customer',
    title: i18n.get('Customer'),
    type: 'string',
    formatter: (column: TYPES.GridColumn, value: any, record: any) => record[column.name]?.fullName,
  },
  { name: 'orderDate', title: i18n.get('Order date'), type: 'date' },
  { name: 'status', title: i18n.get('Status'), type: 'string', renderer: Status },
];

const records = [
  {
    totalAmount: '24556.3700',
    'currency.decimalPlaces': 2,
    'currency.symbol': '£',
    name: 'SO00001',
    id: 1,
    version: 86,
    orderDate: '2025-02-14',
    customer: {
      fullName: 'Miss Giovanni Leone',
      id: 35,
      $version: 0,
    },
    status: 'DRAFT',
  },
  {
    totalAmount: '13827.6700',
    'currency.decimalPlaces': 2,
    'currency.symbol': '€',
    name: 'SO00002',
    id: 2,
    version: 20,
    orderDate: '2025-02-15',
    customer: {
      fullName: 'Mr Fredrick Brandt',
      id: 1,
      $version: 1,
    },
    status: 'DRAFT',
  },
  {
    totalAmount: '11595.1500',
    'currency.decimalPlaces': 2,
    'currency.symbol': '$',
    name: 'SO00003',
    id: 3,
    version: 4,
    orderDate: '2025-02-16',
    customer: {
      fullName: 'Miss Amara Mbaye',
      id: 41,
      $version: 4,
    },
    status: 'CLOSED',
  },
  {
    totalAmount: '2138.8600',
    'currency.decimalPlaces': 2,
    'currency.symbol': '€',
    name: 'SO00004',
    id: 4,
    version: 3,
    orderDate: '2025-02-05',
    customer: {
      fullName: 'Mr Betty Russell',
      id: 9,
      $version: 1,
    },
    status: 'CLOSED',
  },
  {
    totalAmount: '6889.7500',
    'currency.decimalPlaces': 2,
    'currency.symbol': '$',
    name: 'SO00005',
    id: 5,
    version: 8,
    orderDate: '2025-02-17',
    customer: {
      fullName: 'Mr Norbert Dupont',
      id: 15,
      $version: 0,
    },
    status: 'OPEN',
  },
  {
    totalAmount: '0.0000',
    'currency.decimalPlaces': 0,
    'currency.symbol': '¥',
    name: 'SO00006',
    id: 6,
    version: 1,
    orderDate: '2025-02-19',
    customer: {
      fullName: 'Mr Olivier Martinez',
      id: 12,
      $version: 0,
    },
    status: 'DRAFT',
  },
  {
    totalAmount: '0.0000',
    'currency.decimalPlaces': 3,
    'currency.symbol': 'LD',
    name: 'SO00007',
    id: 7,
    version: 1,
    orderDate: '2025-02-18',
    customer: {
      fullName: 'Mr Thomas Sydney',
      id: 18,
      $version: 0,
    },
    status: 'DRAFT',
  },
  {
    totalAmount: '6529.4600',
    'currency.decimalPlaces': 2,
    'currency.symbol': '€',
    name: 'SO00008',
    id: 8,
    version: 1,
    orderDate: '2025-02-18',
    customer: {
      fullName: 'Mr David Joy',
      id: 20,
      $version: 1,
    },
    status: 'OPEN',
  },
  {
    totalAmount: '958.3400',
    'currency.decimalPlaces': 2,
    'currency.symbol': '€',
    name: 'SO00009',
    id: 9,
    version: 1,
    orderDate: '2025-02-19',
    customer: {
      fullName: 'Mrs Samina Wright',
      id: 2,
      $version: 0,
    },
    status: 'OPEN',
  },
  {
    totalAmount: '4141.2600',
    'currency.decimalPlaces': 2,
    'currency.symbol': '$',
    name: 'SO00010',
    id: 10,
    version: 1,
    orderDate: '2025-02-09',
    customer: {
      fullName: 'Miss Charee Jacques',
      id: 14,
      $version: 0,
    },
    status: 'CANCELED',
  },
];

export function GridView() {
  const [state, setState] = useState<TYPES.GridState>({
    columns: [],
    rows: [],
  });

  const setMutableState = useCallback(
    (state: TYPES.GridState | TYPES.GridStateHandler) => setState(produce(state as any) as any),
    [setState]
  );

  return (
    <GridProvider>
      <Box style={{ display: 'flex', maxHeight: 500, zIndex: 0, position: 'relative' }}>
        <Grid
          allowColumnResize
          allowGrouping
          allowSorting
          allowSelection
          allowCheckboxSelection
          allowCellSelection
          allowColumnHide
          allowColumnOptions
          sortType="state"
          selectionType="multiple"
          records={records}
          columns={columns}
          state={state}
          setState={setMutableState}
        />
      </Box>
    </GridProvider>
  );
}
