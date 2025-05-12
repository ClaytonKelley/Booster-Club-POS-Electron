import { Button, Flex, rem } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Home() {
const navigate = useNavigate();

  return (
    <Flex
      justify="center"
      align="center"
      h="100vh"
      w="100%"
      px="lg"
    >
      <Flex
        gap="xl"
        justify="center"
        align="stretch"
        w="100%"
        maw={1200}
      >
        <Button
          size="xl"
          fullWidth
          h={rem(300)}
          radius="md"
          styles={{ root: { aspectRatio: '1` / 1', fontSize: rem(50) } }}
          onClick={() => navigate('/guest')}
        >
          Guest Checkout
        </Button>

        <Button
          size="xl"
          fullWidth
          h={rem(300)}
          //variant="outline"
          radius="md"
          styles={{ root: { aspectRatio: '1 / 1', fontSize: rem(50) } }}
        >
          Account Checkout
        </Button>
      </Flex>
    </Flex>
  );
}
