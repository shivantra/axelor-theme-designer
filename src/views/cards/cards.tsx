import { Badge, Box, clsx, CommandBar, CommandItemProps } from '@axelor/ui';
import { MaterialIcon } from '@axelor/ui/icons/material-icon';
import { BootstrapIcon } from '@axelor/ui/icons/bootstrap-icon';

import { ORDERS } from './data';

import styles from './cards.module.scss';

function Card({ record }: { record: any }) {
  const commandItems: CommandItemProps[] = [
    {
      key: 'menu',
      iconProps: { icon: 'arrow_drop_down' },
      items: [
        {
          key: 'edit',
          text: 'Edit',
        },
        {
          key: 'delete',
          text: 'Delete',
        },
      ],
    },
  ];

  const showActions = true;
  return (
    <>
      <Box
        d="flex"
        px={{ base: 1, md: 2 }}
        mb={{ base: 2, md: 3 }}
        className={styles.card}
        style={{
          width: 400,
        }}
      >
        <Box
          className={clsx(styles.cardContent)}
          p={{ base: 2, md: 3 }}
          bgColor="body"
          w={100}
          rounded
          shadow="sm"
        >
          <>
            <Box d="flex" justifyContent="space-between">
              <Box fontWeight="bold">{record.name}</Box>
              <Box>
                {record.status == 'DRAFT' && (
                  <Badge variant="primary">
                    <span x-translate="true">Draft</span>
                  </Badge>
                )}
                {record.status == 'OPEN' && (
                  <Badge variant="warning">
                    <span x-translate="true">Open</span>
                  </Badge>
                )}
                {record.status == 'CANCELED' && (
                  <Badge variant="danger">
                    <span x-translate="true">Canceled</span>
                  </Badge>
                )}
                {record.status == 'CLOSED' && (
                  <Badge variant="success">
                    <span x-translate="true">Closed</span>
                  </Badge>
                )}
              </Box>
            </Box>
            <Box mt={3} d="flex" justifyContent="space-between">
              <span>
                <MaterialIcon icon="group" fontSize={14} /> {record['customer.fullName']}
              </span>
              <span>
                <span x-translate="true">WT</span>: {record.amount} {record['currency.symbol']}
              </span>
            </Box>
            <Box mt={1} d="flex" justifyContent="space-between">
              <span>
                <BootstrapIcon icon="clock" fontSize={14} /> {record.orderDate}
              </span>
              <strong>
                <span x-translate="true">ATI</span>: {record.totalAmount}{' '}
                {record['currency.symbol']}
              </strong>
            </Box>
          </>
        </Box>

        {showActions && <CommandBar className={styles.menuIcon} items={commandItems} />}
      </Box>
    </>
  );
}

export function CardsView() {
  return (
    <Box className={styles.cards}>
      {ORDERS.map((record) => (
        <Card key={record.id} record={record} />
      ))}
    </Box>
  );
}
