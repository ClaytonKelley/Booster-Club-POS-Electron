import {
  Paper,
  Tabs,
  Title,
  SimpleGrid,
  Card,
  Image,
  Text,
  rem,
  Divider
} from '@mantine/core';
import { useState } from 'react';

export default function ProductGrid({ products = [], onSelect }) {
  const categories = [... new Set(products.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProducts = products.filter((p) => p.category === activeCategory);

  return (
    <Paper
      p="md"
      shadow="sm"
      withBorder
      h="100%"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Title order={3} mb="sm">{activeCategory}</Title>

      <Tabs value={activeCategory} onChange={setActiveCategory} inverted>
        <Tabs.List mb="md">
          {categories.map((cat) => (
            <Tabs.Tab key={cat} value={cat}>
              {cat}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <Tabs.Panel value={activeCategory} style={{ flexGrow: 1 }}>
          <SimpleGrid cols={3} spacing="md">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                shadow="sm"
                padding="md"
                radius="md"
                withBorder
                style={{ cursor: 'pointer' }}
                onClick={() => onSelect(product)}
              >
                {product.image && (
                  <Card.Section>
                    <Image
                      src={product.image}
                      alt={product.name}
                      height={80}
                      fit="contain"
                      style={{ paddingTop: '0.25rem' }} // 👈 add top padding here
                    />
                  </Card.Section>
                )}
                
                <Text weight={500} size="lg" align="center">
                <Divider my="xs" />
                  {product.name}
                </Text>
                <Text color="dimmed" size="md" align="center" >
                  ${product.price.toFixed(2)}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
