import { Stack, Text, Link } from '@chakra-ui/react';

const LoginButton = () => {
  return (
    <Stack pt={6}>
      <Text align='center'>
        Already a user? <Link color='#a048fcfe'>Login</Link>
      </Text>
    </Stack>
  );
};

export default LoginButton;
