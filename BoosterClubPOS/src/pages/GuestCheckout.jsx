import { useState } from 'react';
import { Flex, Box, Stack } from '@mantine/core';
import BasketTable from '../components/BasketTable';
import ProductGrid from '../components/ProductGrid';
import CheckoutControls from '../components/CheckoutControls';
import { sampleProducts } from '../data/products';

export default function GuestCheckout() {

  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };


  return (
    <Stack h="100vh" spacing="md" p="md">
      {/* Top: 2-column layout that fills available space */}
      <Flex flex={1} gap="md">
        <Box w="34.5%" h="100%">
          <BasketTable basket={basket} />
        </Box>
        <Box w="70%" h="100%">
          <ProductGrid products={sampleProducts} onSelect={addToBasket} />
        </Box>
      </Flex>

      {/* Bottom controls (fixed height) */}
      <CheckoutControls />
    </Stack>
  );
}
