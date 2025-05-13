import { Group, Button} from '@mantine/core';
import { useNavigate } from 'react-router-dom';



export default function CheckoutControls() {

    const navigate = useNavigate();
  return (
    <Group position="apart" grow>
      <Button color="green" size="xl">Complete Sale</Button>
      <Button color="gray" size="xl">Clear</Button>
      <Button color="red" size="xl"
      onClick={() => navigate('/')}>
        Cancel
        </Button>
      
      
    </Group>
  );
}
