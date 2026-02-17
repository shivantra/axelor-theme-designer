import { Box, Button, Menu, MenuItem, Panel } from '@axelor/ui';
import { useState } from 'react';

function MenuComponent() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  function showMenu() {
    setShow(true);
  }

  function hideMenu() {
    setShow(false);
  }

  return (
    <Box>
      <Button ref={setTarget} onClick={showMenu} bgColor="primary" color="light">
        Open
      </Button>
      <Menu target={target} show={show} onHide={hideMenu}>
        <MenuItem onClick={hideMenu}>Option 1</MenuItem>
        <MenuItem onClick={hideMenu}>Option 2</MenuItem>
        <MenuItem onClick={hideMenu}>Option 3</MenuItem>
      </Menu>
    </Box>
  );
}

export default function UIMenu() {
  return (
    <Panel header="Menu">
      <Box>
        <MenuComponent />
      </Box>
    </Panel>
  );
}
