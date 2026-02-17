import { Box, Link, Panel } from '@axelor/ui';

export default function LinksPanel() {
  return (
    <Panel header="Links">
      <Box d="flex" flexDirection="column" g={3}>
        <Link href="#" underline>
          Link with underline
        </Link>
        <Link href="#" underline={false}>
          Link without underline
        </Link>
      </Box>
    </Panel>
  );
}
