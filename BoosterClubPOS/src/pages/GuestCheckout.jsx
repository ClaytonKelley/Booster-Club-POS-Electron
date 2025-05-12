import { Button, rem, Container, Title, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function GuestCheckout() {
    const navigate = useNavigate();
  return (

    <Container>
      <Title order={2}>Guest Checkout</Title>
      <Text mt="sm">This is where the guest sales process will happen.</Text>

      <Button
          size="xl"
          fullWidth
          h={rem(100)}
          radius="md"
          styles={{ root: { aspectRatio: '1` / 1', fontSize: rem(25) } }}
          onClick={() => navigate('/')}
        >
          Home
        </Button>
    </Container>
   
        

    
  );
}