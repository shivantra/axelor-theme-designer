import { Badge, Box, Button, Panel } from '@axelor/ui';

export default function BadgesPanel() {
  return (
    <Panel header="Badge">
      <Box d="flex">
        <Badge m={1} variant="primary">
          Primary
        </Badge>
        <Badge m={1} bgColor="primary" rounded="pill">
          Pill
        </Badge>
      </Box>
      <Button m={1} variant="primary">
        Notifications <Badge>10</Badge>
      </Button>
      <Box>
        <Badge m={1} bg="primary">
          Primary
        </Badge>

        <Badge m={1} bg="secondary">
          Secondary
        </Badge>

        <Badge m={1} bg="success">
          Success
        </Badge>

        <Badge m={1} bg="danger">
          Danger
        </Badge>

        <Badge m={1} bg="warning" color="dark">
          Warning
        </Badge>

        <Badge m={1} bg="info" color="dark">
          Info
        </Badge>

        <Badge m={1} bg="light" color="dark">
          Light
        </Badge>

        <Badge m={1} bg="dark">
          Dark
        </Badge>
      </Box>
    </Panel>
  );
}
