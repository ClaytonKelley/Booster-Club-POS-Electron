import { Paper, Title, Table, Divider, Group, Text } from '@mantine/core';

export default function BasketTable({ basket }) {
  const total = basket.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <Paper
      p="md"
      shadow="sm"
      withBorder
      h="100%"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Title order={3} mb="sm">Cart</Title>
      <Divider my="xs" />

      {/* Scrollable Table Area */}
      <div style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '1rem' }}>
        <Table striped highlightOnHover withColumnBorders>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Item</th>
              <th style={{ textAlign: 'Right' }}>Qty</th>
              <th style={{ textAlign: 'Right' }}>Price</th>
            </tr>
          </thead>
          
          <tbody>
            {basket.map((item) => (
              <tr key={item.id}>
                <td style={{ textAlign: 'left' }}>{item.name}</td>
                <td style={{ textAlign: 'Right' }}>{item.qty}</td>
                <td style={{ textAlign: 'Right' }}>
                  ${(item.qty * item.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Fixed Total Section */}
      <Divider my="xs" />
      <Group position="apart">
        <Text fw={500}>Total</Text>
        <Text fw={700}>${total.toFixed(2)}</Text>
      </Group>
    </Paper>
  );
}
