import { Box, Button, CircularProgress, LinearProgress, Panel } from '@axelor/ui';
import styles from './loaders.module.scss';

export default function LoadersPanel() {
  return (
    <Panel header="Loaders">
      <Box p={1}>
        <Box d="flex" justifyContent="center">
          <CircularProgress color="primary" size={30} indeterminate value={30} />
        </Box>
        <Box mt={4} d="flex" justifyContent="center">
          <Button variant="primary">
            Loading <CircularProgress size={10} indeterminate />
          </Button>
        </Box>
        <Box mt={4} />
        <Box className={styles.progress} mt={4}>
          <LinearProgress value={20} striped animated />
        </Box>
        <Box mt={4} />
        <Box className={styles.progress} mt={4}>
          <LinearProgress indeterminate thickness={15} />
        </Box>
      </Box>
    </Panel>
  );
}
