import { Box, Center, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box 
      background="linear-gradient(90deg, rgba(145,19,220,1) 0%, rgba(255,136,0,1) 100%)" 
      padding="20px"
    >
      <Center>
        <Heading as="h1" size="lg" color="white">
          Dio Bank
        </Heading>
      </Center>
    </Box>
  );
};