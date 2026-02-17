import { Box, Button, ButtonGroup, Panel } from '@axelor/ui';

export default function Buttons() {
  return (
    <Panel header="Buttons">
      <Box p={1}>
        <Box d="flex" mt={2} gap={4}>
          <Button variant="primary">Primary</Button>
          <Button variant="primary" outline>
            Outline
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </Box>
        <Box mt={2}>
          <ButtonGroup>
            <Button variant="primary">One</Button>
            <Button variant="primary">Two</Button>
            <Button variant="primary">Three</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Panel>
  );
}
