import { ChakraProvider, Box } from '@chakra-ui/react';
import { Card } from './components/Card';

function App() {
  const handleLogin = (email: string) => {
    alert(`Bem-vindo ao Dio Bank, ${email}!`);
  };

  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Card onLogin={handleLogin} />
      </Box>
    </ChakraProvider>
  );
}

export default App;