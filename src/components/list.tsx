import { Box, List, ListItem, Panel } from '@axelor/ui';
import styles from './list.module.scss';

export default function ListPanel() {
  return (
    <Panel header="List">
      <Box>
        <List className={styles.list}>
          <ListItem active>An item</ListItem>
          <ListItem>A second item</ListItem>
          <ListItem>A third item</ListItem>
          <ListItem>A fourth item</ListItem>
          <ListItem>And a fifth one</ListItem>
        </List>
      </Box>
    </Panel>
  );
}
