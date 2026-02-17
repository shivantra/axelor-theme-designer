import { Table, TableHead, TableBody, TableRow, TableCell, Box, Panel } from '@axelor/ui';

export default function TableComponent() {
  return (
    <Panel header="Table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell as="th">#</TableCell>
            <TableCell as="th">First</TableCell>
            <TableCell as="th">Last</TableCell>
            <TableCell as="th">Handle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell as="th">1</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>Otto</TableCell>
            <TableCell>@mdo</TableCell>
          </TableRow>
          <TableRow>
            <TableCell as="th">2</TableCell>
            <TableCell>Jacob</TableCell>
            <TableCell>Thornton</TableCell>
            <TableCell>@fat</TableCell>
          </TableRow>
          <TableRow>
            <TableCell as="th">3</TableCell>
            <TableCell colSpan={2}>Larry the Bird</TableCell>
            <TableCell>@twitter</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Panel>
  );
}
