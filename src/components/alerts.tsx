import { Alert, Box, Panel } from '@axelor/ui';

export default function AlertsPanel() {
  return (
    <Panel header="Alerts">
      <Box>
        <Alert variant="primary">This is a simple alert...</Alert>
      </Box>
    </Panel>
  );
}
